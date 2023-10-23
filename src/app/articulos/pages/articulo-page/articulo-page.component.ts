import {Component, OnInit} from '@angular/core';
import {ArticuloService} from "../../services/articulo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {delay, switchMap} from "rxjs";
import {Articulo} from "../../interfaces/articulo";

@Component({
  selector: 'app-articulo-page',
  templateUrl: './articulo-page.component.html',
  styleUrls: ['./articulo-page.component.css']
})
export class ArticuloPageComponent implements OnInit{
public articulo?: Articulo;
  constructor(private articuloService: ArticuloService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
      switchMap(({id}) => this.articuloService.getArticuloById(id)),
    ).subscribe(articulo => {
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
