// hacer mediante la creacion de un for 
//poder lograr la multiplicacion de la tabla
const { options } = require('yargs');
const {crearArchivo} = require('./Ejercicio-promesas/multiplicar-ejercicio.js')
const colors = require('colors')
const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true
            })//realizo la verificacion de informacion para poder pasar atributos validos
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false
            })
            .check((argv,options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;

console.clear();

console.log(process.argv);
console.log(argv);

console.log('base: yargs',argv.base);

//option('l')
//listar
//boolean
// default: false

/*const[ , ,arg3 = 'multiplicador=5'] = process.argv;
const [ , multiplicador] = arg3.split('=');
console.log(multiplicador);*/

//const multiplicador=2;
crearArchivo(argv.b,argv.l)
            .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
            .catch(err => console.log(err));




