import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [

    // path 'principal' component PagesComponent

    {
        path: 'dashboard',
        component: PagesComponent,
        // Rutas hijas de la pagina principal
        children: [
          {path: '', component: DashboardComponent},
          {path: 'progress', component: ProgressComponent},
          {path: 'grafica1', component: Grafica1Component},
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
