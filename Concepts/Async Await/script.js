// async/await = async = makes a function return a promise
// await = makes a async function wait for a promise

// allows you to write async code in scync manner
// async doesn't have resolve or reject paremeteres
// everything after wait is place in an event queue

function walkDog(){
        return new Promise((resolve, reject) => {
    setTimeout(() => {

        const dogWalked = true;

        if(dogWalked){
            resolve("You walk the dog 🐕");
        }
        else{
            reject("You DIDN'T walk the dog");
        }
    }, 1500);
});
}

function cleanKitchen(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        
        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("You clean the kitchen 🧹");
        }
        else{
            reject("You DIDN'T clean the kitchen");
        }
    }, 2500);
});
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You DIDN'T take out the trash");
            }

        }, 500);
    });
}



async function doChores(){

    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const TakeOutTrashResult = await takeOutTrash();
    console.log(TakeOutTrashResult);

    console.log("You finshed all the chores");

    }
    catch(error){
        console.log(error);
    }
    
}

doChores();