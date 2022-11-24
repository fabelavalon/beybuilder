/*
 *========================================================*
 * BeyBuilder v0.9 for Dynamite Battle and Burst Ultimate *
 * Author: Fabel                                          *
 * Copyright 2022                                         *
 *========================================================*
 */

//create beyblade database
var beyBladeDB = new PouchDB("BeyBlades");
var recordsDB = new PouchDB("Record");

//import the parts lists
var allCores = cores;
var allBlades = blades;
var allArmors = armors;
var allDiscs = forgeDiscs;
var allDrivers = drivers;

//create the elements for the win buttons
var bey1WinKO = document.createElement("button");
var bey1WinSO = document.createElement("button");
var bey1WinBst = document.createElement("button");
var bey2WinKO = document.createElement("button");
var bey2WinSO = document.createElement("button");
var bey2WinBst = document.createElement("button");
var drawButton = document.createElement("button");
var bey1Statbtn = document.createElement("button");
var bey2Statbtn = document.createElement("button");
var showAllBeysbtn = document.createElement("button");
var removeBeybtn = document.createElement("button");
var editBeybtn = document.createElement("button");

//import the elements for the dropdowns
var bey1BladeDropdown = document.getElementById("bey1Blade");
var bey1CoreDropdown = document.getElementById("bey1Core");
var bey1DiscDropdown = document.getElementById("bey1Disc");
var bey1DriverDropdown = document.getElementById("bey1Driver");
var bey1ArmorDropdown = document.getElementById("bey1Armor");

var bey2BladeDropdown = document.getElementById("bey2Blade");
var bey2CoreDropdown = document.getElementById("bey2Core");
var bey2DiscDropdown = document.getElementById("bey2Disc");
var bey2DriverDropdown = document.getElementById("bey2Driver");
var bey2ArmorDropdown = document.getElementById("bey2Armor");

var selectedBey = document.getElementById("dbSelectList");

//import elements for the logging
var dbBeyName = document.getElementById("dbBeyIs");
var dbBeyStats = document.getElementById("dbBeyStats");
var dbBeyKO = document.getElementById("dbBeyKO");
var dbBeySO = document.getElementById("dbBeySO");
var dbBeyBst = document.getElementById("dbBeyBst");
var dbBeyDraw = document.getElementById("dbBeyDraw");
var dbBeySpace = document.getElementById("dbBeySpace");

var bey1Is = document.getElementById("bey1Is");
var bey1Stats = document.getElementById("bey1Stats");
var bey1KO = document.getElementById("bey1KO");
var bey1SO = document.getElementById("bey1SO");
var bey1Bst = document.getElementById("bey1Bst");
var bey1Draw = document.getElementById("bey1Draw");

var bey2Is = document.getElementById("bey2Is");
var bey2Stats = document.getElementById("bey2Stats");
var bey2KO = document.getElementById("bey2KO");
var bey2SO = document.getElementById("bey2SO");
var bey2Bst = document.getElementById("bey2Bst");
var bey2Draw = document.getElementById("bey2Draw");

var error = document.getElementById("error");
var winners = document.getElementById("winnerLog");

//used to generate the win buttons after both beys are selected
var wasBey1Generated = false;
var wasBey2Generated = false;

//used so we dont generate more buttons
var wasWinButtonGenerated = false;

//global beyblade variables
var bey1;
var bey2;
var dbBey;

function main(){

    console.log("Welcome to BeyBuilder Version 0.9");

    bey1CoreDropdown.value="random";
    bey2CoreDropdown.value="random";

    bey1BladeDropdown.value="random";
    bey2BladeDropdown.value="random";

    bey1ArmorDropdown.value="random";
    bey2ArmorDropdown.value="random";

    bey1DiscDropdown.value="random";
    bey2DiscDropdown.value="random";

    bey1DriverDropdown.value="random";
    bey2DriverDropdown.value="random";
    
    //create and populate the drop downs with the parts from the database...
    //...the cores
    for (var i = 0; i < allCores.length; i++) { 
        var options = document.createElement("option");
        var option2 = document.createElement("option");
        options.textContent = allCores[i].name;
        options.value = allCores[i].id;
        option2.textContent = allCores[i].name;
        option2.value = allCores[i].id;
        bey1CoreDropdown.appendChild(options);
        bey2CoreDropdown.appendChild(option2);
    }
    //...the Blades
    for (var i = 0; i < allBlades.length; i++) {
        var options = document.createElement("option");
        var option2 = document.createElement("option");
        options.textContent = allBlades[i].name;
        options.value = allBlades[i].id;
        option2.textContent = allBlades[i].name;
        option2.value = allBlades[i].id;
        bey1BladeDropdown.appendChild(options);
        bey2BladeDropdown.appendChild(option2);
    }
    //...the armors
    for (var i = 0; i < allArmors.length; i++) {
        var options = document.createElement("option");
        var option2 = document.createElement("option");
        options.textContent = allArmors[i].name;
        options.value = allArmors[i].id;
        option2.textContent = allArmors[i].name;
        option2.value = allArmors[i].id;
        bey1ArmorDropdown.appendChild(options);
        bey2ArmorDropdown.appendChild(option2);
        
    }
    //...the forge discs
    for (var i = 0; i < allDiscs.length; i++) {
        var options = document.createElement("option");
        var option2 = document.createElement("option");
        options.textContent = allDiscs[i].name;
        options.value = allDiscs[i].id;
        option2.textContent = allDiscs[i].name;
        option2.value = allDiscs[i].id;
        bey1DiscDropdown.appendChild(options);
        bey2DiscDropdown.appendChild(option2);
        
    }
    //...the drivers   
    for (var i = 0; i < allDrivers.length; i++) {
        var options = document.createElement("option");
        var option2 = document.createElement("option");
        options.textContent = allDrivers[i].name;
        options.value = allDrivers[i].id;
        option2.textContent = allDrivers[i].name;
        option2.value = allDrivers[i].id;
        bey1DriverDropdown.appendChild(options);
        bey2DriverDropdown.appendChild(option2);
        
    }

    //fill the dbList
    showBeyblades();
    
};

//turns out JavaScript doesn't have a random number function that just gives an int
function getRandomInt(max) {

    return Math.floor(Math.random() * max);

};

//JS math functions suck
function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

//generate a beyblade based on the selections for the first set of drop downs
function generateBey1(){

    //uses the id's of all parts for easy call
    var blade = -1;
    var core = -1;
    var disc = -1;
    var driver = -1;
    var armor = -1;

    //boolean values to check if the beyblade is random or not
    var bladeChosen = false;
    var coreChosen = false;
    var discChosen = false;
    var driverChosen = false;
    var armorChosen = false;

    //random or chosen...
    //...blade?
    if(bey1BladeDropdown.value=="random"){
        var randBlade = getRandomInt(allBlades.length);
        blade = allBlades[randBlade].id;
        bladeChosen = false;
    }
    else{
        blade = allBlades[parseInt(bey1BladeDropdown.value)].id;
        bladeChosen = true;
    }
    //...core?
    if(bey1CoreDropdown.value=="random"){
        var randCore = getRandomInt(allCores.length);
        core = allCores[randCore].id;
        coreChosen = false;
    }
    else{
        core = allCores[parseInt(bey1CoreDropdown.value)].id;
        coreChosen = true;
    }
    //...forge disc?
    if(bey1DiscDropdown.value=="random"){
        var randDisc = getRandomInt(allDiscs.length);
        disc = allDiscs[randDisc].id;
        discChosen = false;
    }
    else{
        disc = allDiscs[parseInt(bey1DiscDropdown.value)].id;
        discChosen = true;
    }
    //...driver?
    if(bey1DriverDropdown.value=="random"){
        var randDriver = getRandomInt(allDrivers.length);
        driver = allDrivers[randDriver].id;
        driverChosen = false;
    }
    else{
        driver = allDrivers[parseInt(bey1DriverDropdown.value)].id;
        driverChosen = true;
    }
    //...armor?
    if(bey1ArmorDropdown.value=="random"){
        var randArmor = getRandomInt(allArmors.length);
        armor = allArmors[randArmor].id;
        armorChosen = false;
    }
    else{
        armor = allArmors[parseInt(bey1ArmorDropdown.value)].id;
        armorChosen = true;
    }  

    //put it togther and...
    bey1 = new BeyBlade(blade, core, armor, disc, driver);

    //...check to make sure generated beyblade is valid, tell the user if it's their fault that it's not, otherwise randomizer rolls again
    if(bey1.validateBeyBuild()){
        wasBey1Generated = true;
        addBeyblade(bey1);
        error.textContent = "";
        bey1Is.textContent = "BeyBlade 1 is: " + bey1.name;
        showBeybladeStats(bey1, 1);
        createWinButtons();
    }
    //user chose incompatible spin
    else if(!(isBeyRandom(coreChosen, bladeChosen, discChosen, driverChosen, armorChosen))&&(bey1.partsCheck())){
        wasBey1Generated = false;
        bey1Is.textContent ="Beyblade 1 has not been selected.";
        error.textContent = "BeyBlade 1 is not valid. " + allBlades[bey1.blade].name + " is " + allBlades[bey1.blade].spin + " spin, " + allCores[bey1.core].name + " is " + allCores[bey1.core].spin + " spin.";
    }
    else if(!(isLayerRandom(coreChosen, bladeChosen))&&(bey1.partsCheck())){
        wasBey1Generated = false;
        bey1Is.textContent = "Beyblade 1 has not been selected.";
        error.textContent = "BeyBlade 1 is not valid. " + allBlades[bey1.blade].name + " is " + allBlades[bey1.blade].spin + " spin, " + allCores[bey1.core].name + " is " + allCores[bey1.core].spin + " spin.";
    }
    //user chose parts that are incompatible
    else{
        //user chose an incompatible driver and disc
        if((driverChosen&&discChosen)&&!(bey1.partsCheck())){
            wasBey1Generated = false;
            bey1Is.textContent = "Beyblade 1 has not been selected.";
            console.log("user error");
        }
        //user chose an incompatible blade and armor
        else if((bladeChosen&&armorChosen)&&!(bey1.partsCheck())){
            wasBey1Generated = false;
            bey1Is.textContent = "Beyblade 1 has not been selected.";
            console.log("user error");
        }
        //user chose Greatest Rapheal
        else if((((bladeChosen&&armorChosen)||(bladeChosen&&coreChosen)||(armorChosen&&coreChosen)))&&!(bey1.partsCheck())){
            wasBey1Generated = false;
            bey1Is.textContent = "Beyblade 1 has not been selected.";
            console.log("user error");
        }
        //otherwise the random messed up, try again
        else{
            generateBey1();
            console.log("oops, rando made a booboo");
        }

    }

}

//generate a beybalde based on the selections for the second set of drop downs
function generateBey2(){

    //uses the id's of all parts for easy call
    var blade = -1;
    var core = -1;
    var disc = -1;
    var driver = -1;
    var armor = -1;

    //boolean values to check if the beyblade is random or not
    var bladeChosen = false;
    var coreChosen = false;
    var discChosen = false;
    var driverChosen = false;
    var armorChosen = false;
    
    //random or chosen...
    //...blade?
    if(bey2BladeDropdown.value=="random"){
        randBlade = getRandomInt(allBlades.length);
        blade = allBlades[randBlade].id;
        bladeChosen = false;
    }
    else{
        blade = allBlades[parseInt(bey2BladeDropdown.value)].id;
        bladeChosen = true;
    }
    //...core?
    if(bey2CoreDropdown.value=="random"){
        randCore = getRandomInt(allCores.length);
        core = allCores[randCore].id;
        coreChosen = false;
    }
    else{
        core = allCores[parseInt(bey2CoreDropdown.value)].id;
        coreChosen = true;
    }
    //...forge disc?
    if(bey2DiscDropdown.value=="random"){
        randDisc = getRandomInt(allDiscs.length);
        disc = allDiscs[randDisc].id;
        discChosen = false;
    }
    else{
        disc = allDiscs[parseInt(bey2DiscDropdown.value)].id;
        discChosen = true;
    }
    //...driver?
    if(bey2DriverDropdown.value=="random"){
        randDriver = getRandomInt(allDrivers.length);
        driver = allDrivers[randDriver].id;
        driverChosen = false;
    }
    else{
        driver = allDrivers[parseInt(bey2DriverDropdown.value)].id;
        driverChosen = true;
    }
    //...armor?
    if(bey2ArmorDropdown.value=="random"){
        randArmor = getRandomInt(allArmors.length);
        armor = allArmors[randArmor].id;
        armorChosen = false;
    }
    else{
        armor = allArmors[parseInt(bey2ArmorDropdown.value)].id;
        armorChosen = true;
    } 

    //put it together and...
    bey2 = new BeyBlade(blade, core, armor, disc, driver);

    //...check to make sure generated beyblade is valid, tell the user if it's their fault, otherwise randomizer rolls again
    if(bey2.validateBeyBuild()){
        wasBey2Generated = true;
        addBeyblade(bey2);
        error.textContent = "";
        bey2Is.textContent = "BeyBlade 2 is: " + bey2.name;
        showBeybladeStats(bey2, 2);
        createWinButtons();
    }
    else if(!(isBeyRandom(coreChosen, bladeChosen, discChosen, driverChosen, armorChosen))){
        wasBey2Generated = false;
        bey2Is.textContent = "Beyblade 2 has not been selected.";
        error.textContent = "BeyBlade 2 is not valid. " + allBlades[bey2.blade].name + " is " +  allBlades[bey2.blade].spin + " spin, " + allCores[bey2.core].name + " is " + allCores[bey2.core].spin + " spin.";
    }
    else if((!(isLayerRandom(coreChosen, bladeChosen))&&(bey2.partsCheck()))){
        wasBey2Generated = false;
        bey2Is.textContent = "Beyblade 2 has not been selected.";
        error.textContent = "BeyBlade 2 is not valid. " + allBlades[bey2.blade].name + " is " +  allBlades[bey2.blade].spin + " spin, " + allCores[bey2.core].name + " is " + allCores[bey2.core].spin + " spin.";
    }
    else{
        //user chose an incompatible driver and disc
        if((driverChosen&&discChosen)&&!(bey2.partsCheck())){
            wasBey2Generated = false;
            bey2Is.textContent = "Beyblade 2 has not been selected.";
            console.log("user error");
        }
        //user chose an incompatible blade and armor
        else if((bladeChosen&&armorChosen)&&!(bey2.partsCheck())){
            wasBey2Generated = false;
            bey2Is.textContent = "Beyblade 2 has not been selected.";
            console.log("user error");
        }
        //user chose Greatest Rapheal
        else if((((bladeChosen&&armorChosen)||(bladeChosen&&coreChosen)||(armorChosen&&coreChosen)))&&!(bey2.partsCheck())){
            wasBey2Generated = false;
            bey2Is.textContent = "Beyblade 2 has not been selected.";
            console.log("user error");
        }
        //otherwise the random messed up, try again
        else{
            generateBey2();
            console.log("oops, rando made a booboo");
        }
        
    }
    
}

//checks if ANY part is random
function isBeyRandom(coreState, bladeState, discState, driverState, armorState){

    if(!coreState || !bladeState || !discState || !driverState || !armorState){
        return true;
    }
    else{
        return false;
    }
}

//check if one of the core or blade are random, to help check spin compatibility.
function isLayerRandom(coreState, bladeState){

    if(!coreState || !bladeState){
        return true;
    }
    else{
        return false;
    }
}

//populates win buttons on screen
function createWinButtons(){

var buttonContainer = document.getElementById("buttonContainer");

    if(wasBey1Generated&&wasBey2Generated&&!wasWinButtonGenerated){
        
        //bey1 win by ko
        bey1WinKO.innerHTML = "Bey 1 KO Win";
        bey1WinKO.value = "B1WKO";
        bey1WinKO.classList.add("btn");
        bey1WinKO.classList.add("btn-basic");
        bey1WinKO.addEventListener("click", function() {
            winnerChosen(bey1WinKO.value);
        });
        buttonContainer.append(bey1WinKO);
        
        //bey1 win by so
        bey1WinSO.innerHTML = "Bey 1 OS Win";
        bey1WinSO.value = "B1WSO";
        bey1WinSO.classList.add("btn");
        bey1WinSO.classList.add("btn-basic");
        bey1WinSO.addEventListener("click", function() {
            winnerChosen(bey1WinSO.value);
        });
        buttonContainer.append(bey1WinSO);

        //bey 1 win by burst out
        bey1WinBst.innerHTML = "Bey 1 Burst Win";
        bey1WinBst.value = "B1WBST";
        bey1WinBst.classList.add("btn");
        bey1WinBst.classList.add("btn-basic");
        bey1WinBst.addEventListener("click", function() {
            winnerChosen(bey1WinBst.value);
        });
        buttonContainer.append(bey1WinBst);

        //bey 2 win by ko
        bey2WinKO.innerHTML = "Bey 2 KO Win";
        bey2WinKO.value = "B2WKO";
        bey2WinKO.classList.add("btn");
        bey2WinKO.classList.add("btn-basic");
        bey2WinKO.addEventListener("click", function() {
            winnerChosen(bey2WinKO.value);
        });
        buttonContainer.append(bey2WinKO);
        
        //bey 2 win by so
        bey2WinSO.innerHTML = "Bey 2 SO Win";
        bey2WinSO.value = "B2WSO";
        bey2WinSO.classList.add("btn");
        bey2WinSO.classList.add("btn-basic");
        bey2WinSO.addEventListener("click", function() {
            winnerChosen(bey2WinSO.value);
        });;
        buttonContainer.append(bey2WinSO);

        //bey 2 win by burst out
        bey2WinBst.innerHTML = "Bey 2 Burst Win";
        bey2WinBst.value = "B2WBST";
        bey2WinBst.classList.add("btn");
        bey2WinBst.classList.add("btn-basic");
        bey2WinBst.addEventListener("click", function() {
            winnerChosen(bey2WinBst.value);
        });
        buttonContainer.append(bey2WinBst);

        //draw button
        drawButton.innerHTML = "Draw";
        drawButton.value = "draw";
        drawButton.classList.add("btn");
        drawButton.classList.add("btn-basic");
        drawButton.addEventListener("click", function() {
            winnerChosen(drawButton.value);
        });
        buttonContainer.append(drawButton);

        //once both beys are made, make sure they have a matchup in the recordsDB
        addRecord(bey1, bey2);
        addRecord(bey2, bey1);
        displayRecords();

    }

}

//onclick for the win buttons
function winnerChosen(buttonID){

    switch(buttonID){
        case "B1WKO":
            updateWinCounts(bey1, bey2, "KO");
            updateRecords(bey1, bey2, "KO");
            winners.textContent = "The winner of this round is: " + bey1.name + " by Knockout!";
            break;
        case "B1WSO":
            updateWinCounts(bey1, bey2, "SO");
            updateRecords(bey1, bey2, "SO");
            winners.textContent = "The winner of this round is: " + bey1.name + " by Sleep Out!";
            break;
        case "B1WBST":
            updateWinCounts(bey1, bey2, "burst");
            updateRecords(bey1, bey2, "burst");
            winners.textContent = "The winner of this round is: " + bey1.name + " by Burst!";
            break;
        case "B2WKO":
            updateWinCounts(bey2, bey1, "KO");
            updateRecords(bey2, bey1, "KO");
            winners.textContent = "The winner of this round is: " + bey2.name + " by Knockout!";
            break;
        case "B2WSO":
            updateWinCounts(bey2, bey1, "SO");
            updateRecords(bey2, bey1, "SO");
            winners.textContent = "The winner of this round is: " + bey2.name + " by Sleep Out!";
            break;
        case "B2WBST":
            updateWinCounts(bey2, bey1, "burst");
            updateRecords(bey2, bey1, "burst");
            winners.textContent = "The winner of this round is: " + bey2.name + " by Burst!";
            break;
        case "draw":
            updateWinCounts(bey1, bey2, "draw");
            updateRecords(bey1, bey2, "draw");
            winners.textContent = "It ended in a Draw!";
            break;
        default:
            winners.textContent = "Something went wrong, results not logged.";
    }

}

//add a new, not before generated beyblade to the database
function addBeyblade(bey) {

    var beyblade = {
        _id: allBlades[bey.blade].id + " " + allCores[bey.core].id + " " + allDiscs[bey.disc].id + " " + allDrivers[bey.driver].id + " " + allArmors[bey.armor].id,
        title: bey.name,
        build: bey
    };
    beyBladeDB.put(beyblade, function callback(err, result) {
        if (!err) {
            showBeyblades();
            console.log('Successfully added a beyblade!');
        }
        else{
            console.log(err);
        }
    });

}

//tracking for actual past match ups, so we know what build blades won or lost against, instead of anon stats
function addRecord(challenger, defender){

    var winRecord = {
        _id: challenger.id + " " + defender.id,
        title: challenger.name + " vs " + defender.name,
        wko: 0,
        lko: 0,
        wso: 0,
        lso: 0,
        wbst: 0,
        lbst: 0,
        draws: 0
    }

    recordsDB.put(winRecord, function callback(err, result){
        if(!err){
            console.log("Successfully added a record");
        }
        else{
            console.log(err);
        }
    });

}

function updateRecords(winner, loser, outcome){

    var record1Id = winner.id + " " + loser.id;
    var record2Id = loser.id + " " + winner.id;
    addRecord(winner, loser);
    addRecord(loser, winner)

    switch(outcome){
        case "KO":
            recordsDB.get(record1Id, function(err, doc) {
                if(!err){
                    doc.wko += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            recordsDB.get(record2Id, function(err, doc) {
                if(!err){
                    doc.lko += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            break;
        case "SO":
            recordsDB.get(record1Id, function(err, doc) {
                if(!err){
                    doc.wso += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            recordsDB.get(record2Id, function(err, doc) {
                if(!err){
                    doc.lso += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            break;
        case "burst":
            recordsDB.get(record1Id, function(err, doc) {
                if(!err){
                    doc.wbst += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            recordsDB.get(record2Id, function(err, doc) {
                if(!err){
                    doc.lbst += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            break;
        case "draw":
            recordsDB.get(record1Id, function(err, doc) {
                if(!err){
                    doc.draws += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            recordsDB.get(record2Id, function(err, doc) {
                if(!err){
                    doc.draws += 1;
                    recordsDB.put(doc);
                    displayRecords();
                }
                else{
                    console.log(err);
                }
            });
            break;
        default:
            console.log("Something went wrong. Record not added")
            
    }

}

function displayRecords(){

    var record1 = document.getElementById("record1");
    var ko1 = document.getElementById("ko1");
    var so1 = document.getElementById("so1");
    var bst1 = document.getElementById("bst1");

    var record2 = document.getElementById("record2");
    var ko2 = document.getElementById("ko2");
    var so2 = document.getElementById("so2");
    var bst2 = document.getElementById("bst2");

    var draws = document.getElementById("draws");

    var recordID = bey1.id + " " + bey2.id;

    recordsDB.get(recordID, function(err, doc){
        record1.textContent = bey1.name;
        ko1.textContent = doc.wko;
        so1.textContent = doc.wso;
        bst1.textContent = doc.wbst;

        record2.textContent = bey2.name;
        ko2.textContent = doc.lko;
        so2.textContent = doc.lso;
        bst2.textContent =  doc.lbst;
        
        draws.textContent = doc.draws;
    });

}

//fills the bey selection menu
function showBeyblades() {

    var dbSelectList = document.getElementById("dbSelectList");

    //clear the list so we dont just add more options
    while (dbSelectList.options.length > 0) {                
        dbSelectList.remove(0);
    }        

    beyBladeDB.allDocs({include_docs: true, descending: true}, function(err, doc) {
        doc.rows.sort(function(a, b){
            return (''+a.doc.build.name).localeCompare(b.doc.build.name);
        });
        for(i = 0; i < doc.total_rows; i++){
            if(!err){
                var options = document.createElement("option");
                options.textContent = doc.rows[i].doc.build.name;
                options.value = doc.rows[i].doc._id;
                dbSelectList.appendChild(options);
            }
            else{
                console.log(err);
            }
       }
    });

}

//shows selected bey's stats and allows for the user to set the selected bey to bey 1 or 2
function setDbBey(){

    beyBladeDB.get(selectedBey.value, function(err, doc) {
        if(!err){
            dbBeyName.textContent = doc.build.name;
            dbBeyStats.textContent = "Weight: " + round(doc.build.weight,2) + " grams.";
            dbBeyKO.textContent = "KO Win/Loss: " + doc.build.winsKO + " / " + doc.build.loseKO;
            dbBeySO.textContent = "SO Win/Loss: " + doc.build.winsSO + " / " + doc.build.loseSO;
            dbBeyBst.textContent = "Burst Win/Loss: " + doc.build.winsBst + " / " + doc.build.loseBst;
            dbBeyDraw.textContent = "Draws: " + doc.build.draws;
            dbBey = doc.build;

            //set as bey1 button
            bey1Statbtn.innerHTML = "Set as Bey 1";
            bey1Statbtn.classList.add("btn");
            bey1Statbtn.classList.add("btn-basic");
            bey1Statbtn.addEventListener("click", function() {
                bey1=dbBey;
                wasBey1Generated = true;
                showBeybladeStats(bey1, 1);
                createWinButtons()
            });
            dbBeySpace.append(bey1Statbtn);

            //set as bey2 button
            bey2Statbtn.innerHTML = "Set as Bey 2";
            bey2Statbtn.classList.add("btn");
            bey2Statbtn.classList.add("btn-basic");
            bey2Statbtn.addEventListener("click", function() {
                bey2=dbBey;
                wasBey2Generated = true;
                showBeybladeStats(bey2, 2);
                createWinButtons()
            });
            dbBeySpace.append(bey2Statbtn);

            //edit bey stats in database
            editBeybtn.innerHTML = "Edit Bey Stats";
            editBeybtn.classList.add("btn");
            editBeybtn.classList.add("btn-basic");
            editBeybtn.setAttribute("data-bs-toggle", "modal");
            editBeybtn.setAttribute("data-bs-target", "#editBeyPopup");
            dbBeySpace.append(editBeybtn);

            //delete bey from database button
            removeBeybtn.innerHTML = "Delete Bey";
            removeBeybtn.classList.add("btn");
            removeBeybtn.classList.add("btn-danger");
            removeBeybtn.setAttribute("data-bs-toggle", "modal");
            removeBeybtn.setAttribute("data-bs-target", "#areYouSure");
            dbBeySpace.append(removeBeybtn);

        }
        else{
            console.log(err);
        }
    });
}

//edit beyblade win stats incase of mis inputs
function editBey(wko, lko, wso, lso, wbst, lbst, dr){

    beyBladeDB.get(selectedBey.value, function(err, doc) {
        var statEditor = document.getElementById("statEditor");
        if(!err){
            if(wko){
                doc.build.winsKO = parseInt(wko);                
            }
            if(lko){
                doc.build.loseKO = parseInt(lko);                
            }
            if(wso){
                doc.build.winsSO = parseInt(wso);                
            }
            if(lso){
                doc.build.loseSO = parseInt(lso);                
            }
            if(wbst){
                doc.build.winsBst = parseInt(wbst);                
            }
            if(lbst){
                doc.build.loseBst = parseInt(lbst);                
            }
            if(dr){
                doc.build.draws = parseInt(dr);                
            }
            beyBladeDB.put(doc);
            statEditor.reset();
            showBeyblades();
            dbBeyName.textContent = doc.build.name;
            dbBeyStats.textContent = "Weight: " + round(doc.build.weight,2) + " grams.";
            dbBeyKO.textContent = "KO Win/Loss: " + doc.build.winsKO + " / " + doc.build.loseKO;
            dbBeySO.textContent = "SO Win/Loss: " + doc.build.winsSO + " / " + doc.build.loseSO;
            dbBeyBst.textContent = "Burst Win/Loss: " + doc.build.winsBst + " / " + doc.build.loseBst;
            dbBeyDraw.textContent = "Draws: " + doc.build.draws;
            dbBey = doc.build;
        }
    });

}

//delete a bey from the system
function deleteBey(){

    var dbSelectList = document.getElementById("dbSelectList");

    beyBladeDB.get(selectedBey.value, function(err, doc) {
        if(!err){
            beyBladeDB.remove(doc, function(err, doc){
                if(!err){
                    for (var i=0; i<dbSelectList.length; i++) {
                        if (dbSelectList.options[i].value == selectedBey.value){
                            dbSelectList.remove(i);
                        }
                    }
                    showBeyblades();
                }
                else{
                    console.log(err);
                }
            });
        }
    });
}

//fills the bey selection menu
function deleteAllBeys() {

    // var dbSelectList = document.getElementById("dbSelectList");

    //clear the list so we dont just add more options
    while (dbSelectList.options.length > 0) {                
        dbSelectList.remove(0);
    }        

    beyBladeDB.allDocs({include_docs: true, descending: true}, function(err, doc) {
        for(i = 0; i < doc.total_rows; i++){
            if(!err){
                beyBladeDB.remove(doc.rows[i].doc, function(err, doc){
                    if(err){
                        console.log(err);
                    }
                });
            }
            else{
                console.log(err);
            }
       }
    });

}

//displays the win loss and weight stats for the chosen beyblade
function showBeybladeStats(bey, whichBey) {

    switch(whichBey){
        case 1:
            beyBladeDB.get(bey.id, function(err, doc) {
                if(!err){
                    bey1Is.textContent = "BeyBlade 1 is: " + doc.build.name;
                    bey1Stats.textContent = "Weight: " + round(doc.build.weight,2) + " grams.";
                    bey1KO.textContent = "KO Win/Loss: " + doc.build.winsKO + " / " + doc.build.loseKO;
                    bey1SO.textContent = "SO Win/Loss: " + doc.build.winsSO + " / " + doc.build.loseSO;
                    bey1Bst.textContent = "Burst Win/Loss: " + doc.build.winsBst + " / " + doc.build.loseBst;
                    bey1Draw.textContent = "Draws: " + doc.build.draws;
                }
                else{
                    console.log(err);
                }
            });
        break;
        case 2:
            beyBladeDB.get(bey.id, function(err, doc) {
                if(!err){
                    bey2Is.textContent = "BeyBlade 2 is: " + doc.build.name;
                    bey2Stats.textContent = "Weight: " + round(doc.build.weight,2) + " grams.";
                    bey2KO.textContent = "KO Win/Loss: " + doc.build.winsKO + " / " + doc.build.loseKO;
                    bey2SO.textContent = "SO Win/Loss: " + doc.build.winsSO + " / " + doc.build.loseSO;
                    bey2Bst.textContent = "Burst Win/Loss: " + doc.build.winsBst + " / " + doc.build.loseBst;
                    bey2Draw.textContent = "Draws: " + doc.build.draws;
                }
                else{
                    console.log(err);
                }
            });
        break;
    }

}

//updates the win and loss counts for both beys when a result is chosen
function updateWinCounts(winner, loser, outcome){

    switch(outcome){
        case "KO":
        beyBladeDB.get(winner.id, function(err, doc) {
            if(!err){
                doc.build.winsKO += 1;
                beyBladeDB.put(doc);
                showBeybladeStats(bey1,1);
            }
            else{
                console.log(err);
            }
        });
    
        beyBladeDB.get(loser.id, function(err, doc) {
            if(!err){
                doc.build.loseKO += 1;
                beyBladeDB.put(doc);
                showBeybladeStats(bey2,2);
            }
            else{
                console.log(err);
            }
        });
        break;

        case "SO":
            beyBladeDB.get(winner.id, function(err, doc) {
                if(!err){
                    doc.build.winsSO += 1;
                    beyBladeDB.put(doc);
                    showBeybladeStats(bey1,1);
                }
                else{
                    console.log(err);
                }
            });
        
            beyBladeDB.get(loser.id, function(err, doc) {
                if(!err){
                    doc.build.loseSO += 1;
                    beyBladeDB.put(doc);
                    showBeybladeStats(bey2,2);
                }
                else{
                    console.log(err);
                }
            });
        break;

        case "burst":
            beyBladeDB.get(winner.id, function(err, doc) {
                if(!err){
                    doc.build.winsBst += 1;
                    beyBladeDB.put(doc);
                    showBeybladeStats(bey1,1);
                }
                else{
                    console.log(err);
                }
            });
        
            beyBladeDB.get(loser.id, function(err, doc) {
                if(!err){
                    doc.build.loseBst += 1;
                    beyBladeDB.put(doc);
                    showBeybladeStats(bey2,2);
                }
                else{
                    console.log(err);
                }
            });
        break;

        case "draw":
            beyBladeDB.get(winner.id, function(err, doc) {
                if(!err){
                    doc.build.draws += 1;
                    beyBladeDB.put(doc);
                    showBeybladeStats(bey1,1);
                }
                else{
                    console.log(err);
                }
            });
        
            beyBladeDB.get(loser.id, function(err, doc) {
                if(!err){
                    doc.build.draws += 1;
                    beyBladeDB.put(doc);
                    showBeybladeStats(bey2,2);
                }
                else{
                    console.log(err);
                }
            });
        break;

        default:
            console.log("something went wrong with updating wins");

    }
    
}

main();