// constructor function:
function Student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;

    this.fullName = function() {
        return this.name + " " + this.surname;
    }

    this.gradeAvg = function() {
        let sum = 0;
        this.grades.forEach(grade => { sum += grade });
        return sum / grades.length;
    }

}

var stud1 = new Student("Aleks", "Xyz", 1, [5,4,3,3]);
console.log(stud1.fullName());
console.log(stud1.gradeAvg());
