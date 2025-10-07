# Random Quote Machine 📝

A simple web app that displays a random quote from a curated list and allows the user to tweet it.

Live demo (on CodePen): [Random Quote Machine by jr-delfin](https://codepen.io/jr-delfin/pen/ByjpORr) :contentReference[oaicite:0]{index=0}

---

## Table of Contents

1. Features  
2. Tools / Technologies Used  
3. How It Works  
4. Project Structure  
5. Usage / Instructions  
6. Possible Enhancements  
7. License

---

## 1. Features

- Displays a random quote and author on load  
- “New Quote” button to get another random quote  
- Prevents showing the same quote twice in a row  
- Tweet button: opens Twitter’s “intent to tweet” with the quote and author prefilled  
- Keyboard accessibility (Enter key triggers button actions)  
- Responsive design (adjusts layout for smaller screens)  
- Simple, clean UI with visual styling (gradients, glass effect, cards) :contentReference[oaicite:1]{index=1}  

---

## 2. Tools / Technologies Used

- **HTML5**  
- **CSS3** (custom properties / CSS variables, flexbox, media queries, gradients)  
- **JavaScript (ES6+)**  
- Audio / external tests from **FreeCodeCamp test suite** (included in CodePen) :contentReference[oaicite:2]{index=2}  

---

## 3. How It Works

- A constant `quotes` array contains objects with `text` and `author` properties. :contentReference[oaicite:3]{index=3}  
- On `DOMContentLoaded`, the app picks a random index (excluding –1) and renders the quote.  
- The function `pickRandomIndex(excludeIndex)` ensures the new index is different from the previous one.  
- `renderQuote(idx)` updates DOM elements `#text` and `#author`, and also updates the `href` of the Tweet link via `updateTweetHref()`.  
- The “New Quote” button has a click listener that prevents default, picks a new index, and renders.  
- Keyboard support: pressing Enter triggers the “New Quote” button or triggers the Tweet link when focused.  
- The Tweet button uses Twitter’s `intent/tweet` URL with encoded quote text and author to prefill the tweet.
