export default class Cl_Mayor{ 
    constructor(edad){
        this.mayor18 = 0;
        this.cntPersonas = 0; 

    }
    procesarPersona(p){
        this.cntPersonas++;
        if(p.edad >= 18){
            this.mayor18++;
        }

    } 

    porcentaje(){
        return this.mayor18 / this.cntPersonas * 100;
    }
}
