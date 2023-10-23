import {Component, Input, OnInit} from '@angular/core';
import {Articulo} from "../../interfaces/articulo";

@Component({
  selector: 'app-card-articulos',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
@Input()
  public articulo!: Articulo;

  ngOnInit(): void {
  }


}
