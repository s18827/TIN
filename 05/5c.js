// object initializer:
var student = {
    name: "",
    surname: "",
    id: 0,
    courseList: ["Math", "Polish", "IT", "Geography", "Physics"],

    fullName: function() {
        return this.name + ' ' + this.surname;
    }
}

function createStud(name, surname, id) {
    var newStud = Object.create(student);
    newStud.name = name;
    newStud.surname = surname;
    newStud.id = id;
    return newStud;
}


var stud1 = createStud("Ale", "Zal", 1);
console.log(stud1.fullName());
console.log(stud1.courseList);
