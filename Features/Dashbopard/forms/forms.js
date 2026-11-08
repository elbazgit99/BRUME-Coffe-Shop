//this for Toastify.js
// const messageStatus = new Promise((resolve,reject) => {
  
// })

let PreventFormSubmite = document.querySelector('form')
PreventFormSubmite.addEventListener('submit', (event) => {
  event.preventDefault()
})
function isLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) } //allow one space between word
function isMaxLength (inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function isPrice(price){return /^\d{1,2}(?:[.,]\d{0,2})?$/.test(price)} // checks the price if it has only two digits and accepts two fraction after dot (.)
function isDescription(dscrip){return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip)} // dots , double dots, comma, numbers, letters
function isUrl(url){return /^(https?:\/\/.+|\.{0,2}\/.*|[\w-]+(?:\/[\w.-]+)*)\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)}
function isRequired(inputName,boolean){return inputName.required = boolean}
// function isEmptyCheck(input){return if (input) {}} // avoid assigning a variable to a string value like textContent

let productNameInput = document.querySelector('#coffeName')
productNameInput.addEventListener("input", productNameValidator)

function productNameValidator() {
  let productMessage = document.querySelector('#productMessage')
  let productValue = productNameInput.value

  //this is invalid because the referense only check the reference not the string : 
  //let msgContent = productMessage.textContent //NOTE : forget this+
  try{
    isMaxLength(productNameInput,40);
    isRequired(productNameInput,true);
    
    if (!isLetters(productValue)) { throw new Error(`Invalid Product Name, Only Letters are valid`) }
    if (productValue.trim() == ``) { throw new Error(`Enter Product Name`) }
    else{ productMessage.textContent = '' }
  }catch(error) { productMessage.textContent = error }
}

// 1 get the input

let basePriceInput = document.querySelector(`#basePrice`)
//2 pass  event to the element
basePriceInput.addEventListener("input", priceValidator)
function priceValidator(){
  //3 get the value
  let priceValue = basePriceInput.value
  //4 get the message element
  let priceMessage = document.querySelector(`#priceMessage`)

  try {
    isMaxLength(basePriceInput,5)
    isRequired(basePriceInput,true)

    if (!isPrice(priceValue)) {throw new Error("The Limted price between 0 to 99 Dh with two numbers only as fractions");}
    if(priceValue.trim() == ''){ priceMessage.textContent = '' }
  } catch (error) {priceMessage.textContent = error}
  
}

// get the input 
let descriptionInput = document.querySelector('#description')
//pass event to  the element
descriptionInput.addEventListener('input' , descriptionValidator)
function descriptionValidator() {
  //get the value
  let descriptionValue = descriptionInput.value
  // get the message element
  let descriptionMsg = document.querySelector('#descriptionMsg')

 try{
    isRequired(descriptionInput,true)
    if (!isDescription(descriptionValue)) {
      throw new Error("Only Letters and Numbers Are Valide (do not use any Symbols))")
    }
    if (descriptionValue === '') {
      descriptionMsg.textContent = ''
    }
    
  } catch (error) {
    descriptionMsg.textContent = error
  }
}

//get input name 
let productImageInput = document.querySelector('#productImage')
// assign event 
productImageInput.addEventListener('input', imageValidator);
function imageValidator(){
  // get input value
  let imageValue = productImageInput.value
  // get the message element
  let imageMessage = document.querySelector(`#imageMessage`)

  try {
    isRequired(productImageInput,true)
    if (!isUrl(imageValue)) {
      throw new Error(`The Image Must be a URL Formate`)
    }
  } catch (error) {
    
  }

}
// get the element
let promoCheckbox = document.querySelector(`#promotion`)
//assign event to it 
promoCheckbox.addEventListener('change', promoValidator)
function promoValidator(){
  // get the input value
  let isPromoChecked = promoCheckbox.checked
  // get the element to effect on
  let promoChoices = document.querySelector(`#ShowedIfPromotionCheckedSpn`);
  
  isRequired(promoCheckbox,false)
  if(isPromoChecked){
    promoChoices.style.display = "block"
  }else{
    promoChoices.style.display = "none"
  }

}

let selectOriginOptions = document.querySelector(`#selectOrigin`)
selectOriginOptions.addEventListener('change',selectedOptionsValidator)

function selectedOptionsValidator() {
  let optionMsg = document.querySelector(`#optionMsg`)
  try {
      isRequired(selectOriginOptions,true)
      if (selectOriginOptions.valueb == ``) {
        throw new Error(`select origin option is a Must`)
      }
  } catch (error) {
    optionMsg.textContent = error
  }


}