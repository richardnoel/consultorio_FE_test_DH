import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../../models/historial.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http:HttpClient) { }

  getAllHistorials() {
    return this.http.get<Historial[]>( environment.url_api + '/history/all');
  }

  getHistorial(id: string) {
    return this.http.get<Historial>( environment.url_api + '/history/'+id);
  }
}