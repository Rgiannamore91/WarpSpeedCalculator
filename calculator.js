"use strict";
class SolarCalculator {
    constructor (name) {
        this._name=name;
        this._velocityPerSecond = 299792;
    }

    get name() {
        return this._name;
    }

    getPlanet () {
        return endoplanets[this._name];
    }
    
    seconds () {
        const planet = this.getPlanet();
        const lightSeconds = planet.distanceFromEarth / this._velocityPerSecond;
        return lightSeconds;
    }
    
    minutes () {
        const lightMinutes = this.seconds() / 60;
        return lightMinutes;
    }
    
    hours () {
        const lightHours = this.minutes() / 60;
        return lightHours;
    }
};

class ExoCalculator {
    constructor (name, warpFactor) {
        this._name=name;
        this._warpFactor=warpFactor;
    }
    
    get name() {
        return this._name;
    }

    get warpFactor () {
        return this._warpFactor;
    }
};