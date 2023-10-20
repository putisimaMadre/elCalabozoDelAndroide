import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticuloPageComponent } from './pages/articulo-page/articulo-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';


@NgModule({
  declarations: [
    ArticuloPageComponent,
    SearchPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }
