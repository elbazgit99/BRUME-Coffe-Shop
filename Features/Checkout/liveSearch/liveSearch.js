const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// search by category | search by price
let SearchInput = document.querySelector("#searchModal")
let modalWrapper = document.querySelector('#modalWrapper')
let productsListSpn = document.querySelector('#productsList')
let totalCartPrice = document.querySelector('.totalCartPrice')
SearchInput.addEventListener("input", function() {
  // i need to store the income input and the existing names in the array
  coffeeProducts.forEach((product) => {
    let searchValue = SearchInput.value.toUpperCase()
    let coffeName = product.name.toUpperCase()
    // console.log(coffeName);
    // includs returns boolean
    let isMatches =  coffeName.includes(searchValue);
    // console.log(isMatches);
    if(isMatches){
      productsListSpn.innerHTML += `
      <button id="productBtn" class="Btns" >${coffeName}</button>
      <button id="addModalBtn"class="roundBtns" >add to cart</button>  <br>
    `
    }
    if(searchValue === ""){
        productsListSpn.innerHTML = ""
    }
  })
  
})

let coffeeCartElements = document.querySelector('#plusMinseDisplaySpn');
let productBtn = document.getElementById('productBtn');
console.log(productBtn);

let addModalBtn = document.querySelector('#addModalBtn')
console.log(addModalBtn);

addModalBtn.addEventListener("click",function(){
  coffeeCartElements.innerHTML = `
    <button  class="countBtns">add to cart</button>
  `
})

let createBtn = document.querySelector('#createBtn');
createBtn.addEventListener("click", () => {
  modalWrapper.style.display = "block";
})

