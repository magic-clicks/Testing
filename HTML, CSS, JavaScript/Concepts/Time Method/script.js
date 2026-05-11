// console.time() = tool the allows you to meaure the time it takes 
// for a section of code or process to execute
// great for identifying performance "bottlenecks"

// console.time("label");
// console.logtimeEnd("label");

console.time("test");

for(let i = 0; i < 1000000000; i++){
    // do some code here
}

console.timeEnd("test");

function loadData(){

    console.time("loadData");

    for(let i = 0; i < 10000; i++){
        // pretend to load some data
    }

    console.timeEnd("loadData");
}

loadData();