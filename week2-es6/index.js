////////////// call , apply, bind

// let user = {
//     name:"Sumaiya",
//     age:10,
//     greet:function(){
//         console.log(`Hello ${this.name}`);

//     }
// }

// user.greet();

///////// call

// function greet(greeting){
//         console.log( greeting  + " : " + this.name);

//     }

//     const user = {
//         name:"Ruhama"
//     }

//     const user2 ={
//          name:"Sumaiya",
//     }

//     greet.call(user, "Hello" )
//     greet.call(user2, "Hello" )

///////// apply

// function intro(city, country) {
//   console.log(`I am ${this.name} from ${city}, ${country} ------------ ${this.department}`);
// }

// const employ = {
//      name: "Zainab",
//       age: 10 ,
//       department:"CS",
//       experience:"fresher",
//       isActive:true
//     };

// intro.apply(employ, ["Karachi", "Pakistan"]);

///////// bind

// function sayHi(abcd, xyz) {
//   console.log(`Hi ${this.name} ---------- ${abcd}---------- ${xyz}`);
// }

// const user = { name: "Amna" };

// const greet = sayHi.bind(user, "kdjkfdkf","xxxxxxxxxxxxxx");

// greet()

/////////////////////////// LOCAL STORAGE / SESSION STORAGE

// const user = {name:"Ruhama",age:10}

// localStorage.setItem("theme" , "dark");
// localStorage.setItem("user", user) // bad practice
// localStorage.setItem("employ",   JSON.stringify(user))

// console.log(typeof localStorage.getItem("employ"));

// console.log( JSON.parse(localStorage.getItem("employ")));

// const local_employ = localStorage.getItem("employ");
// const parse_employ = JSON.parse(local_employ)
// // console.log(local_employ); /// {"name":"Ruhama","age":10}
// console.log(parse_employ);

// console.log(localStorage.getItem("user"));

// localStorage.setItem("random_number", 100 );
// console.log(localStorage.getItem("random_number")); //

// localStorage.removeItem("user")

// localStorage.clear();

// localStorage.setItem("style" , "modern");

// sessionStorage.setItem("theme" , "light");

//////////////////////////// Object Methods

///////// create

// const user ={
//     name:"Ruhama"
// }

// console.log(user);

// const prototypeObj = {
//     greet(){
//         console.log(`Hello ${this.name}`);

//     }
// }

// const user = Object.create(prototypeObj);
// user.name = "Ruhama";
// user.age =10

// // const teacher = Object.create(prototypeObj)

// console.log(user);
// user.greet()
// // console.log(teacher);

////////////// assign

// const obj1 ={a:1}
// const obj2 ={b:2}

// const combine = Object.assign({},obj2,obj1);

// console.log(obj1);
// console.log(obj2);
// console.log(combine);

////////////// keys , values, entries

// const product = {
//   title: "Kajal",
//   description: "Our Awesome Kajal",
//   price: 100,
//   stock: 5,
//   colour: ["black", "blue", "green", "brown"],
//   isAvailable:true
// };

// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

/////////////////////////// fromEntries


// const arr = [
//   ["title", "Kajal"],
//   ["description", "Our Awesome Kajal"],
//   ["price", 100],
// ];


// const obj = Object.fromEntries(arr);
// console.log(obj);

/////////////////////////// toString


const student = {
    rollNo:1,
    stName:"Anaya",
    class:"7",
    section:"B"
}

// console.log(student.toString());

// console.log(Object.hasOwn(student, "class")); // true
// console.log(Object.hasOwn(student, "lastName")); // false

// Object.freeze(student)
Object.seal(student)

student.lName = "Fatima";
student.section = "A";


console.log(student);
