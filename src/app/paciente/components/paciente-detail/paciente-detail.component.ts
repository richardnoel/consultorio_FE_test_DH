import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Consulta } from 'src/app/core/models/consulta.model.js';
import { Historial } from 'src/app/core/models/historial.model';
import { Paciente } from 'src/app/core/models/paciente.model';
import { ConsultaService } from 'src/app/core/services/consulta/consulta.service.js';
import { HistorialService } from 'src/app/core/services/historial/historial.service';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';
import { RecetaService } from 'src/app/core/services/receta/receta.service.js';

import * as Quill from '../../../../assets/richtext/quill.js';


@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.scss']
})
export class PacienteDetailComponent implements OnInit {

  historialList: Historial[] = [];
  historial: Historial;
  paciente: Paciente;
  consultaList: Consulta[] = [];
  displayedColumns:string[] = ['consultationId', 'date', 'doctor', 'prescription'];
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    private historialService: HistorialService,
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchHistorial(id);
      this.fetchConsultas(id);
    });
  }

  
  fetchHistorial(id: string) {
    this.historialService.getHistorialPaciente(id).subscribe(historial => {
      this.historialList = historial;
      if (this.historialList && this.historialList.length) {
        this.historial = this.historialList[0];
        let description: string = this.historial.history;
        setTimeout(function () {
          let editorEl = document.getElementById('editor');
          editorEl.innerHTML = description;
          var quill = new Quill('#editor', {
            placeholder: 'Compose an epic...',
            readOnly: true,
            theme: 'snow'
          });
          //quill.setText(description);
        }, 1000);
      }
    });
  }

  fetchConsultas(id:string){
    this.consultaService.getConsultaPaciente(id).subscribe(consultas=>{
      this.consultaList = consultas;
      console.log(consultas);
    });
  }

  getPrescripcion(consultationId:string):any{
    this.recetaService.getAllRecetasConsulta(Number(consultationId)).subscribe(recetas=>{
      console.log(recetas);
    });
  }

  getImage(image: string) {
    let result: string = "";
    if (image) {
      result = "data:image/png;base64," + image;
    }
    return result;
  }

}
