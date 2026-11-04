
let PreventFormSubmite = document.querySelector('form')
PreventFormSubmite.addEventListener('submit', (event) => {
  event.preventDefault()
})
function isLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) } //allow one space between word
function isMaxLength (inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function isPrice(price){return /^\d{1,2}(?:\.\d{2})?$/.test(price)} 
let productNameInput = document.querySelector('#productName')
productNameInput.addEventListener("input", productNameValidator)

// function isEmptyCheck(input){return if (input) {}} // avoid assigning a variable to a string value like textContent

function productNameValidator() {
  let productValue = productNameInput.value
  let productMessage = document.querySelector('#productMessage')
  let errorMsg = `Invalid Product Name, Only Letters are valid`
  productMessage.textContent = ``
  //this is invalid because the referense only check the reference not the string : 
  //let msgContent = productMessage.textContent //NOTE : forget this+
  try{
    isMaxLength(productNameInput,40)

    if (!isLetters(productValue)) { throw new Error(errorMsg) }
    if (productValue.trim() == ``) { throw new Error("Enter Product Name") }
  }catch(error) { productMessage.textContent = ` ${ error }` }
}

function priceValidator(){
  
}