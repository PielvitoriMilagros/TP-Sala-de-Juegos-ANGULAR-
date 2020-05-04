import { Component, OnInit } from '@angular/core';
import { JuegoPropio } from '../../clases/juego-propio';
import { TablaHelp } from '../../clases/tabla-help';

@Component({
  selector: 'app-juego-propio',
  templateUrl: './juego-propio.component.html',
  styleUrls: ['./juego-propio.component.css']
})
export class JuegoPropioComponent implements OnInit {


  nuevoJuego: JuegoPropio;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;
  started: boolean = false;
  help: boolean = false;
  winner: boolean;
  loser: boolean;
  tablaAyudas:TablaHelp[]=[];


  constructor() {
    this.nuevoJuego = new JuegoPropio();
    // console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar = true;
  }

  NuevoJuego() {
    this.nuevoJuego.generarSecuencia();
    this.contador = 0;
    this.started = true;
    this.winner = false;
    this.loser=false;
    this.help= false;
    this.ocultarVerificar = false;
    this.tablaAyudas=[];
  }

  verificar(color: string) {
    if (this.contador != 4) {
      this.nuevoJuego.secuenciaHumano[this.contador] = color;
      this.contador++;

    }

    if (this.contador == 4) {
      this.ocultarVerificar = true;

      if (this.nuevoJuego.verificarJugada()) {
        this.help=false;
        this.started = false;
        this.winner = true;
      } else {
        if (this.nuevoJuego.intentos == 0) {
          this.help = false;
          this.started=false;
          this.loser = true;
        }
        else
        this.tablaAyudas.push({'intentos':this.nuevoJuego.intentos,'eleccion':this.nuevoJuego.secuenciaHumano.toString(),'mensaje':this.nuevoJuego.correctas.toString()});
          this.ocultarVerificar = false;
        this.help = true;
        this.loser=false;
        this.winner=false;
      }

      this.contador = 0;
    }

  }

  ngOnInit(): void {
  }

}
