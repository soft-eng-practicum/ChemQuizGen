import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-molarity',
  templateUrl: './molarity.component.html',
  styleUrls: ['./molarity.component.scss']
})
export class MolarityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private formGroup: FormGroup = new FormGroup({
    base: new FormControl(),
    baseVol: new FormControl(),
    baseMol: new FormControl(),
    acid: new FormControl(),
    acidVol: new FormControl(),
    acidMol: new FormControl()
  });

}
