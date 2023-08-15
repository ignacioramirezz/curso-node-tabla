// hacer mediante la creacion de un for 
//poder lograr la multiplicacion de la tabla
const {crearArchivo} = require('./multiplicar-ejercicio')

console.clear();


const multiplicador=4;

crearArchivo(multiplicador)
    .then(nombreArchivo => console.log(nombreArchivo,'fue creado'))
    .catch(err => console.log(err))



