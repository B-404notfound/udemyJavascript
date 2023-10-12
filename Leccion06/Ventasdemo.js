class Feria{
    static contadorFrutas = 0;

    constructor(tipo,precio){
        this._idFruta = ++Feria.contadorFrutas;
        this._tipo = tipo;
        this._precio = precio;
    }
    get idFruta(){
        return this._idFruta;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return `idFruta: ${this._idFruta},tipo: ${this._tipo},precio: ${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("no se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{'+ producto.toString() + '} ';
        }

        console.log(`Orden: ${this._idOrden} Total:$ ${this.calcularTotal()},Productos: ${productosOrden}`);
    }

}

let fruta1 = new Feria("papas",400);
let orden1 = new Orden();
orden1.agregarProducto(fruta1);
orden1.mostrarOrden();
let fruta2 = new Feria("Lechuga",450);
orden1.agregarProducto(fruta2);
orden1.mostrarOrden();