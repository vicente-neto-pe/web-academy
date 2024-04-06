export class Task{
    private id:string;
    private title:string;
    private createdAt:string;
    private deadLine:string;
    private description:string;

    constructor(title:string, description="", deadLine=""){
        this.id = "0";
        this.title = title;
        this.description = description;
        this.deadLine = deadLine;
        this.createdAt = new Date().toLocaleDateString('pt-BR');
    }

    setId = (newId:string)=>{
        this.id = newId;
    }

    getTitle = () => {
        return this.title
    }

    getId = ()=>{
        return this.id
    }

    getCreatedAt = ()=>{
        return this.createdAt
    }

    getDescription = ()=>{
        return this.description
    }

    setDescription = (newDescription:string)=>{
        this.description = newDescription
    }

    getDeadLine = ()=>{
        return this.deadLine
    }

    setDeadLine = (newDeadLine:string)=>{
        this.deadLine = newDeadLine
    }

    getTask = ()=>{
        return {
            id:this.id,
            title:this.title,
            createdAt:this.createdAt,
            deadLine:this.deadLine,
            description:this.description
        }
    }
    
}