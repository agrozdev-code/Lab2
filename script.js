function compute()
{
    var p = document.getElementById("principal").value;
    if (p == '' || p<=0) {
        alert("Please, enter a positive number for the principal!");
        document.getElementById("principal").focus();
        return;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var date = new Date().getFullYear();

    document.getElementById("result").innerHTML='If you deposit <span id="yellowSpan">' + p + '</span>,<br>\at an intereset rate of <span id="yellowSpan">' + r + '</span>.<br>\
    You will receive an amount of <span id="yellowSpan">' + (p*(r/100))*y + '</span>,<br>\
    in the year <span id="yellowSpan">' + (parseInt(date)+parseInt(y)) + '</span>.<br>';
}
