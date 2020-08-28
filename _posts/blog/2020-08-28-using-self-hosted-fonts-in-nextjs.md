---
slug: Using Self-hosted Fonts in Nextjs
date: 2020-08-28T05:12:01.957Z
title: Using Self-hosted Fonts in Nextjs
featuredImage: /assets/images/webfonts-08-27-20.png
tags:
  - nextjs
  - fonts
  - css-in-js
---
Nextjs is a React framework that gives you pretty much everything you need for production out of the box including hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching. Super fun tool to play with and I am a big fan now.

The recent project I worked on used Nextjs. It was fairly simple and straightforward, however, I found using self-hosted fonts on Nextjs a bit tricky.

Maybe I didn't do a good job searching but there wasn't much info on how to add fonts in Nextjs. Turned out, it works just like using regular self-hosted fonts ( [font-face](https://css-tricks.com/snippets/css/using-font-face/) ) in a traditional way but with some extra steps.

First, you need to create a `/fonts` folder inside `/public` folder and add all the fonts you wish to use( .eot, .woff, .woff2, .ttf ). Then, create a CSS file in the same folder as these font files ( `/public/fonts/fonts.css` ).

Once fonts.css is created, you can import your font(s) in there using `@font-face` like so:

```
// fonts.css
@font-face {
  font-family: 'your-font';
  src: url('your-font.eot');
  src: url('your-font.eot?#iefix') format('embedded-opentype'),
    url('your-font.woff2') format('woff2'),
    url('your-font.woff') format('woff'),
    url('your-font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
...
...
```

In a typical web build, you link this fonts.css file in HTML file using `<head>` tag, but in Nextjs, you need to add it to `_document.js` like this:

```
// _document.js
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="/fonts/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

Usually, `_document.js` file is located under `/pages` folder.

Once that's done, you are good to go! All you do is just reference the font-family in your CSS. 

**Opinionated: Be more efficient**

To make things more efficient and flexible, I like making constant files for page data and import it as needed. By doing this, you can update/change data without going into each file. Here's an example for font constant file:

```
// constant/fonts.js
export const MAIN_REGULAR = 'your-font-regular'
export const MAIN_BOLD = 'your-font-bold'
export const SECONDARY_REGULAR = 'your-secondary-font-regular'
```

Then in your project ( assume you are using CSS-in-JS, below is an example using Material-UI ), use it like this:

```
// SomeComponent.js
import { makeStyles } from '@material-ui/core/styles'

import * as Font from '../../../constant/fonts'

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: Font.MAIN_REGULAR,
    fontSize: '32px',
  },
  ...
  ...
}))
```

That's it! You can do this with all other data like URLs, theme colors etc.

Hope some of you find this helpful:)

Please share if you like what you just read. Thank you!