const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

let studentMarcoClass

students.forEach(el => {

  if (el.name === "Marco Lanci") {
    studentMarcoClass = el.class
  }  

})

console.log(studentMarcoClass)

// let studentMarco
// students.filter(el=> (el.name==='Marco Lanci') (el.class): null )