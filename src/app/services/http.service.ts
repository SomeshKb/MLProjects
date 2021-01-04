import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'https://dog-breed-classifeir-flask.herokuapp.com/';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.httpClient.post(endpoint, formData)
}
}