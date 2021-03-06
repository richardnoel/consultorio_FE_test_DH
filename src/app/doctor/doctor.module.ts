import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorDetailComponent } from './components/doctor-detail/doctor-detail.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DoctorComponent, DoctorDetailComponent, DoctorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule,
    MaterialModule
  ]
})
export class DoctorModule { }
