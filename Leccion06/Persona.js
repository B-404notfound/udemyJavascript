class Funcionario{
    static contadorFuncionario = 0;

    constructor(nombre,apellido,edad){
        this._idFuncionario = ++Funcionario.contadorFuncionario;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idFuncionario(){
        return this._idFuncionario;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `idFuncionario: ${this._idFuncionario},nombre: ${this._nombre},apellido: ${this._apellido},edad: ${this._edad}`;
    }
    
}
class Cantidad{
    static contadorFun = 0;

    static get MAX_FUN(){
        return 5;
    }
    constructor(){
        this._idContador = Cantidad.contadorFun;
        this._funcionarios = [];
    }
    get idContador(){
        return this._idContador;
    }
    agregarFuncionarios(funcionario){
        if(this._funcionarios.length < Cantidad.MAX_FUN){
            this._funcionarios.push(funcionario);
        }else{
            console.log("Ha alcanzado el maximo de registro");
        }
    }
}

let funcionario1 = new Funcionario("Luis", "Lopez",34);
let funcionario2 = new Funcionario("Maria", "Salazar",54);
let funcionario3 = new Funcionario("Mario","Alberto",60);
let funcionario4 = new Funcionario("Juan","Azocar",49);
let funcionario5 = new Funcionario("Mario","Hugo",70);
let funcionario6 = new Funcionario("Luis","Pedraza",47);
console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
console.log(funcionario4);
console.log(funcionario5);
console.log(funcionario6);


let cantidad1 = new Cantidad();
