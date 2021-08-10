import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Doctor } from 'src/app/core/models/doctor.model';
import { Paciente } from 'src/app/core/models/paciente.model';
import { ConsultaService } from 'src/app/core/services/consulta/consulta.service';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-nueva-consulta',
  templateUrl: './nueva-consulta.component.html',
  styleUrls: ['./nueva-consulta.component.scss']
})
export class NuevaConsultaComponent implements OnInit {
  selectedDoctor = 'option2';
  consultaForm: FormGroup;
  paciente: Paciente;
  doctorList: Doctor[] = [];
  doctors: any = [];


  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private consultaService: ConsultaService,
    private doctorSercice: DoctorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchPaciente(id);
      this.fetchDoctores();
      this.consultaForm.patchValue({
        patientId: id
      })

    });

  }

  private fetchPaciente(id: string) {
    this.pacienteService.getPaciente(id).subscribe(paciente => {
      this.paciente = paciente;
    });
  }

  private fetchDoctores() {
    let _doctorList = [];
    this.doctorSercice.getAllDoctors().subscribe(doctorList => {
      doctorList.forEach(doctor => {
        let description = doctor.firstName + " " + doctor.lastName + "(" + doctor.speciality + ")";
        _doctorList.push({
          doctorId: doctor.doctorId,
          description: description
        });
      });
      this.doctors = _doctorList;
    });

  }


  private buildForm() {
    this.consultaForm = this.formBuilder.group({
      doctorId: ['', [Validators.required]],
      patientId: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }


  saveConsulta() {
    let requestData: any;
    event.preventDefault();
    requestData = this.consultaForm.value;
    if (this.selectedDoctor && requestData.date) {
      requestData.doctorId = this.selectedDoctor;
      this.consultaService.createConsulta(requestData)
        .subscribe((nuevaConsulta) => {
          alert("Consulta creada de manera correcta ")
          this.router.navigate(['./pacientes']);
        });
    }
  }

}
