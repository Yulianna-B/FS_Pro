let x:number = 9;
 x = 12; 

// на языке джава скрипт можна менять тип переменной ,  атакп скрипт строко типизированный там нельзя менять тип

// transpile 

// compile time 
// runtime 

console.log("Hello TS");

// Typing

// implicit - скрытая типизация
let myName = "Alisher"; // тип определился автоматически как string

// string, number, bigint, boolean, null, undefined, symbol

// explicit - явным образом сами задали
let isDrunk: boolean = true;




type CarBody = "cedan" | "cupe" | "suv" | "combi suv";

interface User {
    email: string;
    age: number;
    isAdmin: boolean;
}

const stepan: User = {
    email: "stepa@gmail.com",
    age: 12,
    isAdmin: false
};



type Instrument = "guitar" | "bass" | "piano" | "drums" | "flute" | "voice";


interface Musician {
  name: string;
  instruments: Instrument[];
  isActive: boolean;
}

interface Group {
  name: string;
  members: Musician[];
}

const markKnopfler: Musician = {
    name: "Mark Knopfler",
    instruments: ["guitar", "voice"],
    isActive: true
};

const pickWithers: Musician = {
    name: "Pick Withers",
    instruments: ["drums"],
    isActive: true
}


// Как мы можем типизировать функции?

function sum(a: number, b: number): number {
    return a + b;
  }