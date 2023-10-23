import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticuloPageComponent } from './pages/articulo-page/articulo-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import {MaterialModule} from "../material/material.module";
import { CardComponent } from './components/card/card.component';
import { ArticuloImagePipePipe } from './pipes/articulo-image-pipe.pipe';


@NgModule({
  declarations: [
    ArticuloPageComponent,
    SearchPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    CardComponent,
    ArticuloImagePipePipe
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    MaterialModule
  ]
})
export class ArticulosModule { }
