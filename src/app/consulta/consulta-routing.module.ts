import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaDetailComponent } from './components/consulta-detail/consulta-detail.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { NuevaConsultaComponent } from './components/nueva-consulta/nueva-consulta.component';


const routes: Routes = [
  {
    path: '',
    component: ConsultasComponent
  },
  {
    path: ':id',
    component: ConsultaDetailComponent
  },
  {
    path: 'nueva/consulta',
    component: NuevaConsultaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
