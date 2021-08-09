import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/core/models/consulta.model';
import { ConsultaService } from 'src/app/core/services/consulta/consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  displayedColumns:string[] = ['consultationId', 'date', 'paciente', 'doctor'];
  consultaList: Consulta[] = [];
  searchValue = '';
  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.fetchConsultas();  
  }

  fetchConsultas(){
    this.consultaService.getAllConsultas().subscribe(consultas => {
      this.consultaList = consultas;
    });
  }
  searchByDoctor(){

  }

  getImage(image:string){
    let result:string = "assets/images/no-image.png";
    if(image){
      result = "data:image/png;base64,"+image;
    }
    return result;
  }

}