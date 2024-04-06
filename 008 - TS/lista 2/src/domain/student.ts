
export class Student{
    static currentId = 0;
    private id:string;
    private name:string;
    private age:number;
    private weight :number;
    private height:number;

    constructor(name:string, age:number, weight:number, height:number){
        this.id = "0";
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    getId = ()=>{
        return this.id
    }

    setId = (id:string):void=>{
        this.id = id;
    }

    getName = ()  : string => {
        return this.name
    }

    setName = (name:string)=>{
        this.name = name;
    }

    getHeight = ()=>{
        return this.height
    }

    setHeight = (height:number)=>{
        this.height = height;
    }

    getAge = ()=>{
        return this.age
    }

    setAge = (age:number)=>{
        this.age = age;
    }

    getWeight = ()=>{
        return this.weight
    }
    
    setWeight = (weight:number)=>{
        this.weight = weight;
    }
}