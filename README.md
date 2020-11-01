# City Lights Website with Contentful

A static website builder for City Lights built with [Gatsby](http://gatsbyjs.com/), [Contentful](https://www.contentful.com), and [Netlify](https://www.netlify.com/).

Thanks to the Gatsby community for providing the base template [Gatsby Contentful Starter](https://github.com/contentful-userland/gatsby-contentful-starter).

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

## Features

- Simple content model and structure. Easy to adjust to your needs.
- Use the [synchronization feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization) of our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) and our [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).

### Development pre-setup
```
$ git clone https://github.com:designtypist/city-lights.git
$ npm install
```

or use [Gatsby Cli](https://www.gatsbyjs.com/docs/gatsby-cli/)

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
