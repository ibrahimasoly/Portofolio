import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbeComponent } from './ibe.component';

describe('IbeComponent', () => {
  let component: IbeComponent;
  let fixture: ComponentFixture<IbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
