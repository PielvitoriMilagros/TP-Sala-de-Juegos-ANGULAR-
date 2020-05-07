import { Injectable } from '@angular/core';
import { ArchivosJugadoresService}from './archivos-jugadores.service'
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../clases/jugador';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores:Jugador[];
  jugadorActivo:Jugador;

  //peticion:any;
  constructor( public miHttp: ArchivosJugadoresService , private httpClient: HttpClient) {
   // this.peticion = this.miHttp.traerJugadores();
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");

this.jugadores = [
  new Jugador(1,'jugador1','juga1',20123456780,'Femenino',true),
  new Jugador(2,'jugador2','juga2',20123456780,'Masculino',false),
  new Jugador(3,'admin','admin',20123456780,'Femenino',true),
  new Jugador(4,'jugador4','juga4',20123456780,'Masculino',false),
];

localStorage.setItem('jugadores',JSON.stringify(this.jugadores));

  }


filtrado:any;

obtenerJugadores(){
  return JSON.parse(localStorage.getItem('jugadores'));

}

obtenerGanadores(){
  let winners:Jugador[]=[];
  let listado = this.obtenerJugadores();
  for(let jugador of listado){
    if(jugador.gano==true)
    winners.push(jugador);
  }

  return winners;  

}
obtenerPerdedores(){
  let losers:Jugador[]=[];
  let listado = this.obtenerJugadores();
  for(let jugador of listado){
    if(jugador.gano!=true)
    losers.push(jugador);
  }

  return losers;  

}

altaJugador(jugadorNuevo:Jugador){
  let listado = this.obtenerJugadores();
  let ultimoJugador = listado[listado.length - 1];
  let ultimoId = ultimoJugador.id;
  jugadorNuevo.id=ultimoId+1;
  listado.push(jugadorNuevo);
  localStorage.setItem('jugadores',JSON.stringify(listado));

}


activarJugador(jugadorActivo:Jugador){
  this.jugadorActivo=jugadorActivo;
  localStorage.setItem('jugadorActivo',JSON.stringify(jugadorActivo));
}

obtenerJugadorActivo(){
  if(localStorage.getItem('jugadorActivo') === null)
  return null
  else
  return JSON.parse(localStorage.getItem('jugadorActivo'));
}

limpiarJugadorActivo(){
  this.jugadorActivo=null;
  localStorage.removeItem('jugadorActivo');
}

logueado(){
  if(this.jugadorActivo==null)
  return false;
  else
  return true;
}




  // traertodos(ruta : string,filtro: string) 
  // {
  //   return this.miHttp.traerJugadores(ruta).then(data=>{
  //     console.info("jugadores service",data);

  //     this.filtrado=data;

  //    let  ganador: boolean;
  //     if(filtro=="ganadores")
  //     {
  //       ganador= true;
  //     }
  //     else
  //     {
  //       ganador= false;
  //     }

  //     this.filtrado =this.filtrado.filter(
  //       data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
  //     )
  //     .catch(errror=>{console.log("error")
      


  //   return this.filtrado;
      

  //   });
  // }

}
