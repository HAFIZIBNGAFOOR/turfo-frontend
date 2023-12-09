import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TurfAdminService } from '../../../turf-admin/turf-admin-service/turf-admin.service';
import {Constants} from '../../../config/constants';
import * as alertify from 'alertifyjs'


@Injectable()
export class TurfAdminInterceptor implements HttpInterceptor {

  constructor(private turfAdminService:TurfAdminService ,private turfAdminUrl:Constants) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.startsWith(this.turfAdminUrl.TurfOwnerAPIEndPoint)){
      const token = this.turfAdminService.getToken();
      if(token){
        let clonedReq = request.clone({
          setHeaders:{
            Authorization:`Bearer ${token}`
          }
        })
        return next.handle(clonedReq).pipe(
          tap({
            next:(event)=>{
              if(event instanceof HttpResponse){}
            },
            error:(error:HttpErrorResponse)=>{
              if(error.status ==500 || error.status ==404){
                alertify.error(`Something went wrong!
                Please try again  ${error.status}`)
              }
            }
          },
          
          )
        );
      }
      return next.handle(request);
    }
    return next.handle(request);
  }
}
