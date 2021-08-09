import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/core/models/paciente.model';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  displayedColumns:string[] = ['idPaciente','documentNumber', 'firstName', 'lastName', 'cellNumber', 'actions1','actions2'];
  pacientes: Paciente[] = [];
  paciente: Paciente;
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

  removePaciente( id:number){
    this.pacienteService.removePaciente(id).subscribe(response =>{
      if(response){
        this.fetchPaciente();
      }
    });
  }

  createPaciente(){
    const paciente: Paciente = {
        "patientId": null,
        "documentNumber": 6543212,
        "firstName": "JOSE",
        "lastName": "DURAN",
        "birthDate": "1995-11-05",
        "address": "Zona Copacabana",
        "photo": null,
        "email": "jose@correo.com",
        "cellNumber": "78654132",
        "phoneNumber": null    
    };

    this.pacienteService.createPaciente(paciente).subscribe(paciente =>{
      this.paciente = paciente;
      this.fetchPaciente();
    });
  }

}
