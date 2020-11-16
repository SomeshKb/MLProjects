import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { DogBreedClassifierComponent } from './dog-breed-classifier/dog-breed-classifier.component';


@NgModule({
  declarations: [DogBreedClassifierComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
