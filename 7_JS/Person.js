//Class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //property
    height = undefined;
    //method
    talk() {
        console.log("I am " + this.name +
            " and my age is " + this.age);
    }
}

export default Person;
