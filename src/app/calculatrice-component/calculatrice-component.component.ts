import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculatrice-component',
    templateUrl: './calculatrice-component.component.html',
    styleUrls: ['./calculatrice-component.component.scss']
})
export class CalculatriceComponentComponent implements OnInit {

    compNumber: number;
    compNumber2: number;
    result: number;

    constructor() {
        this.compNumber = Math.floor(Math.random() * 10);
        this.compNumber2 = Math.floor(Math.random() * 10);
        this.result = 0;
    }

    ngOnInit(): void {
    }

    changeNumber() {
        this.compNumber = Math.floor(Math.random() * 10);
        this.compNumber2 = Math.floor(Math.random() * 10);
    }

    multiply() {
        this.result = this.compNumber * this.compNumber2;
    }

    sum() {
        this.result = this.compNumber + this.compNumber2;
    }

    division() {
        this.result = this.compNumber / this.compNumber2;
    }

    substraction() {
        this.result = this.compNumber - this.compNumber2;
    }

    showResult() {
        return this.result;
    }

}

