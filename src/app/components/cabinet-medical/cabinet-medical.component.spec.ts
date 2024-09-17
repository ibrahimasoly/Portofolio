import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetMedicalComponent } from './cabinet-medical.component';

describe('CabinetMedicalComponent', () => {
  let component: CabinetMedicalComponent;
  let fixture: ComponentFixture<CabinetMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
