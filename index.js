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


  if (initialPrice < currentPrice) {
    // console.log(currentPrice);
    // console.log(initialPrice);
    var profit =
      (currentPrice - initialPrice) * quantity;
    var profitPercentage = (((currentPrice - initialPrice) / initialPrice) * 100).toFixed(2);
    showMessage("Your Profit is " + profit + " & Profit Percentage is " + profitPercentage + " %");
  }else if (initialPrice > currentPrice) {
    // console.log(currentPrice<initialPrice);
    // console.log(currentPrice);
    // console.log(initialPrice);
    // console.log("also working");
    var loss =
      (initialPrice - currentPrice) * quantity;
    var lossPercentage = (((initialPrice - currentPrice) / initialPrice) * 100).toFixed(2);
    showMessage("Your Loss is " + loss + " & Loss Percentage is " + lossPercentage + " %");
  }else if (currentPrice == initialPrice){
    showMessage("No Pain,No Gain!!");
  }
}

showButton.addEventListener('click',calculateProfitAndLoss);
