var ip = document.querySelector("#initial-price");
var qt = document.querySelector("#quantity");
var cp = document.querySelector("#current-price");
var showButton = document.querySelector("#showButton");
var finalOutput = document.querySelector("#output");

function showMessage(message) {
  finalOutput.innerText = message;
}

function calculateProfitAndLoss() {

var initialPrice = ip.value;
var quantity = qt.value;
var currentPrice = cp.value;


  if (currentPrice > initialPrice) {
    console.log(currentPrice);
    console.log(initialPrice);
    var profit =
      currentPrice * quantity - initialPrice * quantity;
    var profitPercentage = ((profit / initialPrice) * 100).toFixed(2);
    showMessage("Your Profit is " + profit + " & Profit Percentage is " + profitPercentage);
  }
  
  if (currentPrice < initialPrice) {
    console.log(currentPrice<initialPrice);
    console.log(currentPrice);
    console.log(initialPrice);
    console.log("also working");
    var loss =
      initialPrice * quantity - currentPrice * quantity;
    var lossPercentage = ((loss / initialPrice) * 100).toFixed(2);
    showMessage("Your loss is " + loss + " & loss Percentage is " + lossPercentage);
  }
  else {
    showMessage("No Pain,No Gain");
  }
}


showButton.addEventListener('click',calculateProfitAndLoss);
