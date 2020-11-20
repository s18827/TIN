var student = {
    name: "",
    surname: "",
    id: 1,
    grades: [3, 4, 5],

    set fullName(fullName) {
        var split = fullName.toString().split(" ");
        this.name = split[0];
        this.surname = split[1];
    },

    get fullName() {
        return this.name + " " + this.surname;
    },

    get gradeAvg() {
        let sum = 0;
        this.grades.forEach(grade => { sum += grade });
        return sum / this.grades.length;
    }

} 

// var stud1 = new Student("Aleks", "Xyz", 1, [5,4,3,3]);
student.fullName = "Abraham Lincoln";
console.log(student.fullName);
console.log(student.gradeAvg);
// console.log(stud1.gradeAvg());
