// remove dummy cards 
cardsWrapper.innerHTML = ("");
historyWrap.innerHTML = ("");

// adding all the cards 
for (let helpline of helplines) {
  addCard(helpline);
  coins.innerText = parseInt(coins.innerText) + callRate;
  countedCoins = countedCoins = coins.innerText;
}

let cards = document.querySelectorAll('.card');

// fav count 
for (let card of cards) {
  card.addEventListener("click", function () {
    card.classList.toggle("favourite");
    document.querySelector('.hearts span').innerText = document.querySelectorAll(".favourite").length
  })
}

// reset 
clearBtn.addEventListener("click", function () {
  historyWrap.innerHTML = ("");
  coins.innerText = countedCoins
})