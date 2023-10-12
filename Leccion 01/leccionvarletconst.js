let miNumero = "19";

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)){
    console.log("No es un numero");
}else{
    if(edad >=18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar");
    }
}

if(isNaN(edad)){
    console.log("No es un numero");
}else{
    let resultado = (edad >=18)? "Puede Votar":"Muy joven para votar";
    console.log(resultado);
}



