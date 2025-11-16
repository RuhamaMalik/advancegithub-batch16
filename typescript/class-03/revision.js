// const user ={
//     id:1,
//     name:"Ruhama",
//     gender:"female",
//     address:{
//         zipCode:3746374,
//         street:"street 1"
//     }
// }

// const user2 = `{"id":1,"name":"Ruhama","gender":"female","address":"Ruhama colony"}`
// // console.log(typeof JSON.stringify(user));
// console.log(JSON.parse(user2));

// const copy = {...user, address:{...user.address}};

// copy.id =2;
// copy.address.street = "street 2";

// console.log(user);
// console.log(copy);

// const pizzaPromise = new Promise((resolve, reject) => {
//   const error = false;
//   setTimeout(() => {
//     if(!error){
//         resolve({id:1,name:"Ruhama"})
//     }else{
//         reject("daal chawal khao!")
//     }
//   }, 2000);
// });

// pizzaPromise.then((data)=>{
// console.log(data);

// }).catch((err)=>{
// console.log(err);

// })


// in 
// hasOwnProperty

// let obj = Object.create({myproperty:"10"})
// obj.name = "Ruhama";

// console.log(obj);


// console.log("myproperty" in obj); // 
// console.log("name" in obj); // 

// console.log(obj.hasOwnProperty("myproperty")); // 
// console.log(obj.hasOwnProperty("name")); // 



// const myMap = new Map();
// const key = {};

// // myMap.set({}, "abcd");
// // myMap.set({}, "abcd");

// // console.log(myMap.size);

// myMap.set(key, "abcd")
// console.log(myMap);

// console.log(myMap.get(key));



// const key1 = {
//     name:"RUHAMA",
//     id:1
// }
// const key2= {
//     name:"RUHAMA",
//     id:1
// }

// const myMap = new Map();

// myMap.set(key1, "abcd")
// myMap.set(key2, "xyz")

// console.log(myMap);

