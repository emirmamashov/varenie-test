// core
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// rxjs
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  handleErrorNew(error: HttpErrorResponse) {
    console.log('handleErrorNew:', error);
    let errors = error.error;
    if (errors instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', errors.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${errors}`
      );

      let errorMsg = '';
      if (!errors) return throwError(errors);

      let errKeys = Object.keys(errors);
      if (!errKeys || errKeys.length < 1) return throwError(errors);

      for (let i=0; i<errKeys.length; i++) {
        errorMsg += errKeys[i] + ' - ' + errors[errKeys[i]] + '\n';
      }
      console.log('errorMsg: ', errorMsg);
      return throwError({
        msg: errorMsg,
        code: error.status
      });
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  returnError(err: string): Observable<string> {
    return throwError(err);
  }
}
