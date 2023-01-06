var guestAddOneButton = document.querySelector("#guest_plus_one");
var guestAddTwoButton = document.querySelector("#guest_plus_two");
var guestAddThreeButton = document.querySelector("#guest_plus_three");
var homeAddOneButton = document.querySelector("#home_plus_one");
var homeAddTwoButton = document.querySelector("#home_plus_two");
var homeAddThreeButton = document.querySelector("#home_plus_three");
var homeTotal = document.querySelector("#home-score");
var guestTotal = document.querySelector("#guest-score");
var resetHomeButton = document.querySelector("#reset-home");
var resetGuestButton = document.querySelector("#reset-guest");
var homeScore = 0;
var guestScore = 0;




function guestAddOne() {
    guestScore += 1;
    guestTotal.innerText = guestScore;
}

function guestAddTwo() {
    guestScore += 2;
    guestTotal.innerText = guestScore;
}

function guestAddThree() {
    guestScore += 3;
    guestTotal.innerText = guestScore;
}

function homeAddOne() {
    homeScore += 1;
    homeTotal.innerText = homeScore;
}

function homeAddTwo() {
    homeScore += 2;
    homeTotal.innerText = homeScore;
}

function homeAddThree() {
    homeScore += 3;
    homeTotal.innerText = homeScore;
}

function resetHome() {
    homeScore = 0;
    homeTotal.innerText = homeScore;
}

function resetGuest() {
    guestScore = 0;
    guestTotal.innerText = guestScore;
}

guestAddOneButton.addEventListener("click", guestAddOne);

guestAddTwoButton.addEventListener("click", guestAddTwo);

guestAddThreeButton.addEventListener("click", guestAddThree);

homeAddOneButton.addEventListener("click", homeAddOne);

homeAddTwoButton.addEventListener("click", homeAddTwo);

homeAddThreeButton.addEventListener("click", homeAddThree);

resetHomeButton.addEventListener("click", resetHome);

resetGuestButton.addEventListener("click", resetGuest);