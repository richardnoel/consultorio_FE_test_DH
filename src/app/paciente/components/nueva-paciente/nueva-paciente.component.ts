import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/core/models/doctor.model';
import { Paciente } from 'src/app/core/models/paciente.model';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-nueva-consulta',
  templateUrl: './nueva-paciente.component.html',
  styleUrls: ['./nueva-paciente.component.scss']
})
export class NuevaPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router

  ) {

    this.buildForm();
  }

  savePaciente(event: Event) {
    event.preventDefault();
    if (this.pacienteForm.valid) {
      const paciente = this.pacienteForm.value;
      this.pacienteService.createPaciente(paciente)
        .subscribe((nuevoPaciente) => {
          console.log(nuevoPaciente);
          this.router.navigate(['./pacientes']);
        });
    }
  }

  private buildForm() {
    this.pacienteForm = this.formBuilder.group({
      documentNumber: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      photo: ['', []],
      email: ['', [Validators.email]],
      cellNumber: ['', [Validators.required]],
      phoneNumber: ['', []],
      address: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}


// Validators.minLength(4),
// Validators.maxLength(20),
// Validators.required