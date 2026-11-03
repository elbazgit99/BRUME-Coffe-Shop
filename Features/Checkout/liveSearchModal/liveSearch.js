import { coffeeCart } from "/Features/Checkout/cart/cart.js";
console.log("export khdama", coffeeCart);

const coffeeProducts = [
  {
    id: "c1",
    name: "Espresso Intense",
    category: "Base",
    price: 2.5,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c2",
    name: "Cappuccino Mousseux",
    category: "Classique",
    price: 4.0,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c3",
    name: "Latte Caramel",
    category: "Gourmand",
    price: 4.5,
    image: "/assets/images/Café M.png"
  },
  {
    id: "c4",
    name: "Flat White",
    category: "Classique",
    price: 3.8,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c5",
    name: "Iced Matcha Latte",
    category: "Froid",
    price: 5.0,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c6",
    name: "Cold Brew",
    category: "Froid",
    price: 4.2,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c7",
    name: "Cookie Pépites",
    category: "Snack",
    price: 2.0,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c8",
    name: "Mug Isotherme Noir",
    category: "Accessoire",
    price: 15.0,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c9",
    name: "Filtres Papier V60 (x100)",
    category: "Accessoire",
    price: 6.5,
    image: "/assets/images/Café M.png",
  },
  {
    id: "c10",
    name: "Tote Bag 'Coffee Lover'",
    category: "Accessoire",
    price: 12.0,
    image: "/assets/images/Café M.png",
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
    let coffeImage = product.image
    let coffeName = product.name.toUpperCase();
    let category = product.category
    let prices = Number(product.price)
    // includs returns boolean
    let isMatches = coffeName.includes(searchValue);
    if (isMatches) {
      let i = 0
      let productCart = productsListSpn.innerHTML += `
      <div class="productWrapper" >
          <img id="cupImg" src="${coffeImage}" alt="">
          <span class="lastSmall displayCoffeeCartBtns"> ${coffeName}</span>
          <span class="lastSmall displayCoffeeCartBtns ">${category}DH</span>
          <span class="lastSmall displayCoffeeCartBtns roundBtns"> ${prices}</span>
      </div>
      <button data-id=${i} class="roundBtns quichAdd">add</button>  <br>
    `;
    i++
    let targetId = targetBtn.dataset.id
    let addTocart = document.getElementById(`${targetId}`)
    addTocart.forEach(btn => {
      btn.addEventListener('click',(event) => {
        let targetBtn = event.target
            coffeeCart.push(productCart)
            coffeeCart.forEach(element => {
              productCart.innerHTML += `<span> ${element}</span>`
            })
            console.log("array lowla", coffeeCart);
            
          })

    })
    }

    if (searchValue === "") {
      productsListSpn.innerHTML = "";
    }
  });
  let createBtn = document.querySelector("#createBtn");
  createBtn.addEventListener("click", () => {
    modalWrapper.style.display = "block";
  });
});

function calcAddedCards() {

}
calcAddedCards()