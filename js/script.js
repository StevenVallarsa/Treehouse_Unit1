/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "A superstition is a premature explanation that has overstayed its time.",
    source: "George Iles"
  },
  {
    quote:
      "Success doesn’t start with what you know. It begins with what you believe.",
    source: "Kyle Young"
  },
  {
    quote: "A goal is a dream with a deadline.",
    source: "Napoleon Hill"
  },
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs"
  },
  {
    quote:
      "Success seems to be largely a matter of hanging on after others have let go.",
    source: "William Feather"
  }
];

// array to keep track of which quote has already been viewed
let usedQuotes = [0, 0, 0, 0, 0];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  let randomNumber;
  while (true) {
    randomNumber = Math.floor(Math.random() * quotes.length);
    if (usedQuotes[randomNumber] === 0) {
      usedQuotes[randomNumber] = 1;
      if (usedQuotes.reduce((x, y) => x + y) === 5) {
        usedQuotes = [0, 0, 0, 0, 0];
      }
      return quotes[randomNumber];
    }
  }
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html =
    '<p class="quotes">' +
    randomQuote.quote +
    '</p><p class="source">' +
    randomQuote.source;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
