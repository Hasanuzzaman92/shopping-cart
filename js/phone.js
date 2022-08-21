function updatedPhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const previousPhoneNumber = parseInt(phoneNumberField.value);

    // const updatedPhoneNumber = previousPhoneNumber + 1;
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatedPhoneTotalPrice(newPhoneNumber){
    const phoneTotalElement = document.getElementById('phone-total');
    const phoneTotalPrice = newPhoneNumber * 1219;
    phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber =  updatedPhoneNumber(true);
    updatedPhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatedPhoneNumber(false);
    updatedPhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})