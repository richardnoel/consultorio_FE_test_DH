import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/core/models/doctor.model';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.fetchDoctor();
  }

  clickDoctor(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchDoctor() {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
      console.log(this.doctors);
    });
  }
}
