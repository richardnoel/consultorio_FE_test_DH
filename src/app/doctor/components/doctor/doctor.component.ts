import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Doctor } from 'src/app/core/models/doctor.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() doctor: Doctor;
  @Output() doctorClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  nuevaConsulta() {
    this.doctorClicked.emit(this.doctor.doctorId);
  }

  getImage(image:string){
    let result:string = "";
    if(image){
      result = "data:image/png;base64,"+image;
    }
    return result;
  }
}
