import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasComponent } from '../consulta/components/consultas/consultas.component';
import { DoctorsComponent } from '../doctor/components/doctors/doctors.component';
import { PacientesComponent } from '../paciente/components/pacientes/pacientes.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:[
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path:'pacientes',
        component: PacientesComponent
      },
      {
        path:'doctores',
        component: DoctorsComponent
      },
      {
        path:'consultas',
        component: ConsultasComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
