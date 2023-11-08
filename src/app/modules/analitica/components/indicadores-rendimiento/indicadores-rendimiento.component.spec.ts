import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresRendimientoComponent } from './indicadores-rendimiento.component';

describe('IndicadoresRendimientoComponent', () => {
  let component: IndicadoresRendimientoComponent;
  let fixture: ComponentFixture<IndicadoresRendimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicadoresRendimientoComponent]
    });
    fixture = TestBed.createComponent(IndicadoresRendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
