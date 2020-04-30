import { Juego } from '../clases/juego'

export class JuegoAgilidad extends Juego {


    gano: boolean;
    numeroIngresado: number;
    operadores: string[] = ['+', '-', '*', '/'];
    operador: string;
    primerNumero: number;
    segundoNumero: number;
    resultado: number;

    //Clase Juego
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Adivina el número", gano, jugador);

    }

    public verificar() {
        if (this.numeroIngresado == this.resultado) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }
    //

    public generarnumeros() {
        var aleatorio: number;
        this.primerNumero = Math.floor((Math.random() * 100) + 1);
        this.segundoNumero = Math.floor((Math.random() * 100) + 1);
        aleatorio = Math.floor(Math.random() * (this.operadores.length));
        this.operador = this.operadores[aleatorio]

        switch (this.operador) {
            case '*':
                this.resultado = this.primerNumero * this.segundoNumero;
                break;
            case '/':
                this.resultado = this.primerNumero / this.segundoNumero;
                break;
            case '+':
                this.resultado = this.primerNumero + this.segundoNumero;
                break;
            case '-':
                this.resultado = this.primerNumero - this.segundoNumero;
                break;
        }

        console.info('Números: ' + this.primerNumero + ' ' + this.operador + ' ' + this.segundoNumero + ' ' + this.resultado);
        this.gano = false;
    }




}
