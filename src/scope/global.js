// variables

var a; // declarando
var b = 'b'; // declarando / asignamos
b = 'bb'; // reasignacion
var a = 'aa' // redeclaracion


// Global Scope
var fruit = 'Apple'; // global

function bestFruit () {
  console.log(fruit)
}
bestFruit();


function countries () {
  country = 'Colombia'; //global, sin declarar la nueva variable
  console.log(country);
}
countries()
console.log(country);