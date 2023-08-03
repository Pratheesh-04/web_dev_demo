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
var a = prompt("Enter a number : ")
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
var array = [21,22]
array.forEach(element => console.log(element))

//aliter for for each
for (i=0 ; i < array.length; i++) {
    console.log(array[i])
}