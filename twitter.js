document.getElementById("btnTwitter").addEventListener("click", addTweet);

let twitterText = document.getElementById("twitterText").value;
let tweetList = document.getElementById("tweets").value;

function addTweet() {
    let newListTweets = document.createElement('li');
    newListTweets.textContext = twitterText.value;
    tweetList.appendChild(newListTweets);
    twitterText.value = '';

}


