import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Party } from '../models/party';

@Injectable({
  providedIn: 'root'
})
export class PartiesService {

  private jsonPath = 'assets/parties.json';
  constructor(private http: HttpClient) { }

  public getAllParties(): Observable<any> {
    return this.http.get(this.jsonPath);
  }
}
