import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogBreedClassifierComponent } from './dog-breed-classifier/dog-breed-classifier.component';

const routes: Routes = [
  {
    path: 'dog-breed-classifier',
    component: DogBreedClassifierComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
