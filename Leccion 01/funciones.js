// declaracion tipo expresion

let sumar = function(a = 4,b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

resultado = sumar(2,3);
console.log(resultado);



