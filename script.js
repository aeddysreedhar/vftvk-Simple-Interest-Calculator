function compute()
{   
    var principal = document.getElementById("principal").value;
    /** Checking if the Principal is Positive or not(zero too is NOT positive) */
    if (principal == 0 || principal < 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    
    var amount = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>"+amount+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        