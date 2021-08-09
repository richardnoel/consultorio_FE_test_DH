import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/core/models/paciente.model';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  displayedColumns:string[] = ['documentNumber', 'firstName', 'lastName', 'cellNumber', 'actions'];
  pacientes: Paciente[] = [];

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.fetchPaciente();
  }

  clickPaciente(id:number){

  }

  fetchPaciente(){
    this.pacienteService.getAllPacientes().subscribe(pacientes =>{
      this.pacientes = pacientes;
      console.log(this.pacientes);
    });
  }

}
