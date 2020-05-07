import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  hayJugadorActivo = false;

  constructor(private miServicio: JugadoresService) { }

  ngOnInit() {
    let retorno = this.miServicio.obtenerJugadorActivo();
    console.log(retorno);
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
