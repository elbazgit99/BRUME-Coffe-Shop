function isRejectedToast(msg) {
    Toastify({
        text: msg,
        duration: 3000,
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
let progressBar = document.querySelector(`progress`)
let firstNextBtn = document.querySelector(`#Next1`)
let step = document.querySelector(`.step`)
let line = document.querySelector(`#line`)


function isLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) }
function isMaxLength(inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function isPrice(price) { return /^\d{1,2}(?:[.,]\d{0,2})?$/.test(price) }
function isDescription(dscrip) { return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip) }
function isUrl(url) { return /^https:\/\/.+$/i.test(url) }
function isRequired(inputName, boolean) { return inputName.required = boolean }
function isDiscount(des) { return /^(100|[1-9]?\d)%$/.test(des) }
 
let coffeNameInput = document.querySelector('#coffeName')
coffeNameInput.addEventListener("input", coffeNameValidator)
 
function coffeNameValidator() {
    let coffeMessage = document.querySelector('#coffeMessage')
    let coffeValue = coffeNameInput.value
    localStorage.setItem("coffeName",coffeValue )
    
    try {
        isMaxLength(coffeNameInput, 40)
        isRequired(coffeNameInput, true)
        if (coffeValue.trim() == ``) { throw new Error(`Enter Product Name`) }
        if (!isLetters(coffeValue)) { throw new Error(`Invalid Product Name, Only Letters are valid`) }
        coffeMessage.textContent = ``
        return true
    } catch (error) {
        coffeMessage.textContent = error.message
        return false
    }
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
        localStorage.setItem('price' , priceValue)
        return true
    } catch (error) {
        priceMessage.textContent = error.message
        return false
    }
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
        localStorage.setItem("description", descriptionValue)
        return true
    } catch (error) {
        descriptionMsg.textContent = error.message
        return false
    }
}
 
let productImageInput = document.querySelector('#productImage')
productImageInput.addEventListener('change', imageValidator)
 
function imageValidator() {
    let imageValue = productImageInput.value
    let imageMessage = document.querySelector(`#imageMsg`)
    localStorage.getItem('image', imageValue)
    try {
        isRequired(productImageInput, true)
        if (imageValue.trim() == ``) {
            imageMessage.textContent = ``
            return true
        }
        if (!isUrl(imageValue)) { throw new Error(`The Image Must be a URL Format`) }
        imageMessage.textContent = ``
        return true 
    } catch (error) {
        imageMessage.textContent = error
        return false
    }
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
        return 
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
        localStorage.getItem('discount', discountValue)
        return true
    } catch (error) {
        discountMsg.textContent = error.message
        return false
    }
}
 
let expireDateInpt = document.querySelector(`#expireDate`)
expireDateInpt.addEventListener(`change`, expireDateValidator)
 
function expireDateValidator() {
    let expireDateValue = expireDateInpt.valueAsNumber
    let endDateMsg = document.querySelector(`#endDateMsg`)
    let today = new Date()
    let currentDate = `${Number(today.getFullYear())}/${Number(today.getMonth() + 1)}/${Number(today.getDate())}`
 
  
    try {
        isRequired(expireDateInpt, false)
        if (expireDateValue == ``) { throw new Error(`Select Expiration Date`) }
        if (expireDateValue < currentDate) { throw new Error(`Select Valid Date`) }
        endDateMsg.textContent = ``
        localStorage.getItem('expireDate',expireDateValue)
        return true
    } catch (error) {
        endDateMsg.textContent = error.message
        return false
    }
}
 
let selectOriginOptions = document.querySelector(`#selectOrigin`)
selectOriginOptions.addEventListener('change', selectedOptionsValidator)
 
function selectedOptionsValidator() {
    let optionMsg = document.querySelector(`#optionMsg`)
 
    try {
        isRequired(selectOriginOptions, true)
        if (selectOriginOptions.value == ``) { throw new Error(`Select Origin Option is a Must`) }
        optionMsg.textContent = `Origin of grains :`
        localStorage.getItem("selectedOrigin",selectOriginOptions.value )
        return true
    } catch (error) {
        optionMsg.textContent = error.message
        return false
    }
}
 
let intensityRangeInpt = document.querySelector('#intensity')
intensityRangeInpt.addEventListener('change', intensetyRangeValidator)
 
function intensetyRangeValidator() {
  localStorage.getItem("rangeINtensety", intensityRangeInpt.value)
    return intensityRangeInpt.value
}
 
let temperatureRadioInpts = document.querySelectorAll(`input[name="temperature"]`)
temperatureRadioInpts.forEach((tempRadio) => {
    tempRadio.addEventListener(`change`, temperatureValidature)
})
 
function temperatureValidature() {
  temperatureRadioInpts.forEach(radio => {
    if(radio.checked){return radio.value}
    else{return false}
 
  })
}
 
let featuresSection = document.querySelector(`#featuresSection`)
let generalInformationForm = document.querySelector(`#generalInformationForm`)
let DisplaySummarySection = document.querySelector(`#DisplaySummarySection`)

 
firstNextBtn.addEventListener('click', function(event) {
  event.preventDefault()
    let isGeneralValid = generalValidator()
    
    if (!isGeneralValid) {
        isRejectedToast("Please check general information")
        
        return false
    }
    // step.style.position = "fixed";
    // step.style.left = "2rem";
    progressBar.value = 2

    generalInformationForm.style.display = "none"
    featuresSection.style.display = "block"
    DisplaySummarySection.style.display = "none"
    
})
 
let secondNextBtn = document.querySelector(`#optionsNextBtn`)
let optionsPreviousBtn = document.querySelector(`#optionsPreviousBtn`)
 
optionsPreviousBtn.addEventListener('click',backToGeneralSection)
 
 function backToGeneralSection() {
    featuresSection.style.display = "none"
    generalInformationForm.style.display = "block"
    DisplaySummarySection.style.display = "none"

}
 
secondNextBtn.addEventListener('click', function() {
 
    if (!mainValidator()) {
        isRejectedToast("Please check feature forms")
        return false
    }else{
        isSuccessToast("Product added successfully ")
        generalInformationForm.style.display = "none"
        featuresSection.style.display = "none"
        DisplaySummarySection.style.display = "block"
    }
        progressBar.value = 3
    DisplayForm()
    featuresSection.style.display = "none"
    generalInformationForm.style.display = "none"
    DisplaySummarySection.style.display = "block"
})
 
 

let resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener(`click`,resetButton )
function resetButton() {
    generalInformationForm.style.display = "block"
    featuresSection.style.display = "none"
    DisplaySummarySection.style.display = "none"
}
 
let formSubmission = document.querySelector('form')
formSubmission.addEventListener('submit', (event) => {
    event.preventDefault()
 
})
 
let db = []
 
function DisplayForm() {
    db = []
 
    let allInputs = document.querySelectorAll(`input, textarea, select`)
 
    allInputs.forEach(function(input) {
        if (input.type === "checkbox" || input.type === "radio") {
            if (input.checked) {
                db.push(input.value)
            }
        } else {
            db.push(input.value)
        }
    })
 
    let productList = document.querySelector(`#productList`)
    productList.innerHTML = ``
 
    db.forEach((product) => {
        let li = document.createElement(`li`)
        li.textContent = product
        productList.append(li)
    })
}
 
function generalValidator() {
    if (coffeNameInput.value.trim() == ``) { return false }
    if (basePriceInput.value.trim() == ``) { return false }
    if (descriptionInput.value.trim() == ``) { return false }
    if (promoCheckbox.checked) {
        if (discountInpt.value.trim() == ``) { return false }
        if (expireDateInpt.value == ``) { return false }
    }
 
    return true
}
 
function mainValidator() {
    if (!generalValidator()) { return false }
    if (selectOriginOptions.value == ``) { return false }
 
    return true
}