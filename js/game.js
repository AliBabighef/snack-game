
import {
    upSound, downSound, leftSound,
    rightSound, eatSound, deadSound
} from "./jsFile.js"

import {
    fstX, sndY, allSnak, snak, containner_Win,
    updatePlaceSnak, filling,
    growingSnak, PositionMeals,
    allActAdding, allActRem, snkGrw, win
} from "./input.js";

import { speedSource } from "./setting.js"

export let toggleUp = 50;
export let toggleLR = 50;

export let defaulMoving;
export let stopTop;
export let stopDown;
export let stopLeft;
export let stopRight;

export let ellSnakPlace = document.querySelector(".containner-Body");


function snakMoving(snak) {

    snak.style = `position: absolute;
        top: ${toggleTopUp}
        left: ${toggleLR}`
    snak.style.gridRowStart = growingSnak.rowStart
    snak.style.gridColumnStart = growingSnak.columnStart

}

function defMove() {

    defaulMoving = setInterval(function () {

        LRMovingByKeyBord(snak, toggleLR)
        snkGrw(snak, growingSnak.width)

        if (toggleLR == 100) {

            toggleLR = 0

        }

        toggleLR += 1;

    }, speedSource)

}

// defMove()


window.addEventListener("keydown", function (e) {

    switch (e.key) {

        case "ArrowUp":
            removingAct(snak)
            clearInterval(stopDown)
            clearInterval(stopRight)
            clearInterval(stopLeft)
            clearInterval(defaulMoving)
            upSound();
            stopTop = setInterval(function () {
                movingByKeyBord(snak, toggleUp)
                snkGrw(snak, growingSnak.width)

                if (toggleUp == 0) {

                    toggleUp = 100

                }



                toggleUp -= 1;

            }, speedSource)

            break;

    }

    switch (e.key) {

        case "ArrowDown":
            removingAct(snak)
            allActAdding(allSnak)
            clearInterval(stopTop)
            clearInterval(stopRight)
            clearInterval(stopLeft)
            clearInterval(defaulMoving)
            downSound()
            stopDown = setInterval(function () {

                movingByKeyBord(snak, toggleUp)
                snkGrw(snak, growingSnak.width)

                if (toggleUp == 100) {

                    toggleUp = 0

                }

                toggleUp += 1;

            }, speedSource)

            break;

    }
    switch (e.key) {

        case "ArrowLeft":
            addingAct(snak)
            allActRem(allSnak)
            clearInterval(stopTop)
            clearInterval(stopDown)
            clearInterval(stopRight)
            clearInterval(defaulMoving)
            leftSound()

            stopLeft = setInterval(function () {
                LRMovingByKeyBord(snak, toggleLR)
                snkGrw(snak, growingSnak.width)
                if (toggleLR == -2) {

                    toggleLR = 98

                }
                toggleLR -= 1;

            }, speedSource)

    }
    switch (e.key) {

        case "ArrowRight":
            addingAct(snak)
            allActRem(allSnak)
            clearInterval(stopTop)
            clearInterval(stopDown)
            clearInterval(stopLeft)
            clearInterval(defaulMoving)
            rightSound()
            stopRight = setInterval(function () {
                LRMovingByKeyBord(snak, toggleLR)
                snkGrw(snak, growingSnak.width)

                if (toggleLR == 100) {

                    toggleLR = 0

                }

                toggleLR += 1;

            }, speedSource)

    }


})


function movingByKeyBord(ellSnak, num) {

    ellSnak.style = `position:absolute;
        top: ${num}%;
        left: ${toggleLR}%`;

    if (
        num == fstX && toggleLR == sndY
        || num == fstX && toggleLR == (sndY + 1)
        || num == fstX && toggleLR == (sndY - 1)
        || num == fstX && toggleLR == (sndY + 2)
        || num == fstX && toggleLR == (sndY - 2)

    ) {
        console.log("num")
        eatSound()
        updatePlaceSnak();
        PositionMeals(fstX, sndY)
        growingSnak.result += 50;
        filling()
        win()
        // if (growingSnak.result == 100) {

        //     containner_Win.classList.add("act");
        //     win()

        // }

    }

}

function LRMovingByKeyBord(ellSnak, toggleLR) {

    ellSnak.style = `position:absolute;
        left: ${toggleLR}%;
        top: ${toggleUp}%`;

    if (
        toggleLR == sndY && toggleUp == fstX
        || toggleLR == sndY && toggleUp == (fstX + 1)
        || toggleLR == sndY && toggleUp == (fstX - 1)
        || toggleLR == sndY && toggleUp == (fstX + 2)
        || toggleLR == sndY && toggleUp == (fstX - 2)
        || toggleLR == sndY && toggleUp == (fstX - 3)
        || toggleLR == sndY && toggleUp == (fstX + 3)
    ) {
        console.log("toogleLR")
        eatSound()
        updatePlaceSnak()
        PositionMeals(fstX, sndY)
        growingSnak.result += 10;
        filling()
        win()
        // if (growingSnak == 100) {

        //     containner_Win.classList.add("act");
        //     win()

        // }

    }
}
// console.log(fstX, sndY)

function removingAct(ell) {

    ell.classList.add("active");


}
function addingAct(ell) {


    ell.classList.remove("active");


}

// document.querySelector("body").innerHTML = location.href