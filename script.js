
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

let addToCartBtn = document.getElementById("add-to-cart-btn");
let hiddenSection = document.getElementById("hiddenSection")
let visibleSection = document.getElementById("visibleSection")

// inputs


// form1
let espresso = document.getElementById("espresso").value;
let filtre = document.getElementById("filtre").value;
let laBaseForm = document.getElementsByName('labase')

// form2
let s = document.getElementById("s").value;
let m = document.getElementById("m").value;
let l = document.getElementById("l").value;
let LaTaille = document.getElementsByName('LaTaille')
// form3
let vache = document.getElementById("vache").value;
let avoine = document.getElementById("avoine").value;
let amande = document.getElementById("amande").value;
let LeLait = document.getElementsByName('LeLait')
// form4
let caramel = document.getElementById("caramel").value;
let vanille = document.getElementById("vanille").value;
let plus = document.getElementsByName('plus')
console.log(plus);
 

// caramel.nodeList.checked

// function getValue (value){
//   value.addEventListener("ckecked")
// }

// getValue(espresso)

// addToCartBtn.addEventListener("click" , () => hiddenSection.add() && visibleSection.remove())


























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


// // arr = [2,4,5]
// // of => 2,4,5
// // in => 0,1,2
// // of(item) / in(index) 
// for(item of orderTicket){
//     // item = {name, price}
//     //item.name
// }