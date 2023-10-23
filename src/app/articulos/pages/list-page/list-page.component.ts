import {Component, OnInit} from '@angular/core';
import {Articulo} from "../../interfaces/articulo";
import {ArticuloService} from "../../services/articulo.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{
public articulos: Articulo[] = []

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.articuloService.getArticulo().subscribe(articulo => this.articulos = articulo)
  }
}
