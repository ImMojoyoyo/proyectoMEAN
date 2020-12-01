import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulo de Rutas
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Componentes
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    // Pages
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports:[
    // Pages
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
