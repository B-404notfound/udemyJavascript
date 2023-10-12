let miFuncion = function (){
    console.log('saludos desde mi funcion');
}

//let miFuncionFlecha= ()=>{
//    console.log('saludos desde mi funcion flecha');
//}

const miFuncionFlecha = ()=> console.log('saludos desde mi funcion flecha');

const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('hola como estan con parametros');

const regresaObjeto = ()=>({nombre: 'Juan', apellido : 'Lopez'});
console.log(regresaObjeto());

const funcionConVariosParametros = (op1,op2)=>{
    let resultado = op1 + op2;
    return resultado;
};
console.log(funcionConVariosParametros(3,5));

const Sumar = (n1,n2) =>{
    let resultado = n1 + n2;
    return resultado;
};

const Restar=(r1,r2) =>{
    let resultado = r1 - r2;
    return resultado;
};

const Dividir = (p1,p2) =>{
    let resultado = p1 / p2;
    return resultado;
};
const Multiplcar = (m1,m2)=>{
    let resultado = m1 * m2;
    return resultado;
};

console.log(Sumar(3,7));
console.log(Restar(59,44));
console.log(Dividir(23,5));
console.log(Multiplcar(3,7));