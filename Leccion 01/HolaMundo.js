// ejemplo de AND (&&) regresa true solo si ambos operando son true

let a = 5;
let valMin = 0 , valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro del rango");
}else{
    console.log("Fuera de Rango");
}

// ejemplo de OR (||) regresa true si cualquier operando es true

let vacaciones = false , diaDescanso = true;

if(vacaciones || diaDescanso){
    console.log("el padre puede asistir al juego ");
}else{
    console.log("el padre esta ocupado");
}
