import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReportesTicketsComponent } from './ver-reportes-tickets.component';

describe('VerReportesTicketsComponent', () => {
  let component: VerReportesTicketsComponent;
  let fixture: ComponentFixture<VerReportesTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReportesTicketsComponent]
    });
    fixture = TestBed.createComponent(VerReportesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
