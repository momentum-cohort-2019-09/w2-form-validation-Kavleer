// console.log('Add validation!');

function query(selector){
    return document.querySelector(selector)
}
function markValid(field) {
    // console.log('markValid was called')
    clearErrorMsgs(field)
    field.parentNode.classList.remove('input-invalid')
    field.parentNode.classList.add('input-valid')

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
    for (let msg of fieldContainer.querySelectorAll('.error-messages')){
        msg.remove()
    }
}

function nameValidate (text){
    return text !== ""
}

// carValidate

// carYearValid
// carMakeValid
// carModelValid

// dateValid

// numberOfDaysValid

// creditCardValid

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
        markInvalid(nameField)
        }
    }
    )
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

// cvvValid

// expirationValid

main()