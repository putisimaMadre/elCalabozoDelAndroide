import {Component, OnInit} from '@angular/core';
import {ArticuloService} from "../../services/articulo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {Articulo} from "../../interfaces/articulo";

@Component({
  selector: 'app-articulo-page',
  templateUrl: './articulo-page.component.html',
  styleUrls: ['./articulo-page.component.css']
})
export class ArticuloPageComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
public articulo?: Articulo;
  constructor(private articuloService: ArticuloService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  /*crear una tabla con los siguientes campos
  id        1
  nombre    teclado-gamer
  img1      teclado-gamer-1.jpeg
  img2      teclado-gamer-2.jpeg
  img3      teclado-gamer-3.jpeg

  en el back hay que hacer un query donde hay que poner algo asi
  select * from articulos where nombre = "teclado-gamer" para que nos de solamente
  las imagenes del articulo deseado
  */
  ngOnInit(): void {




    this.activatedRoute.params
      .pipe(
      switchMap(({nombre}) => this.articuloService.getArticuloById(nombre)),
    ).subscribe(articulo => {
    console.log(articulo?.nombre)
      /*=====================================*/
    this.slides[0] = {
      id: 0,
      src: './assets/articulos/'+articulo?.img1+'.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/articulos/'+articulo?.img2+'.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[2] = {
      id: 2,
      src: './assets/articulos/'+articulo?.img3+'.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
      /*============================ */
      if (!articulo ) return this.router.navigate(['/articulos/list']);
      this.articulo = articulo;
      console.log(articulo)
      return;
    })
  }
  goBack(): void{
    this.router.navigateByUrl('articulos/list')
  }

}
