"use strict";
const app = new Vue({
    el: "#app",
    data: {
        planetChoice: "",
        warpFactor: 1,
        years: 0,
        weeks: 0,
        days: 0,
        hours:0,
        minutes: 0,
        seconds: 0,
        countedInYears: false,
        countedInWeeks: false,
        countedInDays: false,
        countedInHours: false,
        countedInMinutes: false,
        countedInSeconds: false,
        selectedDomain: "solar-system",
        formSubmitted: false,
        comment: "",
    },
    computed:{
        formIsValid: function () {
            return this.planetChoice
        }
    },
    methods: {
        resetFields: function(){
            this.planetChoice = '';
            this.warpFactor = 1;
            this.formSubmitted = false;
            this.countedInYears = false;
            this.countedInWeeks = false;
            this.countedInDays = false;
            this.countedInHours = false;
            this.countedInMinutes = false;
            this.countedInSeconds = false;
            this.years = 0;
            this.weeks = 0;
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.comment = "";
        },
        resetOutput: function(){
            this.formSubmitted = false;
            this.countedInYears = false;
            this.countedInWeeks = false;
            this.countedInDays = false;
            this.countedInHours = false;
            this.countedInMinutes = false;
            this.countedInSeconds = false;
            this.years = 0;
            this.weeks = 0;
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.comment = "";
        },
        submitForm: function(){
            const selectElement = document.getElementById("planet-choice");
            const selectedOp = selectElement.options[selectElement.selectedIndex];
            const planetName = selectedOp.textContent;
            const selectElement2 = document.getElementById("warp-factor");
            const selectedOp2 = selectElement2.options[selectElement2.selectedIndex];
            const warpFactor = parseFloat(selectedOp2.value);
            if (this.selectedDomain === "solar-system"){
                const planetObject = endoplanets[planetName];
                const calculator = new SolarCalculator(planetName, warpFactor);
                if (calculator.hours() >= 1) {
                    this.hours = calculator.hours();
                    this.countedInHours = true;
                } else if (calculator.minutes() >= 1) {
                    this.minutes = calculator.minutes();
                    this.countedInMinutes = true;
                } else {
                    this.seconds = calculator.seconds();
                    this.countedInSeconds = true;
                }
                this.comment = planetObject.observation;
            } else if (this.selectedDomain === 'deep-space'){
                const planetObject = exoplanets[planetName];
                const calculator = new ExoCalculator(planetName, warpFactor)
                if (calculator.years() >= 1) {
                    this.years = calculator.years();
                    this.countedInYears = true;
                }else if (calculator.weeks() >= 1) {
                    this.weeks = calculator.weeks();
                    this.countedInWeeks = true;
                }else if (calculator.days() >= 1) {
                    this.days = calculator.days();
                    this.countedInDays = true;
                }else if (calculator.hours() >= 1) {
                    this.hours = calculator.hours();
                    this.countedInHours = true;
                } else if (calculator.minutes() >= 1) {
                    this.minutes = calculator.minutes();
                    this.countedInMinutes = true;
                } else {
                    this.seconds = calculator.seconds();
                    this.countedInSeconds = true;
                }
                this.comment = planetObject.greeting;
            }
            this.formSubmitted = true;
        }
    }, 
});