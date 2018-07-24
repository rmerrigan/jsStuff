'use strict';

class Book {

    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'some good bookstore';
    }

}

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, month, year);
        this.month = month;
    }
}

const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan');

console.log(mag1);