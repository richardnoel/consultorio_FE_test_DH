import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaRoutingModule } from './receta-routing.module';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetaDetailComponent } from './components/receta-detail/receta-detail.component';
import { RecetasComponent } from './components/recetas/recetas.component';


@NgModule({
  declarations: [RecetaComponent, RecetaDetailComponent, RecetasComponent],
  imports: [
    CommonModule,
    RecetaRoutingModule
  ]
})
export class RecetaModule { }
