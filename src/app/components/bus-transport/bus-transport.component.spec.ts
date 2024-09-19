import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTransportComponent } from './bus-transport.component';

describe('BusTransportComponent', () => {
  let component: BusTransportComponent;
  let fixture: ComponentFixture<BusTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusTransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
