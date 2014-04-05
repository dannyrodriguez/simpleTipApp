"use strict";

var calculateTip = function () {
    "use strict";

    var bill = Number(document.getElementById("bill").value),
        tip = Number(document.getElementById("tip").value),
        percent = tip / 100,
        calculatedTip = bill * percent,
        total = bill + calculatedTip;

    document.getElementById("result").innerHTML = "The tip is: $" + calculatedTip + " and your total is: $" + total;
}