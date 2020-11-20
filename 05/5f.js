class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    set fullName(fullName) {
        var split = fullName.toString().split(" ");
        this.name = split[0] || "";
        this.surname = split[1] || "";
    }

    get fullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends Person{
    constructor(name, surname, id, grades) {
        super(name, surname)
        this.id = id;
        this.grades = grades;
    }

    get gradeAvg() {
        let sum = 0;
        this.grades.forEach(grade => { sum += grade });
        return sum / this.grades.length;
    }
}

let per1 = new Person();
per1.fullName = "Hello Kitty"
console.log(per1.fullName);

var stud1 = new Student("","", 1, [3,4,5]);
stud1.fullName = per1.fullName;
console.log(stud1.fullName);
console.log(stud1.gradeAvg);
// console.log("---------")
// per1.fullName = "Abra Kadabra";
// console.log("per1.fullname = " + per1.fullName);
// console.log("stud1.fullname = " + stud1.fullName);
// console.log("---------")
// stud1.fullName = "Changed Changed";
// console.log("per1.fullname = " + per1.fullName);
// console.log("stud1.fullname = " + stud1.fullName);
