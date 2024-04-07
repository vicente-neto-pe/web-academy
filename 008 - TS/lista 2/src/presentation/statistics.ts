import { classroom } from "../main.js";

export class Statistics {
    private htmlElement = document.querySelector<HTMLDivElement>("#statistics")!;
    
    update = ()=>{
        const students = classroom.getstudents().length;
        const mediaIdades = classroom.getAverageAge() || 0;
        const mediaAlturas = classroom.getAverageHeight() || 0;
        const mediaPesos = classroom.getAverageWeight() || 0;
        this.htmlElement.innerHTML = "<h1>Estatísticas</h1>";
        this.htmlElement.innerHTML += "<h5>Quantidade de alunos: "+students+"</h5>";
        this.htmlElement.innerHTML += "<h5>Média de idade: "+mediaIdades+"</h5>";
        this.htmlElement.innerHTML += "<h5>Média de altura: "+mediaAlturas+"</h5>";
        this.htmlElement.innerHTML += "<h5>Média de peso: "+mediaPesos+"</h5>";
        document.body.replaceChild(this.htmlElement, this.htmlElement);
    }

}