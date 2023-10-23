import { Pipe, PipeTransform } from '@angular/core';
import {Articulo} from "../interfaces/articulo";

@Pipe({
  name: 'articuloImagePipe'
})
export class ArticuloImagePipePipe implements PipeTransform {

  transform(articulo: Articulo): String {
    if( !articulo.id && !articulo.alt_img){
      return 'assets/no-image.png'
    }
    if(articulo.alt_img) return articulo.alt_img;
    return `assets/articulos/${articulo.id}.jpeg`;
  }
}
