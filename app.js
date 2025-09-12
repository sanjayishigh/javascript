const foo = Symbol;
console.log(typeof(foo));

obj = {};

obj[foo] = "Sanjay";

console.log(obj);