// console.log("1");
// console.log("2");
// setTimeout(function(){
//     console.log("4");
// }, 3000);
// console.log("3");





// function getcandy(callback){
//     setTimeout(() => {
//         let candy="🧨";
//         console.log("here is your candy 😊",candy);
//         callback(candy);
//         // return candy;
//     }, 3000);
// }

// function handover_keys(candy,callback2) {
//     setTimeout(() => {
//         keys=candy+"K";
//         console.log("here's your key", keys);
//         callback2(keys);
//     }, 3000);
// }

// function roomcheckin(keys,callback3) {
//     setTimeout(() => {
//         rest=keys+"HASSSSSHHHHH";
//         console.log("let's chill", rest);
//         callback3(rest);
//     }, 3000);
// }

// // console.log(getcandy());
// getcandy((candy)=>{
//     // console.log("have this candy",candy);
//     handover_keys(candy, (keys)=>{
//         // console.log("have your keys",keys);
//         roomcheckin(keys, ()=>{
//             console.log("finally");
//         })
//     })
// })





// let ticket = new Promise(function(resolve, reject) {
//     const isboarded = true;
//     if(isboarded){
//         resolve("done");
//     }else{
//         reject("no booking");
//     }
// })
// setTimeout(() => {
//     ticket.then((data)=>{
//         console.log("wooohoo", data);
//     }).catch((data)=>{
//         console.log("what!!", data);
//     })
// }, 3000);






function getcandy(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const candy="🧨";
            resolve(candy)
        });
    })
}

function getkey(candy){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const key=candy+"K";
            if(candy)resolve(key)
                else reject("Candy not given")
        });
    })
}

function getintoroom(key){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const rest=key+"hasssh";
            if(key)resolve(rest)
            else reject("Key not given")
        });
    })
}


// getcandy().then((candy)=>{
//     console.log("here's your candy", candy)
//     return getkey(candy)
// }).then((key)=>{
//     console.log("here's your Key",key)
//     return getintoroom(key)
// }).then((rest)=>{
//     console.log("rest finally",rest)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Happy assisting")
// })

// ----------------------or else----------------

async function Newtriproom() {
    try{
        const candy = await getcandy();
        console.log(candy);
        
        const key = await getkey(candy);
        console.log(key);
        
        const rest = await getintoroom(key);
        console.log(rest);
    }
    catch(err){
        console.log(err)
    }
    console.log("Happy assisting")
}

Newtriproom()