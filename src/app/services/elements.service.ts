import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http: HttpClient) {}

  public getCations() {
  //  return this.http.get('http://localhost:4000/cations');
    return this.http.get('assets/UpdatedCationsTest.json');

  }

  public getAnions() {
    //return this.http.get('http://localhost:4000/anions');
    return this.http.get('assets/UpdatedAnionsTest.json');

  }

  // This is to grab data that is in a test format so that we can verify different setups.
  public getSolubilityTest() {
    //return this.http.get('http://localhost:4000/solubility1');
    return this.http.get('assets/SolubilityTest.json');
  }

  public getSolubility() {
    //return this.http.get('http://localhost:4000/solubility');
    return this.http.get('assets/SolubilityTest2.json');
  }
}
