let multiplicando;
const final=10;
const inicio=1;

const fs = require('fs')


const crearArchivo = (multiplicador) => {
    
    console.log('==========================')
    console.log(`    Tabla de ${multiplicador}   `)
    console.log('==========================')
    let salida = '';

    for(multiplicando = inicio; multiplicando <= final;multiplicando++){
        let resultado= multiplicador * multiplicando;
        salida+=(`${multiplicador} X ${multiplicando} = ${resultado}\n`);
    }
    console.log(salida)
    //fs.writeFileSync(`tabla-${multiplicador}.txt`,salida);
    console.log(`tabla-${multiplicador}.txt creado`);
}

module.exports = {
    crearArchivo
}