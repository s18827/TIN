const init = function() {
    document.getElementById('button-reset').addEventListener('click', reset);
    document.getElementById('button-submit').addEventListener('click', submit);
}

const reset = function(event) {
    event.preventDefault();
    document.getElementById('form-user').reset();
    document.getElementById("output-value").innerHTML = "";
}

// handling select-scale
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

const validate = {
    isNumberDec:function(str) {
        const reg = /^\d*\.?\d*$/;
        return reg.test(str);
    }
};

const submit = function(event) {
    event.preventDefault();

    let val = document.getElementById("input-value").value;
    if(validate.isNumberDec(val)){
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

document.addEventListener('DOMContentLoaded', init);
