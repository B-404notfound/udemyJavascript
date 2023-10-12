class Invitados{

    static contadorInvitados = 0;

    constructor(nombre,rut,telefono) {
        this._idInvitados = ++Invitados.contadorInvitados;
        this._nombre = nombre;
        this._rut = rut;
        this._telefono = telefono;
    }

    get idInvitados(){
        return this._idInvitados;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get rut(){
        return this._rut;
    }

    set rut(rut){
        this._rut;
    }

    get telefono(){
        return this._telefono;
    }

    set telefono(telefono){
        this._telefono = telefono;
    }
    
    toString(){
        return `{ idInvitados: ${this._idInvitados},Nombre: ${this._nombre},Rut: ${this._rut},Telefono: ${this._telefono} }`;
    }
}

class Fiesta{
     static contadorInvitado = 0;

     static get MAX_INVITADOS(){
        return 5;
     }

     constructor(){
         this._idCantidad = ++Fiesta.contadorInvitado;
         this._invitados = [];
     }

     get idCantidad(){
        return this._idCantidad;
     }

     agregarInvitado(fiesta){
        if(this._invitados.length < Fiesta.MAX_INVITADOS){
            this._invitados.push(fiesta);
        }else{
            console.log('supero el maximo de invitados');
        }
     }

     totalInvitados(){
        return this._invitados.length;
     }

     mostrarLista(){
        let listaFiesta = '';

        for(let fiesta of this._invitados){
            listaFiesta += `\n`+fiesta.toString()+' ';
        }
        console.log(`Fiesta: ${this._idCantidad},Total Invitados: ${this.totalInvitados()},Lista: ${listaFiesta}`);
     }
}

let invitado1 = new Invitados('Juan','12.546.765-9','9876756455');
let invitado2 = new Invitados('Ricardo','23.456.554-6','934565466');
let invitado3 = new Invitados('Pablo','23.657.657-8','976876577');
let fiesta1= new Fiesta();
let fiesta2 = new Fiesta();
fiesta1.agregarInvitado(invitado1);
fiesta1.agregarInvitado(invitado2);
fiesta1.agregarInvitado(invitado3);
fiesta1.agregarInvitado(invitado2);
fiesta1.agregarInvitado(invitado2);
fiesta2.agregarInvitado(invitado1);
fiesta2.agregarInvitado(invitado3);
fiesta2.agregarInvitado(invitado2);


fiesta1.mostrarLista();
fiesta2.mostrarLista();
