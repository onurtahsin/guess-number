//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
//? variables
let score = 10;
let topScore = 0;
//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  //? eger input girilmediyse Kullaniciya uyari ver.

  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-sharp fa-solid fa-trophy fa-2x"></i>`;
    body.style.background = " crimson";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score -= 1;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `DECREASE <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `INCREASE <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      document.querySelector(".check-btn").disabled = true;
      body.style.background = " black";
    }
    document.querySelector(".score").textContent = score;
  }
});

//* againe basildiginda kontrolleri yap

//? tebrikler bildiniz.
//? background = green
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! değilse
//! eger score > 0
//!   score = score -1
//?   eğer rasgele < input.value
//?     AZALT
//?   degilse
//?     ARTTIR
//! degise
//? Uzgunuz kaybetiniz.

//* againBtn basildiginda kontrolleri yap
document.querySelector(".again");
