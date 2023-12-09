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
import { AdminService } from '../../../admin/admin-service/admin-service.service';
import { Constants } from '../../../config/constants';
import * as alertify from 'alertifyjs'


@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor(private adminService:AdminService, private adminUrl:Constants) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.startsWith(this.adminUrl.AdminAPIEndPoint)){
      const token = this.adminService.getAdminToken();
      if(token){
        let clonedReq =  request.clone({
          setHeaders:{
            Authorization:`Bearer ${token}`
          }
        })
        return next.handle(clonedReq).pipe(
          tap({
            next:(event)=>{
              if(event instanceof HttpResponse){
                
              }
            },
            error:(error:HttpErrorResponse)=>{
              if(error.status==500 || error.status==404){
                alertify.error(`Something went wrong!
                  Please try again  ${error.status}`)
              }
            }
          
        })
        )
      }
    }
    return next.handle(request);
  }
}
