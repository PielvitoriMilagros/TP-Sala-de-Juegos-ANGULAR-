import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  hayJugadorActivo = false;

  constructor(private miServicio: JugadoresService, private misJuegos:JuegoServiceService) { }

  ngOnInit() {
    let retorno = this.miServicio.obtenerJugadorActivo();
    if (this.miServicio.obtenerJugadorActivo() === null)
      this.hayJugadorActivo = false;
    else
      this.hayJugadorActivo = true;

  }


  desactivarJugador(){
    this.miServicio.limpiarJugadorActivo();
    this.hayJugadorActivo = false;
  }



}
