class Student {
    constructor(name, surname, id, grades) {
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.grades = grades;
    }

    set fullName(fullName) {
        var split = fullName.toString().split(" ");
        this.name = split[0] || "";
        this.surname = split[1] || "";
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    get gradeAvg() {
        let sum = 0;
        this.grades.forEach(grade => { sum += grade });
        return sum / this.grades.length;
    }

}

let stud1 = new Student("Ale", "Zal", 1, [3,4,5]);
console.log(stud1.fullName);
stud1.fullName = "Abraham Lincoln";
console.log(stud1.fullName);
console.log(stud1.gradeAvg);

// let stud2 = new Student(2, [3,4,5]);
// stud2.fullName = "Abraham Lincoln";
// console.log(stud2.fullName);
// console.log(stud2.gradeAvg);
