---
slug: Using Gatsby like an SPA
date: 2020-08-24T21:48:47.139Z
title: Using Gatsby like an SPA
featuredImage: /assets/images/spa-08-22-20.png
tags:
  - gatsby
  - react
  - spa
---
Upon creating this portfolio site, I had no intention to have a blog on here. This site was supposed to be just a page where you can download my resume and find my contact info. 

Only recently, I began to realize how beneficial it is to have a tech blog as a developer which eventually led me to decide on adding a blog section.

## Identifying the problem

This website is made with Gatsbyjs which is a static site generator. Checkout their [website](https://www.gatsbyjs.com) if you aren't familiar with it. 

Gatsby generates a page for each URL path. It means Gatsby generates an html file for each corresponding page file( e.g. `index.js` -> `index.html` ). But what I want to achieve is:

* update a section of index page based on the menu item that is clicked
* update URL path and push it to history so the user can navigate with 'go back' and 'go forward' button on the browser

while staying on the same index page. 

With my initial implementation, it would update the path on click and an UI updates as intended, but hitting go back button wouldn't switch back the component. 

The problem is somewhere in the routing. It needs a client-side only routing because updating the URL path triggers Gatsby to use backend routing.

## Tell Gatsby to stay on the page

Gatsby comes with pre-defined `Link` and `Router` components, which utilizes [`@reach/router`](https://reach.tech/router/) behind the scene. You can use them like this:

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

The `/` (root) path shows a list of projects. The `/blog` path will render a list of recent blog posts. And the `/resume` path for resume download view.

This creates an unknown path issue. Every time a menu item is clicked, it ends up in 404 page. It is because Gatsby tries to find a page file that's corresponding to an updated path.

The solution for this is actually fairly simple, you just need to add following to your `gatsby-node.js` so Gatsby knows it needs to stay inside `index.html`.

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

This ensures Gatsby to use Reach Router by passing `matchPath` parameter to the page at build time so it can navigate the page with client-side routing.

## Rendering only a necessary component

The code above will be sufficient if you just want to enable client-side routing. But to give it a better performance, you want to enable a lazy loading. Lazy loading is a technique to only render necessary component(s) when it's needed. More on React Lazy Loading [here](https://reactjs.org/docs/code-splitting.html).

First, the components you wish to lazy load need to be imported dynamically using `React.lazy` like so:

```
// pages/index.js
const Blog = React.lazy(() => import("../components/Blog/Blog"))
const Resume = React.lazy(() => import("../components/Resume/Resume"))
```

In my case, a default view should be `<Project />` therefore it should be rendered normally.

Dynamically imported components need to be wrapped in `React.Suspense` which suspends rendering until a condition is met. To make it more React way and give it a reusability, let's create a `LazyLoadComponent`. Your code should look like this:

```
// pages/index.js
const LazyLoadComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={<Spinner />}>
    <Component {...props} />
  </React.Suspense>
)
```

In the code above, `React.Suspense` renders loading `<Spinner />` until it receives props, then once props are received corresponding component gets rendered. By the way, I grabbed a spinner from this awesome project called [Single Element CSS Spinners](https://projects.lukehaas.me/css-loaders/).

Once that's created, all you need to do is to wrap these `LazyLoadComponent`s with the `<Router />` like so:

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
* To achieve better performance, SPAs should render components only when it's needed:

  * Use `React.lazy` and `React.Suspense` so it lazy loads the components.

For now, only an index page works like an SPA. A blog portion is still generated in a traditional Gatsby way. Maybe I will turn whole thing into an SPA eventually but for now, I'm happy with the way it turned out:)

Thanks for reading and please share if you like the content!