// example
var fun = true
var name = 'Alice'

function sentence() {
  if (fun) {
    console.log(`Yay! ${name} is having fun!`)
  } else {
    console.log(`Oh no, ${name} is not having fun.`)
  }
}

sentence()
sentence()
sentence()

// the following is logged to screen:
// "Yay! Alice is having fun!"
// "Yay! Alice is having fun!"
// "Yay! Alice is having fun!"
