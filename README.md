# [Styleguide name]

## Purpose :crystal_ball:

[Styleguide name] is [name] CSS style guide. Influenced by frameworks like Basscss, [Styleguide name] uses immutable, atomic CSS classes to rapidly prototype and develop features, providing consistent styling options along with the flexibility to create new layouts and designs without the need to write additional CSS. Additionally, a few globally-reusable HTML and CSS components are available to help new apps spin up quickly without having to reinvent the wheel each time (with more on the way).

To view a more readable version of this markdown, copy and paste it in https://stackedit.io/app


# Getting Started

- Fork or clone the GitHub repo to your machine.
- Ensure that you npm, node, mocha and gulp installed on your machine.
- In your terminal, navigate to the cloned directory. `npm install` the dependencies and run `gulp`

  `npm install`

  `gulp`

- Once started, you should be able to view the project on `http://localhost:3000/`

- 🎉Happy developing!🎉


## How it's built :wrench:

<b>Tech stack</b> :computer:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://www.npmjs.com/package/express)
- [Handlebars.js](https://www.npmjs.com/package/express-handlebars)

<b>Task runner</b> :runner:
- [Gulp](https://gulpjs.com/)

<b>Libraries used</b> :books:
- [Prism.js](https://prismjs.com/)
- [Clipboard.js](https://clipboardjs.com/)
- [Moment.js](https://momentjs.com/)

<b>Linted with</b>
- tbd

<b>Tested with</b>
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

- HTML5, CSS3, LESS, Javascript, and jQuery



## Application Structure
    .
    ├── controllers                                     # controller folder
    │   └── html-routes.js                              # routes defined
    ├── data                                            # data folder holds all data
    │   └── componentsData.json                         # componentsData holds all data about components
    ├── public                                          # public folder
    │   └── assets                                      # assets folder holds all client side js and less files
    │       ├── images                                  # images folder holds all images
    │       ├── js                                      # js folder holds client side js
    │       │   └── custom                              # custom folder is a group of client side javascripts
    │       │       └── main.js                         # main.js is a client side javascript
    │       ├── less                                    # less folder holds merrill styles
    │       │   ├── abstracts                           # abstracts holds less mixins and variables
    │       │   │   ├── mixins.less                     #
    │       │   │   └── variables.less                  #
    │       │   ├── components                          # components holds merrill components
    │       │   │   └── alert.less                      #
    │       │   ├── config                              # 
    │       │   │   └── micro-grid.less                 #
    │       │   ├── layout                              #
    │       │   ├── utilities                           #
    │       │   └── styles.less                         # all partials in the less folder get read into styles.less for gulp task
    │       ├── styleguide-less                         # styleguide-less holds less styles specific to the look and feel of the styleguide itself
    │       │   ├── abstracts                           # abstracts holds less mixins and variables
    │       │   │   ├── mixins.less                     #
    │       │   │   └── variables.less                  #
    │       │   ├── base                                # base holds generic base styles for styleguide
    │       │   │   ├── body.less                       #
    │       │   │   ├── buttons.less                    #
    │       │   │   ├── forms.less                      #
    │       │   │   ├── headings.less                   #
    │       │   │   ├── links.less                      #
    │       │   │   ├── lists.less                      #
    │       │   │   ├── main.less                       #
    │       │   │   ├── media.less                      #
    │       │   │   ├── reset.less                      #
    │       │   │   ├── tables.less                     #
    │       │   │   └── text.less                       #
    │       │   ├── components                          # components holds generic component styles for styleguide
    │       │   │   ├── banner.less                     #
    │       │   │   ├── block.less                      #
    │       │   │   ├── breadcrumbs.less                #
    │       │   │   ├── button-group.less               #
    │       │   │   ├── buttons.less                    #
    │       │   │   ├── card.less                       #
    │       │   │   ├── code-snippet.less               #
    │       │   │   ├── footer-nav.less                 #
    │       │   │   ├── footer.less                     #
    │       │   │   ├── grid-nav.less                   #
    │       │   │   ├── header.less                     #
    │       │   │   ├── hero.less                       #
    │       │   │   ├── icon.less                       #
    │       │   │   ├── logo.less                       #
    │       │   │   ├── nav.less                        #
    │       │   │   ├── page-header.less                #
    │       │   │   ├── pill.less                       #
    │       │   │   ├── primary-nav.less                #
    │       │   │   ├── release-notes.less              #
    │       │   │   ├── section.less                    #
    │       │   │   ├── table.less                      #
    │       │   │   ├── tabs.less                       #
    │       │   │   ├── text-passage.less               #
    │       │   │   └── tile.less                       #
    │       │   ├── layout                              # layout holds the generic layout for styleguide
    │       │   │   └── layout.less                     #
    │       │   ├── utilities                           # utilities holds generic utilities for styleguide
    │       │   │   ├── display.less                    #
    │       │   │   └── visibility.less                 #
    │       │   └── styles.less                         # all partials in the styleguide-less folder get read into styles.less for gulp task
    │       └── vendor                                  # vendor folder holds all third party libraries that styleguide needs to work as expected
    │           └── vendor.js                           #
    ├── test                                            # test folder holds all of our unit tests
    │   └── controllers                                 # test folder for routes
    │       └── html-routes.spec.js                     #
    │   └── data                                        # test folder for json data
    │       └── componentsData.spec.js                  #
    ├── views                                           # handlebars views folder, holds helpers, layouts, pages, partials
    │   ├── helpers                                     # helpers holds custom handlebar helpers
    │   │   └── momentFromNowTime.js                    #
    │   ├── layouts                                     # layouts holds main layouts
    │   │   └── main.handlebars                         #
    │   ├── pages                                       # pages holds main pages
    │   │   ├── components-overview.handlebars          #
    │   │   ├── components.handlebars                   #
    │   │   ├── release-notes.handlebars                #
    │   │   ├── styles-overview.handlebars              #
    │   │   └── styles.handlebars                       #
    │   ├── partials                                    # partials hold reusable handlebar template partials
    │   │   ├── components                              #
    │   │   │   └── alert.handlebars                    #
    │   │   ├── styleguide-template-general             #
    │   │   │   ├── c-page-component-header.handlebars  #
    │   │   │   ├── c-page-header.handlebars            #
    │   │   │   ├── footer.handlebars                   #
    │   │   │   ├── header.handlebars                   #
    │   │   │   └── scripts.handlebars                  #
    │   │   └── styles                                  #
    │   │       ├── colors.handlebars                   #
    │   │       └── overview.handlebars                 #
    │   ├── 404.handlebars                              # 404.handlebars is 404 page not found
    │   └── index.handlebars                            # index.handlebars is main homepage
    ├── .gitignore                                      #
    ├── .tfignore                                       #
    ├── package.json                                    #
    ├── gulpfile.js                                     # gulp task runner which concatenates and minifies producing /build folder with client side javascripts and css files used in app
    ├── server.js                                       # configure and start node server
    └── README.md                                       # this document



# Development 👨‍💻

The command `npm start` will automatically launch the project. navigate to `http://localhost:3000/`

The files watched by gulp are the client js and less files.

Client side js files are located at `public/assets/js/**/*.js`. Editing these files and saving will kick off a gulp build and auto refresh your development workspace.

Less files are located at `public/assets/less/**/*.less`. Editing these files and saving will kick off a gulp build and auto refresh your development workspace.

If you are updating any file outside of the `/public` or the `/views` folder, you will need to stop and restart your server to see those changes reflected. As of now, gulp only watches changes on all the client side javascript and all the less files.

### Branching process

Include branching strategy and how to contribute when more contributors arrive.

### Linting

Before you push your branch up to the `develop` branch, ensure you lint your code.

run `npm run -s eslint .` this will show if you have any ESLint errors or warnings.
If you have any errors, please fix them. if you have warnings that could slide, push your code up or talk with a team member.

### Unit Testing

Before you push your branch up to the `develop` branch, ensure you test your code.

run `npm test` to see unit tests run.
run `npm run coverage` to view the code coverage report.
Please provide decent unit tests. If we expect a string, write a unit test so that when this app gets updated in the future, the devs working on it will have an idea of what was intended.


# Find a bug? :bug: 🕵️

Let us know by emailing us at distributionlist@bankofamerica.com
Providing a detailed description of what the issue is including answers to the following questions.
- what is the url?
- the machine you are on?
- what is the browser you are using?
- what is the version of the browser you are using?
- what is the expected behavior?
- what is the actual behavior?