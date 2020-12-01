import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Módulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


/* ====== IMPORTACIÓN DE LOS COMPONENTES  ====== */
import { NopagefoundComponent } from './nopagefound/nopagefound.component';





const routes: Routes = [

  
  // Path 'nopagefound'
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
