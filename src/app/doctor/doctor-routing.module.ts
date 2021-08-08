import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDetailComponent } from './components/doctor-detail/doctor-detail.component';
import { DoctorsComponent } from './components/doctors/doctors.component';


const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent
  },
  {
    path: ':id',
    component: DoctorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
