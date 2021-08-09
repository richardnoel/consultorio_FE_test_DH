import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../../models/paciente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http:HttpClient) { }

  getAllPacientes() {
    return this.http.get<Paciente[]>( environment.url_api + '/patients/all');
  }

  getPaciente(id: string) {
    return this.http.get<Paciente>( environment.url_api + '/patients/'+id);
  }

  getPacientByName(name:string){
    return this.http.get<Paciente[]>( environment.url_api + '/patients/name/'+ name);
  }
}