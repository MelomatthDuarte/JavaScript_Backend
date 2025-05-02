const fs = require('fs')

const primero = fs.readFileSync('./data/primer.txt', 'utf-8')
const segundo = fs.readFileSync('/data/segundo.txt', 'utf-8')

console.log(primero)
console.log(segundo)