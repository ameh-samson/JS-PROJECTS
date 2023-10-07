"use strict";

// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The way I see it, if you want the rainbow, you gotta put up with the rain"`,
    person: "Dolly Parton",
  },
  {
    quote: `"The purpose of our lives is to be happy."`,
    person: "Dalai Lama",
  },
  {
    quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`,
    person: "Robert Frost",
  },
  {
    quote: `"I attribute my success to this: I never gave or took any excuse."`,
    person: "Florence Nightingale",
  },
  {
    quote: `"Strive not to be a success, but rather to be of value."`,
    person: "Albert Einstein",
  },
  {
    quote: `"You miss 100% of the shots you don’t take."`,
    person: "Wayne Gretzky",
  },
  {
    quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
    person: "Amelia Earhart",
  },
  {
    quote: `"Definiteness of purpose is the starting point of all achievement."`,
    person: "W. Clement Stone",
  },
  {
    quote: `"Life isn't about getting and having, it's about giving and being."`,
    person: "Kevin Kruse",
  },
  {
    quote: `"Life is what happens to you while you’re busy making other plans."`,
    person: "John Lennon",
  },
  {
    quote: `"It's okay not to be okay"`,
    person: "Samson Ameh",
  },
  {
    quote: `"Everyone has reason to be bad but it's a matter of choice"`,
    person: "Rolake",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
