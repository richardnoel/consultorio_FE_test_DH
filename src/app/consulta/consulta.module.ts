import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ConsultaDetailComponent } from './components/consulta-detail/consulta-detail.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConsultaComponent, ConsultaDetailComponent, ConsultasComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsultaModule { }
