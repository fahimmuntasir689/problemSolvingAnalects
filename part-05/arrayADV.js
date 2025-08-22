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

// Left Rotation By K Element using Block Swap Algorithm


/* let numArr = [1, 2, 3, 4, 5, 6, 7]

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

console.log(numArr) */



// Merge Sorted Array 

/* const arrOne = [1, 2, 3]
const arrTwo = [4, 5, 6, 7]


let q = 3;

const mergeSortedARray = () => {

    for (let p = 0; p < arrTwo.length; p++) {
        arrOne[q] = arrTwo[p]

        q++     
        
    }
    return arrOne

}

console.log(mergeSortedARray());

console.log(arrOne) */


const arrOne = [1, 2, 3]

const arrTwo = [9, 10, 11]

const newArr = []

const mergeArray = () => {
    let q;
    for (let i = 0; i < arrOne.length; i++) {
        newArr[i] = arrOne[i]
        q = i

    }
    q++


    for (let j = 0; j < arrTwo.length; j++) {

        newArr[q] = arrTwo[j]

        q++
    }

}

mergeArray()

console.log(newArr)


// merge sorted array 2.0

const arr1 = [2, 4, 6]

const arr2 = [1, 3, 10]

const tempArr = []

const mergedArr = () => {
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > arr2[j]) {

            tempArr[i] = arr2[j]
            j++

        }
        if (arr1[i] < arr2[j]) {
            tempArr[i] = arr1[i]
        }

    }

}

mergedArr()

console.log(tempArr)


