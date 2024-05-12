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
        },
        resetOutput: function(){
            this.formSubmitted = false;
        },
        submitForm: function(){
            const selectElement = document.getElementById("planet-choice");
            const selectedOp = selectElement.options[selectElement.selectedIndex];
            const planetName = selectedOp.textContent;
            if (this.selectedDomain === "solar-system"){
                const planetObject = endoplanets[planetName];
                const calculator = new SolarCalculator(planetName);
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
                planetObject.makeObservation();
            } else if (this.selectedDomain === 'deep-space'){

            }
            this.formSubmitted = true;
        }
    },
});