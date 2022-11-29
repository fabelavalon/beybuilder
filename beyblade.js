/*==========================================================*
 * BeyBuilder v1.0 for Dynamite Battle and Burst Ultimate   *
 * Author: Fabel                                            *
 * Copyright 2022                                           *
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
        if(((this.disc==12) && (this.driver!=31)) || ((this.disc!=12) && (this.driver==31))){
            error.textContent = "Shot is both a Forge Disc and a Driver";
            return false;
        }

        //Almight Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==0) && (this.driver!=3)) || ((this.disc!=0) && (this.driver==3))){
            error.textContent = "Almight is both a Forge Disc and a Driver";
            return false;
        }

        //Almight+V Driver, it's both a Driver and a Forge Disc
        else if(((this.disc==1) && (this.driver!=4)) || ((this.disc!=1) && (this.driver==4))){
            error.textContent = "Almight+V is both a Forge Disc and a Driver";
            return false;
        }

        //L Gear, for the Belial stock Blades only
        else if((this.armor==10) && !(this.blade>=5 && this.blade<=13)){
            error.textContent = "L Gear is for Dangerous, Devil, Divine, and Dynamite Blades only.";
            return false;
        }

        //H Gear, for Divine only
        else if((this.getArmor()==11) && !(this.blade>=9 && this.blade<=11)){
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

    //Greatest Rapheal and Shot make my life hard
    findName(){
        if((this.blade==15)&&(this.disc!=12)){
            this.name = allBlades[this.blade].name + "-" + allDiscs[this.disc].abbv + "." + allDrivers[this.driver].abbv;
        }
        else if((this.blade==15)&&(this.disc==12)){
            this.name = allBlades[this.blade].name + "." + allDiscs[this.disc].abbv;
        }
        else if(this.disc==12){
            this.name = allBlades[this.blade].name + " " + allCores[this.core].name + "." + allDiscs[this.disc].abbv + "." + allArmors[this.armor].abbv;
        }
        else{
            this.name = allBlades[this.blade].name + " " + allCores[this.core].name + "-" + allDiscs[this.disc].abbv + "." + allDrivers[this.driver].abbv + "-" + allArmors[this.armor].abbv;
        }
    }

}