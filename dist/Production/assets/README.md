#Backend Data README
This folder contains the element data that is stored in the backend.
If you have any questions on what certain things are, this README is the first place to check for information.

##Cations.json
This file contains the entire list of all the cations that the program supports, as well as most of the information about that cation, for use in calculations.

###Important Information
We use Unicode to properly display the subscript information of the polyatomic molecules, 
\u2082 == subscript 2, \u2083 == subscript 3, \u2084 == subscript 4, etc.

Please make sure you enter all new data in the same format as the rest is in, which is the following:
{
    "symbol": "cationSymbol",
    "name": "cationName",
    "mass": cationMass,
    "charge": cationCharge
}
Filled example:
{
    "symbol": "Na",
    "name": "Sodium",
    "mass": 22.99,
    "charge": 1
}

When adding new data please make sure to add a comma to the end of the previous item!

##Anions.json
We use Unicode to properly display the subscript information of the polyatomic molecules, 
\u2082 == subscript 2, \u2083 == subscript 3, \u2084 == subscript 4, etc.

Please make sure you enter all new data in the same format as the rest is in, which is the following:
{
    "symbol": "anionSymbol",
    "name": "anionName",
    "mass": anionMass,
    "charge": anionCharge
}
Filled example:
{
    "symbol": "PO\u2084",
    "name": "Phosphate",
    "mass": 94.9714,
    "charge": -3
}

When adding new data please make sure to add a comma to the end of the previous item!

##Solubility Data:
This file is currently under construction, and further information will be added as we finalize the structure of the file.