import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';

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

  listadoDeJuegos;
  jugadorActivo:Jugador;


  constructor(private misJuegos:JuegoServiceService,private misJugadores:JugadoresService) { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    console.info("Inicio Piedra papel o tijera");
  }

  ngOnInit(){
    this.listadoDeJuegos=this.misJuegos.obtenerJuegos();
    this.jugadorActivo=this.misJugadores.obtenerJugadorActivo();
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
    var gano;
    if(resultado==1){
      this.winner=true;
      gano=true;
    }else if(resultado==0){
      this.tie=true;
      gano=null;
    }else{
      this.loser=true;
      gano=false;
    }

        
    this.nuevoJuego.jugador=this.jugadorActivo.usuario;
    this.nuevoJuego.gano = gano;

    this.misJuegos.altaJuego(this.nuevoJuego);

  }

}
