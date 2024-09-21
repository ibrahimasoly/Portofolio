import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogementComponent } from './my-logement.component';

describe('MyLogementComponent', () => {
  let component: MyLogementComponent;
  let fixture: ComponentFixture<MyLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLogementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
