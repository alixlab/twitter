let twitterText = document.querySelector("#twitterText");
let tweetList = document.querySelector("#tweets");
const maxChar = 140;

document.getElementById("btnTwitter").addEventListener("click", addTweet);
document.getElementById("twitterText").addEventListener("input", enableBtn);
    
function enableBtn(event) {
    if (twitterText.value === "") {
        document.getElementById("btnTwitter").disabled = true;
    } else {
        document.getElementById("btnTwitter").disabled = false;    
    }
}

function addTweet(event) {
    let newList = document.createElement('li');

    newList.textContent = twitterText.value;
    tweetList.appendChild(newList);   
    twitterText.value = "";
    document.getElementById("btnTwitter").disabled = true;
}

window.addEventListener("keyup", counterChar)

function counterChar(event) {
    let counter = document.getElementById("counter");
    let countNum = maxChar - twitterText.value.length;
    document.getElementById("counter").innerHTML = countNum;
    
    if (twitterText.value.length > 140) {
        document.getElementById("btnTwitter").disabled = true;
    } else if (countNum > 10 && countNum <= 20) {
        counter.style.color = "orange";
    } else if (countNum >= 0 && countNum <= 10) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

window.addEventListener("keyup", sizeTextArea);

function sizeTextArea(event) {
    if (twitterText.scrollHeight > twitterText.offsetHeight) {
        twitterText.rows += 1;
    } else {
        twitterText.rows -= 1;
    }
}