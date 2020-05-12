import { Juego } from './juego';

export class JuegoAnagrama extends Juego{

    gano: boolean;
    respuesta: string;

    anagramas:string[]=['T-R-I-B-U-N-O','P-O-R-C-I-O-N-E-S','G-L-O-R-I-A','P-R-E-C-I-O','R-U-B-O-R','N-O-T-A-R','A-M-I-G-O-C-R-U-E-L','B-A-R-C-O','P-A-S-I-V-A'];
    anagrama:string;
    correctas:string[]=['TIBURON','ESCORPION','GORILA','PERICO','BURRO','RATON','MURCIELAGO','COBRA','AVISPA'];
    correcta:string;
    



    //Clase Juego
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Anagrama", gano, jugador);

    }

    public verificar() {
        if (this.respuesta != undefined && this.respuesta.toUpperCase() == this.correcta) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }
    //

    public generarpalabra() {
        var aleatorio: number;
        aleatorio = Math.floor(Math.random() * (this.anagramas.length));
        this.anagrama = this.anagramas[aleatorio];
        this.correcta = this.correctas[aleatorio];

        console.info('Palabra: ' + this.correcta + '--- Solución: ' + this.correcta);
        this.gano = false;
    }





}
