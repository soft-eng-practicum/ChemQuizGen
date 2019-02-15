/**
* This code is based on what was done by Coding The Smart Way's Angular6 MEAN stack tutorial
* Please give them a look if you want to know how to make a MEAN stack webpage.
*/

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import mongoose from 'mongoose';
// the commented import requires a package which I have not installed.  It is used to access databases

const app = express();
const router = express.Router();

// This stuff is the code to grab the json files so that they can be sent to the Angular frontend
const anionData = require('./ElementData/UpdatedAnionsTest.json');
const cationData = require('./ElementData/UpdatedCationsTest.json');
const solubility1Data = require('./ElementData/SolubilityTest.json'); // This is for testing different layouts of the solubility data
const solubility2Data = require('./ElementData/SolubilityTest2.json'); // Further testing, but not used at the current time.
const solubilityTemplate = require('./ElementData/SolubilityTemplate.json'); // Current "correct" data
//const elementData = require('path/to/elementData.json');

app.use(cors());
app.use(bodyParser.json());

/* This code is basically what would be needed to access a MongoDB database
mongoose.connect('');

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully!');
}
*/

router.route('/anions').get((req, res) => {
	res.json(anionData);
});

router.route('/cations').get((req, res) => {
	res.json(cationData);
});

router.route('/solubility1').get((req, res) => {
	res.json(solubility1Data);
});

router.route('/solubility2').get((req, res) => {
	res.json(solubility2Data);
});

router.route('/solubility').get((req, res) => {
	res.json(solubilityTemplate);
});

/* NOT USED YET, NO FILE FOR IT TO REFERENCE, WILL CAUSE ERRORS IF REFERENCED
router.route('/elements').get((req, res) => {
	res.json(elementData);
});
*/

app.get('/', (req, res) => res.send('SendMessage'));

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));