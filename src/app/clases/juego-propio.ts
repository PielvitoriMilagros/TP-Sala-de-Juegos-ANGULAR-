import { Juego } from './juego';

export class JuegoPropio extends Juego{


    // Juego
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("MasterMind",gano,jugador);
    
      }
    public verificar() {
         if (this.secuenciasPC == this.secuenciaHumano) {
           this.gano = true;
         }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }

     secuenciasPC:string[]=[];
     secuenciaHumano:string[]=[];
     correctas:number;
     intentos:number;



     generarSecuencia(){
         this.secuenciasPC=['Rojo','Verde','Amarillo','Azul'];
         this.secuenciasPC.sort(this.func);
         this.intentos=5;
         console.log(this.secuenciasPC);

     }

     func(a,b){
         return 0.5 - Math.random();
     }

     verificarJugada(){
         this.correctas=0;
         console.log('humano:' + this.secuenciaHumano);
         console.log('pc: ' + this.secuenciasPC );
         for(let index = 0; index < 4; index++){
             if(this.secuenciaHumano[index]==this.secuenciasPC[index]){
                 this.correctas++;
             }
         }
         if(this.correctas == 4){
             return true;
             // codigo si gana
         }else{
            this.intentos--;
            return false;
         }

     }





}
