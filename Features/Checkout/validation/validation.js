


let messageElmnt = document.querySelector('#message')
let cardNumber = document.querySelector('#cardNumber')
let CardHolder = document.querySelector('#CardHolder')
let Expiration = document.querySelector('#Expiration')
let CVV = document.querySelector('#CVV')
let payBtn = document.querySelector('#payBtn')

function isMatchCardNumber(nums){
  let  numPattern = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
  return numPattern.test(nums)
}

function isMatchCardHolder(char){
  let  CharPattern = new RegExp(/^[a-zA-Z]*$/);
  return CharPattern.test(char)
}
function isMatchExperation(exp){
  let expPattern = new RegExp(/^(0[1-9]|[12]\d|3[01])[-\/.](0[1-9]|1[0-2])[-\/.](19|20)\d{2}$/   )
  return expPattern.test(exp)
}
function isMatchCvv(cvv) {
  let cvvPattern = new RegExp("^[0-9]{3}$")
  return cvvPattern.test(cvv)
}


cardNumber.addEventListener("input", function() {
  if (!isMatchCardNumber(cardNumber.value)) {
    messageElmnt.textContent = "invalid card number"
  }
  if (cardNumber.value === "") {
    messageElmnt.textContent = ""
  }

})
CardHolder.addEventListener("input", function() {

  if (!isMatchCardHolder(CardHolder.value)) {
        messageElmnt.textContent = "invalid card holder name use characters only"
  }
    if (CardHolder.value === "") {
    messageElmnt.textContent = ""
  }
})
Expiration.addEventListener("input", function() {

  if (isMatchExperation(Expiration.value)) {
        messageElmnt.textContent = "invalid experation date"
  }

})
CVV.addEventListener("input", function() {
  if (isMatchCvv(CVV.value)) {
        messageElmnt.textContent = "invalid cvv"
  }
  let max = CVV.value === CVV.maxLength

  if (!max) {
    messageElmnt.textContent = "cvv has 3 maximum numbers"
  }
})
