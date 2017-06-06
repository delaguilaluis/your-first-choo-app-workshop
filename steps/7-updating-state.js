// -----index.js-----

// import choo
var choo = require('choo')

// import template
var main = require('./templates/main.js')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    {type: 'lion', x: 100, y: 200},
    {type: 'crocodile', x: 300, y: 50}
  ]

  // add animal <--
  emitter.on('addAnimal', function () {
    var obj = {type: 'lion', x: 200, y: 100}
    state.animals.push(obj)

    emitter.emit('render')
  })
})

// create a route
app.route('/', main)

// start app
app.mount('div')

// -----templates/main.js-----

// import choo's template helper
var html = require('choo/html')

// import template
var animal = require('./animal.js')

// export module
module.exports = function (state, emit) {
  // create html template <--
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(animal)}
      </div>
    </div>
  `

  // add new animal to state <--
  function add () {
    emit('addAnimal')
  }
}
