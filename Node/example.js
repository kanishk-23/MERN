// let date = new Date().toLocaleString("en-IN")
// console.log(date)

// const myarray =[0,1,2,3,4,5,6,7,8,9,10]
// const mynew = myarray.slice(1)
// console.log(myarray)
// console.log(mynew)


// const myarray1 =[0,1,2,3,4,5,6,7,8,9,10]
// const mynew1 = myarray1.splice(2,5)

// console.log(myarray1)
// console.log(mynew1)


const user = {
    id: 1,
    name: "krishna",
    contact: 9324332503,
    loggedin: false,
    tru: this
}

const users = [1,2,3,4,5,6,7,8];
// const {id, name, loggedin, contact,tru} = user
// console.log(id, name, contact, loggedin)
// console.log(tru);

for(let key in user){
    console.log(key, user[key]);
}

for (const element of users) {
    console.log(element);
}

users.forEach((item)=>{
    item+=1;
    console.log("new",item);
})

console.log(users);

(function add(...z){
    let sum=0;
    for(i of z){
        sum+=i;
    }
    console.log(sum);
})(3,4,5,7);
// ((...z)=>)