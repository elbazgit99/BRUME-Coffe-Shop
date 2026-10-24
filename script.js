
const coffeShop = {
  base: {
    espresso: { name: "Espresso", price: 18.00 },
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
// tst
let espresso = document.getElementById("espresso")
let espressoPrice = document.getElementById("espressoPrice")



// let summ=document.querySelector('.summ');

// let inputs = document.querySelectorAll('input');

// inputs.forEach(inp => {
//     inp.addEventListener("change",claculeOption);
// });

// let orderTicket = [];
  
// function claculeOption(event){
//     // select all checked items
//     let selectedItems = document.querySelectorAll("input")
//     let sum = 0 ;
//     orderTicket = [];
//     selectedItems.forEach(input => {
//         if(input.checked) {
//             // get price
//             let name = input.parentElement.querySelector("span").textContent;
//             let price = Number(input.parentElement.querySelector("p").textContent.replace("DH",""));
//             orderTicket.push({name, price})
//             sum += price;
//         }
//     })
//     // sum
//     summ.textContent= sum
//     // console.log(sum, orderTicket);
//     //
// }


// arr = [2,4,5]
// of => 2,4,5
// in => 0,1,2
// of(item) / in(index) 
for(item of orderTicket){
    // item = {name, price}
    //item.name
}


let filtre = document.getElementById("filtre")
// form2
let taille1 = document.getElementById("taille1")
let taille2 = document.getElementById("taille2")
let taille3 = document.getElementById("taille3")
// form3
let lait1 = document.getElementById("lait1")
let lait2 = document.getElementById("lait2")
let lait3 = document.getElementById("lait3")
// form4
let Caramel = document.getElementById("Caramel")
let Vanille = document.getElementById("Vanille")












addToCartBtn.addEventListener("clikc", showState)


// let hiddState = () => {
//   showCard.style.display = "block"
// } 
// addToCartBtn.addEventListener("click", hiddState)


// let showState = () =>{
//   showCard.remove()
// }
// addToCartBtn.addEventListener("click" , showState)

// function state () {
//   if(showState == true) {
//     hiddenCard.style.display = "block"
//   }
//   else{
//     showCard.style.display = "none"
//   }
// }


