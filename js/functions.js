

// function callAlert(object){
//  alert(object.number)
// }

function addCard(object) {

    let wrapperClass = object.title.replaceAll(" ", "-").toLowerCase();
    // console.log(wrapperClass);
    // wrapperClass = wrapperClass.

  let  card = ` <div class="card">
                    <div class="card-head">
                        <img src="./assets/emergency.png" alt="" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                            fill="red">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                        </svg>
                    </div>
                    <div class="card-txts">
                        <h3 class="card-title">${object.title}</h3>
                        <p class="card-subtitle">${object.category}</p>

                        <div class="card-num-type-wrap">
                            <p class="number">${object.number}</p>
                            <p class="card-type">${object.tags}</p>
                        </div>
                    </div>
                                            <div class="btns-wrap">
                            <button class="copy"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> 
                            Copy </button>
                            <button class="call" id="${object.number}" ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M757.23-160q-101.15 0-207.38-50.65-106.23-50.66-197.39-142.2-91.15-91.53-141.81-197.38Q160-656.08 160-757.23q0-18.33 12-30.55Q184-800 202-800h98.92q16.31 0 28.46 10.27 12.16 10.27 16.47 26.35L365.69-668q2.77 16.77-1 29.31t-13.31 20.54l-87.76 81.84q24.61 44.69 54.42 83.04 29.81 38.35 63.58 72.65 34.84 34.85 75 64.81 40.15 29.96 88.15 56.58l85.54-87.08q9.77-10.54 21.96-13.88 12.19-3.35 26.96-1.35l84.15 17.23q16.31 4 26.47 16.43Q800-315.46 800-299.38V-202q0 18-12.22 30t-30.55 12ZM244.85-573.85l76.77-70.61q3.84-3.08 5-8.46 1.15-5.39-.39-10l-17.77-84.77q-1.54-6.16-5.38-9.23-3.85-3.08-10-3.08H211q-4.62 0-7.69 3.08-3.08 3.07-3.08 7.69 1.15 41 12.85 85.61 11.69 44.62 31.77 89.77Zm338 333.39q40.53 20.08 86.42 29.69 45.88 9.62 79.96 10.31 4.62 0 7.69-3.08 3.08-3.08 3.08-7.69v-80.31q0-6.15-3.08-10-3.07-3.84-9.23-5.38l-74-15.16q-4.61-1.54-8.07-.38-3.47 1.15-7.31 5l-75.46 77Zm-338-333.39Zm338 333.39Z"/></svg>
                            Call
                            </button>
                        </div>
                </div>`;
    cardsWrapper.insertAdjacentHTML("beforeend", card);

//     document.querySelector(`.${wrapperClass} .call`).addEventListener("click", function(){
//  alert(object.number)
// });


let historyCard = `<div class="history ${wrapperClass}">
<div class="history-title-num-wrap">
<h5 class="history-title">${object.title}</h5>
<p class="history-number">${object.number}</p>
</div>

<p class="call-time">loading</p>
</div>`

cardsWrapper.lastElementChild.querySelector('.call').addEventListener("click", function(){
    document.querySelector('.history-wrap').insertAdjacentHTML("beforeend", historyCard);
    document.querySelector(`.${wrapperClass} .call-time`).innerText = new Date().toLocaleTimeString();
    alert(object.number);
 });

}