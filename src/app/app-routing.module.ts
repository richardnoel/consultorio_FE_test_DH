import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },

      
      
      {
        path: 'doctores',
        canActivate: [AdminGuard],
        loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: 'pacientes',
        canActivate: [AdminGuard],
        loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)
      },
      {
        path: 'historiales',
        canActivate: [AdminGuard],
        loadChildren: () => import('./historial/historial.module').then(m => m.HistorialModule)
      },
      {
        path: 'consultas',
        canActivate: [AdminGuard],
        loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule)
      },
      {
        path: 'recetas',
        canActivate: [AdminGuard],
        loadChildren: () => import('./receta/receta.module').then(m => m.RecetaModule)
      }
      

    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }, {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
