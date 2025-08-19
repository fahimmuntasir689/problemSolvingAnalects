// Left Rotation by 1 element


/*let arr = [1, 2, 3, 4, 5, 6]

let copy = arr[0]


for (let i = 0; i < arr.length - 1; i++) {

    arr[i] = arr[i + 1]


}


arr[arr.length - 1] = copy

console.log(arr) */


let arr = [1, 2, 3, 4, 5, 6]

let copy = arr[arr.length - 1]


for (let i = arr.length - 1; i >= 0; i--) {

    arr[i] = arr[i - 1]


}


arr[0] = copy

console.log(arr)


// Right Rotation by 1 element

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


// Left Rotation by two steps


/*let arr = [1, 2, 3, 4, 5, 6]



for (j = 0; j < 6; j++) {
    let copy = arr[0]

    for (let i = 0; i < arr.length - 1; i++) {


        arr[i] = arr[i + 1]


    }
    arr[arr.length - 1] = copy

}


console.log(arr) */



// Left Rotation By K Element using Block Swap Algorithm


let numArr = [1, 2, 3, 4, 5, 6, 7]

let k = 3
leftRot(0, k - 1)
leftRot(k, numArr.length - 1)
leftRot(0, numArr.length - 1)


function leftRot(i, j) {
    while (i < j) {
        let temp = numArr[i]
        numArr[i] = numArr[j]
        numArr[j] = temp
        i++
        j--
    }

}

console.log(numArr)


// Right Rotation By K Element using Block Swap Algorithm


// let arrOfNums = [1, 2, 3, 4, 5, 6, 7]

// let z = 3
// rightRot(0, arrOfNums.length - 1)
// rightRot( 0 , z -1 )
// rightRot(z, arrOfNums.length - 1)


// function rightRot(i, j) {
//     while (i < j) {
//         let temp = arrOfNums[i]
//         arrOfNums[i] = arrOfNums[j]
//         arrOfNums[j] = temp
//         i++
//         j--


//     }

// }

// console.log(arrOfNums) 


// removing duplicate value from a sorted array

let nums = [0, 0, 1, 2, 2, 3, 4, 5, 5]

let j = 1;

const removeDuplicates = () => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[j] = nums[i + 1]
            j++;
        }


    }
    return j
}

console.log(removeDuplicates())

console.log(nums)

// incoming problems
