const init = function() {
    document.getElementById('button-reset').addEventListener('click', clear);
    document.getElementById('button-submit').addEventListener('click', insertRow);
    document.getElementById('button-delete').addEventListener('click', deleteRow);
}

const clear = function(event) {
    event.preventDefault();
    document.getElementById('form-person').reset();
}

const insertRow = function(event) {
    event.preventDefault();

    let fName = document.getElementById('input-firstName').value;
    let lName = document.getElementById('input-lastName').value;
    let age = document.getElementById('input-age').value;

    let table = document.getElementById('table-persons');
    let newRow = table.insertRow(table.rows.length);

    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);

    cel1.innerHTML = fName;
    cel2.innerHTML = lName;
    cel3.innerHTML = age;

}

const deleteRow = function(event) {
    event.preventDefault();
    let table = document.getElementById('table-persons');
    table.deleteRow(table.rows.length-1);
}

document.addEventListener('DOMContentLoaded', init);