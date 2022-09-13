//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
//? variables
let score = 10;
// let topScore = 0;
//! local stroage den topscore adıyla bir değişgen oluşturur
//* tanımlı bir topScore varsa onu oku yoksa 0 koy
let topScore = localStorage.getItem("topScore") || 0;
//? domdaki top-score değerini localStorage dan okuyarak güncelle
document.querySelector(".top-score").textContent = topScore;
console.log(topScore);
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
    body.className = "bg-warning";
    document.querySelector(".check-btn").disabled = true;
    if (score > topScore) {
      //   topScore = score;
      //  ? localStorage daki topScore değişgenini güncelle
      localStorage.setItem("topScore", score);
      //  ? domdaki top-score değerini güncelle
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score -= 1;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `DECREASE <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `INCREASE <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
      document.querySelector(".guess-input").value = "";
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      document.querySelector(".check-btn").disabled = true;
      body.className = "bg-dark";
    }
    document.querySelector(".score").textContent = score;
  }
});

//* againe basildiginda kontrolleri yap
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-warning", "bg-dark");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting...";
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});
//* againBtn basildiginda kontrolleri yap
document.querySelector(".again");
// localStorage sessionStorage
// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));
// const readObj = localStorage.getItem("OBJ");
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(readObj);
// console.log(typeof readObj);
// console.log(typeof readOBJ);
// console.log(typeof readOBJ);

//! puseduo

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
