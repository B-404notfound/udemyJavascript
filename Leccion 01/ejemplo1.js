let mes = 1;
let estacion = 'Estacion desconocida';

switch(mes){
    case 1:
        estacion ="Verano";
        break;
    case 2:
        estacion = "Otoño";
        break;
    case 3:
        estacion ="Invierno";
        break;
    case 4:
        estacion = "Primavera";
        break;
    default:
        estacion ="Estacion desconocida";
}

console.log(estacion);