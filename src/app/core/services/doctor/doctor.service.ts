import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../../models/doctor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getAllDoctors() {
    return this.http.get<Doctor[]>( environment.url_api + '/doctor/all');
  }

  getDoctor(id: string) {
    return this.http.get<Doctor>( environment.url_api + '/doctor/'+id);
  }
}
