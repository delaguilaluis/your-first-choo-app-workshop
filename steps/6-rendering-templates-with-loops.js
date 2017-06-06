// -----index.js-----

// import choo
var choo = require('choo')

// import template
var main = require('./templates/main.js')

// initialize choo
var app = choo()

app.use(function (state) {
  // initialize state
  state.animals = [
    {type: 'lion', x: 100, y: 200},
    {type: 'crocodile', x: 300, y: 50} // <--
  ]
})

// create a route
app.route('/', main)

// start app
app.mount('div')

// -----templates/animal.js-----

// import choo's template helper
var html = require('choo/html')

// export module <--
module.exports = function (animal) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;">
  `
}

// -----templates/main.js-----

// import choo's template helper
var html = require('choo/html')

// import template
var animal = require('./animal.js')

// export module
module.exports = function (state) {
  // create html template <--
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `
}
