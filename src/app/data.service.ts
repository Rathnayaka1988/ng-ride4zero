import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Total, Journey } from './models';

const URL = 'https://java-ride4zero.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTotals(): Observable<Total> {
    return this.http.get<Total>(URL + "/totals");
  }

  getJourneys(): Observable<Journey[]> {
    return this.http.get<Journey[]>(URL + "/journeys");
  }
}
