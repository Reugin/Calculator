let input = document.getElementById('inputarea');
let buttons = document.querySelectorAll('button');
let resultdisplay = document.getElementById('resultdisplay');
let del = document.getElementById('del');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (value == '=') {
            try {
                string = eval(string);
                resultdisplay.innerHTML = "= "+ Math.round(string * 10000)/10000;
                console.log("result" + string);
            } catch (err) {
                resultdisplay.innerHTML = "Error"
            }
        } 
        else if (value == 'Ac') {
            string = "";
            input.value = string
            resultdisplay.innerHTML = string;
        }
        else {
            string += value;
            input.value = string;
        }
    })

})
