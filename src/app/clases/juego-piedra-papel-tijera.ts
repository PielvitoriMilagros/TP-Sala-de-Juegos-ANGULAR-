import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {

    //Clase Juego
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Piedra Papel o Tijera", gano, jugador);

    }

    //Verificar empate
    public verificar() {
        if (this.eleccionPC == this.eleccionHumano) {
            return true;
        }
        return false;
    }
    //

    eleccionesPC: string[] = ['Piedra', 'Papel', 'Tijera'];
    eleccionPC: string;
    eleccionHumano: string;



    public generarJuegoPC() {
        var aleatorio: number;
        aleatorio = Math.floor(Math.random() * (this.eleccionesPC.length));
        this.eleccionPC = this.eleccionesPC[aleatorio]

        console.info('Elección PC: ' + this.eleccionPC);
        this.gano = false;
    }

    public verificarResultado() {
        var empate;
        var resultado;
        empate = this.verificar();
        if (!empate) {
            switch (this.eleccionHumano) {
                case ('Piedra'):
                    switch (this.eleccionPC) {
                        case ('Papel'):
                            resultado = -1;
                            break;
                        case ('Tijera'):
                            resultado = 1;
                            break;
                    }
                    break;
                case ('Papel'):
                    switch (this.eleccionPC) {
                        case ('Piedra'):
                            resultado = 1;
                            break;
                        case ('Tijera'):
                            resultado = -1;
                            break;
                    }
                    break;
                case ('Tijera'):
                    switch (this.eleccionPC) {
                        case ('Papel'):
                            resultado = 1;
                            break;
                        case ('Piedra'):
                            resultado = -1;
                            break;
                    }
                    break;
            }
        }else{
            resultado=0;
        }
        return resultado;
    }



}
