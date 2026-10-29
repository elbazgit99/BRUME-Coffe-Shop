// 1. Le tableau global (Catalogue complet incluant les accessoires)


// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "/assets/images/bank card.png" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "/assets/images/bank card.png" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "/assets/images/bank card.png" }
];

//NOTE : you can use a function in forEach as an args even before its declaration

// 1. Le tableau global (Catalogue complet incluant les accessoires)

let minseBtn = document.getElementById('minseBtn')
let resultSpn = document.getElementById('result')
let plusBtn = document.querySelector('#plusBtn')
let displayCoffeeCartBtns = document.querySelector('.displayCoffeeCartBtns')
let coffeListWrapper = document.querySelector('.coffeListWrapper')

function displaycoffeeCart() {
  coffeeCart.forEach(cart => {
    coffeListWrapper.innerHTML += `
    
    <img src="${cart.image}" alt="">
          <span id="plusMinseDisplaySpn">
          <span class="lastSmall displayCoffeeCartBtns"> ${cart.name} === price:${cart.price} === ${cart.quantity}</span>
          <span id="plusMinsSpn">
            <button id="plusBtn" class="countBtns roundBtns">+</button>
            <span id="result">0</span>
            <button id="minseBtn" class="countBtns roundBtns">-</button>
          </span>
        </span>
    `
    
  });

}
displaycoffeeCart()




// plusBtn.addEventListener('click', () => {
// })
  //array.foreach + callback 
  // it provides through callback : element , index, array as a args and the loàcation of the array it self
  
//   function displayCoffeeCart(category) {
    
//   let list = coffeeCart.forEach(displayCoffeeCart)

//   coffeListWrapper.textContent = list
// }







