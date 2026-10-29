// 1. Le tableau global (Catalogue complet incluant les accessoires)


// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }
];

//NOTE : you can use a function in forEach as an args even before its declaration

// 1. Le tableau global (Catalogue complet incluant les accessoires)
let coffeeList = document.getElementById('coffeeList');
let searchModal = document.getElementById('searchModal')
let minseBtn = document.getElementById('minseBtn')
let resultSpn = document.getElementById('result')
let plusBtn = document.querySelector('#plusBtn')
let displayCoffeeCartBtns = document.querySelector('.displayCoffeeCartBtns')

// plusBtn.addEventListener('click', () => {
// })
  //array.foreach + callback 
  // it provides through callback : element , index, array as a args and the loàcation of the array it self
  
//   function displayCoffeeCart(category) {
    
//   let list = coffeeCart.forEach(displayCoffeeCart)
//   const coffeListWrapper = document.querySelector('.coffeListWrapper')
//   coffeListWrapper.textContent = list
// }







