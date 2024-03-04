/* modulo de terceros */
const moment = require('moment');
console.log(moment().subtract(10, 'days').calendar());


/* modulos propios */
const calculadora = require('./my_modules/calculadora');



console.log(calculadora.multi(3, 10));