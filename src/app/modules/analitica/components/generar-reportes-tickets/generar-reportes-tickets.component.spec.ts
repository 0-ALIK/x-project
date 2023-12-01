import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarReportesTicketsComponent } from './generar-reportes-tickets.component';

describe('GenerarReportesTicketsComponent', () => {
  let component: GenerarReportesTicketsComponent;
  let fixture: ComponentFixture<GenerarReportesTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarReportesTicketsComponent]
    });
    fixture = TestBed.createComponent(GenerarReportesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
