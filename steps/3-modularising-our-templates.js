// -----templates/main.js----- <--

// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function () {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
      </div>
    </div>
  `
}

// -----index.js-----

// import choo
var choo = require('choo')

// import template <--
var main = require('./templates/main.js')

// initialize choo
var app = choo()

// create a route
app.route('/', main)

// start app
app.mount('div')
