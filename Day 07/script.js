var a = 10;
console.log(a);
function demo(){
    let b = 20;
    console.log(b)
}
demo();



let user ={
    fullname:"Aditya",
    Address:{
        city:"Gurugram",
        State:"Haryana",
    },
    Mobile:"8076779587",
    favcolor:["black","sage green", "white", "blue"],
    demo:function(){
        return "demo function"
    }
} 
console.log(user.fullname,user.Mobile,user.favcolor[1],user.Address,user.demo());
console.log("My name is "+user.fullname+", My fav color is "+user.favcolor[0]);

console.log(`My name is ${user.fullname}.My fav color is ${user.favcolor[0]}`);

//object methods 
//object.keys (variable name)
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const car = {
    Brand:"Mercedes",
    model:"S-Class"
};
Object.freeze(car);
Object.seal(car);
car.Brand="BMW";
car.model="M6.Comp";
car.color = "Z-Black";
console.log(car)