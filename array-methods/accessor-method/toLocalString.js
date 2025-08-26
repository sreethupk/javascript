//covert each elements to a local-aware string

const prices = [1234.56];
const data = prices.toLocaleString('en-us');
console.log(data,typeof(data));
