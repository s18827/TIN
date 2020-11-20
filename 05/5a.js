var person = {
    name: "Bob'",
    surname: "Ross",
    birthdate: 1968,

    calcAge : function() {
        return new Date().getFullYear() - this.birthdate;
    },

    introduce : function() {
        return "Hi, my name is " + this.name + " " + this.surname
         +", I'm " + this.calcAge() + " years old.";
    }
    
}

console.log(person.introduce()+"\n");

function printProps(obj) {
    props = [];
    propTypes = [];

    Object.keys(obj).forEach((prop) => props.push(prop));

    for(const prop in obj) {
        propTypes.push(typeof obj[prop]);
    }

    for(let i = 0; i < props.length; i++) {
        console.log(props[i] + ": " + propTypes[i]);
    }
}

// console.log(person);
printProps(person);
