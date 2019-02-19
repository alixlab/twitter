document.getElementById("btnTwitter").addEventListener("click", addTweet);

let twitterText = document.querySelector("#twitterText");
let tweetList = document.querySelector("#tweets");

function addTweet() {
    let newList = document.createElement('li');

    newList.textContent = twitterText.value;
    tweetList.appendChild(newList);   
    twitterText.value = '';
}


