var input1 = parseInt(prompt("Marks in 1st Subject"));
var input2 = parseInt(prompt("Marks in 2nd Subject"));
var input3 = parseInt(prompt("Marks in 3rd Subject"));
var process = (input1 + input2 + input3)/3 ;
var message = "You are above Standard, Admission Granted!";
var message2 = "Sorry You are not Eligible for Admission"
if (process >= 80){
alert( message);   
}
if (process < 80){
    alert( message2);
}







