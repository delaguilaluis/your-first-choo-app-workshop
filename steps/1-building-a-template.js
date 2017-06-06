// -----index.js-----

// import choo
var choo = require('choo')

// import choo's template helper <--
var html = require('choo/html')

// initialize choo
var app = choo()

// create a template <--
var main = function () {
  return html`<div>choo animals</div>`
}

// start app
app.mount('div')
