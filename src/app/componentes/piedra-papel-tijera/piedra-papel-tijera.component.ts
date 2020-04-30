import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  winner:boolean=false;
  loser:boolean=false;
  tie:boolean=false;


  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    console.info("Inicio Piedra papel o tijera");
  }

  ngOnInit(): void {
  }

  NuevoJuego(value:any){
    this.nuevoJuego.generarJuegoPC(value);
    this.winner=false;
    this.loser = false;
    this.tie = false;

  }

  verificar(){
    var resultado;
    resultado= this.nuevoJuego.verificarResultado();
    if(resultado==1){
      this.winner=true;
    }else if(resultado==0){
      this.tie=true;
    }else{
      this.loser=true;
    }


  }

}
