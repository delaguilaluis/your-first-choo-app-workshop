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

  // remove animal
  emitter.on('removeAnimal', function (i) {
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

// create a route
app.route('/', main)
app.route('/filter/:type', main) // <--

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
        ${state.animals.map(animalMap)}
      </div>
      <div class="controls">
        <ul class="filters">
          <li><a href="/">all</a></li>
          <li><a href="/filter/crocodile">crododiles</a></li>
          <li><a href="/filter/koala">koalas</a></li>
          <li><a href="/filter/lion">lions</a></li>
          <li><a href="/filter/tiger">tigers</a></li>
          <li><a href="/filter/walrus">walruses</a></li>
        </ul>
      </div>
    </div>
  `

  // add new animal to state
  function add (e) {
    var x = e.offsetX - 20
    var y = e.offsetY - 10

    emit('addAnimal', {x: x, y: y})
  }

  // map function <--
  function animalMap (obj, i) {
    var type = state.params.type

    if (type && type !== obj.type) {
      return undefined
    } else {
      return animal(remove, obj, i)
    }
  }

  // remove animal from state
  function remove (e) {
    var index = e.target.id
    emit('removeAnimal', index)
  }
}
