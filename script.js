// basics
var a = 20
console.log(a)
{
    let a = 54
    console.log(a)
}
var a = 10
console.log(a)

// if else
// var a = prompt("Enter a number : ")
var a = 10
console.log("Number : " + a)
if (a === 0) {
    console.log("The number is 0 and adding 1 to make it positive")
    a +=1
}
else if (a > 0) {
    console.log("The number is positive")
}
else {
    console.log("The number is negative")
}

// for loop
for (i =0; i < 10; i++) {
    console.log(i)
}

// while loop
var i = 11
while (i < 21) {
    console.log(i);
    i++;
}

// for each
var array1 = [21,22]
array1.forEach(element => console.log(element))

// aliter for for each
for (i=0 ; i < array1.length; i++) {
    console.log(array1[i])
}

// Array
const array = [10,20,"PW",23.08 , Date() ]
console.log("Before change:")
for (var ele of array) {
    console.log(ele)
}

// after
console.log("After change:")
array.push("3rd year")
for (var ele of array) {
    console.log(ele)
}

// pop
array.pop()
console.log("After pop:")

for (var ele of array) {
    console.log(ele)
}

array.pop()
array.pop()
array.pop()
array.pop()
array.pop()

if (array.length > 0) {
    console.log ("Elements are in the array")
    for (var ele of array) {
        console.log(ele)
    }
}
else {
    console.log ("No elements are in the array")
}

array.push(1)
if (array.length > 0) {
    console.log ("Elements are in the array")
    for (var ele of array) {
        console.log(ele)
    }
}
else {
    console.log ("No elements are in the array")
}

// Objects
b = {
    car : "Audi",
    model : "AB",
    airbags : 8,
    wheels : 4,
    color : "Blue"
}

// accessing the object
console.log(b["color"])
console.log(b.airbags)
var some = "model"
console.log(b[some])
console.log(b)

// changing the value of an object
b.car = "BMW"
console.log(b)

// adding new value and nested object
b.sunroof = {
    is_present : "Yes",
    Shape : "Rectangle"
}
console.log(b)

// accessing nested object
console.log(b.sunroof.is_present)
for (var ele in b) {
    console.log(ele + ":" + b[ele] )
    if (typeof b[ele] == "object")
    {
        for (var val in b[ele]) {
            console.log (val + ":" + b[ele][val])
        }
    }
}


// functions
function f_name () {
    console.log (5 + 5)
    console.log ("PW" + 5 + 5)
}
f_name()

function f1_name (a,b) {
    console.log (a + b)
    console.log (a + b + 5 + 5 + "PW" + 5 + 5)
}
f1_name(5,5)