import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-breed-classifier',
  templateUrl: './dog-breed-classifier.component.html',
  styleUrls: ['./dog-breed-classifier.component.scss'],
})
export class DogBreedClassifierComponent implements OnInit {
  constructor() {}

  url: any = 'assets/images/select-image.png';
  ngOnInit(): void {}

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }
}
