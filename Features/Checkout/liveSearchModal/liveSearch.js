import { coffeeCart } from "/Features/Checkout/cart/cart.js";
console.log("expor", coffeeCart);

const coffeeProducts = [
  {
    id: "c1",
    name: "Espresso Intense",
    category: "Base",
    price: 2.5,
    image: "espresso.jpg",
  },
  {
    id: "c2",
    name: "Cappuccino Mousseux",
    category: "Classique",
    price: 4.0,
    image: "cappuccino.jpg",
  },
  {
    id: "c3",
    name: "Latte Caramel",
    category: "Gourmand",
    price: 4.5,
    image: "latte.jpg",
  },
  {
    id: "c4",
    name: "Flat White",
    category: "Classique",
    price: 3.8,
    image: "flatwhite.jpg",
  },
  {
    id: "c5",
    name: "Iced Matcha Latte",
    category: "Froid",
    price: 5.0,
    image: "matcha.jpg",
  },
  {
    id: "c6",
    name: "Cold Brew",
    category: "Froid",
    price: 4.2,
    image: "coldbrew.jpg",
  },
  {
    id: "c7",
    name: "Cookie Pépites",
    category: "Snack",
    price: 2.0,
    image: "cookie.jpg",
  },
  {
    id: "c8",
    name: "Mug Isotherme Noir",
    category: "Accessoire",
    price: 15.0,
    image: "mug.jpg",
  },
  {
    id: "c9",
    name: "Filtres Papier V60 (x100)",
    category: "Accessoire",
    price: 6.5,
    image: "filters.jpg",
  },
  {
    id: "c10",
    name: "Tote Bag 'Coffee Lover'",
    category: "Accessoire",
    price: 12.0,
    image: "totebag.jpg",
  },
];

let btns = document.querySelector("button")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });


let SearchInput = document.querySelector("#searchModal");
let modalWrapper = document.querySelector("#modalWrapper");
let productsListSpn = document.querySelector("#productsList");
let totalCartPrice = document.querySelector(".totalCartPrice");






SearchInput.addEventListener("input", function modal() {
  // i need to store the income input and the existing names in the array
  coffeeProducts.forEach((product) => {
    let searchValue = SearchInput.value.toUpperCase();
    let coffeName = product.name.toUpperCase();
    // includs returns boolean
    let isMatches = coffeName.includes(searchValue);
    if (isMatches) {
      productsListSpn.innerHTML += `
      <button class="productBtn Btns" >${coffeName}</button>
      <button id="addModalToCartBtn"class="roundBtns quichAdd">add</button>  <br>
    `;
    }
    if (searchValue === "") {
      productsListSpn.innerHTML = "";
    }
  });
  let quichAdd = document.querySelector(".quichAdd");
  quichAdd.addEventListener("click", function () {
    coffeeCart.push(productsListSpn);
    console.log(coffeeCart);
  });
  
  let createBtn = document.querySelector("#createBtn");
  createBtn.addEventListener("click", () => {
    modalWrapper.style.display = "block";
  });
});

function calcAddedCards() {
  // select all checked items
  SearchInput;
  let sum = 0;
  coffeeCart
  let productBtn = document.querySelectorAll("button").forEach((btn) => {
  });
  // console.log(sum, orderTicket);
}
calcAddedCards()