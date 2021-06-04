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
    { value: 1, label: 'USA' },
    { value: 2, label: 'Germany' },
    { value: 3, label: 'Japan' },
  ];

  years = [
    { value: 70, label: 1970 },
    { value: 71, label: 1971 },
    { value: 72, label: 1972 },
    { value: 73, label: 1973 },
    { value: 74, label: 1974 },
    { value: 75, label: 1975 },
    { value: 76, label: 1976 },
    { value: 77, label: 1977 },
    { value: 78, label: 1978 },
    { value: 79, label: 1979 },
    { value: 80, label: 1980 },
    { value: 81, label: 1981 },
    { value: 82, label: 1982 },
  ];

  cylinders = [3, 4, 5, 6, 8];
  
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
      Displacement: ['', [Validators.required,,Validators.min(0.1)]],
      Horsepower: ['', [Validators.required,Validators.min(0.1)]],
      Weight: ['', [Validators.required,Validators.min(0.1)]],
      Acceleration: ['', [Validators.required,Validators.min(0.1)]],
      Model_Year: ['', [Validators.required]],
      Origin: ['', [Validators.required]],
    });
  }

  checkModelHealth() {
    const endpoint = 'https://blooming-stream-22306.herokuapp.com/health';
    this.httpService.pingModel(endpoint).subscribe((res) => {});
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

      this.httpService.postData(endPoint, payloadBody).subscribe((res) => {
        console.log();
      });
    }
  }
}
