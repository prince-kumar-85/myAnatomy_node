const myCollage="NIET Noida";
console.log("I am studey in "+myCollage)


console.log(`I study in ${myCollage}`);

function add(a,d){
    return a+d;
}

console.log(add(4,6))


const addMe=(x,y)=>{
    return x+y;
}

console.log(addMe(2,5));

//ternary operator

let speed=50;
let message=speed >50 ? "plz Slow down ": "you are driving safely";
console.log(message);

//destructuring objects

let obj={
    name:"prince Kumar",
    age:20,
    hobbies:["driving","playing"],
    nationality:"Indian",
    profession:"student"

}
const {name,age,profession}=obj

console.log(profession)

console.log(obj.name);

console.log(obj.age);

//  spread operator

let language=['cpp','koital','react','mern']
const addLen=[...language,"python","java"];
console.log(addLen)


// rest

const [first, second, third,...abc]=['raj','tarun','madhu','amol','vashu','pinku','ravi'];
console.log(abc)


// map== iterate thru each individual item in an array

// addLen.map(items,i=>{
//     console.log(items)
// })

// slice : does not modify og array in splice :modifies og array

const veggies=["potato","tomato","onion","greenpeas","cucumber","cauliflower"];
console.log(veggies)

const z= veggies.slice(1,4)
console.log(z)
console.log(veggies)

const z1= veggies.splice(1,4)
console.log(z1)
console.log(veggies)