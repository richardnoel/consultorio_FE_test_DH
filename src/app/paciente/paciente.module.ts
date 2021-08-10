import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteDetailComponent } from './components/paciente-detail/paciente-detail.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PacienteRoutingModule } from './paciente-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NuevaPacienteComponent } from './components/nueva-paciente/nueva-paciente.component';


@NgModule({
  declarations: [PacienteComponent, PacienteDetailComponent, PacientesComponent, NuevaPacienteComponent],
  imports: [
    CommonModule,
    SharedModule,
    PacienteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PacienteModule { }
