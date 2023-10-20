import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'articulos',
    loadChildren: () => import('./articulos/articulos.module').then(m => m.ArticulosModule)
  },
  {
    path: '',
    redirectTo: 'articulos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'articulos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
