import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { DogBreedClassifierComponent } from './dog-breed-classifier/dog-breed-classifier.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DogBreedClassifierComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule
  ]
})
export class ProjectModule { }
