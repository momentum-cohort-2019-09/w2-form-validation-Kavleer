// console.log('Add validation!');

function query(selector){
    return document.querySelector(selector)
}

function markValid(field) {
    // console.log('markValid was called')
    clearErrorMsgs(field)
    field.parentNode.classList.remove('input-invalid')
    field.parentNode.classList.add('input-valid')
}

function markInvalid (field, errorMsg) {
    clearErrorMsgs(field)
    field.parentNode.classList.remove('input-valid')
    field.parentNode.classList.add('input-invalid')

    if (errorMsg) {
        const errorPara = document.createElement('p')
        errorPara.classList.add('input-hint','text-danger','error-message')
        errorPara.innerText=errorMsg
        field.parentNode.appendChild(errorPara)
    }
}

function clearErrorMsgs (field) {
    const fieldContainer = field.parentNode
    //can this be declared outside of the function so markValid could use as well
    for (let msg of fieldContainer.querySelectorAll('.error-message')){
        msg.remove()
    }
}

function nameValidate (text){
    return text !== ""
}

// carValidate

function carYearValidate(text) {
    return text !== ""
}

function carMakeValidate(text){
    return text !==""
}
function carModelValidate(text) {
    return text !==""
}

function dateValidate(text) {
    return text !==""
}

function numberOfDaysValidate(text) {
    return text !==""
}

function creditCardValidate(text) {
    return text !==""
}

function cvvValidate(text) {
    return text !==""
}

function expirationValidate(text) {
    return text !==""
}


// function validateCardNumber(number) {
//     var regex = new RegExp("^[0-9]{16}$");
//     if (!regex.test(number))
//         return false;

//     return luhnCheck(number);
// }

// function luhnCheck(val) {
//     var sum = 0;
//     for (var i = 0; i < val.length; i++) {
//         var intVal = parseInt(val.substr(i, 1));
//         if (i % 2 == 0) {
//             intVal *= 2;
//             if (intVal > 9) {
//                 intVal = 1 + (intVal % 10);
//             }
//         }
//         sum += intVal;
//     }
//     return (sum % 10) == 0;
// }

function main(){
    query('#parking-form').addEventListener('submit', function(event){
        event.preventDefault()
    
    let nameField=query('#name')
    let name=nameField.value.trim()
    let nameValid=nameValidate(name)
    // console.log({name})
    if(nameValid) {
        markValid(nameField)
        // console.log('name is valid')
        }
        else {
        markInvalid(nameField, 'Invalid name')
        }
    
    let carYrField= query('#car-year')
    let carYr=carYrField.value.trim()
    let carYrValid=carYearValidate(carYr)
    if (carYrValid) {
        markValid(carYrField)
        }
        else {
        markInvalid(carYrField,'Invalid car year')
        }
    
    let carMakeField=query('#car-make')
    let carMake=carMakeField.value.trim()
    let carMakeValid=carMakeValidate(carMake)
    if (carMakeValid) {
        markValid(carMakeField)
        }
        else {
        markInvalid(carMakeField, 'Invalid')
        }
    let carModelField=query('#car-model')
    let carModel=carModelField.value.trim()
    let carModelValid=carModelValidate(carModel)
    if (carModelValid) {
        markValid(carModelField)
        }
        else {
        markInvalid(carModelField, 'Invalid')
        }
    
    let dateField=query('#start-date')
    let date=dateField.value.trim()
    let dateValid=dateValidate(date)
    if (dateValid) {
        markValid(dateField)
        }
        else {
        markInvalid(dateField, 'Invalid start date')
        }

    let daysField=query('#days')
    let days=daysField.value.trim()
    let daysValid=numberOfDaysValidate(days)
    if (daysValid) {
        markValid(daysField)
        }
        else {
        markInvalid(daysField, 'Invalid days')
        }
    let creditField=query('#credit-card')
    let credit=creditField.value.trim()
    let creditValid=creditCardValidate(credit)
    if (creditValid) {
        markValid(creditField)
        }
        else {
        markInvalid(creditField, 'Invalid card')
        }
    
    let cvvField=query('#cvv')
    let cvv=cvvField.value.trim()
    let cvvValid=cvvValidate(cvv)
    if (cvvValid) {
        markValid(cvvField)
        }
        else {
        markInvalid(cvvField, 'Invalid CVV code')
        }

    let expirationField=query('#expiration')
    let expiration=expirationField.value.trim()
    let expirationValid=expirationValidate(expiration)
    if (expirationValid) {
        markValid(expirationField)
        }
        else {
        markInvalid(expirationField, 'Invalid expiration date')
        }
    }
    )
}



// cvvValid

// expirationValid

main()