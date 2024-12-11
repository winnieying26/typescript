let name: string;
let age : number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];


type Person1{
name: string;
age?: number
}


let person : Person1 ={
  name: "Joe",
  age: 34
}
let lotsPeople: Person1[];


let printName : (name: string) => void; never




function printName(name: string){
  console.log(name)
}


interface Person{
name: string,
age: number}

interface Student extends Person{
    major: string
}


 type x ={
a: string;
b: number}

 type y = x &{
c: string;
d: number}


