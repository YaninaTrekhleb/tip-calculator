function calculateTip() {
    const billAmount = parseInt(document.getElementById('amountBill').value);
    const tipPercentage = parseInt(document.getElementById('percentageTip').value);
    const peolpeNumber = parseInt(document.getElementById('peopleNumber').value);
    // console.log(typeof billAmount, typeof tipPercentage, typeof peolpeNumber);

    const totalTip = Math.floor((billAmount * (tipPercentage / 100)));
    const totalToPay = billAmount + totalTip;
    const tipPerPerson = Math.floor(totalTip / peolpeNumber);
    
    document.getElementById('tipAmount').innerText = totalTip;
    document.getElementById('totalPay').innerText = totalToPay;
    document.getElementById('perPerson').innerText = tipPerPerson;

}

