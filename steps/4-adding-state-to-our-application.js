// -----index.js-----

// import choo
var choo = require('choo')

// import template
var main = require('./templates/main.js')

// initialize choo
var app = choo()

app.use(function (state) {
  // initialize state <--
  state.animals = {type: 'lion', x: 100, y: 200}
})

// create a route
app.route('/', main)

// start app
app.mount('div')
