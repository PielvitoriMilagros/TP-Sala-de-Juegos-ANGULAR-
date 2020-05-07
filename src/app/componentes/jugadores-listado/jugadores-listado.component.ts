import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JugadoresService
  
    constructor(private serviceJugadores:JugadoresService) {
      //this.miJugadoresServicio = serviceJugadores;
      this.TraerTodos();
      
    }
    


  ngOnInit() {
 //   this.listado=this.serviceJugadores.obtenerJugadores();
    
  }


  TraerTodos(){

     this.listado=this.serviceJugadores.obtenerJugadores();

  }
   TraerGanadores(){

  this.listado=this.serviceJugadores.obtenerGanadores();

   }
   TraerPerdedores(){

  this.listado=this.serviceJugadores.obtenerPerdedores();

   }


}
