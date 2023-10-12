class Curso{
    static contadorAlumnos= 0;

    constructor(asignatura,profesor,alumno){
        this._idAlumno = ++Curso.contadorAlumnos;
        this._asignatura= asignatura;
        this._profesor=profesor;
        this._alumno=alumno;
    }

    get idAlumno(){
        return this._idAlumno;
    }
    get asignatura(){
        return this._asignatura;
    }
    
    set asignatura(asignatura){
        this._asignatura= asignatura;
    }
    get profesor(){
        return this._profesor;
    }
    set profesor(profesor){
        this._profesor=profesor;
    }
    get alumno(){
        return this._alumno;
    }
    set alumno(alumno){
        this._alumno= alumno;
    }

    toString(){
        return `{ idAlumno:${this._idAlumno},Asignatura: ${this._asignatura},Profesor: ${this._profesor},Alumno: ${this._alumno} }`;
    }
}

class Clase{
    static contadorEstudiantes = 0;

    static get MAX_ESTUDIANTES (){
        return 4;
    }

    constructor(){
        this._idCantidad = ++Clase.contadorEstudiantes;
        this._estudiantes = [];
    }

    get idCantidad(){
        return this._idCantidad;
    }

    agregarEstudiantes(curso){
        if(this._estudiantes.length < Clase.MAX_ESTUDIANTES){
            this._estudiantes.push(curso);
        }else{
            console.log("No se pueden agregar mas estudiantes en esta clase");
        }
    }

    totalAlumnos(){
        
        return this._estudiantes.length;
    }

    mostrarLista(){
        let listaCurso = '';

        for(let curso of this._estudiantes){
            listaCurso += `\n`+ curso.toString()+' ';
        }
        console.log(`Curso: ${this._idCantidad},Total Estudiantes:${this.totalAlumnos()}, Lista: ${listaCurso}`);
    }

}

let alumno1 = new Curso("Filosofia","Juan Sanchez","Luis Pavez");
let alumno2 = new Curso("Matematicas","Julio Lopez","Horacio Quijada");
let alumno3 = new Curso('Lenguaje',"Ricardo","Tomas");

let curso1 = new Clase();
let curso2 = new Clase();
curso2.agregarEstudiantes(alumno1);
curso2.agregarEstudiantes(alumno3);
curso2.agregarEstudiantes(alumno1);
curso2.agregarEstudiantes(alumno3);
curso1.agregarEstudiantes(alumno1);
curso1.agregarEstudiantes(alumno3);


curso2.mostrarLista();
curso1.mostrarLista();