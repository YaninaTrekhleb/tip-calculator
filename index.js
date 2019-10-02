function calculateTip() {
  const billAmount = document.getElementById("amountBill").value;
  const tipPercentage = document.getElementById("percentageTip").value;
  const peopleNumber = document.getElementById("peopleNumber").value;

  // Math was wrong
  const finalTip = Math.floor(billAmount * (tipPercentage / 100));

  // Without parseInt, as you had this previosly, the variables were evaluated as strings, not numbers. Because of that the result was wrong.
  const totalToPay = parseInt(billAmount) + parseInt(finalTip);
  // toFixed limits numbers shown after a decimal point. I.e. you won't get 0.6666666666666666... but 0.66 instead (if the argument passed to toFixed is 2)
  const perPerson = (totalToPay / parseInt(peopleNumber)).toFixed(2);

  if (
    !isNaN(finalTip) &&
    !isNaN(totalToPay) &&
    !isNaN(perPerson) &&
    finalTip > 0 &&
    totalToPay > 0 &&
    perPerson > 0
  ) {
    document.getElementById("tipAmount").innerText = `$${finalTip}`;
    document.getElementById("totalPay").innerText = `$${totalToPay}`;
    document.getElementById("perPerson").innerText = `$${perPerson}`;
  } else alert("Please enter valid numbers into each input field!");
}

const reset = () => {
  document.getElementById("amountBill").value = "";
  document.getElementById("percentageTip").value = "";
  document.getElementById("peopleNumber").value = "";
  document.getElementById("tipAmount").innerText = "";
  document.getElementById("totalPay").innerText = "";
  document.getElementById("perPerson").innerText = "";
};
