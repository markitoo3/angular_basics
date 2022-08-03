"use strict";
/*

SOME BASIC STUFF

let url: string = 'dawdaw';
let randomNum: number = 30;
let bool: boolean = false;
let randomObj: any = {

};

let numberArray: number[] = [1,2,3,4];
let numberArrayV2: Array<number> = [1,2,3,4];

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

addNumbers(15, 15); */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
