//setTimeout(function, delay)
const timeoutId = setTimeout(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearTimeout(timeoutId);
}, 3000);

//setInterval allows you to execute a function at a specified interval
// for example, executing a function every second, 5 seconds

//setInterval(function, 1000)

function printHello() {
  console.log("Hello");
}

const intervalId = setInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 3000);

// setTimeout allows you to call a function after a specified time(only once)
//setInterval allows you to execute a function repeatedly at a specified interval