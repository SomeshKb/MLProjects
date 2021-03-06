import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dog-breed-classifier',
  templateUrl: './dog-breed-classifier.component.html',
  styleUrls: ['./dog-breed-classifier.component.scss'],
})
export class DogBreedClassifierComponent implements OnInit {

  breedName = null;
  url: any = 'assets/images/select-image.png';

  constructor(private httpService: HttpService) {
    this.pingModel();
  }

  ngOnInit(): void {}
  
  pingModel(){
    const endpoint = 'https://dog-breed-classifeir-flask.herokuapp.com/health';
    this.httpService.pingModel(endpoint).subscribe(res=>{
    });
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.getPrediction(event.target.files[0]);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  getPrediction(file) {
    this.httpService.postFile(file).subscribe((res) => {
      this.breedName = res.class_name;
    });
  }
}
