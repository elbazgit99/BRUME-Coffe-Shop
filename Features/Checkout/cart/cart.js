// 1. Le tableau global (Catalogue complet incluant les accessoires)
// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
export let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "/assets/images/coffeCup.webp" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "/assets/images/coffeCup.webp" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "/assets/images/coffeCup.webp" }
];

//NOTE : you can use a function in forEach as an args even before its declaration

// 1. Le tableau global (Catalogue complet incluant les accessoires)
let modalWrapper = document.querySelector('#modalWrapper')
let createBtn = document.querySelector('#createBtn')
let coffeListWrapper = document.querySelector('.coffeListWrapper')

let xModalBtn = document.querySelector('#xModalBtn')
function displaycoffeeCart() {
  coffeeCart.forEach(cart => {  
    coffeListWrapper.innerHTML += `
    
    <div id="plusMinseDisplaySpn">
          <img id="cupImg" src="${cart.image}" alt="">
          <span class="lastSmall displayCoffeeCartBtns"> ${cart.name}</span>
          <span class="lastSmall displayCoffeeCartBtns ">${cart.price}DH</span>
          <span class="lastSmall displayCoffeeCartBtns roundBtns"> ${cart.quantity}</span>
          <span id="plusMinsSpn">
            <button class="countBtns roundBtns plusBtn">+</button>
            <span class="result" >0</span>
            <button class="countBtns roundBtns minseBtn">-</button>
          </span>
    </div>
    `
    
  });

  createBtn.addEventListener('click' , () => {
    modalWrapper.style.display = "block"

  })
  xModalBtn.addEventListener("click" , () => {
    modalWrapper.style.display = "none"
  })
  let plusBtn = document.querySelector('.plusBtn')
  let minseBtn = document.querySelector('.minseBtn')
  plusBtn.addEventListener("click", () => {
    let result = document.querySelector('.result')
    result.textContent++

  })
  minseBtn.addEventListener("click", () => {
    let result = document.querySelector('.result')
    result.textContent--

  })
let displayCoffeeCartBtns = document.querySelector('.displayCoffeeCartBtns')


}
displaycoffeeCart()
// plusBtn.addEventListener('click', () => {
// })
  // array.foreach + callback 
  // it provides through callback : element , index, array as a args and the loàcation of the array it self
  


// NOTE : you most export the wanted expression at the end of the file





