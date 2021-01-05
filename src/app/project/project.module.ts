import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { DogBreedClassifierComponent } from './dog-breed-classifier/dog-breed-classifier.component';
import { MaterialModule } from '../material/material.module';
import { CarMileageComponent } from './car-mileage/car-mileage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DogBreedClassifierComponent, CarMileageComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
