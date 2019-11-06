function calculateTip() {
    const amountBillElement = document.getElementById('amountBill');
    const percentageTipElement = document.getElementById('percentageTip');
    const peopleNumberElement = document.getElementById('peopleNumber');

    const billAmount = Math.abs(parseInt(amountBillElement.value));
    const tipPercentage = Math.abs(parseInt(percentageTipElement.value));
    const peolpeNumber = Math.abs(parseInt(peopleNumberElement.value));

    amountBillElement.value = billAmount;
    percentageTipElement.value = tipPercentage;
    peopleNumberElement.value = peolpeNumber;

    const totalTip = Math.floor((billAmount * tipPercentage)) / 100;
    const totalToPay = billAmount + totalTip;
    const tipPerPerson = Math.floor(totalTip * 100 / peolpeNumber) / 100;
    
    document.getElementById('tipAmount').innerText = totalTip;
    document.getElementById('totalPay').innerText = totalToPay;
    document.getElementById('perPerson').innerText = tipPerPerson;
}
