export class Jugador {

    id:number;
    usuario:string;
    clave:string;
    cuit:number;
    sexo:string;
    gano:boolean;

    constructor(id?:number,usuario?:string,clave?:string,cuit?:number,sexo?:string,gano?:boolean){
        if(id) this.id=id;
        if(usuario) this.usuario=usuario;
        if(clave) this.clave=clave;
        if(cuit) this.cuit=cuit;
        if(sexo) this.sexo=sexo;
        if(gano) this.gano=gano;

    }



}
