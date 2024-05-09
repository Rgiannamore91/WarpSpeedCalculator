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
        console.log(this._greeting[this._arrayPosition])
    }
};

// Arrays
const mercuryObservations = [
    "Mercury is the closest planet to the Sun and the smallest planet in the solar system.",
    "It has a very thin atmosphere composed mainly of oxygen, sodium, hydrogen, helium, and potassium.",
    "Mercury has a large temperature variation between its day and night sides due to its lack of atmosphere.",
    "It has a cratered surface similar to the Moon, indicating a history of impacts from asteroids and comets.",
    "Mercury's orbit is the most eccentric of all the planets, meaning it has the most elliptical orbit.",
];
const venusObservations = [
    "Venus is often called Earth's 'sister planet' due to its similar size, mass, and composition.",
    "It has a thick atmosphere mainly composed of carbon dioxide, with clouds of sulfuric acid.",
    "Venus experiences extreme greenhouse effect, making it the hottest planet in the solar system with surface temperatures high enough to melt lead.",
    "Its rotation is unique, as it rotates in the opposite direction to most planets, resulting in retrograde motion.",
    "Venus has a young surface with many volcanoes, lava plains, and large impact craters.",
];
const marsObservations = [
    "Mars is often referred to as the 'Red Planet' due to its reddish appearance caused by iron oxide (rust) on its surface.",
    "It has the largest volcano in the solar system, Olympus Mons, and the deepest canyon, Valles Marineris.",
    "Mars has polar ice caps composed of water and carbon dioxide.",
    "Evidence suggests that Mars had liquid water on its surface in the past, indicating the possibility of ancient life.",
    "It has a thin atmosphere mainly composed of carbon dioxide, with low atmospheric pressure.",
];
const jupiterObservations = [
    "Jupiter is the largest planet in the solar system and has a strong magnetic field.",
    "It has a dynamic atmosphere with prominent bands of clouds, including the Great Red Spot, a massive storm larger than Earth",
    "Jupiter has more than 75 moons, including the four largest moons known as the Galilean moons: Io, Europa, Ganymede, and Callisto.",
    "It has a faint ring system composed of dust particles.",
    "Jupiter's composition is mostly hydrogen and helium, similar to a small star.",
];
const saturnObservations = [
    "Saturn is known for its spectacular ring system, which is composed of icy particles and debris.",
    "It has the second-largest moon in the solar system, Titan, which has a thick atmosphere and lakes of liquid methane and ethane.",
    "Saturn's atmosphere features bands of clouds and a hexagonal-shaped jet stream near its north pole.",
    "It has numerous moons, including Enceladus, which has geysers of water vapor erupting from its surface.",
    "Saturn is less dense than water, meaning it could float in a bathtub large enough to hold it.",
];
const uranusObservations = [
    "Hehe... he said Ur-anus.",
    "You can fit 63 Earths in Uranus. Lol.",
    "Hey dude... I can see Uranus.",
    "Uranus is huge man.",
    "If we get too close to Uranus, we'll get sucked in by its gravitational pull.",
];
const neptuneObservations = [
    "Neptune is known for its striking blue color, which is due to the presence of methane in its atmosphere. Methane absorbs red light, giving Neptune its characteristic blue hue.",
    "Similar to Jupiter's Great Red Spot and Saturn's hexagonal storm, Neptune also exhibits dynamic weather patterns. The most notable storm on Neptune is the Great Dark Spot, a massive storm system comparable in size to Earth, although it was first observed in the late 1980s and has since dissipated.",
    "Neptune has a faint ring system composed of dust particles. Unlike Saturn's prominent rings, Neptune's rings are difficult to see from Earth and were discovered in 1984 during the Voyager 2 flyby.",
    "Neptune has 14 known moons, the largest of which is Triton. Triton is unique among the large moons in the solar system because it orbits Neptune in a retrograde direction, opposite to the planet's rotation. It is also suspected to be a captured Kuiper Belt object.",
    "Neptune experiences extreme weather conditions, including high-speed winds that can reach up to 2,100 kilometers per hour (1,300 miles per hour). Its atmosphere is also characterized by violent storms and large-scale cloud features.",
];

// Objects
let idx = Math.floor(Math.random()*5);
const endoplanets = {
    "Mercury" : new EndoPlanet("Mercury", 0.000000391, mercuryObservations[idx]),
    "Venus" : new EndoPlanet("Venus", 0.000000153, venusObservations[idx]),
    "Mars" : new EndoPlanet("Mars", 0.000024, marsObservations[idx]),
    "Jupiter" : new EndoPlanet("Jupiter", 0.000465, jupiterObservations[idx]),
    "Saturn" : new EndoPlanet("Saturn", 0.000833, saturnObservations[idx]),
    "Uranus" : new EndoPlanet("Uranus", 0.001697, uranusObservations[idx]),
    "Neptune" : new EndoPlanet("Neptune", 0.002719, neptuneObservations[idx]),
};

const exoplanets = {
    "Andoria" : new ExoPlanet("Andoria", 11.6, true, "Let the heat drop"),
    "Vulcan" : new ExoPlanet("Vulcan", 16.5, true, "Live long and prosper."),
    "Risa" : new ExoPlanet("Risa", 90, true, "All that is ours is yours"),
    "Qo'noS" : new ExoPlanet("Qo'noS", 112, false, "nuq'neH!? (What do you want!?)"),
    "Romulus" : new ExoPlanet("Romulus", 130, false,"Jolan tru (find peace)"),
    "Bajor" : new ExoPlanet("Bajor", 52, true, "peldor joi"),

};