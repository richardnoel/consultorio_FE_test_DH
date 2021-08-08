import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteDetailComponent } from './components/paciente-detail/paciente-detail.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';


@NgModule({
  declarations: [PacienteComponent, PacienteDetailComponent, PacientesComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
