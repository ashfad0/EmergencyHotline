const helplines = [
  {
    "title": "National Emergency Number",
    "category": "National Emergency",
    "number": "999",
    "tags": ["All"]
  },
  {
    "title": "Brac Helpline",
    "category": "Brac",
    "number": "16445",
    "tags": ["NGO"]
  },


  {
    "title": "Ambulance Service",
    "category": "Ambulance",
    "number": "1994",
    "tags": ["Health"]
  },
  {
    "title": "Women & Child Helpline",
    "category": "Women & Child Helpline",
    "number": "109",
    "tags": ["Help"]
  },
  {
    "title": "Anti-Corruption Helpline",
    "category": "Anti-Corruption",
    "number": "106",
    "tags": ["Govt."]
  },
  {
    "title": "Fire Service Number",
    "category": "Fire Service",
    "number": "999",
    "tags": ["Fire"]
  },
  {
    "title": "Police Helpline Number",
    "category": "Police",
    "number": "999",
    "tags": ["Police"]
  },
  {
    "title": "Electricity Helpline",
    "category": "Electricity Outage",
    "number": "16216",
    "tags": ["Electricity"]
  },
  {
    "title": "Bangladesh Railway Helpline",
    "category": "Bangladesh Railway",
    "number": "163",
    "tags": ["Travel"]
  }
]

let cardsWrapper = document.querySelector('.cards-wrapper')
let heart = document.querySelector('.heart-icon')


let coins = document.querySelector('.coins span');
coins.innerText = 0;
let callRate = 20;

let countedCoins = 0;

let copy = 0;
document.querySelector('.copy-times span').innerText = copy;


let clearBtn = document.querySelector('.clear-history');
let historyWrap = document.querySelector('.history-wrap');