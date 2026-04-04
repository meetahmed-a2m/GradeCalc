
let getPercent = () => 
{
let tn = document.getElementById('TN').value;
let on = document.getElementById('ON').value;
let result = on/tn *100;
if (tn ==="" || on === "")
{
document.getElementById('gradingBox').innerHTML = "Enter some value to calculate"
return;
}
document.getElementById('answerBox').innerHTML = `Your total % is ${result.toFixed(2)}`
if(result>=80)
{
document.getElementById('gradingBox').innerHTML = "Your Grade is A"
}
else if (result>70)
{
document.getElementById('gradingBox').innerHTML = "Your Grade is B"
}
else if (result>=50)
{
document.getElementById('gradingBox').innerHTML = "Your Grade is C"
}
else if (result<50)
{
document.getElementById('gradingBox').innerHTML = "Failed"
}}

let clearData = ()=> 
    {
        document.getElementById('gradingBox').innerHTML = "";
        document.getElementById('answerBox').innerHTML = "";
        document.getElementById('ON').value = "";
        document.getElementById('TN').value = "";
    }
