
// document.querySelector("body").innerHTML = location.href;

let settingIco = document.querySelector(".setting");

export let speedSource = 50;

let bodyOfSett = document.querySelector(".bodyOfSett");

let allBodySellect = document.querySelectorAll(".bodySellect");
let allBodySellectSpn = document.querySelectorAll(".bodySellect .select");

settingIco.addEventListener("click", function (e) {

    e.stopPropagation();

    this.classList.toggle("act");
    bodyOfSett.classList.toggle("act");

})


allBodySellect.forEach(el => {

    el.addEventListener("click", function (e) {

        allBodySellectSpn.forEach(spn => {

            spn.classList.remove("act")

        })
        e.target.firstElementChild.classList.add("act");

        speedSource = parseInt(e.target.firstElementChild.dataset.sp)
        e.target.firstElementChild.dataset.sp
        speedSource = parseInt(e.target.firstElementChild.dataset.sp)

    })


})


