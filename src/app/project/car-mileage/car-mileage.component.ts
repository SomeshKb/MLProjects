import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-car-mileage',
  templateUrl: './car-mileage.component.html',
  styleUrls: ['./car-mileage.component.scss'],
})
export class CarMileageComponent implements OnInit {
  inputForm: FormGroup = null;

  originCountry = [
    { value: 1, label: 'India' },
    { value: 2, label: 'USA' },
    { value: 3, label: 'Germany' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.checkModelHealth();
    this.createForm();
  }

  createForm() {
    this.inputForm = this.formBuilder.group({
      Cylinders: ['', [Validators.required]],
      Displacement: ['', [Validators.required]],
      Horsepower: ['', [Validators.required]],
      Weight: ['', [Validators.required]],
      Acceleration: ['', [Validators.required]],
      Model_Year: ['', [Validators.required]],
      Origin: ['', [Validators.required]],
    });
  }

  checkModelHealth(){
    const endpoint = 'https://blooming-stream-22306.herokuapp.com/health';
    this.httpService.pingModel(endpoint).subscribe(res=>{
    });
  }

  submit() {
    if (this.inputForm.valid) {
      const payloadBody = this.inputForm.value;
      payloadBody['Cylinders'] = [this.inputForm.value.Cylinders];
      payloadBody['Displacement'] = [this.inputForm.value.Displacement];
      payloadBody['Horsepower'] = [this.inputForm.value.Horsepower];
      payloadBody['Weight'] = [this.inputForm.value.Weight];
      payloadBody['Acceleration'] = [this.inputForm.value.Acceleration];
      payloadBody['Model Year'] = [this.inputForm.value.Model_Year];
      payloadBody['Origin'] = [this.inputForm.value.Origin];
      console.log(payloadBody);
      const endPoint = 'https://blooming-stream-22306.herokuapp.com/predict';

      this.httpService.postData(endPoint, [payloadBody]).subscribe((res) => {
        console.log();
      });
    }
  }
}
