"use strict";

// Classes
class Planet  {
    constructor(name, distanceFromEarth){
        this._name = name;
        this._distanceFromEarth = distanceFromEarth;
    }
    get name(){
        return this._name;
    }
    get distanceFromEarth(){
        return this._distanceFromEarth;
    }
};

class EndoPlanet extends Planet {
    constructor(name, distanceFromEarth, observation){
        super(name, distanceFromEarth);
        this._observation = observation;
    }
    get observation() {
        return this._observation;
    }
    makeObservation(){
        console.log(this._observation);
    }
};

class ExoPlanet extends Planet {
    constructor(name, distanceFromEarth, federationPlanet, greeting){
        super(name, distanceFromEarth);
        this._federationPlanet = federationPlanet;
        this._greeting = greeting;
    }
    get federationPlanet(){
        return this._federationPlanet;
    } 
    get greeting(){
        return this._greeting;
    }
    greet() {
        console.log(this._greeting)
    }
};
// Arrays

// Objects
const endoplanets = {
    "Mercury" : new EndoPlanet("Mercury", 0.000000391, "A scorched messenger, whispers of time's distortion in its fiery embrace." ),
    "Venus" : new EndoPlanet("Venus", 0.000000153, "Shrouded in veils, a celestial temptress, where toxic secrets dance beneath crushing skies."),
    "Mars" : new EndoPlanet("Mars", 0.000024, "The rusted heart of the night, beckoning explorers with its dusty allure, whispers of ancient rivers."),
    "Jupiter" : new EndoPlanet("Jupiter", 0.000465, " Regal giant, guardian of the void, crowned by the swirling tempests of celestial power."),
    "Saturn" : new EndoPlanet("Saturn", 0.000833, "Adorned in a cosmic ring, the grand conductor of celestial grace, where mystery and beauty entwine."),
    "Uranus" : new EndoPlanet("Uranus", 0.001697, "Sideways dreamer, a celestial waltz in the heavens, where the rules of rotation defy convention."),
    "Neptune" : new EndoPlanet("Neptune", 0.002719, "Deep-blue enigma, storms as cosmic art, where liquid winds weave a watery tapestry."),
};

const exoplanets = {
    "Andoria" : new ExoPlanet("Andoria", 11.6, true, "Let the heat drop"),
    "Vulcan" : new ExoPlanet("Vulcan", 16.5, true, "Live long and prosper."),
    "Risa" : new ExoPlanet("Risa", 90, true, "All that is ours is yours"),
    "Qo'nos" : new ExoPlanet("Qo'nos", 112, false, "nuq'neH!? (What do you want!?)"),
    "Romulus" : new ExoPlanet("Romulus", 130, false,"Jolan tru (find peace)"),
};






