import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarMileageComponent } from './car-mileage/car-mileage.component';
import { DogBreedClassifierComponent } from './dog-breed-classifier/dog-breed-classifier.component';

const routes: Routes = [
  {
    path: 'dog-breed-classifier',
    component: DogBreedClassifierComponent,
  },
  {
    path: 'car',
    component: CarMileageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
