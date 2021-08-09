import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

  doctor: Doctor;
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchDoctor(id);
    });
  }
  
  fetchDoctor(id:string){
    this.doctorService.getDoctor(id).subscribe(doctor => {
      this.doctor = doctor; 
    });
  }

  getImage(image:string){
    let result:string = "";
    if(image){
      result = "data:image/png;base64,"+image;
    }
    return result;
  }
}
