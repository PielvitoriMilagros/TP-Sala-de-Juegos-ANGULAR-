import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';



@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego: JuegoAnagrama;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;

  winner:boolean=false;
  loser:boolean=false;
  private subscription: Subscription;
  listadoDeJuegos;
  jugadorActivo:Jugador;


  ngOnInit() {
    this.listadoDeJuegos=this.misJuegos.obtenerJuegos();
    this.jugadorActivo=this.misJugadores.obtenerJugadorActivo();
  }

  constructor(private misJuegos:JuegoServiceService,private misJugadores:JugadoresService) {
    this.ocultarVerificar = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAnagrama();
    console.info("Inicio Anagrama");
  }
  NuevoJuego() {
    this.ocultarVerificar = false;
    this.winner=false;
    this.loser = false;
    this.nuevoJuego.generarpalabra();
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log("quedan", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);

  }
  verificar() {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);

    if(this.nuevoJuego.verificar()){
      this.MostrarMensaje(true);
    } else{
      this.MostrarMensaje(false);
    }
    
    this.nuevoJuego.jugador=this.jugadorActivo.usuario;
    this.nuevoJuego.gano = this.nuevoJuego.verificar();

    this.misJuegos.altaJuego(this.nuevoJuego);



  }

  MostrarMensaje(ganador:boolean) {
    if(ganador)
      {
        this.winner=true;
      }else{
        this.loser=true;
      }
    setTimeout(function(){ 
      this.winner=false;
      this.loser=false;
     }, 3000);
  

   } 





}
