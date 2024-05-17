"use strict";
class SolarCalculator {
    constructor (name, warpFactor) {
        this._name=name;
        this._c = 299792;
        this._velocity=Math.pow(warpFactor, (10/3)) * this._c;
    }

    get name() {
        return this._name;
    }

    getPlanet () {
        return endoplanets[this._name];
    }
    
    seconds () {
        const planet = this.getPlanet();
        const lightSeconds = planet.distanceFromEarth / this._velocity;
        return lightSeconds.toFixed(2);
    }
    
    minutes () {
        const lightMinutes = this.seconds() / 60;
        return lightMinutes.toFixed(2);
    }
    
    hours () {
        const lightHours = this.minutes() / 60;
        return lightHours.toFixed(2);
    }
};

class ExoCalculator {
    constructor (name, warpFactor) {
        this._name=name;
        this._c = 299792;
        this._velocity=Math.pow(warpFactor, (10/3)) * this._c;
    }
    
    get name() {
        return this._name;
    }

    get velocity () {
        return this._velocity;
    }

    getPlanet () {
        return exoplanets[this._name]
    }

    seconds () {
        const planet = this.getPlanet();
        const lightSeconds = (planet.distanceFromEarth * (9.461 * Math.pow(10, 12))) / this._velocity;
        return lightSeconds.toFixed(2);
    }
    
    minutes () {
        const lightMinutes = this.seconds() / 60;
        return lightMinutes.toFixed(2);
    }
    
    hours () {
        const lightHours = this.minutes() / 60;
        return lightHours.toFixed(2);
    }

    days () {
        const lightDays = this.hours() / 24;
        return lightDays.toFixed(2);
    } 
    weeks () {
        const lightWeeks = this.days() / 7;
        return lightWeeks.toFixed(2);
    }
    years () {
        const lightYears = this.weeks() / 52;
        return lightYears.toFixed(2);
    }
};