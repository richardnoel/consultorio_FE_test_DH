import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/core/models/paciente.model';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  displayedColumns:string[] = ['idPaciente','documentNumber', 'firstName', 'lastName', 'cellNumber', 'actions'];
  pacientes: Paciente[] = [];
  searchValue = '';
  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.fetchPaciente();
  }

  clickPaciente(id:number){
    
  }

  searchName(){
    if(this.searchValue){
      this.pacienteService.getPacientByName(this.searchValue).subscribe(pacientes =>{
        this.pacientes = pacientes;
        console.log(this.pacientes);
      });
    }else if(this.searchValue == ''){
      this.fetchPaciente();
    }
  }

  fetchPaciente(){
    this.pacienteService.getAllPacientes().subscribe(pacientes =>{
      this.pacientes = pacientes;
      console.log(this.pacientes);
    });
  }

}
