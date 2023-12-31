import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ArticuloPageComponent} from "./pages/articulo-page/articulo-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {NewPageComponent} from "./pages/new-page/new-page.component";
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      {path: 'new', component: NewPageComponent},
      {path: 'search', component: SearchPageComponent},
      {path: 'edit/:nombre', component: NewPageComponent},
      {path: 'list', component: ListPageComponent},
      {path: ':nombre', component: ArticuloPageComponent},
      {path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
