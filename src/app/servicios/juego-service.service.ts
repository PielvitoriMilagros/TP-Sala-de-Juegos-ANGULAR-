import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service'; 
import { JuegoAgilidad } from '../clases/juego-agilidad';
import { JuegoAnagrama } from '../clases/juego-anagrama';
import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';
import { JuegoPropio } from '../clases/juego-propio';
import { JuegoTaTeTi } from '../clases/juego-ta-te-ti';

@Injectable()
export class JuegoServiceService {

  juegos:Juego[];


constructor(){
  this.juegos=this.obtenerJuegos();
if(this.juegos == undefined){
  this.juegos = [
    new JuegoAdivina('',true,'Jugador1'),
    new JuegoAgilidad('',false,'Jugador2'),
    new JuegoAnagrama('',true,'Jugador4'),
    new JuegoPiedraPapelTijera('',false,'Jugador4'),
    new JuegoPropio('',true,'Jugador1'),
    new JuegoAgilidad('',true,'admin')
  ];
  console.log("paso por el CONSTRUCTOR");
  localStorage.setItem('juegos',JSON.stringify(this.juegos));
}

}

obtenerJuegos(){
  console.log("ANTES de obtener");
  return JSON.parse(localStorage.getItem('juegos'));
}

altaJuego(juegoNuevo:Juego){
  this.juegos = this.obtenerJuegos();
  this.juegos.push(juegoNuevo);
  localStorage.setItem('juegos',JSON.stringify(this.juegos));

}









//   peticion:any;
//   constructor( public miHttp: MiHttpService ) {
//     this.peticion = this.miHttp.httpGetO("http://localhost:3003");
// //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
//   }

//   public listar(): Array<Juego> {
//    this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
//     .then( data => {
//       console.log( data );
//     })
//     .catch( err => {
//       console.log( err );
//     });
   
  
//     this.peticion
//     .subscribe( data => {
//       console.log("En listar");
//       console.log( data );
//     }, err => {
//       console.info("error: " ,err );
//     })

//     let miArray: Array<Juego> = new Array<Juego>();

//     miArray.push(new JuegoAdivina("Juego 1", false));
//     miArray.push(new JuegoAdivina("Pepe", true));
//     miArray.push(new JuegoAdivina("Juego 3", false));
//     miArray.push(new JuegoAdivina("Juego 4", false));
//     miArray.push(new JuegoAdivina("Juego 5", false));
//     miArray.push(new JuegoAdivina("Juego 6", false));
//     return miArray;
//   }

//   public listarPromesa(): Promise<Array<Juego>> {
//     this.peticion
//     .subscribe( data => {
//       console.log("En listarPromesa");
//       console.log( data );
//     }, err => {
//       console.log( err );
//     })
//     let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
//       let miArray: Array<Juego> = new Array<Juego>();
//       miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
//       miArray.push(new JuegoAdivina("PepePromesa", true));
//       miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
//       miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
//       miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
//       miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
//       resolve(miArray);
//     });

//     return promesa;
//   }

}
