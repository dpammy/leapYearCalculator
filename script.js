function check_leapyear(){
  var year;
  year = document.getElementById("year").value;
  if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
  {
    alert(year+" is a leap year");  
  }
  else
  {
    alert("Oops " +year+" is not a leap year");  
  }
}
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
function calculate(event) {
const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    display.value = '';
  } else {
    display.value += clickedButtonValue;
  }
}








