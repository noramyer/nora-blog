<h1 align="center">
    <img alt="My Blog" title="My Blog" src="/static/media/city-walking.png" width="200"> </br>
    noramyer.xyz
</h1>

<h4 align="center">
  A lightweight site written by me, Nora, that uses <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>

## Table of contents
+ [About](http://github.com/noramyer/nora-blog#about)
+ [Folder Structure](http://github.com/noramyer/nora-blog#folder-structure)
+ [Create Your Own](http://github.com/noramyer/nora-blog#create-your-own)
+ [License](http://github.com/noramyer/nora-blog#license)

## About

Welcome to the site of my new blog, built using Gatsby.js. Here I share projects, clothing I love, cooking adventures, and maybe some thoughts.
Check it out at [noramyer.xyz](https://www.noramyer.xyz).

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   ├── Project
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   ├── ProjectFeed
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```

## Create Your Own

#### Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying this as a starter.

```sh
# Create a new Gatsby site using this as a starter
gatsby new blog https://github.com/noramyer/nora-blog
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
$ cd blog
$ yarn
$ npm run develop
```

#### Open the code and start editing!

The site is now running at `http://localhost:8000`

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Save your changes and the browser will update in real time.

## License
The MIT License (MIT)

Copyright (c) 2016-2019 Alexander Shelepenok

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
