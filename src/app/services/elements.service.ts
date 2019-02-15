import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http: HttpClient) {}

  public getCations() {
    return this.http.get('http://localhost:4000/cations');

  }

  public getAnions() {
    return this.http.get('http://localhost:4000/anions');
  }

  // This is to grab data that is in a test format so that we can verify different setups.
  public getSolubilityTest() {
    return this.http.get('http://localhost:4000/solubility1');
  }

  public getSolubility() {
    return this.http.get('http://localhost:4000/solubility');
  }
}
