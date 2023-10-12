class Producto {
    static contadorProductos=0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre= nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._precio= nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio=precio;
    }

    toString(){
        return `idProducto:${this._idProducto} , nombre:${this._nombre},precio:$ ${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('No se pueden agregar más productos');
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
        console.log(`Orden: ${this._idOrden} Total: $ ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Pantalon',3000);
let producto2 = new Producto('Camisa',3400);
let producto3 = new Producto('Polera',4500);
let producto4 = new Producto('lentes',5000);
let producto5 = new Producto('toalla',2600);
let producto6 = new Producto('jabon',300);

let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);

orden2.agregarProducto(producto6);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto2);

orden1.mostrarOrden();
orden2.mostrarOrden();
