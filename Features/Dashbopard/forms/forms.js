
let PreventFormSubmite = document.querySelector('form')
PreventFormSubmite.addEventListener('submit', (event) => {
  event.preventDefault()
})
function isLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) } //allow one space between word
function isMaxLength (inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function isPrice(price){return /^\d{1,2}(?:[.,]\d{0,2})?$/.test(price)} // checks the price if it has only two
                                                                    //  digits and accepts two fraction after dot (.)

// function isEmptyCheck(input){return if (input) {}} // avoid assigning a variable to a string value like textContent

let productNameInput = document.querySelector('#productName')
productNameInput.addEventListener("input", productNameValidator)
function productNameValidator() {
  let productValue = productNameInput.value
  let productMessage = document.querySelector('#productMessage')

  //this is invalid because the referense only check the reference not the string : 
  //let msgContent = productMessage.textContent //NOTE : forget this+
  try{
    isMaxLength(productNameInput,40)
    if (!isLetters(productValue)) { throw new Error(`Invalid Product Name, Only Letters are valid`) }
    if (productValue.trim() == ``) { throw new Error(`Enter Product Name`) }
    if (productValue == '') { productMessage.textContent = '' }
  }catch(error) { productMessage.textContent = error }
}



// 1 get the input
let basePriceInput = document.querySelector(`#basePrice`)
//2 pass the event to the element
basePriceInput.addEventListener("input", priceValidator)
function priceValidator(){
  //3 get the value
  let priceValue = basePriceInput.value
  //4 get the message element
  let priceMessage = document.querySelector(`#priceMessage`)
  try {
    if (!isPrice(priceValue)) {throw new Error("The Limted price between 0 to 99 Dh with two numbers only as fractions");}
    if(priceValue == ''){ priceMessage.textContent = '' }
  } catch (error) {priceMessage.textContent = error}
  

}
