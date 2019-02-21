let twitterText = document.querySelector("#twitterText");
let tweets = document.querySelector("#tweets");
const maxChar = 140;

document.getElementById("twitterText").addEventListener("input", enableBtn);
document.getElementById("btnTwitter").addEventListener("click", addTweet);
window.addEventListener("keyup", counterChar);
twitterText.addEventListener("keydown", sizeTextArea);

function enableBtn(event) {
    if (twitterText.value === "") {
        document.getElementById("btnTwitter").disabled = true;
    } else {
        document.getElementById("btnTwitter").disabled = false;    
    }
}

function addTweet(event) {
    let newTweet = document.createElement('p');

    newTweet.textContent = twitterText.value + " - " + moment().format('LLL');
    tweets.prepend(newTweet);   
    twitterText.value = "";
    document.getElementById("btnTwitter").disabled = true;
    document.getElementById("counter").innerHTML = maxChar;
    document.getElementById("counter").style.color = "black";
}

function counterChar(event) {
    let counter = document.getElementById("counter");
    let countNum = maxChar - twitterText.value.length;
    document.getElementById("counter").innerHTML = countNum;
    
    if (twitterText.value.length > 140) {
        document.getElementById("btnTwitter").disabled = true;
    } else if (countNum < 10) {
        counter.style.color = "red";
    } else if (countNum < 20) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "black";
    }
}

function sizeTextArea(event) {
    twitterText.style.cssText = "height:auto; padding:0";
    twitterText.style.cssText = "height:" + twitterText.scrollHeight + "px";
}