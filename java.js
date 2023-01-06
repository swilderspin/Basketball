var guestAddOneButton = document.querySelector("#guest_plus_one");
var guestAddTwoButton = document.querySelector("#guest_plus_two");
var guestAddThreeButton = document.querySelector("#guest_plus_three");
var homeAddOneButton = document.querySelector("#home_plus_one");
var homeAddTwoButton = document.querySelector("#home_plus_two");
var homeAddThreeButton = document.querySelector("#home_plus_three");
var homeTotal = document.querySelector("#home-score");
var guestTotal = document.querySelector("#guest-score");

var homeScore = 0;
var guestScore = 0;




function guestAddOne() {
    guestScore = guestScore + 1;
    guestTotal.innerText = guestScore;
    console.log(guestScore);
    return guestTotal;
}

function guestAddTwo() {
    guestScore = guestScore + 2;
    guestTotal.innerText = guestScore;
    console.log(guestScore);
    return guestTotal;
}

function guestAddThree() {
    guestScore = guestScore + 3;
    guestTotal.innerText = guestScore;
    console.log(guestScore);
    return guestTotal;
}

function homeAddOne() {
    homeScore = homeScore + 1;
    homeTotal.innerText = homeScore;
    console.log(homeScore);
    return homeTotal;
}

function homeAddTwo() {
    homeScore = homeScore + 2;
    homeTotal.innerText = homeScore;
    console.log(homeScore);
    return homeTotal;
}

function homeAddThree() {
    homeScore = homeScore + 3;
    homeTotal.innerText = homeScore;
    console.log(homeScore);
    return homeTotal;
}


guestAddOneButton.addEventListener("click", guestAddOne);

guestAddTwoButton.addEventListener("click", guestAddTwo);

guestAddThreeButton.addEventListener("click", guestAddThree);

homeAddOneButton.addEventListener("click", homeAddOne);

homeAddTwoButton.addEventListener("click", homeAddTwo);

homeAddThreeButton.addEventListener("click", homeAddThree);

// guestScore.innerHTML;

// homeScore.innerHTML;