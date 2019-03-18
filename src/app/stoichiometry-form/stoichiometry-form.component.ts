import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AnswerKey } from '../models/answer-key.model';
import { ElementsService } from '../services/elements.service';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-stoichiometry-form',
  templateUrl: './stoichiometry-form.component.html',
  styleUrls: ['./stoichiometry-form.component.scss']
})
export class StoichiometryFormComponent implements OnInit {

  // @Input needed so answer can be seen by both components
  @Input() private answer: AnswerKey;

  // Declares form group attached to form
  private formGroup: FormGroup = new FormGroup({
    cation1: new FormControl(),
    anion1: new FormControl(),
    grams1: new FormControl(),
    cation2: new FormControl(),
    anion2: new FormControl(),
    grams2: new FormControl()
  });

  private anions: any = [];
  private cations: any = [];
  private solubilityTest: any = [];

  constructor(private formBuilder: FormBuilder, private elements: ElementsService) {
    this.createForm();
   }

  ngOnInit() {
    // Tells the elements object to retrieve the anion data and save it to this.cations
    this.elements.getAnions().subscribe(anions => {
      this.anions = anions;
       console.log('anions loaded: ');
    });

    // Tells the elements object to retrieve the cation data and save it to this.cations
    this.elements.getCations().subscribe(cations => {
      this.cations = cations;
      console.log('cations loaded: ');
    });

    // Tells the elements object to retrieve the solubility test data and save it to this.solubilityTest
    this.elements.getSolubilityTest().subscribe(solubilityTest => {
      this.solubilityTest = solubilityTest;
    });
  }

  // Gets the form input and sets the answer key properties
  private setAnswerKey(): void {
    // Gets symbol, weight and charge of anion1
    this.answer.anion1 = this.formGroup.get('anion1').value;
    for (let i = 0; i < this.anions.length; i++) {
      if (this.answer.anion1 === this.anions[i].symbol) {
        this.answer.anion1Weight = this.anions[i].mass;
        this.answer.anion1Charge = this.anions[i].charge;
        this.answer.anion1Polyatomic = this.anions[i].polyatomic;
      }
    }

    // Gets symbol, weight and charge of cation1
    this.answer.cation1 = this.formGroup.get('cation1').value;
    for (let i = 0; i < this.cations.length; i++) {
      if (this.answer.cation1 === this.cations[i].symbol) {
        this.answer.cation1Weight = this.cations[i].mass;
        this.answer.cation1Charge = this.cations[i].charge;
        this.answer.cation1Polyatomic = this.cations[i].polyatomic;
      }
    }
    this.answer.grams1 = this.formGroup.get('grams1').value;

    // Gets symbol, weight and charge of anion2
    this.answer.anion2 = this.formGroup.get('anion2').value;
    for (let i = 0; i < this.anions.length; i++) {
      if (this.answer.anion2 === this.anions[i].symbol) {
        this.answer.anion2Weight = this.anions[i].mass;
        this.answer.anion2Charge = this.anions[i].charge;
        this.answer.anion2Polyatomic = this.anions[i].polyatomic;
      }
    }

    // Gets symbol, weight and charge of cation2
    this.answer.cation2 = this.formGroup.get('cation2').value;
    for (let i = 0; i < this.cations.length; i++) {
      if (this.answer.cation2 === this.cations[i].symbol) {
        this.answer.cation2Weight = this.cations[i].mass;
        this.answer.cation2Charge = this.cations[i].charge;
        this.answer.cation2Polyatomic = this.cations[i].polyatomic;
      }
    }
    this.answer.grams2 = this.formGroup.get('grams2').value;

    // Saves the cation1 solubility if it can find it ( sets find solubility to false otherwise, defaulting to no display )
    if(this.solubilityTest[this.answer.cation1 + ''] === null) {
      this.answer.findSolubility = false;
    } else {

      // Saves the data
      this.answer.cation1SolubilityData = this.solubilityTest[this.answer.cation1 + ''];

      // Saves the cation2 solubility data if it can find it, sets the findSolubility variable to false otherwise, not loading solubility data then.
      if(this.solubilityTest[this.answer.cation2 + ''] === null) {
        this.answer.findSolubility = false;
      } else {

        // Saves the data
        this.answer.cation2SolubilityData = this.solubilityTest[this.answer.cation2 + ''];
      }
    }

    /* Debug, add/remove a space in the * / here to enable/disable the code -> * /
    console.log("Solubility Test: " + this.solubilityTest);
    console.log("Beginning Solubility Generation");
    /* */

    // Loads the solubility
    this.answer.solubilityGeneration();

    /* Debug, add/remove the * / here to enable/disable the code -> * /
    console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
    console.log("Finished gathering data from form");
    /* */
    // calculate the subscripts
    this.answer.determineSubscript();

    /* Debug, add/remove the * / here to enable/disable the code -> * /
    console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
    console.log("Finished determineSubscript()");
    /* */

    // calculate the coefficients
    this.answer.balanceEquation();

    /* Debug, add/remove the * / here to enable/disable the code -> * /
    console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
    console.log("Finished balanceEquation()");
    /* */

    // put together the molecules (using subscripts)
    this.answer.setMolecules();

    /* Debug, add/remove the * / here to enable/disable the code -> * /
    console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
    console.log("Finished setMolecules()");
    /* */

    // calculate the formula weights (molar masses)
    this.answer.calculateFormulaWeight();

    // calculate the molar ratios of everything
    this.answer.calculateMoleRatios();

    // calculates actual moles of everything
    this.answer.calculateMoles();

    // determines the limiting reactant
    this.answer.determineLimitingReactant();

    // Prints all variables stored in answer into the console. DEBUG COMMAND, PLEASE COMMENT OUT IF NOT IN USE
    // this.answer.printVariablesDEBUG();

    // display the answer key
    this.answer.displayKey = true;
    // this.answer.stoichiometryGeneration();
    // this.answer.molecularNotationGeneration();

    /* Debug, add/remove the * / here to enable/disable the code -> * /
    console.log("The following data is printed for debug purposes, please disable this block in stoichiometry-form.component.ts if you are not debugging the system.");
    console.log("Cations: " + this.cations);
    console.log("Anions: " + this.anions);
    console.log("Cation 1: " + this.answer.cation1);
    console.log("Anion 1: " + this.answer.anion1);
    console.log("Grams 1: " + this.answer.grams1);
    console.log("Cation 2: " + this.answer.cation2);
    console.log("Anion 2: " + this.answer.anion2);
    console.log("Grams 2: " + this.answer.grams2);
    /**/
  }

  // Creates the form and sets default prioperties
  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      cation1: ['Li'],
      anion1: ['Br'],
      grams1: '',
      cation2: ['Na'],
      anion2: ['I'],
      grams2: ''
    });
  }
}
