# (2019) Catalyst Quartet - Chemistry Quiz Generator

## Repo Location
* [Catalyst Quartet Repo](https://github.com/soft-eng-practicum/ChemQuizGen)

## Progress-Tracking Tools
* JIRA

## Other Communication Tools
* [Discord](https://discord.gg/b4zqnQ7)

## Team Roles
1. **Austin Lomax** - *Data Modeler & Client liaison* :sleeping:
2. **Farzin Valizadeh** - *Team Manager / Documentation Lead*  :wolf:
3. **Wesley McMillen** - *UI/UX modeler / Testing Lead* :link:
4. **Matthew Stiller** - *Architecture / Lead Programmer & Testing Lead*  :snake:

## Quick Setup Instructions
1. Install the edition of Node.js appropriate to your device from [this archive link](https://nodejs.org/dist/v8.11.4/). If you have a more recent version of Node.js installed already, it may be worth reverting to the 8.11.4 version to ensure compatability.
2. [Setting up the backend (functionality).](https://github.com/soft-eng-practicum/ChemQuizGen/tree/master/ChemGenApp/BackEnd) Run the following commands in a terminal window in your `ChemQuizGen\ChemGenApp\BackEnd` directory:
   - `npm install babel-cli@6.26.0`
   - `npm install babel-preset-env@1.7.0`
   - `npm install babel-watch@2.0.7`
   - `npm install express@4.16.3`
   - `npm install cors@2.8.4`
   - All backend components should now have been successfully installed through Node.js' package manager "npm". To run a local development server, run the command `npm run dev` in a terminal window in this directory. Accessing the development server is done by navigating to http://localhost:4000/ in your web browser of choice.
3. [Setting up the frontend (client-visible web page):](https://github.com/soft-eng-practicum/ChemQuizGen/tree/master/ChemGenApp/FrontEnd)
   - In a terminal window, run `npm i -g @angular/cli@6.2.1`. This will install **Angular 6.2.1** *globally*, so it doesn't matter which directory you run this command in.
   - From the [releases tab](https://github.com/soft-eng-practicum/ChemQuizGen/releases), download the **FrontEndInstall.zip** archive, and extract the files found in `FrontEndInstall\FrontEnd\` to your `ChemQuizGen\ChemGenApp\FrontEnd` folder. **Do not overwrite existing files!** This is to ensure that Angular is installed appropriately, without overwriting existing configuration/data files.
   - Again in your `ChemQuizGen\ChemGenApp\FrontEnd` folder, open a terminal window and run the command `ng serve` to start up a local backend server at http://localhost:4200/.
     - If you are given a message regarding compilation failure, ensure that your directory is not nested too deep, and that the filepath tree does not contain spaces.
4. Once the previous commands have completed successfully, you should be able to access a functioning replica of the website at `localhost:4200`.

---

# (2018) FreeRadicals - Chemistry Quiz Generator

## Repo Location
[FreeRadicals Repo](https://github.com/GGC-SD/FreeRadicals)

## Progress Tracking Tools
JIRA

## Other Comunication Tools
[Discord](https://discord.gg/tSE9q34)

## Team Roles
1. **Ben Jackson** - *Lead Programmer and UI Design* :pisces:
2. **Trivon Etheridge** :strawberry: - Data Model & Documentation :cancer:
3. **Bruce Carson** - *Documentation and Data modeler* :virgo:
4. **William Bullock** - Team Manager/Client Liason and Lead Tester :up:

## Primary Installation Instructions:

Make sure that you do this on every new computer that you are going to be developing on, or running the source code from, as it is necessary to run many of the commands that we use.

1. Go to https://nodejs.org/dist/v8.11.4/
2. Download the version that is for your device.
3. install that version of Node.js

This is needed to allow our backend and front end to work and work together.  This is the version that we built around, so if something isn't working, try reverting to this version.
