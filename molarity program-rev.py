print ("write the conjugate base or acid associated using quotation marks")
#input the volumes and molarities of the solutions can replace these with grams later to account for insolubility of 
#some of the bases
Conjugate_Base = input("input the conjugate base of mineral acids or strong oxy acids:"   )
Conjugate_Acid = input("input the conjugate acid or cation of the hydroxide:"   )
volR1 = float(input("input the volume of acid in mL:" ))
volR2 = float(input("input the volume of base in mL:"))
MofR1 = float(input("input molarity in M of acid:"))
MofR2 = float(input("input molarity in M of base:"))
#Conjugate_Base = "SO4"
#Conjugate_Acid = "Na"

### dictionaries
# acids & protons
acids = {
	"HCl":1,
	"HBr":1,
	"HF":1,
	"HI":1,
	"HNO3":1,
	"HClO":1,
	"H2SO4":2,
	"H3PO4":3
	}
# bases & hydroxide (OH)
bases = {
	"NaOH":1,
	"KOH":1,
	"RbOH":1,
	"LiOH":1,
	"Mg(OH)2":2,
	"Ca(OH)2":2,
	"Al(OH)3":3
	}
anions = {
	"HCl":"Cl",
	"HBr":"Br",
	"HF":"F",
	"HI":"I",
	"HNO3":"NO3",
	"HClO":"ClO",
	"H2SO4":"SO4",
	"H3PO4":"PO4"
	}
conjugate_base_to_acid = {
	'Cl':'HCl',
	'Br':'HBr',
	'F':'HF',
	'I':'HI',
	'NO3':'HNO3',
	'ClO':'HClO',
	'SO4':'H2SO4',
	'PO4':'H3PO4'
	}
cation_of_base = {
	'Na':'NaOH',
	'K':'KOH',
	'Rb':'RbOH',
	'Li':'LiOH',
	'Mg':'Mg(OH)2',
	'Ca':'Ca(OH)2',
	'Al':'Al(OH)3'
	}

#########
# solve the reaction stoichiometry
#########

# for each base-acid pair in the dicts, check if the inputs exist and assign corresponding variables.
for base, acid in conjugate_base_to_acid.items():
	if Conjugate_Base == base:
		Acid = acid
		print(acid)
for acid, base in cation_of_base.items():
	if Conjugate_Acid == acid:
		Base = base
		print(base)

water = []
for acid, protons in acids.items():
	if Acid == acid:
		print(protons)
		water.append(protons)
for base, hydroxide in bases.items():
	if Base == base:
		print(hydroxide)
		water.append(hydroxide)
print(Acid, Base)

cation = Base.strip("(OH)3")
#print(cation)
cation = cation.strip("(OH)2")
#print(cation)
cation = cation.strip("OH")
#print(cation)
cation = cation.strip("OH")
#print("the cation is: ", cation)

for acid, conjugate_base in anions.items():
	if Acid == acid:
		#print("the conjugate base is:",conjugate_base)
		water.append(conjugate_base)
if water[0] > water[1]:
	acid_coeff = 1
	base_coeff = water[0]/water[1]
	salt_coeff = acid_coeff
	water_coeff = base_coeff
	water.append(acid_coeff)
	water.append(base_coeff)
	water.append(salt_coeff)
	water.append(water_coeff)
	#print(water)
elif water[0] < water[1]:
	acid_coeff = water[1]/water[0]
	base_coeff =1
	salt_coeff = base_coeff
	water_coeff = acid_coeff
	water.append(acid_coeff)
	water.append(base_coeff)
	water.append(salt_coeff)
	water.append(water_coeff)
	#print(water)
else:
	water[0] == water[1]
	water.append(int(water[0]/water[1]))
	water.append(1)
	water.append(1)
	water.append(1)
	water.append(1)
	#print(water)
# Reaction  acid + base = salt + water
#print(water)
if water[6] == 1.5:
	water[6] =4*water[6]
	water[5] =water[5]
	water[4] = 2*water[4]
	water[3] = 2*water[3]

# {}{acd}  + {}{base} --> [][salt]  + []h20
print("The balanced reactions is: \n\n {0}{1}  + {2}{3} --> {6}{4}{2}{5}{0} + {7}H2O" .format(water[3], Acid, water[4], Base, cation, water[2],water[5], water[6] )) # --> {}{}{}{}   +  H2O"


#volR1 = 100
#volR2 = 100
#MofR1 = 2.0
#MofR2 = 1.5
molofR1 = MofR1*volR1/1000
molofR2 = MofR2*volR2/1000
#print(molofR1)
mol_salt_given_R1 = molofR1*water[5]/water[3]
mol_water_given_R1 = molofR1*water[6]/water[3]
mol_salt_given_R2 = molofR1*water[5]/water[4]
mol_water_given_R2 = molofR1*water[6]/water[4]


atomic_weights ={ "H" : 1.008, "He": 4.002, "Li" : 6.94, "Be" : 9.012,
"B" : 10.81, "C" : 12.011, "N" : 14.007, "O" : 15.999, "F" : 19.00,
"Ne" : 20.1797, "Na" : 22.989, "Mg" : 24.305, "Al" : 26.981, "Si": 28.085,
"P": 30.973, "S" : 32.06, "Cl" : 35.45, "Ar" : 39.948, "K": 39.0983, "Ca": 40.078,
"Sc": 44.955, "Ti" : 47.867, "V" : 50.941, "Cr" : 51.996, "Mn": 54.938, "Fe": 55.845,
"Co": 58.933, "Ni": 58.693, "Cu" : 63.546, "Zn" : 65.38, "Ga": 69.723, "Ge": 72.630,
"As" : 74.921, "Se": 78.971, "Br": 79.904, "Kr": 83.798, "Rb": 85.4678, "Sr": 87.62,
"Y": 88.905, "Zr" : 91.224, "Nb": 92.906, "Mo": 95.95, "Tc": 97, "Ru": 101.07, "Rh": 102.905,
"Pd": 106.42, "Ag": 107.868, "Cd": 112.414, "In": 114.818, "Sn": 118.710, "Sb": 121.760, "Te": 127.760,
"I": 126.904, "Xe" : 131.293, "Cs": 132.905, "Ba": 137.327, "La": 138.905, "Ce": 140.116, "Pr": 140.907,
"Nd": 144.242, "Pm": 145, "Sm": 150.36, "Eu": 151.964, "Gd": 157.25, "Tb": 158.925, "Dy": 162.500, "Ho":164.930,
"Er" : 167.259, "Tm":168.934, "Yb": 173.045, "Lu": 174.9668, "Hf": 178.49, "Ta":180.947, "W": 183.84, "Re": 186.207,
"Os": 190.23, "Ir": 192.21, "Pt": 195.084, "Au": 196.966, "Hg": 200.592, "Tl": 204.38, "Pb": 207.2, "Bi": 208.980,
"Po" : 209, "At": 210, "Rn": 222, "Fr": 223, "Ra": 222, "Ac": 227, "Th": 232.0377, "Pa": 231.035, "U": 238.028, "(NO3)": 62.00,
"O2": 32.00, "(CO3)": 60.01, "(ClO3)": 83.447, "OH": 17.01, "(PO4)": 94.9714, "SO4": 96.06, "(Cr2O7)":215.985, "(NH4)" : 18.00}

formula_weight_acid = water[0]* 1.008 + atomic_weights[Conjugate_Base]
formula_weight_base =  water[1]*atomic_weights["OH"] + atomic_weights[Conjugate_Acid]
formula_weight_water = 2*1.008 + 15.999
formula_weight_salt = water[1]*atomic_weights[Conjugate_Base] + water[0]*atomic_weights[Conjugate_Acid]
print(formula_weight_acid)
print(formula_weight_base)
print(formula_weight_water)
print(formula_weight_salt)

if mol_salt_given_R1 < mol_salt_given_R2:
	grams_of_salt = mol_salt_given_R1*formula_weight_salt
	print("{} is the limiting reactant giving {} moles and {} grams of salt". format(Acid,mol_salt_given_R1, grams_of_salt))
else:
	grams_of_salt = mol_salt_given_R2*formula_weight_salt
	print("{} is the limiting reactant giving {} moles and {} grams of salt". format(Base,mol_salt_given_R2, grams_of_salt))

if mol_water_given_R1 < mol_water_given_R2:
	grams_of_water = mol_water_given_R1*formula_weight_water
	print("{} is the limiting reactant giving {} moles and {} grams of water". format(Acid,mol_water_given_R1, grams_of_water))
else:
	grams_of_water = mol_water_given_R2*formula_weight_water
	print("{} is the limiting reactant giving {} moles and {} grams of water". format(Base,mol_water_given_R2, grams_of_water))

	




