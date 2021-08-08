import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetaDetailComponent } from './components/receta-detail/receta-detail.component';
import { RecetasComponent } from './components/recetas/recetas.component';


const routes: Routes = [
  {
    path:'',
    component: RecetasComponent
  },
  {
    path:':id',
    component: RecetaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetaRoutingModule { }
