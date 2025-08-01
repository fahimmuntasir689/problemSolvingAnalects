// console.log("12" + typeof(true))
// console.log(typeof("12" + 12))
let a = 10;
let b = 20

let c = ("sum of them are", a + b)

console.log(typeof (a + b, "sum of the two numbers are", typeof (0)))

let d = (b++, b)

console.log(d)

console.log(a++, a)

console.log(c)

console.log(typeof c)

console.log(typeof (true));

console.log(10 - false); // type coercion

// const e = Number(prompt("enter your name"))

// console.log(e)

console.log(Boolean(NaN)) // falsy value // type casting or type conversion

//swapping

let n_1 = 100;
let n_2 = 200;

let box = n_1; // box is a temporary variable

n_1 = n_2;
n_2 = box;

console.log(n_1, n_2)

let x = 100;
let y = 50;

[x, y] = [y, x] // swapping through array

console.log(x, y)

// Arithmatic op

const number = 1234

console.log(Math.floor(number / 10))

// Relational op

console.log("123" == 123) // true => only value

console.log("123" === 123) // false => checks value and type

// unary op

// console.log(z++ , z)

var z = 10;
console.log(z++, z) // 10 , 11
console.log(++z, z) // 12 , 12

let i = 20;
// console.log(i++ , ++i)
console.log(i++ + ++i) // 42


let p = 10;
let q = ++p
console.log(q)

// Math Function

console.log(Math.trunc(Math.random() * 9000 + 1000))
console.log(Math.floor(10.9))
console.log(Math.ceil(10.9))
console.log(Math.round(10.5))
console.log(Math.abs(-10.99))


// Some Problems

// heron's formula

let k = 10
let l = 9
let m = 7

let s = (k + l + m) / 2

const triangle = Number(Math.sqrt(s * (s - k) * (s - l) * (s - m)).toFixed(2))

console.log(triangle)

// circumference 

let r = 10

console.log(Number(2 * Math.PI * r.toFixed(2)))







