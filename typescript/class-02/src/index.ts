// let a = 5; // type inference
// let a:number = 5; // type annotation
// let a; // any


// let colours:string[] = ["red","white","yellow","blue","black","pink"];
// console.log(colours);


// let even:number[] = [2,4,6,8,10];
// console.log(even[2]); // 6


/////////////////////////////////////////////////  Custom Types

///////// type aliases

// type User = {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
//     address: string;
//     profImg?: string // optional property
// }

// const user3: User = {
//     id: 3,
//     name: "Hira",
//     email: "hira@gmail.com",
//     profImg: "hhhhhhhhhhh.png",
//     isActive: true,
//     address: "hira colony"
// }

// const user1: User = {
//     id: 1,
//     name: "Amna",
//     email: "amna@gmail.com",
//     isActive: false,
//     address: "amna colony",
//     profImg: "slkdklsndlksd"
// }

// const user2: User = {
//     id: 2,
//     name: "Alia",
//     email: "alia@gmail.com",
//     isActive: true,
//     address: "alia colony",
// }

// console.log(user2);


// type User = {
// id: number;
// name: string;
// email: string;
// isActive: boolean;
// address: string;
// profImg?: string // optional property
// }

// const users:User[] = [
//     {
// id: 1,
// name: "Hira",
// email: "hira@gmail.com",
// profImg: "hhhhhhhhhhh.png",
// isActive: true,
// address: "hira colony"
// },
// {
//     id: 2,
//     name: "Hiba",
//     email: "hiba@gmail.com",
//     profImg: "hibaaaaaaaaaaa.png",
//     isActive: true,
//     address: "hiba colony"
// }
// ];

// console.log(users[1]?.name);



///////// Interfaces


// type CustomType = string;

// let x:CustomType = "my string";
// x="my second str";
// // x=5; // error

// interface Person {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
//     address: string;
//     profImg?: string
// }

// const persons:Person[] = [
//     {
//     id: 1,
//     name: "Hira",
//     email: "hira@gmail.com",
//     profImg: "hhhhhhhhhhh.png",
//     isActive: true,
//     address: "hira colony"
// }
// ]

// const person1: Person = {
//     id: 1,
//     name: "Hira",
//     email: "hira@gmail.com",
//     profImg: "hhhhhhhhhhh.png",
//     isActive: true,
//     address: "hira colony"
// }

// console.log(person1);


///////////////////////// Union |

// type Size = string | number ;


// let size:Size="XL";
// size = 42;
// size = true

// type A = {
//     type: "A",
//     id: number | string;
//     name: string
// }


// type B = {
//     type: "B",
//     address: {
//         zipCode: number | string;
//         street: string
//     };
//     contact: number;
// }


// type C = A | B;

// const employ:C = {
//     id:1,
//     name:"Ruhama",
//
//     contact:9827382738
// }

// const employ:C = {
//     id:1,

//     address:"xyz street",
//     contact:9827382738
// }

// const employ: C = {
//     id: 1,

//     address: {
//         street: "Street 1",
//         zipCode: 172678
//     },
//     contact: 9827382738,

//     // salary:100000 // error
// }

// console.log(employ);



// const teacher: C = {
//     type: "A",
//     id: 1,
//     name: "Ruhama",

//     //  contact:93749837498 // error
// }

// const teacher2: C = {
//     type: "B",
//     address: {
//         zipCode: 394789,
//         street: "street 2"
//     },
//     contact: 23892323232
// }


//////////////////////////////////////////////// Intersection

type A = {
    id: number;
    name: string
}


type B = {
    address:string;
    contact: number;
}

type Combine = A & B;

const myObj:Combine ={
    id: 23,
    name: "Ruhama",
    address:"ruhama colony",
    contact:98274983743
}

console.log(myObj);


