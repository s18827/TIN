const init = function() {
    document.getElementById('button-reset').addEventListener('click', reset);
    document.getElementById('button-submit').addEventListener('click', submit);
}

const reset = function(event) {
    event.preventDefault();
    document.getElementById('form-user').reset();
    document.getElementById("output-value").innerHTML = "";
}

const getSelectedOption = function(sel) {
    let opt;
    for (let i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}


const submit = function(event) {
    event.preventDefault();

    let valid = validateInput();
    if(valid){
        let val = document.getElementById("input-value").value;
        let newVal;

        let sel = document.getElementById('select-scale');
        let convTo = getSelectedOption(sel).value;

        if(convTo == "Celcius") {
            // alert(convTo);
            newVal = (val - 32) * 5 / 9;
            document.getElementById("output-value").innerHTML = newVal;
        }
        else if(convTo == "Fahrenheit") {
            // alert(convTo);
            newVal = val * 9 / 5 + 32;
            document.getElementById("output-value").innerHTML = newVal;
        }
    }else {
        alert('Enter numerical value')
    }
}

const validateInput = function(event) {
    let input = document.getElementById("input-value").value;
    if(input.match(/^\d*\.?\d*$/)) return true;
    else return false;
}

document.addEventListener('DOMContentLoaded', init);
