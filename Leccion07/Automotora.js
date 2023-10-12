class Auto{
    static contadorAutos=0;

    constructor(marca,modelo,precio){
        this._idAuto = ++Auto.contadorAutos;
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
    }

    get idAuto(){
        return this._idAuto;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `{ idAuto: ${this._idAuto},Marca: ${this._marca},Modelo: ${this._modelo},Precio: ${this._precio} }`;
    }
}

class Venta{

    static contadorVenta = 0;

    static get MAX_VENTAS(){
        return 5;
    }

    constructor(){
        this._idVenta = ++Venta.contadorVenta;
        this._autos = [];
    }

    get idVenta(){
        return this._idVenta;
    }

    agregarAuto(auto){
        if(this._autos.length < Venta.MAX_VENTAS){
            this._autos.push(auto);
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let autoVenta = 0;
        for(let auto of this._autos){
            autoVenta += auto.precio;
        }
        return autoVenta;
    }

    mostrarVenta(){
        let autoVenta = ' ';

        for(let auto of this._autos){
            autoVenta += '\n {'+ auto.toString()+ '}';
        }
        console.log(`Venta: ${this._idVenta}, Total: ${this.calcularTotal()}, Autos :${autoVenta}`);
    }
}

let auto1 = new Auto("Daewoo","Sunn",30000);
let auto2 = new Auto("VMW","RP-33",66000);
let auto3 = new Auto("Mercedes Benz","Clasico",120000);

let venta1 = new Venta();
let venta2 = new Venta();

venta1.agregarAuto(auto1);
venta1.agregarAuto(auto2);
venta1.agregarAuto(auto2);
venta1.agregarAuto(auto1);
venta1.agregarAuto(auto1);
venta2.agregarAuto(auto3);
venta2.agregarAuto(auto2);
venta2.agregarAuto(auto1);
venta1.mostrarVenta();
venta2.mostrarVenta();
