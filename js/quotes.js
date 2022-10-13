const quotes = [
  { quote: "I Love you, Tosil", author: "SeolTorin" },
  { quote: "All's fair in love and war.", author: "SeolTorin" },
  {
    quote: "A pity beyond all telling / Is in the heart of love.",
    author: "SeolTorin",
  },
  {
    quote:
      "How difficult a thing it is, to love, and to be wise, and both at once.",
    author: "SeolTorin",
  },
  {
    quote: "Tis better to have loved and lost, than never to have loved at all",
    author: "SeolTorin",
  },
  {
    quote: "Love asks me no questions, and gives me endless support",
    author: "SeolTorin",
  },
  { quote: "If you would be loved, love and be lovable", author: "SeolTorin" },
  {
    quote: "The way to love anything is to realize that it might be lost",
    author: "SeolTorin",
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "SeolTorin",
  },
  {
    quote: "The course of true love never did run smooth",
    author: "SeolTorin",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
