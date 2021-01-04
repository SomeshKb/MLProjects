import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private loaderService:LoaderService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    this.loaderService.show();
  return next.handle(req).pipe(
    tap( (resp: any) => {
        return resp;
    },
    error => {
       
    }),
    finalize(() => {
        this.loaderService.hide();
    }));

}
}
