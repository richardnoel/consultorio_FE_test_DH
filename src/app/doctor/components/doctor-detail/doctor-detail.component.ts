import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Consulta } from 'src/app/core/models/consulta.model';
import { Doctor } from 'src/app/core/models/doctor.model';
import { ConsultaService } from 'src/app/core/services/consulta/consulta.service';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {
  doctor: Doctor;
  consultaList: Consulta[] = [];
  displayedColumns:string[] = ['consultationId', 'date', 'patient', 'prescription'];
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchDoctor(id);
      this.fetchAllPacientes(id);
    });
  }
  
  fetchDoctor(id:string){
    this.doctorService.getDoctor(id).subscribe(doctor => {
      this.doctor = doctor; 
    });
  }

  fetchAllPacientes(id:string){
    this.consultaService.getConsultasDoctor(id).subscribe(consultas =>{
      this.consultaList = consultas;
    });
  }

  getImage(image:string){
    let result:string = "assets/images/no-image.png";
    if(image){
      result = "data:image/png;base64,"+image;
    }
    return result;
  }
}
