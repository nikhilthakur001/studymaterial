/*

Table of Content
----------------
1. Dynamic Typing
2. Primitive Data Type
3. Operator Precedence and Associativity
4. Coercion

*/

/*

Dynamic Typing
--------------
1. You don't tell the engine what type of data a variable holds, it figure it out while the code is running
2. Variable can hold different types of values because it's all figured out during execution.

*/

//__ There will be no error, even if I am storing different types of data in same variable
var dvar;
console.log("dvar type: ", typeof(dvar));
dvar = true;
console.log("dvar type: ", typeof(dvar));
dvar = "nikhil";
console.log("dvar type: ", typeof(dvar));
dvar = 10;
console.log("dvar type: ", typeof(dvar));

/*

Primitive Data Type
-------------------
1. A type of data that represent a single value.
-> Undefined : lack of existence
-> Null : also represent lack of existance (it can be used by us to denote that there is a lack of existance of the value for variable)
-> Boolean : true or false
-> Number : floating point number (there's always some decimal attached to it.)
-> String : a sequence of characters
-> Symbol : Used in ES6 (ECMAScript 2015)

*/
 

/*

Operator Precedence and Associativity
-------------------------------------
-> Operator Precedence : Which operator will execute first
-> Operator Associativity : What order will operators get called in Left-to-Right or Right-to-Left, when functions have the same precedence

*/

let a=2, b=3, c=4;
a=b=c; //__ In this, first the right most two operators will execute, i.e., b=c. Now the assignment operator function returns the value that was on the right side. So after executing b=c, we get output '4' (the value of 'c', since it was on the right side.) Now we have a = (b=c) -> a=(4) -> a=4. There the value of a will be 4.
console.log("a: ",a);
console.log("b: ",b);
console.log("c: ",c);


/*

Coercion
--------
1. Converting a value from one type to another

*/

//__ Even though I am adding a number and a string there will be no error, as in Js '+' acts as both addition and concation operator. Also in JS, 1 as a number or '1' as a string, both is same. So when js sees that we are adding 1 + '2', it sees that the second operand is a string, therefore it consider 1 as a string and will concatinate the two! So the output will be '12' as a string.
var concat = 1 + '2';
console.log("concat: ", concat);
console.log("type of concat: ", typeof(concat));