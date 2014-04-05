"use strict";

var calculateTip = function () {
    "use strict";

    var billValue = Number(document.getElementById("bill").value),
        tipValue = Number(document.getElementById("tip").value),
        percent = tipValue / 100,
        tipTotal = Math.floor(billValue * percent),
        newBillTotal = billValue + tipTotal;

    // Needs an if statment to check for more than one decimal
    // Needs a input restriction to keep people from entering more than two numerics after decimal 

    document.getElementById("result").innerHTML = "The tip is: $" + tipTotal + " and your new bill total is: $" + newBillTotal;
}