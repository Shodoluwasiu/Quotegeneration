// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = 
[
  { quote: `"Indeed, Allah is with the patient"`,
   person: `"The Qur'an (2:153)"` 
},
  { quote: `"Speak good or remain silent"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"Actions are judged by intentions"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"The best among you are those who have the best manners and character"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"Verily, in the remembrance of Allah do hearts find rest"`, person: `"The Qur'an (13:28)"` },
  { quote: `"He who does not thank people, does not thank Allah"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"Your wealth and your children are but a trial"`, person: `"The Qur'an (64:15)"` },
  { quote: `"Help your brother, whether he is an oppressor or is oppressed"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"The strong man is not the one who can overpower others; the strong man is the one who controls himself when angry"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"Kindness is a mark of faith"`, person: `"Prophet Muhammad (PBUH)"` },
  { quote: `"Every soul will taste death"`, person: `"The Qur'an (3:185)" `},
  { quote: `"The only true wisdom is in knowing you know nothing"`, "person": `"Socrates"` },
  { quote: `"In the middle of difficulty lies opportunity"`, person: `"Albert Einstein"` },
  { quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts"`, person: `"Winston Churchill"` },
  { quote: `"He who opens a school door, closes a prison"`, person: "Victor Hugo" },
  { quote: `"Life is really simple, but we insist on making it complicated"`, person: `"Confucius"` },
  { quote: `"Do what you can, with what you have, where you are"`, person: `"Theodore Roosevelt"` },
  { quote: `"Education is the most powerful weapon which you can use to change the world"`, person: `"Nelson Mandela"` },
  { quote: `"The best way to predict the future is to invent it"`, person: `"Alan Kay"` },
  { quote: `"The journey of a thousand miles begins with one step"`, person: `"Lao Tzu"` },
  { quote: `"Time is more valuable than money. You can get more money, but you cannot get more time"`, person: `"Jim Rohn"` },
  { quote: `"An investment in knowledge pays the best interest"`, person: `"Benjamin Franklin"` },
  { quote: ` "Don’t count the days, make the days count" `, person: `"Muhammad Ali"` },
  { quote: `"Knowing yourself is the beginning of all wisdom"`, person: `"Aristotle"`},
  { quote: `"It is not length of life, but depth of life"`, person: `"Ralph Waldo Emerson"` },
  { quote: `"Change your thoughts and you change your world"`, person: `"Norman Vincent Peale"` }
  
];

 btn.addEventListener('click', function(){
let random = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
 })