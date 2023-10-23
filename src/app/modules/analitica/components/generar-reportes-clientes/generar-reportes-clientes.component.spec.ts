import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarReportesClientesComponent } from './generar-reportes-clientes.component';

describe('GenerarReportesClientesComponent', () => {
  let component: GenerarReportesClientesComponent;
  let fixture: ComponentFixture<GenerarReportesClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarReportesClientesComponent]
    });
    fixture = TestBed.createComponent(GenerarReportesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
