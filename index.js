function calculateTip() {
    const billAmount = document.getElementById('amountBill').value;
    const tipPercentage = document.getElementById('percentageTip').value;
    const peopleNumber = document.getElementById('peopleNumber').value;
   

    const finalTip = Math.floor((billAmount * (tipPercentage / 100)) / peopleNumber);
    const totalToPay = billAmount + finalTip;
    
    document.getElementById('tipAmount').innerText = finalTip;
    document.getElementById('totalPay').innerText = totalToPay;
    // document.getElementById('perPerson').innerText = finalTip;

}

