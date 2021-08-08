import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './components/historial/historial.component';
import { HistorialDetailComponent } from './components/historial-detail/historial-detail.component';
import { HistorialsComponent } from './components/historials/historials.component';


@NgModule({
  declarations: [HistorialComponent, HistorialDetailComponent, HistorialsComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule
  ]
})
export class HistorialModule { }
