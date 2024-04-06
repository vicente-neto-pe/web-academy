export class Student {
    static currentId = 0;
    id;
    name;
    age;
    weight;
    height;
    constructor(name, age, weight, height) {
        this.id = "0";
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    getId = () => {
        return this.id;
    };
    setId = (id) => {
        this.id = id;
    };
    getName = () => {
        return this.name;
    };
    setName = (name) => {
        this.name = name;
    };
    getHeight = () => {
        return this.height;
    };
    setHeight = (height) => {
        this.height = height;
    };
    getAge = () => {
        return this.age;
    };
    setAge = (age) => {
        this.age = age;
    };
    getWeight = () => {
        return this.weight;
    };
    setWeight = (weight) => {
        this.weight = weight;
    };
}
