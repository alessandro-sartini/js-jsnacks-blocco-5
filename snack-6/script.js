const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const zucchineCorte= zucchine.filter((el)=>el.length<=15)
console.log(zucchineCorte)
const zucchineLunghe= zucchine.filter((el)=>el.length>=15)
console.log(zucchineLunghe)

const zucchineCorteLi= document.getElementById('zucchineCorte')
const zucchineLungheLi= document.getElementById('zucchineLunghe')

zucchineCorte.forEach( ( element ) => {

  //destructuring
  let { type, weight, length } = element

  zucchineCorteLi.innerHTML += `<li>zucchina: ${ type}, peso: ${weight}, lunghe: ${length } cm</li>`

})
zucchineLunghe.forEach( ( element ) => {

  //destructuring
  let { type, weight, length } = element

  zucchineLungheLi.innerHTML += `<li>zucchina: ${ type}, peso: ${weight}, lunghe: ${length } cm</li>`

})


let zucchineCorteAbr = []
let zucchineLungheAbr = []

zucchine.filter((el) => (el.length >= 15) ? (zucchineCorteAbr.push(el)) : (zucchineLungheAbr.push(el) ))
console.log(zucchineCorteAbr, zucchineLungheAbr)
