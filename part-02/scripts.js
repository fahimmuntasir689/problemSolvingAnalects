const age = ("what is your age")
// console.log(typeof feedback)

if (age >= 20) { // some sought of type coircion
    console.log("Now You are grown up")
} else {
    console.log("You are shishu")
}


// Discount counting

let amount = Number(('what is you amount'));


if (amount > 0 && amount <= 5000) {
    console.log("No discount")

}
else if (amount >= 5001 && amount <= 7000) {
    const discount = amount * 5 / 100

    console.log("Final bill is", amount - discount)


}
else if (amount >= 7001 && amount <= 9000) {

    const discount = amount * 10 / 100

    console.log("Final bill is", amount - discount)


}
else if (amount > 9000) {
    const discount = amount * 20 / 100;


    console.log("Final Bill is", amount - discount)
}

else console.log("Please Give Valid amount")

// halka complex unit price count

let unit = Number(("Enter Your Unit"))

if (unit >= 0 && unit <= 400) {
    if (unit >= 201 && unit <= 400) {
        let unit_One = (unit - 200)
        let cost_One = (unit_One * 8) + (100 * 6) + (100 * 4);
        console.log(cost_One)


    }
    else if (unit >= 101 && unit <= 200) {
        let unit_Two = unit - 100
        let cost_Two = (unit_Two * 6) + (100 * 4)
        console.log(cost_Two)

    }
    else if (unit >= 0 && unit <= 100) {
        let unit_Three = unit
        let cost_Three = unit_Three * 4
        console.log(cost_Three)
    }
}
else if (unit > 400) {
    let unit_Four = unit - 400
    let cost_Three = (unit_Four * 13) + (100 * 8) + (100 * 6) + (100 * 4);
    console.log(cost_Three)

}

// Money Vangtikoron
let money = 2350;

if (money >= 500) {
    console.log("500 notes :", Math.floor(money / 500))
    money = money % 500
}
if (money >= 100) {
    console.log("100 notes :", Math.floor(money / 100))
    money = money % 100
}
if (money >= 20) {
    console.log("20 notes :", Math.floor(money / 20))
    money = money % 20
}
if (money >= 10) {
    console.log("10 notes :", Math.floor(money / 10))

}

let num = 10
switch (num) {
    case 20: console.log('hello')

        break;
    case 10: console.log('Hey')

        break;

    default: console.log('nothing');

        break;
}


// halka complex unit price count

let usedUnit = (('what is the unit'))
let bill = 0;

if (usedUnit > 400) {

    bill = (usedUnit - 400) * 13;
    usedUnit = 400

}
if (usedUnit > 200 && usedUnit <= 400) {

    bill = bill + (usedUnit - 200) * 8;
    usedUnit = 200

}
if (usedUnit > 100 && usedUnit <= 200) {

    bill = bill + (usedUnit - 100) * 6;
    usedUnit = 100

}
if (usedUnit > 0 && usedUnit <= 100) {

    bill = bill + (usedUnit) * 4.2;

}

console.log(bill)

