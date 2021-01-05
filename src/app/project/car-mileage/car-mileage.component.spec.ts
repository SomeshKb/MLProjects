import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMileageComponent } from './car-mileage.component';

describe('CarMileageComponent', () => {
  let component: CarMileageComponent;
  let fixture: ComponentFixture<CarMileageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMileageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMileageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
