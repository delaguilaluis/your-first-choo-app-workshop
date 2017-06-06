// -----templates/main.js-----

// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (state) { // <--
  var type = state.animals.type
  var x = state.animals.x
  var y = state.animals.y

  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" />
      </div>
    </div>
  `
}

// -----index.js-----

// import choo
var choo = require('choo')

// import template
var main = require('./templates/main.js')

// initialize choo
var app = choo()

app.use(function (state) {
  // initialize state
  state.animals = {type: 'lion', x: 100, y: 200}
})

// create a route
app.route('/', main)

// start app
app.mount('div')
