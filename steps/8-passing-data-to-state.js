// -----templates/main.js-----

// import choo's template helper
var html = require('choo/html')

// import template
var animal = require('./animal.js')

// export module
module.exports = function (state, emit) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick=${add} />
        ${state.animals.map(animal)}
      </div>
    </div>
  `

  // add new animal to state <--
  function add (e) {
    var x = e.offsetX - 20
    var y = e.offsetY - 10

    var obj = {x: x, y: y}
    emit('addAnimal', obj)
  }
}

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
  emitter.on('addAnimal', function (data) {
    var animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

    var type = Math.floor(Math.random() * 5)
    var x = data.x
    var y = data.y

    var obj = {type: animals[type], x: x, y: y}
    state.animals.push(obj)

    emitter.emit('render')
  })
})

// create a route
app.route('/', main)

// start app
app.mount('div')
