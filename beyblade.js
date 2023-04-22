/*==========================================================*
 * BeyBuilder v1.1 for Dynamite Battle and Burst Ultimate   *
 * Author: Fabel                                            *
 * Copyright 2022-23                                        *
 *==========================================================*/

var allCores = cores;
var allBlades = blades;
var allArmors = armors;
var allDiscs = forgeDiscs;
var allDrivers = drivers;

class BeyBlade {

    blade = -1;
    core = -1;
    armor = -1;
    disc = -1;
    driver = -1;
    id = "";
    name = "";
    weight = 0;
    spin = "invalid";
    winsKO = 0;
    winsSO = 0;
    winsBst = 0;
    loseKO = 0;
    loseSO = 0;
    loseBst = 0;
    draws = 0;

    constructor(blade, core, armor, disc, driver){

        this.blade = blade;
        this.core = core;
        this.armor = armor;
        this.disc = disc;
        this.driver = driver;
        this.weight = allBlades[this.blade].weight + allCores[this.core].weight + allDiscs[this.disc].weight + allDrivers[this.driver].weight + allArmors[this.armor].weight;
        this.id = allBlades[this.blade].id + " " + allCores[this.core].id + " " + allDiscs[this.disc].id + " " + allDrivers[this.driver].id + " " + allArmors[this.armor].id;
        
        this.findName();
        this.findSpin();

    }

    //are these necessary?
    getBlade(){
        return this.blade;
    }
    getCore(){
        return this.core;
    }
    getArmor(){
        return this.armor;
    }
    getDisc(){
        return this.disc;
    }
    getDriver(){
        return this.driver;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getWeight(){
        return this.weight;
    }
    getSpin(){
        return this.spin;
    }
    getDBid(){
        return this.id;
    }

    //makes sure all parts are compaitable, mostly by core and blade spin...
    validateBeyBuild(){

        if((this.spin!="invalid")&&(this.partsCheck())&&((allCores[this.core].spin==allBlades[this.blade].spin)||(allCores[this.core].spin=="both")||(allBlades[this.blade].spin=="both"))){
            return true;
        }
        else{
            return false;
        }

    }

    //...this function checks for the parts that take up multiple build slots, like Shot or Greatest Rapheal
    partsCheck(){
        
        //import error field
        var error = document.getElementById("error");

        //Shot Driver, it's both a Driver and a Forge Disc
        if(((this.disc==21) && (this.driver!=119)) || ((this.disc!=21) && (this.driver==119 ))){
            error.textContent = "Shot is both a Forge Disc and a Driver";
            return false;
        }

        //All Might Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==0) && (this.driver!=8)) || ((this.disc!=0) && (this.driver==8))){
            error.textContent = "Almight is both a Forge Disc and a Driver";
            return false;
        }

        //All Might+V Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==1) && (this.driver!=9)) || ((this.disc!=1) && (this.driver==9))){
            error.textContent = "Almight+V is both a Forge Disc and a Driver";
            return false;
        }

        //All Might+S Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==2) && (this.driver!=10)) || ((this.disc!=2) && (this.driver==10))){
            error.textContent = "Almight+S is both a Forge Disc and a Driver";
            return false;
        }

        //All Might+D Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==3) && (this.driver!=11)) || ((this.disc!=3) && (this.driver==11))){
            error.textContent = "Almight+D is both a Forge Disc and a Driver";
            return false;
        }

        //All Might+SV Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==4) && (this.driver!=12)) || ((this.disc!=4) && (this.driver==12))){
            error.textContent = "Almight+SV is both a Forge Disc and a Driver";
            return false;
        }

        //All Might+DV Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==5) && (this.driver!=13)) || ((this.disc!=5) && (this.driver==13))){
            error.textContent = "Almight+DV is both a Forge Disc and a Driver";
            return false;
        }

        //Generate, its a driver and a disc
        else if(((this.disc==7) && (this.driver!=57)) || ((this.disc!=7) && (this.driver==57))){
            error.textContent = "Generate is both a Forge Disc and a Driver";
            return false;
        }

        //Hybrid, its a driver disc
        else if(((this.disc==9) && (this.driver!=65)) || ((this.disc!=9) && (this.driver==65))){
            error.textContent = "Hybrid is both a Forge Disc and a Driver";
            return false;
        }

        //Ignition, it driver disc
        else if(((this.disc==10) && (this.driver!=66)) || ((this.disc!=10) && (this.driver==66))){
            error.textContent = "Ignition is both a Forge Disc and a Driver";
            return false;
        }

        //Mugen, it a drisc
        else if(((this.disc==15) && (this.driver!=91)) || ((this.disc!=15) && (this.driver==91))){
            error.textContent = "Mugen is both a Forge Disc and a Driver";
            return false;
        }

        //Mugen-L, it dddddrrrr
        else if(((this.disc==16) && (this.driver!=92)) || ((this.disc!=16) && (this.driver==92))){
            error.textContent = "Mugen-L is both a Forge Disc and a Driver";
            return false;
        }

        //L Gear, for the Belial stock Blades only
        else if((this.armor==10) && !(this.blade>=5 && this.blade<=13)){
            error.textContent = "L Gear is for Dangerous, Devil, Divine, and Dynamite Blades only.";
            return false;
        }

        //H Gear, for Divine only
        else if((this.armor==11) && !(this.blade>=9 && this.blade<=11)){
            error.textContent = "H Gear is for Divine variants only.";
            return false;
        }

        //Greatest Rapheal is 3 parts. why.
        else if((this.blade==15 && (this.core!=7||this.armor!=12))||(this.core==7 && (this.blade!=15||this.armor!=12))||(this.armor==12 && (this.core!=7||this.blade!=15))){
            error.textContent = "Greatest Rapheal is simultaniously a Blade, Core, and Armor.";
            return false;
        }

        //looks good to me
        else{
            return true;
        }
    }

    //turns out this is harder than you'd think
    findSpin(){

        //if the spin of the blade and core match, we gucci
        if(allBlades[this.blade].spin==allCores[this.core].spin){
            this.spin = allBlades[this.blade].spin;
        }
        //if only one of them is both spin, make it the spin of the one that isn't
        else if(allBlades[this.blade].spin=="both" || allCores[this.core].spin=="both"){
            if(allBlades[this.blade].spin=="both"){
                this.spin = allCores[this.core].spin;
            }
            else if(allCores[this.core].spin=="both"){
                this.spin = allBlades[this.blade].spin;
            }
        }
        //otherwise the bey is invalid
        else{
            this.spin = "invalid";
        }

    }

    //Driscs make my life hard
    findName(){
        if((this.blade==15)&&!((this.disc==21)||((this.disc>=0)&&(this.disc<=5))||(this.disc==7)||(this.disc==9)||(this.disc==10)||(this.disc==15)||(this.disc==16))){
            this.name = allBlades[this.blade].name + "-" + allDiscs[this.disc].abbv + "." + allDrivers[this.driver].abbv;
        }
        else if((this.blade==15)&&((this.disc==21)||((this.disc>=0)&&(this.disc<=5))||(this.disc==7)||(this.disc==9)||(this.disc==10)||(this.disc==15)||(this.disc==16))){
            this.name = allBlades[this.blade].name + "." + allDiscs[this.disc].abbv;
        }
        else if((this.disc==21)||((this.disc>=0)&&(this.disc<=5))||(this.disc==7)||(this.disc==9)||(this.disc==10)||(this.disc==16)||(this.disc==16)){
            this.name = allBlades[this.blade].name + " " + allCores[this.core].name + "." + allDiscs[this.disc].abbv + "-" + allArmors[this.armor].abbv;
        }
        else{
             this.name = allBlades[this.blade].name + " " + allCores[this.core].name + "-" + allDiscs[this.disc].abbv + "." + allDrivers[this.driver].abbv + "-" + allArmors[this.armor].abbv;
         }
     }

}