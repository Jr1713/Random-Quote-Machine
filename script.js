const quotes = [
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
];

// DOM references
const textEl = document.getElementById('text');
const authorEl = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetLink = document.getElementById('tweet-quote');
const quoteBox = document.getElementById('quote-box');

let currentIndex = -1;

function pickRandomIndex(excludeIndex = -1) {
  if (quotes.length === 0) return -1;
  if (quotes.length === 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * quotes.length);
  } while (idx === excludeIndex);
  return idx;
}

function updateTweetHref(text, author) {
  const tweetText = `"${text}" — ${author}`;
  const href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  tweetLink.setAttribute('href', href);
}

/**
 * Render a quote to DOM
 * @param {number} idx index in quotes array
 */
function renderQuote(idx) {
  if (idx < 0 || idx >= quotes.length) return;
  const q = quotes[idx];
  textEl.textContent = q.text;
  authorEl.textContent = `— ${q.author}`;
  updateTweetHref(q.text, q.author);
  currentIndex = idx;
}

/* Initialize with a random quote on first load */
document.addEventListener('DOMContentLoaded', () => {
  const idx = pickRandomIndex();
  renderQuote(idx);
});

/* New quote button handler */
newQuoteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const idx = pickRandomIndex(currentIndex);
  renderQuote(idx);
});

/* Also allow ENTER on #new-quote for accessibility */
newQuoteBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') newQuoteBtn.click();
});

/* Accessibility: allow tweeting via keyboard enter when tweet anchor is focused */
tweetLink.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    window.open(tweetLink.href, '_blank', 'noopener,noreferrer');
  }
});
