let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            console.log(screen.value);
        }
        else if (buttonText == 'DL') {
            let newStringLength = screenValue.length - 1;
            let newString = screenValue.substring(0, newStringLength);
            screenValue = newString;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

