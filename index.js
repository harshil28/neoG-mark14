var ip = document.querySelector("#initial-price");
var qt = document.querySelector("#quantity");
var cp = document.querySelector("#current-price");
var showButton = document.querySelector("#showButton");
var finalOutput = document.querySelector("#output");

function showMessage(message) {
  finalOutput.style.display = "block";
  finalOutput.innerText = message;
}

function showErrorMessage(message) {
  finalOutput.style.display = "block";
  finalOutput.style.color = "red";
  finalOutput.innerText = message;
}

function hideMessage() {
  finalOutput.style.display = "none";
}

function calculateProfitAndLoss() {


var initialPrice = ip.value;
var quantity = qt.value;
var currentPrice = cp.value;

hideMessage();
if(initialPrice>0){
    if(quantity>0)
    {
        if(currentPrice>=0){
            if (initialPrice < currentPrice) {
                var profit =
                  (currentPrice - initialPrice) * quantity;
                var profitPercentage = (((currentPrice - initialPrice) / initialPrice) * 100).toFixed(2);
                showMessage("Your Profit is " + profit + " & Profit Percentage is " + profitPercentage + " %");
              }else if (initialPrice > currentPrice) {
                var loss =
                  (initialPrice - currentPrice) * quantity;
                var lossPercentage = (((initialPrice - currentPrice) / initialPrice) * 100).toFixed(2);
                showMessage("Your Loss is " + loss + " & Loss Percentage is " + lossPercentage + " %");
              }else if (currentPrice == initialPrice){
                showMessage("No Pain,No Gain!!");
              }
        }else{
        showErrorMessage("Enter positive current value!!");
        }
    }else{
    showErrorMessage("Enter positive quantity!!");
    }
}else{
    showErrorMessage("Enter positive initial value!!");
}
}

showButton.addEventListener('click',calculateProfitAndLoss);