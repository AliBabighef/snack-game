
import {
    defaulMoving,
    stopTop,
    stopDown,
    stopLeft,
    stopRight
}
    from "./game.js"

export let placeOfM = document.querySelector(".containner-Body");
export let containner_Win = document.querySelector(".con-snak .containner_Win");

export let allSnak = [];

export let growingSnakPo = {

    x: 1,
    y: 2,
}

export let snak = document.querySelector(".snak");

export let custom = {

    xPrim: 1,
    yPrim: 2

}


let meals = {

    x: 90,
    y: 90

}

let result = document.querySelector(".result span");

export let growingSnak = {

    width: 42,
    result: 0

}


export function filling() {

    result.style.width = growingSnak.result + "%"

}


export let fstX = Math.floor(Math.random() * meals.x);
export let sndY = Math.floor(Math.random() * meals.y);

export function updatePlaceSnak() {

    fstX = Math.floor(Math.random() * meals.x);
    sndY = Math.floor(Math.random() * meals.y);


}

export let Ellmeals = document.createElement("div");
Ellmeals.className = "mealsSnak";
placeOfM.appendChild(Ellmeals);

export function PositionMeals(x, y) {

    Ellmeals.style = `position: absolute;
        top: ${x}%;
        left: ${y}%;`

}
PositionMeals(fstX, sndY)

function won() {

    clearInterval(stopDown)
    clearInterval(stopTop)
    clearInterval(stopRight)
    clearInterval(stopLeft)
    clearInterval(defaulMoving)
    document.querySelector("body").innerHTML = "game over"

}

export function allActAdding(ell) {

    ell.forEach(el => {
        el.classList.add("active2");
    });

}
export function allActRem(ell) {

    ell.forEach(el => {
        el.classList.remove("active2");
    });

}
export function snkGrw(ell, wdt) {

    "use strict";

    ell.style.width = `${wdt}px`

}
snkGrw(snak, growingSnak.width)

export function win() {

    "use strict";
    if (growingSnak.result == 100) {

        clearInterval(defaulMoving)
        clearInterval(stopTop)
        clearInterval(stopDown)
        clearInterval(stopLeft)
        clearInterval(stopRight)
        containner_Win.classList.add("win")
        creating()

        console.log(containner_Win)

    }

}


function creating() {

    let crMainsDiv = document.createElement("div");
    crMainsDiv.className = "state_game";
    let crtxtMains = document.createTextNode(`good! You Have Won A Good Result ${growingSnak.result}%`);
    crMainsDiv.appendChild(crtxtMains);
    crMainsDiv.appendChild(containner_Win);

}
