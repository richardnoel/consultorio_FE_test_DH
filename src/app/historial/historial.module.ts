import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './components/historial/historial.component';
import { HistorialDetailComponent } from './components/historial-detail/historial-detail.component';
import { HistorialsComponent } from './components/historials/historials.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HistorialComponent, HistorialDetailComponent, HistorialsComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HistorialModule { }
