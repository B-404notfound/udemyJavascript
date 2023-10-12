'use strict';

let resultado = ' Hola';

try {
    if(isNaN (resultado)) throw 'No es un numero';
    else if(resultado ==='') throw 'Es cadena vacia';
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revision de errores');
}
