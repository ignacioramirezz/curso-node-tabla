let multiplicando;
const final=10;
const inicio=1;
const { rejects } = require('assert');
const { green } = require('colors');
const fs = require('fs')


const crearArchivo = async(multiplicador,listar = false) => {

    try{
        let salida = '';
        for(multiplicando = inicio; multiplicando <= final;multiplicando++){
            let resultado= multiplicador * multiplicando;
            salida+=(`${multiplicador} X ${multiplicando} = ${resultado}\n`);
        }
        if(listar==true){
            console.log('=========================='.green)
            console.log(`    Tabla de ${multiplicador}  `)
            console.log('=========================='.green)
            console.log(salida)
        }
        fs.writeFileSync(`./Salida/tabla-${multiplicador}.txt`,salida);
        return `tabla-${multiplicador}.txt`;
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}