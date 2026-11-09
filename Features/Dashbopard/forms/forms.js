function isRejectedToast(msg) {
  Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #ff5f6d, #c31432)",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "500"
        }
  }).showToast()
}


function isSuccessToast(msg) {
  Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "500"
        }
  }).showToast()
}

function isLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) }
function isMaxLength(inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function isPrice(price) { return /^\d{1,2}(?:[.,]\d{0,2})?$/.test(price) }
function isDescription(dscrip) { return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip) }
function isUrl(url) { return /^(?:\/|\.{1,2}\/)?[\w.-]+(?:\/[\w.-]+)*\.(?:jpg|jpeg|png|gif|webp|svg)$/i.test(url) }
function isRequired(inputName, boolean) { return inputName.required = boolean }
function isDiscount(des) { return /^(100|[1-9]?\d)%$/.test(des) }


let productNameInput = document.querySelector('#coffeName')
productNameInput.addEventListener("input", coffeNameValidator)

function coffeNameValidator() {
  let coffeMessage = document.querySelector('#coffeMessage')
  let productValue = productNameInput.value
  try {
    isMaxLength(productNameInput, 40)
    isRequired(productNameInput, true)
    if (productValue.trim() == ``) { throw new Error(`Enter Product Name`) }
    if (!isLetters(productValue)) { throw new Error(`Invalid Product Name, Only Letters are valid`) }
    coffeMessage.textContent = ``
    return true
  } catch (error) { coffeMessage.textContent = error.message; return false }
}


let basePriceInput = document.querySelector(`#basePrice`)
basePriceInput.addEventListener(`input`, priceValidator)

function priceValidator() {
  let priceValue = basePriceInput.value
  let priceMessage = document.querySelector(`#priceMessage`)
  try {
    isRequired(basePriceInput, true)
    isMaxLength(basePriceInput, 5)
    if (priceValue.trim() == ``) { throw new Error(`Enter Base Price`) }
    if (!isPrice(priceValue)) { throw new Error(`The Limited price is between 0 and 99 Dh with two fractions only`) }
    priceMessage.textContent = ``
    return true
  } catch (error) { priceMessage.textContent = error.message; return false }
}


let descriptionInput = document.querySelector(`#description`)
descriptionInput.addEventListener('input', descriptionValidator)

function descriptionValidator() {
  let descriptionValue = descriptionInput.value
  let descriptionMsg = document.querySelector('#descriptionMsg')
  try {
    isRequired(descriptionInput, true)
    isMaxLength(descriptionInput, 500)
    if (descriptionValue.trim() == ``) { throw new Error(`Enter Description`) }
    if (!isDescription(descriptionValue)) { throw new Error(`Only Letters and Numbers Are Valid`) }
    descriptionMsg.textContent = ``
    return true
  } catch (error) { descriptionMsg.textContent = error.message; return false }
}


let productImageInput = document.querySelector('#productImage')
productImageInput.addEventListener('input', imageValidator)

function imageValidator() {
  let imageValue = productImageInput.value
  let imageMessage = document.querySelector(`#imageMsg`)
  try {
    isRequired(productImageInput, false)
    if (imageValue.trim() == ``) { throw new Error(`Enter Image URL`) }
    if (!isUrl(imageValue)) { throw new Error(`The Image Must be a URL Format`) }
    imageMessage.textContent = ``
    return true
  } catch (error) { imageMessage.textContent = error.message; return false }
}


let promoCheckbox = document.querySelector(`#promotion`)
promoCheckbox.addEventListener('change', promoValidator)

function promoValidator() {
  let isPromoChecked = promoCheckbox.checked
  let promoChoices = document.querySelector(`#ShowedIfPromoCheckedSpn`)
  isRequired(promoCheckbox, false)

  if (isPromoChecked) {
    promoChoices.style.display = "block"
    return discountValidator() && expireDateValidator()
  } else {
    promoChoices.style.display = "none"
    document.querySelector(`#discountMsg`).textContent = ``
    document.querySelector(`#endDateMsg`).textContent = ``
    return true
  }
}


let discountInpt = document.querySelector(`#discount`)
discountInpt.addEventListener('input', discountValidator)

function discountValidator() {
  let discountValue = discountInpt.value
  let discountMsg = document.querySelector(`#discountMsg`)
  try {
    isRequired(discountInpt, false)
    isMaxLength(discountInpt, 4)
    if (discountValue.trim() == ``) { throw new Error(`Enter Discount Percentage`) }
    if (!isDiscount(discountValue)) { throw new Error(`Only Numbers from 1 to 100 followed by % are Valid`) }
    discountMsg.textContent = ``
    return true
  } catch (error) { discountMsg.textContent = error.message; return false }
}


let expireDateInpt = document.querySelector(`#expireDate`)
expireDateInpt.addEventListener(`input`, expireDateValidator)

function expireDateValidator() {
  let today = new Date()
  let expireDateValue = expireDateInpt.value
  let endDateMsg = document.querySelector(`#endDateMsg`)
  let currentDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
  try {
    if (expireDateValue == ``) { throw new Error(`Select Expiration Date`) }
    if (expireDateValue < currentDate) { throw new Error(`Select Valid Date`) }
    endDateMsg.textContent = ``
    return true
  } catch (error) { endDateMsg.textContent = error.message; return false }
}


let selectOriginOptions = document.querySelector(`#selectOrigin`)
selectOriginOptions.addEventListener('change', selectedOptionsValidator)

function selectedOptionsValidator() {
  let optionMsg = document.querySelector(`#optionMsg`)
  try {
    isRequired(selectOriginOptions, true)
    if (selectOriginOptions.value == ``) { throw new Error(`Select Origin Option is a Must`) }
    optionMsg.textContent = `Origin of grains :`
    return true
  } catch (error) { optionMsg.textContent = error.message; return false }
}


let intensityRangeInpt = document.querySelector('#intensity')
intensityRangeInpt.addEventListener('change', intensetyRangeValidator)

function intensetyRangeValidator() { return intensityRangeInpt.value >= 1 && intensityRangeInpt.value <= 10 }


let temperatureRadioInpts = document.querySelectorAll(`input[name="temperature"]`)
temperatureRadioInpts.forEach((tempRadio) => { tempRadio.addEventListener(`change`, temperatureValidature) })

function temperatureValidature() {
  let isTemperatureSelected = false
  temperatureRadioInpts.forEach((tempRadio) => { if (tempRadio.checked) { isTemperatureSelected = true } })
  return isTemperatureSelected
}


function mainValidator() {
  let isCoffeNameValid = coffeNameValidator()
  let isPriceValid = priceValidator()
  let isDescriptionValid = descriptionValidator()
  let isImegeValid = imageValidator()
  let isPromoValid = promoValidator()
  let isSelectedOptionsValid = selectedOptionsValidator()
  let isIntensetyRangeValid = intensetyRangeValidator()
  let isTemperatureValid = temperatureValidature()

  if (!isCoffeNameValid || !isPriceValid || !isDescriptionValid ||
     !isImegeValid || !isPromoValid || !isSelectedOptionsValid ||
      !isIntensetyRangeValid || !isTemperatureValid) { return false }

  return true
}


let formSubmission = document.querySelector('form')

formSubmission.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!mainValidator()) {
    isRejectedToast("Please check your form fields!")
    return
  }

  DisplayForm()
  isSuccessToast("Product added successfully!")

  generalInformationForm.style.display = "none"
  featuresSection.style.display = "none"
  DisplaySummarySection.style.display = "block"
})


let featuresSection = document.querySelector(`#featuresSection`)
let generalInformationForm = document.querySelector(`#generalInformationForm`)
let DisplaySummarySection = document.querySelector(`#DisplaySummarySection`)
let firstNextBtn = document.querySelector(`#Next1`)


firstNextBtn.addEventListener('click', function firstBtnNavigation() {
  generalInformationForm.style.display = "none"
  featuresSection.style.display = "block"
  DisplaySummarySection.style.display = "none"
})


let secondNextBtn = document.querySelector(`#optionsNextBtn`)
let optionsPreviousBtn = document.querySelector(`#optionsPreviousBtn`)

optionsPreviousBtn.type = `button`

optionsPreviousBtn.addEventListener('click', function previeceBtn() {
  featuresSection.style.display = "none"
  generalInformationForm.style.display = "block"
  DisplaySummarySection.style.display = "none"
})


let resetBtn = document.querySelector('#resetBtn')

resetBtn.addEventListener(`click`, function resetBtnNavigation() {
  generalInformationForm.style.display = "block"
  featuresSection.style.display = "none"
  DisplaySummarySection.style.display = "none"
})


let db = []

function DisplayForm() {
  db = []

  let allInputs = document.querySelectorAll(`input, textarea, select`)

  allInputs.forEach(function(input) {
    if (input.type === "checkbox" || input.type === "radio") {
      if (input.checked) { db.push(input.value) }
    } else {
      db.push(input.value)
    }
  })

  let productList = document.querySelector(`#productList`)
  productList.innerHTML = ``

  db.forEach(function(product) {
    let li = document.createElement(`li`)
    li.textContent = product
    productList.append(li)
  })
}