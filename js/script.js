// remove dummy cards 
cardsWrapper.innerHTML = ("");
historyWrap.innerHTML = ("");

// adding all the cards 
for(let helpline of helplines){
  addCard(helpline);
  
}

cards = document.querySelectorAll('.card');

// fav count 
for(let card of cards){
  card.addEventListener("click", function(){
  card.classList.toggle("favourite");
  document.querySelector('.hearts span').innerText = document.querySelectorAll(".favourite").length

})
}

clearBtn.addEventListener("click", function(){
historyWrap.innerHTML = ("");
})