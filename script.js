const coffeShop = {
  base: {
    espresso: { name: "Espresso", price: 18.0 },
    filtre: { name: "Filtre", price: 16 },
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 },
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 },
  },
  plus: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 },
  },
};

// INPUTS
// form1
let espresso = document.getElementById("espresso");
let filtre = document.getElementById("filtre");
// all byName
let laBaseForm = document.getElementsByName("labase");

// form2
let s = document.getElementById("s");
let m = document.getElementById("m");
let l = document.getElementById("l");
// all byName
let LaTaille = document.getElementsByName("LaTaille");
// form3
let vache = document.getElementById("vache");
let avoine = document.getElementById("avoine");
let amande = document.getElementById("amande");
// all byName
let LeLait = document.querySelector('input[name="LeLait"]:checked');
// form4
let caramel = document.getElementById("caramel");
let vanille = document.getElementById("vanille");
// all byName
let plus = document.getElementsByName("plus");

// BUTTONS
let addToCartBtn = document.getElementById("add-to-cart-btn");
let createOtherCoffeBtn = document.getElementById("create-other-coffe-btn");
// PAGES
let visibleSection = document.getElementById("visibleSection");
let hiddenSection = document.getElementById("hiddenSection");

// one function to hidd and display based on params
// function displayStates (btn,hide,show){
//   btn.addEventListener("click")
//   hide.remove()
//   show.style.display = "block"
// }
// to  hidd visibleSection and display hiddenSection (hide,show)
// displayStates(addToCartBtn,visibleSection,hiddenSection)
// console.log(displayStates(addToCartBtn,visibleSection,hiddenSection))



// total small in page1
let total = document.getElementById("totalPrice");

// get all inputs
let allInputs = document.querySelectorAll("input");
// loop through all inputs to know wich one is selected
allInputs.forEach((npt) => {
  npt.addEventListener("change", calcSelectedOnes);
});

let orderTicket = [];
function calcSelectedOnes() {
  // select all checked items
  let selectedItems = document.querySelectorAll("input");
  let sum = 0;
  orderTicket = [];
  selectedItems.forEach((eachInput) => {
    if (eachInput.checked) {
      // get names
      let inptsname = eachInput.name;
      console.log(inptsname);
      // get prices
      let prices = Number(eachInput.value)
      orderTicket.push( inptsname, prices);
      console.log(orderTicket.push({ inptsname, prices }))
      sum += prices;
    }
  });

  total.innerText = `${sum} DH`;
  console.log(sum, orderTicket);

}


addToCartBtn.addEventListener("click", () => {
  visibleSection.style.display = "none";
  hiddenSection.style.display = "block";
  calcSelectedOnes()
});

createOtherCoffeBtn.addEventListener("click" ,() => {
  visibleSection.style.display = "block"
  hiddenSection.style.display= "none"
})


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
// for(item of orderTicket){
//     // item = {name, price}
//     //item.name
// }

// // arr = [2,4,5]
// // of => 2,4,5
// // in => 0,1,2
// // of(item) / in(index)
// for(item of orderTicket){
//     // item = {name, price}
//     //item.name
// }
