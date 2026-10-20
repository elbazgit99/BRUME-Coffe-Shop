// // let coffe = [

// // ]

// let addBtn = document.getElementById("add-to-cart-btn");
// let hiddenCard = document.getElementsByClassName("hidden");

// let showCard = document.getElementById("showCard")

// addBtn.addEventListener("click" , hiddCard => {
//   showCard.style.display = 'none'
// })

// // function hidTotalCard() {
// //   addBtn.style.backgroundColor = "black";
// // }



let addBtn = document.getElementById("add-to-cart-btn")
let showCard = document.getElementById("showCard")


addBtn.addEventListener("click", hiddCard => {
  showCard.style.display = "none"
  addBtn.textContent= "show"
})

