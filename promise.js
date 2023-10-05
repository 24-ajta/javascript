let p =new Promise((resolve,reject)=>{
    let a =2;
    if(a==2){
        resolve("Success");
    }else{
        reject("Failed");
    }
})
p
.then((message)=>{
    console.log("Message :",message);
})
.catch((error)=>{
    console.log("Error :",error)
});





/*--------------------------------------------------------Promise Chaining---------------------------------------------------*/


// p
// .then((message)=>{
//     console.log("Message :",message);
//     return message + "to1";
// })                                                   
// .then((message1)=>{
//     console.log("Message1 :",message1);
//     return message1 + "to2";
// })
// .then((message2)=>{
//     console.log("Message2 :",message2);
// })
// .catch((error)=>{
//     console.log("Error :",error)
// });




/*--------------------------------------------------------Using Callback Function---------------------------------------------------*/




// let usernotplaying = true;
// let userleft = true;


// function game(succescallback,errorcallback){
//     if(usernotplaying == true && userleft == true){****
//         errorcallback({
//             name : "user1",
//             message : "User left the game",
//         });
//     }else if(usernotplaying == true && userleft == false){
//         errorcallback({
//             name : "user1",
//             message : "Game Paused",
//         })
//     }else if(usernotplaying == false && userleft == false){
//         succescallback({
//             name:"user1",
//             message:"Playing Game",
//         })
//     }
// }

// game (function(successmessage){
//     console.log("Success Message ",successmessage);
// },function(errormessage){
//     console.log("Error Message ",errormessage)
// });



/*--------------------------------------------------------Using Promise---------------------------------------------------*/




// let usernotplaying = true;
// let userleft = true;

// function game(){
//     return new Promise((resolve,reject)=>{
//         if(usernotplaying == true && userleft == true){
//             reject({
//                 name : "user1",
//                 message : "User left the game",
//             });
//         }else if(usernotplaying == true && userleft == false){
//             reject({
//                 name : "user1",
//                 message : "Game Paused",
//             })
//         }else if(usernotplaying == false && userleft == false){
//             resolve({
//                 name:"user1",
//                 message:"Playing Game",
//             })
//         }
//     })
// }

// game()
//     .then((successmessage)=>{
//         console.log("SuccessMessage ",successmessage)
//     })
//     .catch((errormessage)=>{
//         console.log("errormessage ",errormessage)
//     });

/*--------------------------------------------------------Promise all & promise race---------------------------------------------------*/

let promise1 = new Promise((resolve,reject)=>{
    resolve("Success1")
})
let promise2 = new Promise((resolve,reject)=>{
    resolve("Success2")
})
let promise3 = new Promise((resolve,reject)=>{
    resolve("Success3")
})

//Promise all

Promise.all([promise1,promise2,promise3])
        .then((successmessage)=>{
            console.log("SuccessMessage ",successmessage)
      })
      .catch((errormessage)=>{
    console.log("errormessage ",errormessage)
    });



//promise race

Promise.race([promise1,promise2,promise3])
.then((successmessage)=>{
    console.log("SuccessMessage ",successmessage)
})
.catch((errormessage)=>{
console.log("errormessage ",errormessage)
});


/*--------------------------------------------------------Promise all map---------------------------------------------------*/


let arr = ["true","false","true"]

let result = Promise.all(
    arr.map((e)=>{
        return new Promise((resolve,reject)=>{
            if(e=="true" || e=="false"){
                resolve("Success");
            }
        })
    })
);
console.log("Result :",result);

result
    .then((message)=>{
        console.log("Success")
    })
    .catch((error)=>{
        console.log("Error :",error)
    })