import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Historial } from 'src/app/core/models/historial.model';
import { Paciente } from 'src/app/core/models/paciente.model';
import { HistorialService } from 'src/app/core/services/historial/historial.service';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

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
  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private historialService: HistorialService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchHistorial(id);
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

  getImage(image: string) {
    let result: string = "";
    if (image) {
      result = "data:image/png;base64," + image;
    }
    return result;
  }

}
