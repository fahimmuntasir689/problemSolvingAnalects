let arr = new Array(3);
arr[1] = 10
arr[2] = 10
arr[3] = 10
arr[4] = {
    name: 'number',
    type: 'number'
}
arr[5] = 10
console.log(arr);

// PUSHING INTO ARRAY THROUGH INPUT SYSTEM

/* let inputArr = new Array(10);

let input = ("Add to Array")

while (input !== null) {
    inputArr.push(input);
    input =  ("Add to Array")
    
}

console.log(inputArr) */

// SUM OF ARRAY'S NUMBERS
let randomArr = [12, 23, 45, 56, 100]

let sum = 0;

for (let i = 0; i < randomArr.length; i++) {
    let element = randomArr[i];
    sum = sum + element;


}

console.log(sum)

// FINDING MAX AND MIN NUMBER IN A ARRAY

/* let numbers = [2900, 9000, 100, 56, 67, 78, 78, 89, 90, 1, 0, 1000]

let max = numbers[0];

for (let i = 1; i <= numbers.length; i++) {
    let element = numbers[i];
    if (element > max) {
        max = element
    }

}

console.log(max) */


// FINDING 2nd MAX NUMBER IN A ARRAY
let numbers = [10, 20, 30, 25, 40, 40, 40, 40]

let max = Math.max(numbers[0], numbers[1]);
let secondMax = Math.min(numbers[0], numbers[1]);

for (let i = 2; i <= numbers.length; i++) {
    let element = numbers[i];
    if (element > max) {
        secondMax = max
        max = element
    }
    else if (element > secondMax && element != max) {
        secondMax = element

    }

}

console.log(max, secondMax)

// REVERSING AN ARRAY

/* let arrOfNums = [1,2,3,4,5,6,7]
let reverse = []

for (let i = (arrOfNums.length - 1); i >= 0; i--) {
    reverse.push(arrOfNums[i])
}

console.log(reverse) */


// REVERSING AN ARRAY 2.0


/* let arrOfNums = [1, 2, 3 , 4 , 5 , 6]

let i = 0; let j = arrOfNums.length - 1;

while (i !== j) {
    let temp = arrOfNums[i]
    arrOfNums[i] = arrOfNums[j]
    arrOfNums[j] = temp

    i++;
    j--;

}
console.log(arrOfNums); */



/*let arrNums = [1 , 1 , 0,  0 , 0]

let i;
let j = 0;
for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] === 0) {
        let temp = arrNums[i]
        arrNums[i] = arrNums[j]
        arrNums[j] = temp
        j++;

    }
   

}

console.log(arrNums) */


let arrNums = [-1, -1, 9, 10, -9, -2, 10]

let i;
let j = 0;
for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] < 0) {
        let temp = arrNums[i]
        arrNums[i] = arrNums[j]
        arrNums[j] = temp
        j++;

    }


}

console.log(arrNums)








