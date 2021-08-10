import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaPacienteComponent } from './components/nueva-paciente/nueva-paciente.component';
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
  },
  {
    path: 'nueva/paciente',
    component: NuevaPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
