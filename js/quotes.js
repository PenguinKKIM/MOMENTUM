const quotes = [
    {
        quote: "월급날만 기다려요",
        author: "죠르디",
    },
    {
        quote: "I'm beautiful in my way, because God makes no mistakes!",
        author: "LadyGaGa",
    },
    {
        quote: "The human race has one really effective weapon, and that is laughter.",
        author: "Mark Twain",
    },
    {
        quote: "필요할 때를 위한 작은 행운을, 마음가는 길은 죽 곧은 길",
        author: "드래곤 라자 시리즈",
    },
    {
        quote: "The ancient Oracle said that I was the wisest of all the Greeks. It is because I alone, of all the Greeks, know that I know nothing.",
        author: "Socrates",
    },
    {
        quote: "Even the smallest person can change the course of the future",
        author: "Galadriel (Lord of the Rings)",
    },
    {
        quote: "이봐, 해봤어 ?",
        author: "정주영",
    },
    {
        quote: "You must gather your party before venturing forth.",
        author: "Baldur's Gate",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;