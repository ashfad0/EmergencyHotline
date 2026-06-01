// remove dummy cards 
cardsWrapper.innerHTML = ("");

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
  document.querySelector(".call").addEventListener('click', function(){
   alert("hello")
  })
})

}

copy = 10