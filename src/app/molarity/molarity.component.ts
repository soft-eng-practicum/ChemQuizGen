import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ElementsService } from "../services/elements.service";

@Component({
  selector: 'app-molarity',
  templateUrl: './molarity.component.html',
  styleUrls: ['./molarity.component.scss']
})
export class MolarityComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private elements: ElementsService) {
    this.createForm();
  }
  ngOnInit() {
    //WM don't think we need anything here, on the other document, this is pulling outside information to this page,
    //and all the data needed is self contained.
  }

  private formGroup: FormGroup = new FormGroup({
    base: new FormControl(),
    baseVol: new FormControl(),
    baseMol: new FormControl(),
    acid: new FormControl(),
    acidVol: new FormControl(),
    acidMol: new FormControl()
  });

  public calculate(): void {
    var ConjugateBase = this.formGroup.get("base").value;
    //"So4"; temprary hard code untill input is created
    var ConjugateAcid = this.formGroup.get("acid").value;
    //"Na" same
    var volR1 = this.formGroup.get("baseVol").value;
    // 100;
    var volR2 = this.formGroup.get("baseMol").value;
    //100;
    var MofR1 = this.formGroup.get("acidVol").value;
    //2.0;
    var MofR2 = this.formGroup.get("acidMol").value;
    //1.5;

    //discover Acid
    var acid, base;

    switch (ConjugateBase) {
      case "Cl": acid = "HCl"; break;
      case "Br": acid = "HBr"; break;
      case "F": acid = "HF"; break;
      case "I": acid = "HI"; break;
      case "NO3": acid = "HNO3"; break;
      case "ClO": acid = "HClO"; break;
      case "SO4": acid = "H2SO4"; break;
      case "PO4": acid = "H3PO4"; break;
    }
    //debug, activate if needed
    /*
    console.log(ConjugateBase, acid);
     */
    //discover Base
    switch (ConjugateAcid) {
      case 'Na': base = 'NaOH'; break;
      case 'K': base = 'KOH'; break;
      case 'Rb': base = 'RbOH'; break;
      case 'Li': base = 'LiOH'; break;
      case 'Mg': base = 'Mg(OH)2'; break;
      case 'Ca': base = 'Ca(OH)2'; break;
      case 'Al': base = 'Al(OH)3'; break;
    }
    //debug, activate if needed
    /*
    console.log(ConjugateAcid, base;
     */
    var water = [];

    switch (acid) {
      case "HCl": water.push(1); break;
      case "HBr": water.push(1); break;
      case "HF": water.push(1); break;
      case "HI": water.push(1); break;
      case "HNO3": water.push(1); break;
      case "HClO": water.push(1); break;
      case "H2SO4": water.push(2); break;
      case "H3PO4": water.push(3); break;
    }
    //debug, activate if needed
    /*
    console.log(acid, water[]);
     */
    switch (base) {
      case "NaOH": water.push(1); break;
      case "KOH": water.push(1); break;
      case "RbOH": water.push(1); break;
      case "LiOH": water.push(1); break;
      case "Mg(OH)2": water.push(2); break;
      case "Ca(OH)2": water.push(2); break;
      case "Al(OH)3": water.push(3); break;
    }
    //debug, activate if needed
    /*
    console.log(base, water[]);
     */
    var cation;
    if (base.indexOf("(OH)3") != -1) {
      cation = base.substring(0, base.indexOf("(OH)3"))
    }
    if (base.indexOf("(OH)2") != -1) {
      cation = base.substring(0, base.indexOf("(OH)2"))
    }
    if (base.indexOf("OH") != -1) {
      cation = base.substring(0, base.indexOf("OH"))
    }
    if (base.indexOf("OH") != -1) {
      cation = base.substring(0, base.indexOf("OH)"))
    }
    switch (acid) {
      case "HCl": water.push("Cl"); break;
      case "HBr": water.push("Br"); break;
      case "HF": water.push("F"); break;
      case "HI": water.push("I"); break;
      case "HNO3": water.push("NO3"); break;
      case "HClO": water.push("ClO"); break;
      case "H2SO4": water.push("SO4"); break;
      case "H3PO4": water.push("PO4"); break;
    }
    if (water[0] > water[1]) {
      var acidCoeff = 1;
      var baseCoeff = water[0] / water[1];
      var saltCoeff = acidCoeff;
      var waterCoeff = baseCoeff;
      water.push(acidCoeff);
      water.push(baseCoeff);
      water.push(saltCoeff);
      water.push(waterCoeff);
    } else if (water[0] < water[1]) {
      var acidCoeff = water[1] / water[0];
      var baseCoeff = 1;
      var saltCoeff = baseCoeff;
      var waterCoeff = acidCoeff;
      water.push(acidCoeff);
      water.push(baseCoeff);
      water.push(saltCoeff);
      water.push(waterCoeff);
    } else {
      water.push(water[0] / water[1]);
      water.push(1);
      water.push(1);
      water.push(1);
      water.push(1);
    }

    if (water[6] == 1.5) {
      water[6] = 4 * water[6];
      water[5] = water[5];
      water[4] = 2 * water[4];
      water[3] = 2 * water[3];
    }

    //output this properly later with proper formating
    //console.log("The balanced reactions is: \n\n {0}{1}  + {2}{3} --> {6}{4}{2}{5}{0} + {7}H2O" .format(water[3], Acid, water[4], Base, cation, water[2],water[5], water[6] )) # --> {}{}{}{}   +  H2O"

    var molofR1 = MofR1 * volR1 / 1000;
    var molofR2 = MofR2 * volR2 / 1000;

    var molSaltGivenR1 = molofR1 * water[5] / water[3];
    var molWaterGivenR1 = molofR1 * water[6] / water[3];
    var molSaltGivenR2 = molofR1 * water[5] / water[4];
    var molWaterGivenR2 = molofR1 * water[6] / water[4];

    var formula_weight_acid = water[0] * 1.008 + atomic_weights[ConjugateBase]
    var formula_weight_base = water[1] * atomic_weights["OH"] + atomic_weights[ConjugateAcid]
    var formula_weight_water = 2 * 1.008 + 15.999
    var formula_weight_salt = water[1] * atomic_weights[ConjugateBase] + water[0] * atomic_weights[ConjugateAcid]
    console.log(formula_weight_acid)
    console.log(formula_weight_base)
    console.log(formula_weight_water)
    console.log(formula_weight_salt)

    if (molSaltGivenR1 < molSaltGivenR2) {
      var grams_of_salt = molSaltGivenR2 * formula_weight_salt
      //print("{} is the limiting reactant giving {} moles and {} grams of salt". format(Acid,mol_salt_given_R1, grams_of_salt))
    } else {
      var grams_of_salt = molSaltGivenR2 * formula_weight_salt
      //print("{} is the limiting reactant giving {} moles and {} grams of salt". format(Base,mol_salt_given_R2, grams_of_salt))
    }
    if (molWaterGivenR1 < molWaterGivenR1) {
      var grams_of_water = molWaterGivenR1 * formula_weight_water
      //print("{} is the limiting reactant giving {} moles and {} grams of water". format(Acid,mol_water_given_R1, grams_of_water))
    } else {
      grams_of_water = molWaterGivenR2 * formula_weight_water
      //print("{} is the limiting reactant giving {} moles and {} grams of water". format(Base,mol_water_given_R2, grams_of_water))
    }
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      base: ["SO4"],
      baseVol: '',
      baseMol: '',
      acid: ["Na"],
      acidVol: '',
      acidMol: ''
    });
  }

  private simpleTest1(): void {
    if (ConjugateBase == "S04" && ConjugateAcid == "Na") {
      if (grams_of_salt != 0.1775475)
        console.log("Error, proper number not reached")
    }
  }

  private atomic_weights = {
    "He": 4.002, "Li": 6.94, "Be": 9.012,
    "B": 10.81, "C": 12.011, "N": 14.007, "O": 15.999, "F": 19.00,
    "Ne": 20.1797, "Na": 22.989, "Mg": 24.305, "Al": 26.981, "Si": 28.085,
    "P": 30.973, "S": 32.06, "Cl": 35.45, "Ar": 39.948, "K": 39.0983, "Ca": 40.078,
    "Sc": 44.955, "Ti": 47.867, "V": 50.941, "Cr": 51.996, "Mn": 54.938, "Fe": 55.845,
    "Co": 58.933, "Ni": 58.693, "Cu": 63.546, "Zn": 65.38, "Ga": 69.723, "Ge": 72.630,
    "As": 74.921, "Se": 78.971, "Br": 79.904, "Kr": 83.798, "Rb": 85.4678, "Sr": 87.62,
    "Y": 88.905, "Zr": 91.224, "Nb": 92.906, "Mo": 95.95, "Tc": 97, "Ru": 101.07, "Rh": 102.905,
    "Pd": 106.42, "Ag": 107.868, "Cd": 112.414, "In": 114.818, "Sn": 118.710, "Sb": 121.760, "Te": 127.760,
    "I": 126.904, "Xe": 131.293, "Cs": 132.905, "Ba": 137.327, "La": 138.905, "Ce": 140.116, "Pr": 140.907,
    "Nd": 144.242, "Pm": 145, "Sm": 150.36, "Eu": 151.964, "Gd": 157.25, "Tb": 158.925, "Dy": 162.500, "Ho": 164.930,
    "Er": 167.259, "Tm": 168.934, "Yb": 173.045, "Lu": 174.9668, "Hf": 178.49, "Ta": 180.947, "W": 183.84, "Re": 186.207,
    "Os": 190.23, "Ir": 192.21, "Pt": 195.084, "Au": 196.966, "Hg": 200.592, "Tl": 204.38, "Pb": 207.2, "Bi": 208.980,
    "Po": 209, "At": 210, "Rn": 222, "Fr": 223, "Ra": 222, "Ac": 227, "Th": 232.0377, "Pa": 231.035, "U": 238.028, "(NO3)": 62.00,
    "O2": 32.00, "(CO3)": 60.01, "(ClO3)": 83.447, "OH": 17.01, "(PO4)": 94.9714, "SO4": 96.06, "(Cr2O7)": 215.985, "(NH4)": 18.00
  };

}
