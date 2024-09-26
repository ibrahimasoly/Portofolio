import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEcomComponent } from './back-ecom.component';

describe('BackEcomComponent', () => {
  let component: BackEcomComponent;
  let fixture: ComponentFixture<BackEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackEcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
