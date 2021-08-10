import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPacienteComponent } from './nueva-paciente.component';

describe('NuevaPacienteComponent', () => {
  let component: NuevaPacienteComponent;
  let fixture: ComponentFixture<NuevaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
