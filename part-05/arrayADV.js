// Left Notation by 1 element

/* let arr = [1, 2, 3, 4, 5, 6]

let copy = arr[0]

for (let i = 0; i < arr.length - 1; i++) {

  
    arr[i] = arr[i + 1]
  

}
arr[arr.length - 1] = copy
 
console.log(arr) */


// Right Notation by 1 element

/* let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.length)

let copy = arr[arr.length - 1]

for (let i = arr.length - 1; i > 0; i--) {
    console.log(i)


    arr[i] = arr[i - 1]


}
arr[0] = copy

console.log(arr) */



/* let elements = [1, 2, 3, 4, 5, 6]

let copyOne = elements[0]

let copyTwo = elements[1]

for (let i = elements.length - 1; i > 0; i--) {
    elements[i - 2] = elements[i]

}

elements[elements.length - 1] = copyTwo;
elements[elements.length - 2] = copyOne

console.log(elements) */

let arr = [1, 2, 3, 4, 5, 6]



for (j = 0; j < 6; j++) {
    let copy = arr[0]

    for (let i = 0; i < arr.length - 1; i++) {


        arr[i] = arr[i + 1]


    }
    arr[arr.length - 1] = copy

}


console.log(arr)

