import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  jugadorNuevo:Jugador;

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/
  constructor(private miServicio:JugadoresService ) { }

  ngOnInit() {
    this.jugadorNuevo=new Jugador();
  }

  registrarJugador(){
    if(this.jugadorNuevo.usuario != null && this.jugadorNuevo.clave!= null)
    this.miServicio.altaJugador(this.jugadorNuevo);

  }

}
