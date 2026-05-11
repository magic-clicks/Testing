// date objects = objects that contain values that represent dates and times
// these date objects can be changed and formatted

// date(year, month, day, hour, minute, second, ms)

const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// can also use strings like Date("2024-01-02T12:00:00Z")
// can all pass in ms from time computer thinks it first began Date(17000000000) This would be good for timers 

const today = new Date();
console.log(date);
console.log(today);

const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const dayofWeek = today.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayofWeek);

const testing = new Date();

testing.setFullYear(2024);
testing.setMonth(0);
testing.setDate(1);
testing.setHours(2);
testing.setMinutes(3);
testing.setSeconds(4);


console.log(testing);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy new year!");
}