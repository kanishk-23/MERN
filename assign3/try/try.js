// const randomcol = function(){
//     const hex ="0123456789ABCDEF"
//     let color = '#'
//     while(color.length<7){
//         let ran = parseInt(Math.random()*16);
//         color+=hex[ran];
//     }
//     return color;
// }

// import { fetch } from "undici-types";

// let lastcolor = null;
// console.log(lastcolor);
// document.getElementById("start").addEventListener("click",function() {
//     if(!lastcolor){
//         lastcolor  = setInterval(()=>{    
//             document.body.style.backgroundColor=randomcol();
//         },100);
//     }
// } );

// document.getElementById("stop").addEventListener("click", function() {
//     if(lastcolor!==null){
//         clearInterval(lastcolor);
//         lastcolor=null;
//     }
// });


const promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("yeah");
        resolve();
    }, 0)
})

promise.then(()=>{
    console.log("Am still sad");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("yeahhh");
        resolve();
    }, 0)
}).then(()=>{
    console.log("Am still sad");
})


(async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
})();
