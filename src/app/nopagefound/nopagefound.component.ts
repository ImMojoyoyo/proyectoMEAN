import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent{

  // Recoge el año exacto en el que estamos realizando el proyecto
  year = new Date().getFullYear();

}
