export default class Cl_Personas{ 
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    
    }
    set edad (edad){
        this._edad = edad;

    }
    get edad (){
        return this._edad;
    }


}