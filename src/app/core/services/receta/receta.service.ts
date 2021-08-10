import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Receta } from '../../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http:HttpClient) { }

  getAllRecetas() {
    return this.http.get<Receta[]>( environment.url_api + '/prescription/all');
  }


  getAllRecetasConsulta(id: number) {
    return this.http.get<Receta[]>( environment.url_api + '/prescription/consultation/'+id);
  }


  getReceta(id: string) {
    return this.http.get<Receta>( environment.url_api + '/prescription/'+id);
  }
}