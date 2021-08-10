import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaConsultaComponent } from './components/nueva-consulta/nueva-consulta.component';
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
  },
  {
    path: 'nueva/consulta/:id',
    component: NuevaConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
