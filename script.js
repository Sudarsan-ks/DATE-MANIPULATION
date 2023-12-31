var pardiv = document.createElement("div");
pardiv.className = "sud";

var dateElement = document.createElement("input");
dateElement.setAttribute("type", "date");
dateElement.id = "dob";

var button = document.createElement("button");
button.innerHTML = "click me";
button.className = "btn btn-primary";
button.addEventListener("click", datemanipulation);

pardiv.append(dateElement, button);
document.body.append(pardiv);

var display = document.createElement("div");
display.className = "main1";

function datemanipulation() {
    var input = document.getElementById("dob").value;
    var time_stamp = Date.parse(input);
    if (time_stamp) {
        var inputdate = new Date(time_stamp);
        var currentdate = new Date();
        console.log(inputdate);
        console.log(currentdate);
        var millisecond = parseInt(currentdate.getTime() - inputdate.getTime());
        console.log(millisecond);
        var secondsif = Mathfloor(millisecond, 1000);
        console.log(secondsif);
        var minutesif = Mathfloor(secondsif, 60);
        console.log(minutesif);
        var hoursif = Mathfloor(minutesif, 60);
        console.log(hoursif);
        var daysif = Mathfloor(hoursif, 24);
        console.log(daysif);
        var yeardiff = year_diff(inputdate, currentdate);
        console.log(yeardiff);
        var monthdiff = month_diff(inputdate, currentdate);
        console.log(monthdiff);
        display.innerHTML = `
        Given date is ${inputdate} <br>
        Year ${yeardiff} <br>
        Day ${daysif} <br>
        Hour ${hoursif} <br>
        Minute ${minutesif} <br>
        Seconds ${secondsif} <br>
        Milliseconds ${millisecond} <br`

        document.body.append(display);
    }
}


function Mathfloor(value1, value2) {
    return Math.floor(value1 / value2)
}
function year_diff(value1, value2) {
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    return date2.getFullYear() - date1.getFullYear();
}
function month_diff(value1, value2) {
    var year = year_diff(value1, value2);
    var month = (year * 12) + (value2.getMonth() - value1.getMonth());
    return month;
}
