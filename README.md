# choo workshop

Supporting material for a choo workshop which aims to follow 
[your first choo app](https://handbook.choo.io/your-first-choo-app/) guide from
[the choo handbook](https://handbook.choo.io/)

## Requirements

* Little to non experience with Javascript/Node.js
* Node
  * nvm (`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`)
    * `nvm install <insert desired node version here>`
* Your favorite text editor

## Setting up the project

* Create an `index.js` file and a `public` folder
* Run `npm init` and follow the CLI wizard
* Install `standard` (or favorite linting tool) `npm install --save-dev standard`
* Install the application dependencies
  * `npm install -S choo browserify watchify ecstatic`
* Set up your npm scripts (under the `scripts` section of your `package.json`)
  
  ```json
  {
    "build": "browserify index.js > public/bundle.js",
    "watch": "watchify index.js -o public/bundle.js -dv",
    "start": "ecstatic ./public -p 3000",
    "lint": "standard"
  }
  ```

* Copy this `assets` folder: https://github.com/louiscenter/choo-animals/tree/master/assets into your `public` folder

## Let's continue

0. Test it (`npm run watch` and `npm start` in separate terminals) (SPOILER ALERT: it should be pink)
1. Building a template
2. Creating a route
3. Modularising our templates (EARLY OPTIMIZATIONNNZZZ REALLY??? Yes, really.)
  (+ Function example)
4. Adding state to our application (no changez? lolwut)
5. Passing state to our templates (prepare from die from cuteness)
6. Rendering templates with loops
  (+ Array.map example)
7. Updating state
8. Passing data to state (cuteness overload ahead)
9. Removing data from state
10. Creating dynamic routes

## Plugs

* N???!!!L
* https://github.com/yoshuawuyts/tiny-guide-to-non-fancy-node