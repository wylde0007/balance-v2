import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROTAS: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'analise-de-balanco', loadChildren: () => import('./pages/analise-de-balancos/home/home.module').then(m => m.HomeMainModule), },
  { path: 'analise-financeira-de-projeto', loadChildren: () => import('./pages/analise-de-projetos/analise-de-projetos.module').then(m => m.AnaliseDeProjetosModule), },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
