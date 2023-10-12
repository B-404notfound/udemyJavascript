class Pasajeros{
    static contadorPasajeros = 0;

    constructor(nombre,edad){
        this._idPasajeros = ++Pasajeros.contadorPasajeros;
        this._nombre = nombre;
        this._edad = edad;
    }
    get idPasajeros(){
        return this._idPasajeros;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `{idPasajero: ${this._idPasajeros},Nombre: ${this._nombre}, Edad: ${this._edad}}`;
    }
}

class Bus{
    static contadorDePasajeros = 0;

    static get MAX_PASAJEROS(){
        return 5;
    }

    constructor(){
        this._idCantidad = ++Bus.contadorDePasajeros;
        this._pasajeros = [];
    }

    get idCantidad (){
        return this._idCantidad;
    }

    agregarPasajeros(pasajero){
        if(this._pasajeros.length < Bus.MAX_PASAJEROS){
            this._pasajeros.push(pasajero);
        }else{
            console.log("No se prueden agregar mas pasajeron en este bus");
        }
    }

    totalPasajeros(){
        
        return this._pasajeros.length;
    }

    mostrarLista(){
        let listaPasajeros = '';

        for(let pasajero of this._pasajeros){
            listaPasajeros += `\n`+ pasajero.toString()+'';
        }
        console.log(`Bus: ${this._idCantidad},Total Pasajeros: ${this.totalPasajeros()},Lista: ${listaPasajeros}`);
    }
}


let pasajero1 = new Pasajeros('Juan',39);
let pasajero2 = new Pasajeros("Jaime",50);
let pasajero3 = new Pasajeros("Alfredo",45);

let bus1 = new Bus();
let bus2 = new Bus();
bus1.agregarPasajeros(pasajero1);
bus1.agregarPasajeros(pasajero2);
bus1.agregarPasajeros(pasajero3);
bus1.agregarPasajeros(pasajero1);
bus1.agregarPasajeros(pasajero3);

bus1.mostrarLista();

bus2.agregarPasajeros(pasajero1);
bus2.agregarPasajeros(pasajero3);
bus2.mostrarLista();





