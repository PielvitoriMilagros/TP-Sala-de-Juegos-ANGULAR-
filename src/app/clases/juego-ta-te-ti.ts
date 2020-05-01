import { Juego } from './juego';

export class JuegoTaTeTi extends Juego {


    gano:boolean;

    posiciones=[['-','-','-'],
    ['-','-','-'],
    ['-','-','-']];


    jugadores='O';

    quienGana:string='nadie';

    respuesta:string;
    correcta:string;

    retorno:boolean;

    //Clase Juego
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("TaTeTi", gano, jugador);

    }

    public verificar() {
        if (this.respuesta == this.correcta) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }
    //

    reiniciarJuego() {
        for (let f = 0; f < 3; f++)
            for (let c = 0; c < 3; c++)
                this.posiciones[f][c] = '-';
        this.retorno=false;
        this.quienGana='nadie';
    }

  dibujarFicha(fila:number,columna:number) {
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugadores;
      if(this.verificarGano('X')){
          this.quienGana='Jugador X';

      };
      if(this.verificarGano('O')){
          this.quienGana='Jugador O';
      };
      this.cambiarJugador();
    }
  }


  cambiarJugador() {
    if (this.jugadores=='O')
      this.jugadores='X';
    else
      this.jugadores='O';    
  }
 

    verificarGano(ficha: string) {
        this.retorno=false;
        if (this.posiciones[0][0] == ficha && this.posiciones[0][1] == ficha && this.posiciones[0][2] == ficha)
        this.retorno=true;
        if (this.posiciones[1][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[1][2] == ficha)
            this.retorno = true;
        if (this.posiciones[2][0] == ficha && this.posiciones[2][1] == ficha && this.posiciones[2][2] == ficha)
            this.retorno = true;
        if (this.posiciones[0][0] == ficha && this.posiciones[1][0] == ficha && this.posiciones[2][0] == ficha)
            this.retorno = true;
        if (this.posiciones[0][1] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][1] == ficha)
            this.retorno = true;
        if (this.posiciones[0][2] == ficha && this.posiciones[1][2] == ficha && this.posiciones[2][2] == ficha)
            this.retorno = true;
        if (this.posiciones[0][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][2] == ficha)
            this.retorno = true;
        if (this.posiciones[0][2] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][0] == ficha)
            this.retorno = true;
        return this.retorno;
    }


}
