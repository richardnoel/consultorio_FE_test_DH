import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialDetailComponent } from './components/historial-detail/historial-detail.component';
import { HistorialsComponent } from './components/historials/historials.component';


const routes: Routes = [
  {
    path:'',
    component: HistorialsComponent, 
  },
  {
    path: ':id',
    component: HistorialDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
