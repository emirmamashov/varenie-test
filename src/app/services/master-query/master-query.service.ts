// core
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable, of, timer } from 'rxjs';
import { catchError, retry, map, debounce } from 'rxjs/operators';

// config
import { Methods } from '../../config';

// services
import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class MasterQueryService {

  constructor(
    private http: HttpClient,
    private handleService: HandleErrorService
  ) {

  }

  query(url: string, method: string, data: any, auth: boolean) {
    if (!method || !url) {
      return this.handleService.returnError('dates not valid');
    }

    switch(method) {
      case Methods.post:
        return this.post(url, data);
      case Methods.put:
        return this.put(url, data);
      case Methods.get:
        return this.get(url);
      case Methods.delete:
        return this.delete(url, data);
    }
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    )
  }

  put(url: string, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(url, data, httpOptions)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    );
  }

  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url, httpOptions)
    .pipe(
      debounce(() => timer(1000)),
      catchError(this.handleService.handleErrorNew)
    );
  }

  delete(url: string, id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'id': id
      })
    };

    return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    );
  }
}
