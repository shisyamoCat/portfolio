$(document).ready(function(){
    function round(value, unit) {
        let base = 10;
        base **= unit;
        return Math.round(value * base) / base;
    }


    function toGram() {
        let weight_form = document.getElementById("weight-form");
        let weight_unit = document.getElementById("weight-unit");

        if (weight_form.value != "") {
            let kg = document.getElementById("kg");
            let g = document.getElementById("g");
            let ans = weight_form.value * 0.45359237;

            if (weight_unit.value == "ounces") {
                ans /= 16;
            }

            kg.innerHTML = round(ans, 3).toLocaleString();
            g.innerHTML = round(ans * 1000, 3).toLocaleString();
        }
    }

    function toMeter() {
        let length_form = document.getElementById("length-form");
        let length_unit = document.getElementById("length-unit");

        if (length_form.value != "") {
            let m = document.getElementById("m");
            let cm = document.getElementById("cm");
            let mm = document.getElementById("mm");
            let ans = length_form.value * 0.9144;

            if (length_unit.value == "feet") {
                ans /= 3;
            }
            if (length_unit.value == "inch") {
                ans /= 36;
            }

            m.innerHTML = round(ans, 4).toLocaleString();;
            cm.innerHTML = round(ans * 100, 4).toLocaleString();;
            mm.innerHTML = round(ans * 1000, 4).toLocaleString();;
        }
    }

    let weight = document.getElementById("weight-form");
    let length = document.getElementById("length-form");
    weight.addEventListener("keyup", toGram);
    length.addEventListener("keyup", toMeter);

});