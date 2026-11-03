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
let totalCartPriceElement = document.querySelector('.totalCartPrice')
let xModalBtn = document.querySelector('#xModalBtn')
function displaycoffeeCart() {
  let i = 0;
  coffeeCart.forEach(cart => {  
    coffeListWrapper.innerHTML += `
    <div id="plusMinseDisplaySpn">
          <img id="cupImg" src="${cart.image}" alt="">
          <span class="lastSmall displayCoffeeCartBtns"> ${cart.name}</span>
          <span class="lastSmall displayCoffeeCartBtns ">${cart.price}DH</span>
          <span class="lastSmall displayCoffeeCartBtns roundBtns"> ${cart.quantity}</span>
          <span id="plusMinsSpn">
            <button data-id=${i} class="countBtns roundBtns plusBtn">+</button>
            <span id="${i}" class="result" >0</span>
            <button data-id=${i} class="countBtns roundBtns minseBtn">-</button>
          </span>
    </div>
    `
    i++;
  });
  createBtn.addEventListener('click' , () => {
    modalWrapper.style.display = "block"

  })
  xModalBtn.addEventListener("click" , () => {
    modalWrapper.style.display = "none"
  })
  let plusBtns = document.querySelectorAll('.plusBtn')
  let minseBtns = document.querySelectorAll('.minseBtn')
  plusBtns.forEach(btn => {
     btn.addEventListener("click", (event) => {
      
      let targetBtn = event.target;
      let targetId = targetBtn.dataset.id;
      let result = document.getElementById(`${targetId}`);
      let total = result.textContent++;
      totalCartPriceElement.textContent = total
  })
  })
 minseBtns.forEach((Btn) => {

   Btn.addEventListener("click", (event) => {
    let targetBtn = event.target
    let targetId  = targetBtn.dataset.id
    let result = document.getElementById(`${targetId}`)
    for (let i = 0; i < coffeeCart.length; i++) {
      let prices = coffeeCart[i].price
      if (minseBtns.clicked) {
        prices * 2
      }
      
    }
    let total = result.textContent--
    totalCartPriceElement.textContent = total
    })
 }) 
 
}
displaycoffeeCart()
let paymentForm = document.querySelector('#paymentForm')
let shopBtn = document.querySelector('#shop')
let cartSection = document.querySelector('#cartSection')
shopBtn.addEventListener('click' , () => {
  paymentForm.style.display = "block"
  modalWrapper.style.display = "none"
  cartSection.style.display = "none"

})
// plusBtn.addEventListener('click', () => {
// })
  // array.foreach + callback 
  // it provides through callback : element , index, array as a args and the loàcation of the array it self
  


// NOTE : you most export the wanted expression at the end of the file




