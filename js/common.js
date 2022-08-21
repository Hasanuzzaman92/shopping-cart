function getTextElementValueById(elementId){
    const totalElement = document.getElementById(elementId);
    const currentTotal = parseInt(totalElement.innerText);
    return currentTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){

    // calculate total 
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax 
    const taxAmountString = (currentSubTotal * 0.10).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total', taxAmount);

    const finalTotal = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal)
}


