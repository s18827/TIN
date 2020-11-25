const init = function() {
    document.getElementById('button-reset').addEventListener('click', reset);
    document.getElementById('button-submit').addEventListener('click', submit);
}

const reset = function(event) {
    event.preventDefault();
    document.getElementById('form-user').reset();
    document.getElementById('input-age').style["color"]= "black"
    document.getElementById('input-email').style["color"]= "black"
}

const submit = function(event) {
    event.preventDefault();

    let age = document.getElementById("input-age").value;
    let email = document.getElementById("input-email").value;

    if(!validate.isNumber(age)) {
        // alert("incorrect age format");
        document.getElementById('input-age').style["color"] = "red";
    } else { document.getElementById('input-age').style["color"]= "black"}
    if(!validate.isEmailAddress(email)) {
        // alert("incorrect email format");
        document.getElementById('input-email').style["color"] = "red";
    } else { document.getElementById('input-email').style["color"]= "black"}
}

const validate = {
    isEmailAddress:function(str) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(str);
    },
    isNumber:function(str) {
        const reg = /^\d+$/;
        return reg.test(str);
    }
};   

document.addEventListener('DOMContentLoaded', init);
