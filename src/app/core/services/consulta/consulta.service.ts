import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from '../../models/consulta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }

  getAllConsultas() {
    return this.http.get<Consulta[]>( environment.url_api + '/consultation/all');
  }

  getConsulta(id: string) {
    return this.http.get<Consulta>( environment.url_api + '/consultation/'+id);
  }

  getConsultaPaciente(id: string) {
    return this.http.get<Consulta[]>( environment.url_api + '/consultation/patient/'+id);
  }

  getConsultasDoctor(id: string) {
    return this.http.get<Consulta[]>( environment.url_api + '/consultation/doctor/'+id);
  }

}