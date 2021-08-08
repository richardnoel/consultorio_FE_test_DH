import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteDetailComponent } from './components/paciente-detail/paciente-detail.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';


const routes: Routes = [
  {
    path: '',
    component: PacientesComponent
  },
  {
    path: ':id',
    component: PacienteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
