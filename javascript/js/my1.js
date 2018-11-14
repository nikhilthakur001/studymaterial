/*

1. Check if value exists in Array
2. Delete a particular element from Array
3. A function returning a function

*/

/*

Check if value exists in Array
------------------------------
1. includes(<value>) method is used to check if the 'value' is present in the array or not.

*/

//__ Example to check if '2' is present in the array or not.
let array1 = [2,3,45,6,8];
let array2 = [5,6,8,10,9];

console.log("2 in array1: ", array1.includes(2)); //__ Output 'true'
console.log("2 in array2: ", array2.includes(2)); //__ Output 'false'


/*

A function returning another function
-------------------------------------
1. To call such a function you will have to use double parenthesis. It's like calling a function twice.
2. To console log the statement written below, we have to call the function like example1()() --> notice the double parenthesis

*/

//__ Example
function example1() {
    return function() {
        console.log("example 1");
    }
}

example1()(); //__ To call the function inside return