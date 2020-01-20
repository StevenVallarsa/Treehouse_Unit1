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
  },
  {
    quote: "Comedy is tragedy, if you only look deep enough.",
    source: "Thomas Hardy",
    citation: "Correspondence sent to John Addington Symonds",
    year: 1889
  },
  {
    quote: "The lyrics moved down my arm and came out on the page.",
    source: "Joan Baez",
    citation: "The Courage of Conviction",
    year: 1985
  }
];

// array to keep track of which quote has already been viewed by index
let usedQuotes = [];
setZerosForTrackingArray();

function setZerosForTrackingArray(index = -1) {
  for (let i = 0; i < quotes.length; i++) {
    usedQuotes[i] = 0;
    if (index != -1) {
      // to mark off the last used quote so as not to be
      usedQuotes[index] = 1; //   repeated first in next iteration
    }
  }
}

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  let randomNumber;
  while (true) {
    randomNumber = Math.floor(Math.random() * quotes.length);
    if (usedQuotes[randomNumber] === 0) {
      usedQuotes[randomNumber] = 1;
      if (usedQuotes.reduce((x, y) => x + y) === quotes.length) {
        setZerosForTrackingArray(randomNumber);
      }
      console.log(usedQuotes);

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
    '<p class="quote">' +
    randomQuote.quote +
    '</p><p class="source">' +
    randomQuote.source;
  if (typeof randomQuote.citation !== "undefined") {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (typeof randomQuote.year !== "undefined") {
    html += '<span class="year">' + randomQuote.year + "</span>";
  }
  html += "</p>";

  document.getElementById("quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
