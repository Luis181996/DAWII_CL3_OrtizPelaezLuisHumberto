import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';

export const routes: Routes = [
    {path:"Dashboard", component:DashboardComponent,children:[
        {
          path:"pregunta2",component:Pregunta2Component
        },
        {
          path:"pregunta3",component:Pregunta3Component 
        }
    ]},
    {path: "", redirectTo:"Dashboard", pathMatch:"full"}
];
