---
slug: How to Add Twitter Cards to Your Gatsby Site
date: 2020-10-09T23:13:26.760Z
title: How to Add Twitter Cards to Your Gatsby Site
featuredImage: /assets/images/twitter-card-with-gatsby.png
tags:
  - react
  - gatsby
  - twitter
---
Twitter cards let you attach rich media so that if your tweet includes links, a ‘card’ or extra block of text, images or videos are added to the tweet. It's the image and text you see when you share the websites on Twitter:

![Twitter Card Example](/assets/images/screen-shot-2020-10-09-at-3.45.35-pm.png "Twitter Card Example")

## **Twitter Cards in Gatsby**

Unless you use a starter that has Twitter Cards logic hooked up already, you are going to need to add it yourself and it can be a bit tricky for junior devs including myself. The following will show you how to set up Twitter Cards on your Gatsby blog easily using [gatsby-remark-twitter-cards](https://www.gatsbyjs.com/plugins/gatsby-remark-twitter-cards/).

First, you need to install `gatsby-remark-twitter-cards` by running:

`npm i gatsby-remark-twitter-cards`

Once the plugin is installed, go over to `gatsby-config.js` and add the following to your remark plugins:

```javascript
// gatsby-config.js
plugins: [
    // ...
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "hoshki.me",
              separator: "|",
              author: "Hosh'ki Tsunoda",
              background: require.resolve("./src/images/card-background.png"),
              fontColor: "#011a27",
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: "monospace",
            },
          },
        ],
      },
    },
  ],
```

By adding this code block above, you are telling gatsby how your Twitter card should look like when generated.

Here's a quick description of what each property represents:

* title - it should be the name of your website
* separator - this will be used as a separator between the title and the name of author
* author - the name of the author
* background - this will be your cards’ background. It can be either an image or the hex code.
* fontColor - used to set the color of the font on the card
* titleFontSize - used to set the font size on the card title
* subtitleFontSize - used to set the font size on the card subtitle
* fontStyle - used to set the font on the card, default is monospace
* fontFile - though I did not use special fonts on my card, you could add a font file and reference this in fontStyle

This plugin will generate the Twitter card based on the setting above and it will be saved in the /public folder and will be referenced when you are to share the link.

Now the setting for this plugin is all done. Let’s open up the SEO component or Header component(or simply in the `<head>` tag) and add twitter metadata like so:

```javascript
// seo.js inside SEO component
...
return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${url}twitter-card.jpg`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: `${url}twitter-card.jpg`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
```

I have the SEO component that's being used in each page and template thus it makes sense to add the metadata in there. Make sure you have all the Twitter metadata as these are needed information for generating a Twitter card.

Finally, go over to the `blogTemplate.js` and add the URL to the SEO or Header component as a prop. It needs to be an absolute path. In my case, I have the URL stored in `gatsby-config.js` under siteMetadata, so you can pull that with graphQL like so:

```javascript
// blogTemplate.js
const Template = ({ data, pageContext }) => {
  const { frontmatter, fields } = markdownRemark
  const { url } = siteMetadata

  return (
    <Layout page="blog">
      <SEO title={frontmatter.title} url={`${url}${fields.slug}`} />
      ...
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        twitterHandle
        url
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
      fields {
        slug
      }
    }
  }
`
```

Now your site is ready to generate the Twitter card. Write a blog post and run the build command, you will see the twitter-card.jpg under the corresponding folder to your blog post. 

Also, you can check your card by typing in the absolute path to your browser. For example: <https://www.hoshki.me/2020-09-11-how-to-setup-tailwind-css-with-cra-and-typescript/twitter-card.jpg>

That’s all you need to do in order to show a Twitter card for your blog. I have tried a couple of other plugins but I found this one the easiest to implement. 

Hope you find this article helpful and please share if you liked what you just read. Thank you!