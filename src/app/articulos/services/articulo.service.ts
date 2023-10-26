import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Articulo} from "../interfaces/articulo";
import {enviroments} from "../../../enviroments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private baseUrl = enviroments.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getArticulo(): Observable<Articulo[]>{
    return this.httpClient.get<Articulo[]>(`${ this.baseUrl }/articulos`)
  }

  getArticuloById(nombre: string): Observable<Articulo | undefined>{
    return this.httpClient.get<Articulo>(`${ this.baseUrl }/articulos/${ nombre }`)
      .pipe(
        catchError(error => of(undefined))
      )
  }
}
