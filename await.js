// console.log("javascript")

// let preMovie = async () => {
//     let friendbringticket = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("The Ticket is here for you...");
//         },2000);
//     })

//     let getPopcorn = new Promise((resolve,reject) =>{
//         resolve("The popcorn is ready for you...")
//     });
//     let addButter = new Promise((resolve,reject) =>{
//         resolve("Butter is added...")
//     });

//     let ticket = await friendbringticket;
//     console.log("My ticket ::",ticket);

//     let popcorn = await getPopcorn;
//     console.log("My popcorn ::",popcorn);

//     let butter = await addButter;
//     console.log("Butter added ::",butter);

//     return ticket;
// }
// preMovie();


//using try catch

let preMovie = async () => {
try {
    let friendbringticket = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("The Ticket is here for you...");
        },2000);
    })

    let getPopcorn = new Promise((resolve,reject) =>{
        resolve("The popcorn is ready for you...")
    });
    let addButter = new Promise((resolve,reject) =>{
        resolve("Butter is added...")
    });

    let ticket = await friendbringticket11;
    console.log("My ticket ::",ticket);

    let popcorn = await getPopcorn;
    console.log("My popcorn ::",popcorn);

    let butter = await addButter;
    console.log("Butter added ::",butter);

    return ticket;
    
} catch (error) {
    console.log("Error....",error.message);
}
}
preMovie();
