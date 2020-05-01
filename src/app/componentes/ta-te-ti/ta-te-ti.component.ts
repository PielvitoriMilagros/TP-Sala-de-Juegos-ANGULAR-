import { Component, OnInit } from '@angular/core';
import { JuegoTaTeTi } from '../../clases/juego-ta-te-ti';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {


  nuevoJuego: JuegoTaTeTi;
  winner:boolean=false;
  tie:boolean=false;
  contador:number=0;
  jugador:string;


  constructor() { 
    this.nuevoJuego = new JuegoTaTeTi();
    console.info("Inicio TaTeTi");
  }

  ngOnInit(): void {
  }

  

   presion(fila:number,columna:number) {
     this.nuevoJuego.dibujarFicha(fila,columna);
     if(this.nuevoJuego.quienGana!='nadie'){
       this.winner=true;
     }else{
       this.contador++;
       if(this.contador==9){
         this.tie=true;
       }
     }
   }

  NuevoJuego() {
    this.nuevoJuego.reiniciarJuego();
    this.winner=false;
    this.tie=false;
    this.jugador='O';
    this.contador=0;
  }





}
