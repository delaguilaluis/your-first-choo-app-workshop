// -----index.js-----

// import choo
var choo = require('choo')

// import choo's template helper
var html = require('choo/html')

// initialize choo
var app = choo()

// create a template
var main = function () {
  return html`<div>choo animals</div>`
}

// create a route <--
app.route('/', main)

// start app
app.mount('div')
