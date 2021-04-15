"use strict";
//selects all the buttons
const buttons = document.querySelectorAll('button');

//select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// buttons with eventListener
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
        //check if display is empty, if so do calculation
        if (display.value !== '') {
            //calculate and show answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        //cleareverything on display
        display.value = '';
    } else {
        //otherwise cantenate it to the disp[lay
        display.value += clickedButtonValue;
    }
}

