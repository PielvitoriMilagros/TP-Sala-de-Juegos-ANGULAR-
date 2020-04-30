import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;

  winner:boolean=false;
  loser:boolean=false;
  private subscription: Subscription;

  ngOnInit() {
  }
  constructor() {
    this.ocultarVerificar = true;
    this.Tiempo = 5;
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");
  }
  NuevoJuego() {
    this.ocultarVerificar = false;
    this.winner=false;
    this.loser = false;
    this.nuevoJuego.generarnumeros();
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
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
