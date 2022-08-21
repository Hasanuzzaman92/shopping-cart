function updatedCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const previousCaseNumber = parseInt(caseNumberField.value);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updatedCaseTotalPrice(newCaseNumber){
    const caseTotalElement = document.getElementById('case-total');
    const caseTotalPrice = newCaseNumber * 59;
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function (){
    const newCaseNumber = updatedCaseNumber(true);

    updatedCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function (){
    const newCaseNumber = updatedCaseNumber(false);

    updatedCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})






