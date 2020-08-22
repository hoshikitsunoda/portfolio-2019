---
slug: Using Gatsby like an SPA
date: 2020-08-21T22:36:05.309Z
title: Using Gatsby like an SPA
featuredImage: /assets/images/spa-react-gatsby.png
tags:
  - gatsby
  - react
  - spa
---
Upon creating this portfolio site, I had no intention to have a blog on here. This site was supposed to be just a page where you can download my resume and find my contact info. Only recently, I began realizing how beneficial it is to have a tech blog as a developer which eventually led me to decide to adding a blog section.

## Identifying the problem

This website is made with Gatsbyjs which is a static site generator. Checkout their [website](https://www.gatsbyjs.com) if you aren't familiar with it. 

Gatsby generates a page for each route. It basically means Gatsby generates a html file for each corresponding page file( e.g. `index.js` -> `index.html` ). But what I wanted to achieve was to switch the view based on the menu item that was clicked and update the path for a history purpose( so the user can navigate with 'go back' and 'previous' button on the browser ) while staying on the same page. 

With my initial implementation, it would update the path on click and view changes as I wanted it to, but hitting go back button wouldn't switch back the component. So the problem was somewhere in routing. It needed a client-side only routing because updating the url path causes Gatsby to use backend routing.

## Tell Gatsby to stay in the page

Gatsby comes with pre-defined `Link` and `Router` components, which utilizes [`@reach/router`](https://reach.tech/router/) behind the scene. As soon as I learned this, I tried implementing it like following:

```
// pages/index.js
<Router>
  <Projects path="/" />
  <Blog path="/blog" />
  <Resume path="/resume" />
</Router>

// components/Menu.js
<Link to="/">
<Link to="/blog">
<Link to="/resume">
```

So the `/` (root) path shows a list of projects I have worked on. `/blog` will render a list of recent blog posts and a button to jump to an archive page. And `/resume` path for resume download view.

This created an unknown path issue. Every time I click on the item, it would end up in 404 page. It is because Gatsby tries to find a page file that's corresponding to the path that is updated to. The solution for this was actually fairly simple, just add following to your `gatsby-node.js` so Gatsby knows it needs to stay inside `index.html`.

```
// gatsby-node.js
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
```

In Gatsby official docs, it says: 

> page.matchPath is a special key that's used for matching pages with corresponding routes only on the client.

This ensures Gatsby, by adding `matchPath` parameter to the page at build time, to use Reach Router so it can navigate the page with client-side routing.

## Rendering only a necessary component

The solution above will be sufficient if you just want to enable client-side routing. But to get it to work like an SPA, I wanted to add lazy loading. Lazy loading is the technique to only render necessary component(s). More on React Lazy Loading [here](https://reactjs.org/docs/code-splitting.html).

First, components you wish to lazy load need to be imported dynamically using `React.lazy` like so:

```
// pages/index.js
const Blog = React.lazy(() => import("../components/Blog/Blog"))
const Resume = React.lazy(() => import("../components/Resume/Resume"))
```

In my case, the Project component is a default view thus no need to lazy load it. `React.lazy` lets you render the components lazily by code-splitting. And it is now fully supported in core React library.

The components that are dynamically imported using `React.lazy` need to be wrapped in `React.Suspense` which takes `fallback` props. A component or element passed in to `fallback` will be shown while the component is being rendered( e.g. loading message, loading spinner ). 

Just to make it more React way and give it a reusability, let's create a `LazyLoadComponent` which renders the component that's passed in with `React.Suspense` as a wrapper. So your code should look something like this after adding `React.Suspense` :

```
// pages/index.js
const LazyLoadComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={<Spinner />}>
    <Component {...props} />
  </React.Suspense>
)
```

Pretty self-explanatory, it renders a component that is passed in and shows `<Spinner />`  component while the passed in component is being rendered. By the way, I grabbed a spinner from this awesome project called [Single Element CSS Spinners](https://projects.lukehaas.me/css-loaders/).

Once that's created, all you need to do is to wrap these lazy load components inside the `<Router />` like so:

```
// pages/index.js
<Router>
 <Projects path="/" />
 <LazyLoadComponent Component={Blog} path="/blog" />
 <LazyLoadComponent Component={Resume} path="resume" />
</Router>
```

There you go! Now Blog and Resume components are only rendered when the corresponding menu item is clicked. If you open up Network tab on your browser console, you'll see JS files being loaded only when the menu item is clicked.

## Conclusion

Here are the key takeaways for turning Gatsby into an SPA:

* You need to tell Gatsby to stay on the index page so it doesn't use backend routing to switch the page.

  * Add `matchPath` parameter in your `gatsby-node.js` so routing happens on client side.
* SPAs renders components only when it's needed.

  * Use React.lazy and React.Suspense so it lazy loads the components.

Implementing an SPA-ness to Gatsby was a bit out of my comfort zone when I first thought about it. And my code above is probably not the most efficient way but at least it's working and it's doing what I wanted it to do!

For now, only my index page works like an SPA. A blog portion is still generated in a traditional Gatsby way. Maybe I will turn whole thing into an SPA eventually but for now, I'm happy with how it works:)

Thanks for reading and please share if you like the content!