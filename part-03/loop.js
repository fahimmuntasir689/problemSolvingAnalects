 /* factorial and sum of natural number

let n = Number(("What is the number"))

if (isNaN(n)) {
    console.log("The Number is Invalid")
}

else {
    if (n > 0) {

        let facto = 1;
        for (let i = 1; i <= n; i++) {
            facto = facto * i

        }
        console.log(facto)

    }
    else console.log("The Number is Negative")

}



// factors of Numbers


let number = Number(("What is the number"))

if (isNaN(number)) {
    console.log("The Number is Invalid")
}

else {
    if (number > 0) {


        for (let i = 1; i <= (number / 2); i++) {
            if (number % i === 0) {
                console.log(i)
            }

        }
        console.log(number)

    }
    else console.log("The Number is Negative")

}

// Prime Numbers


let num = Number(("What is the number"))

if (isNaN(num)) {
    console.log("The Number is Invalid")
}

else {
    if (num > 0) {
        let isPrime = true
        for (let i = 2; i <= (num / 2); i++) {
            console.log(i)
            if (num % i === 0) {

                isPrime = false
                break
            }

        }
        console.log(isPrime)

    }
    else console.log("The Number is Negative")

}

// While Loop for exit or close

let message = ('Exit ?')

while (message.toLowerCase() !== 'exit') {
    message = ('Exit ?')

}

// sum of a digit 

let digit = Number(prompt("What is the number"))

if (isNaN(digit)) {
    console.log("The Number is Invalid")
}

else {
    if (digit > 0) {
        let sum = 0;
        while (digit > 0) {
            sum = sum + digit % 10
            digit = Math.floor(digit / 10)

        }
        console.log(sum)

    }
    else console.log("The Number is Negative")

}

Reverse a number

let input = Number(prompt("What is the number"))

if (isNaN(input)) {
    console.log("The Number is Invalid")
}

else {
    if (input > 0) {
        let rev = 0;
        while (input > 0) {
            rev = (rev * 10) + input % 10
            input = Math.floor(input / 10)

        }
        console.log(rev)

    }
    else console.log("The Number is Negative")

}

Checking a number whether it is a strong number or not

let digit = Number(prompt("Checking the strong number"))

if (isNaN(digit)) {
    console.log("The Number is Invalid")
}

else {
    if (digit > 0) {
        let total = 0;
        let n = digit

        while (digit > 0) {
            let facto = 1;
            let rem = digit % 10
            for (let i = 1; i <= rem; i++) {
                facto = facto * i
            }
            console.log(facto)

            digit = Math.floor(digit / 10)
            total = total + facto

        }
        if(digit === total){
            console.log("strong")
        }
        else console.log('not strong')


    }
    else console.log("The Number is Negative")

} */

let number = Number(prompt("Checking the strong number"))

let randomNumber = Math.floor(Math.random() * 10 + 1)
console.log(number , randomNumber)

if (isNaN(number)) {
    console.log("The Number is Invalid")
}

else {
    if (number > 0 && number < 10) {
        if (randomNumber === number) {
            console.log('You won')
        }
        if (number < 10 && randomNumber !== number) {
            console.log("too little")
        
        }
        if (number > 1 && randomNumber !== number) {
            console.log("too high")
        
        }



    }


}




















