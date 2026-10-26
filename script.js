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
  Supplement: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 },
  },
};


let calcDiv = document.getElementById("calc-div")
let secondCardPrice = document.getElementById('second-card-price')
// INPUTS

// form1
let espresso = document.getElementById("espresso");
let filtre = document.getElementById("filtre");
// form2
let s = document.getElementById("s");
let m = document.getElementById("m");
let l = document.getElementById("l");
// form3
let vache = document.getElementById("vache");
let avoine = document.getElementById("avoine");
let amande = document.getElementById("amande");
// form4
let caramel = document.getElementById("caramel");
let vanille = document.getElementById("vanille");


// BUTTONS
let addToCartBtn = document.getElementById("add-to-cart-btn");
let createOtherCoffeBtn = document.getElementById("create-other-coffe-btn");
// links
let editeBtn = document.querySelector(".a-with-underLine")
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
  npt.addEventListener("change", calcSelectedinputs);
});
let orderTicket = [];
function calcSelectedinputs() {
  // select all checked items
  let selectedItems = document.querySelectorAll("input");
  let sum = 0;
  orderTicket = [];
  selectedItems.forEach((eachInput) => {
    if (eachInput.checked) {
      // get names
      let category = eachInput.querySelector(".label-spn").appendChild.textContent
      let inputsNames = eachInput.name;
      // console.log(inputsNames);
      // get prices
      let prices = Number(eachInput.value)
      orderTicket.push( {category, inputsNames, prices});
      // console.log(orderTicket.push({ inputsNames, prices }))
      sum += prices;
    }
  });

  total.innerText = `${sum} DH`;
  secondCardPrice.innerHTML = `${sum} DH`
  // console.log(sum, orderTicket);
}

addToCartBtn.addEventListener("click", () => {
  visibleSection.style.display = "none";
  hiddenSection.style.display = "block";
  invoice()
});

let hideHiddenSection = () => {
  visibleSection.style.display = "block"
  hiddenSection.style.display= "none"
}
createOtherCoffeBtn.addEventListener("click" ,hideHiddenSection)
editeBtn.addEventListener("click",hideHiddenSection) 

// display selected items on invoice
// coffeShop.forEach(category => {
  
// });
function invoice () {
  for(let order of orderTicket){
    calcDiv.innerHTML = `
              <span class="calc-rows-spn">
              <span>
                <small>${order.category}</small>
                <small>·</small>
                <small>${order.inputsNames}</small>
              </span>
              <small class="second-card-prices base-price">${order.prices}</small>
            </span>
    `
  }
}

// // arr = [2,4,5]
// // of => 2,4,5
// // in => 0,1,2
// // of(item) / in(index)
// for(item of orderTicket){
//     // item = {name, price}
//     //item.name
// }
