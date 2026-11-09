//this for Toastify.js
// const messageStatus = new Promise((resolve,reject) => { })

function isLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) } //allow one space between word
function isMaxLength(inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function isPrice(price) { return /^\d{1,2}(?:[.,]\d{0,2})?$/.test(price) } // checks the price if it has only two digits and accepts two fraction after dot (.)
function isDescription(dscrip) { return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip) } // dots , double dots, comma, numbers, letters
function isUrl(url) { return /^(https?:\/\/.+|\.{0,2}\/.*|[\w-]+(?:\/[\w.-]+)*)\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url) }
function isRequired(inputName, boolean) { return inputName.required = boolean }
function isDiscount(des) { return /^(100|[1-9]?\d)%$/.test(des) }
// function isEmptyCheck(input){return if (input) {}} // avoid assigning a variable to a string value like textContent

let productNameInput = document.querySelector('#coffeName')
productNameInput.addEventListener("input", coffeNameValidator)

function coffeNameValidator() {
  let coffeMessage = document.querySelector('#coffeMessage')
  let productValue = productNameInput.value
  try {
    isMaxLength(productNameInput, 40);
    isRequired(productNameInput, true);

    if (!isLetters(productValue)) { throw new Error(`Invalid Product Name, Only Letters are valid`) }
    if (productValue.trim() == ``) { throw new Error(`Enter Product Name`) }
    if (productValue == ``) { coffeMessage.textContent = '' }
  } catch (error) { coffeMessage.textContent = error }
}

let basePriceInput = document.querySelector(`#basePrice`)
basePriceInput.addEventListener(`input`, priceValidator)

function priceValidator() {
  let priceValue = basePriceInput.value
  let priceMessage = document.querySelector(`#priceMessage`)

  try {
    isRequired(basePriceInput, true)
    isMaxLength(basePriceInput, 5)
    if (!isPrice(priceValue)) { throw new Error(`The Limted price between 0 to 99 Dh with two numbers only as fractions`); }
    if (priceValue == '') { priceMessage.textContent = '' }
  } catch (error) { priceMessage.textContent = error }

}


let descriptionInput = document.querySelector(`#description`)
descriptionInput.addEventListener('input', descriptionValidator)

function descriptionValidator() {

  let descriptionValue = descriptionInput.value
  let descriptionMsg = document.querySelector('#descriptionMsg');

  try {
    isRequired(descriptionInput, true)
    isMaxLength(descriptionInput, 500)
    if (!isDescription(descriptionValue)) { throw new Error(`Only Letters and Numbers Are Valide (do not use any Symbol))`) }
    if (descriptionValue == '') { descriptionMsg.textContent = '' }

  } catch (error) { descriptionMsg.textContent = error }
}


let productImageInput = document.querySelector('#productImage')
productImageInput.addEventListener('input', imageValidator);

function imageValidator() {
  let imageValue = productImageInput.value
  let imageMessage = document.querySelector(`#imageMsg`)

  try {
    isRequired(productImageInput, true)
    if (!isUrl(imageValue)) { throw new Error(`The Image Must be a URL Formate`) }
  } catch (error) { imageMessage.textContent = error }
}




let promoCheckbox = document.querySelector(`#promotion`)
promoCheckbox.addEventListener('change', promoValidator)

function promoValidator() {
  let isPromoChecked = promoCheckbox.checked
  let promoChoices = document.querySelector(`#ShowedIfPromoCheckedSpn`);
  isRequired(promoCheckbox, false)
  if (isPromoChecked) {
    promoChoices.style.display = "block"
  } else { promoChoices.style.display = "none" }
}



let discountInpt = document.querySelector(`#discount`)
discountInpt.addEventListener('input', discountValidator)

function discountValidator() {

  let discountValue = discountInpt.value
  let discountMsg = document.querySelector(`#discountMsg`)

  try {
    isRequired(discountInpt, false)
    isMaxLength(discountInpt,)
    if (!isDiscount(discountValue)) { throw new Error(`Only Numbers from 1 to 100 are Valid`) }
    if (discountValue == ``) { discountMsg.textContent = `` }
  } catch (error) { discountMsg.textContent = error }

}


let expireDateInpt = document.querySelector(`#expireDate`)
expireDateInpt.addEventListener(`input`, expireDateValidator)
function expireDateValidator() {
  let today = new Date()
  let expireDateValue = expireDateInpt.value
  let endDateMsg = document.querySelector(`#endDateMsg`)
  let currentDate = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}at : ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
try {
  if (expireDateValue <  currentDate) {
    throw new Error('Select Valid Date')
  }
  if (expireDateValue == ``) {
    endDateMsg.textContent = ``
  }
} catch (error) {
  endDateMsg.textContent = error
}
}



//SECOND FIELDSET
let selectOriginOptions = document.querySelector(`#selectOrigin`)
selectOriginOptions.addEventListener('change', selectedOptionsValidator)

function selectedOptionsValidator() {
  let optionMsg = document.querySelector(`#optionMsg`)
  try {
    isRequired(selectOriginOptions, true)
    if (selectOriginOptions.value == ``) {
      throw new Error(`select origin option is a Must`)
    }
  } catch (error) { optionMsg.textContent = error }

}

let intensityRangeInpt = document.querySelector('#intensity')
intensityRangeInpt.addEventListener('change', intensetyRangeValidator)
function intensetyRangeValidator() {
  let rangeValue = intensityRangeInpt.value
  
}



let temperatureRadioInpts = document.querySelectorAll(`input[name="temperature"]`)
temperatureRadioInpts.forEach((tempRadio) => {
  tempRadio.addEventListener(`change`, function temperatureValidature(){
    console.log(tempRadio.value);
    
  })
})



function mainValidator() {
  let isCoffeNameValid = coffeNameValidator()
  let isPriceValid = priceValidator()
  let isDescriptionValid = descriptionValidator()
  let isImegeValid = imageValidator()
  let isPromoValid = promoValidator()
  let isDiscountValid = discountValidator()
  let isExpireDateValid = expireDateValidator()
  let isSelectedOptionsValid = selectedOptionsValidator()
  let isIntensetyRangeValid = intensetyRangeValidator()
  if (
    !isCoffeNameValid &&
    !isPriceValid &&
    !isDescriptionValid &&
    !isImegeValid &&
    !isPromoValid &&
    !isDiscountValid &&
    !isExpireDateValid &&
    !isSelectedOptionsValid &&
    !isIntensetyRangeValid
  ){ return false}
  return true
}

let formSubmission = document.querySelector('form')
formSubmission.addEventListener('submit', (event) => {
  event.preventDefault()
    if (!mainValidator()) {
      return
    }

})

let generalInformationForm = document.querySelector(`#generalInformationForm`)
let firstNextBtn = document.querySelector(`#Next1`)

firstNextBtn.addEventListener('click', function firstBtnNavigation(){

  generalInformationForm.style.display = "none"
  DisplaySummarySection.style.display = "none"
})
let featuresSection = document.querySelector(`#featuresSection`)
let secondNextBtn = document.querySelector(`#optionsNextBtn`)
let optionsPreviousBtn = document.querySelector(`#optionsPreviousBtn`)
secondNextBtn.addEventListener('click', function secondBtnNavigation(){
  featuresSection.style.display = "none"
  generalInformationForm.style.display = "none"
  DisplaySummarySection.style.display = "block"
})


optionsPreviousBtn.addEventListener('click', function previeceBtn(){
  featuresSection.style.display = "block"
  generalInformationForm.style.display = "none"
  DisplaySummarySection.style.display = "none"
})