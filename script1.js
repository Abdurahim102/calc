const display = document.querySelector('.display')


function Changer(value) {
        if (display.value.length < 20) {
        display.value += value 
    }
}

function Clear() {
    display.value = '';
   
}


function Row() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";   
    }

    if (display.value === "Error") {
        if (display.value.length < 5) {
            display.value += value 
        }
    }
} 
    
