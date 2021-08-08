import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDetailComponent } from './consulta-detail.component';

describe('ConsultaDetailComponent', () => {
  let component: ConsultaDetailComponent;
  let fixture: ComponentFixture<ConsultaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
