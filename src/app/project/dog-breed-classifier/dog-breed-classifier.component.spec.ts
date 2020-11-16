import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedClassifierComponent } from './dog-breed-classifier.component';

describe('DogBreedClassifierComponent', () => {
  let component: DogBreedClassifierComponent;
  let fixture: ComponentFixture<DogBreedClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogBreedClassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBreedClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
