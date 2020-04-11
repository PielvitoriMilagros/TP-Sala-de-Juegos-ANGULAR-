import { log } from 'util';
import { Injectable } from '@angular/core';

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs-compat/operator/map';

@Injectable()
export class MiHttpService {

  constructor( public http: HttpClient ) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get<Response>( url )
      .pipe(catchError( ( err: any ) => observableThrowError(err.json().error || 'Server error')));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
