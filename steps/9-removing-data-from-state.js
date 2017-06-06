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
        ${state.animals.map(animalMap)}
      </div>
    </div>
  `

  // map function <--
  function animalMap (obj, i) {
    return animal(remove, obj, i)
  }

  // add new animal to state
  function add (e) {
    var x = e.offsetX - 20
    var y = e.offsetY - 10

    emit('addAnimal', {x: x, y: y})
  }

  // remove animal from state <--
  function remove (e) {
    var index = e.target.id
    emit('removeAnimal', index)
  }
}

// -----templates/animal.js-----

var html = require('choo/html')

module.exports = function (onclick, animal, i) { // <--
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template <--
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${i} onclick=${onclick}>
  `
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
    { type: 'lion', x: 200, y: 100 },
    { type: 'crocodile', x: 50, y: 300 }
  ]

  // add animal
  emitter.on('addAnimal', function (data) {
    var animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

    var type = Math.floor(Math.random() * 5)
    var x = data.x
    var y = data.y

    var obj = { type: animals[type], x: x, y: y }
    state.animals.push(obj)

    emitter.emit('render')
  })

  // remove animal <--
  emitter.on('removeAnimal', function (i) {
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

// create a route
app.route('/', main)

// start app
app.mount('div')
