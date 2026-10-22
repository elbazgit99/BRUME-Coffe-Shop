
const coffeShop = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  plus: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};


let addToCartBtn = document.getElementById("add-to-cart-btn")
let showCard = document.getElementById("showCard")
let creatCoffeBtn = document.getElementById("create-other-coffe-btn")
let hiddenCard = document.getElementById("hiddenCard")


let hiddState = () => {
  showCard.remove()
} 
addToCartBtn.addEventListener("click", hiddState)

let showState = () =>{
  hiddenCard.remove()
}
creatCoffeBtn.addEventListener("click" , showState)

// function state () {
//   if(showState == true) {
//     hiddenCard.style.display = "block"
//   }
//   else{
//     showCard.style.display = "none"
//   }
// }


