const helplines = [
  {
    "title": "National Emergency Number",
    "category": "National Emergency",
    "number": "999",
    "tags": ["All"]
  },
  {
    "title": "Police Helpline Number",
    "category": "Police",
    "number": "999",
    "tags": ["Police", "1438"]
  },
  {
    "title": "Fire Service Number",
    "category": "Fire Service",
    "number": "999",
    "tags": ["Fire"]
  },
  {
    "title": "Ambulance Service",
    "category": "Ambulance",
    "number": "1994-999999",
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
    "title": "Electricity Helpline",
    "category": "Electricity Outage",
    "number": "16216",
    "tags": ["Electricity"]
  },
  {
    "title": "Brac Helpline",
    "category": "Brac",
    "number": "16445",
    "tags": ["NGO"]
  },
  {
    "title": "Bangladesh Railway Helpline",
    "category": "Bangladesh Railway",
    "number": "163",
    "tags": ["Travel"]
  }
]

let cardsWrapper = document.querySelector('.cards-wrapper')
let cards = document.querySelectorAll('.card')
// let cardTitle = document.querySelector('.card .card-title').innerText
// let cardCategory = document.querySelector('.card .card-subtitle').innerText
// let cardNumber = document.querySelector('.card .number').innerText
// let cardTag = document.querySelector('.card .card-type').innerText

let coins = 500;
document.querySelector('.coins span').innerText = coins;

let copy = 0;
document.querySelector('.copy-times span').innerText = copy;
