/*

Table Of Content
----------------
1. Execution Context
2. Hoisting
3. Invocation
4. Scope Chain
5. Asynchronous

*/

//__ Javascript is single threaded, syncronous


/*

Execution context (global)
--------------------------
1. The part of code which is under execution.
2. It creates two variables by itself (even if there is no code in javascript) - Global Object, this
3. Global Object may vary from platform to platform - nodejs server, browser etc
4. Execution Context consists - Global Object, this, Outer Environment, Your Code
5. If a variable is not found in the execution context, it looks for that variable in Outer Environment. The Outer Environment depend on the lexical environment of that variable or function.

*/

//__ 'this' is not defined anywhere, but will give no error as it is created by the execution context.
console.log("execution context", this);

//__ Since these are not in any function or block, they are global. In JS, every global variable and functions are available in Global Object created by the execution context
//__ So if the js is running on the browser I can get these in Window object, i.e., Window.a, Window.b()
a = "nikhil";
b = ()=> true;

console.log("1. this: ", this.a, ", window: ", window.a);
console.log("2. this: ", this.b(), ", window: ", window.b());


/*

Hoisting
--------
1. Before running the code, the javascript assign memory space to all the functions and varibales that are decleared by us in the code - this is known as Hoisting
2. Function and whatever is written inside the function is entirely placed in the memory space
3. In case of variables, assignment (a=10) is done when the code is read line by line in excution phase. So before that only the name of the variable is set for memory space but not the value
4. All variables are assigned value 'undefined'

*/

//__ Calling the variable and function before declearing them
//__ Because of Hoisting there will be no error as variable and functions are assigned memory space then the execution part begins.
console.log("c: ", c);
console.log("d: ", d());

var c = "thakur";
function d() { return "in d() func"; }

/*

Invocation
----------
1. Invoke a function, i.e., to run a function
2. It is done by using parenthesis ()
3. d() -> Invoking function d
4. Whenever we invoke a function it creates a new execution context, and every execution context is placed in the stack
5. Even if it invokes itself a new execution context is being created

*/


/*

Scope Chain
-----------
1. Links to the outer environemnt references

*/

function e() {
    console.log("in function e()");
    //__ It's lexical environment is in a(). Therefore I cannot call it from outside the function a()
    function f() {
        console.log("in function f()");
        //__ This is a new execuiton context
        //__ Since myVar in not defined here, it will go out of it's execution context to the outer lexical environment to check for the variable.
        console.log("myVar: ", myVar);
    }
    //__ If myVar would not have been here, then it would have gone to the next outer lexical environment
    var myVar = 2;
    f();
}

var myVar = 1;
e();



/*

Scope
-----
1. Where a variable is available in your code
2. If it's truly the same variable or new copy

//__ After ES6 

Let
---
1. Allows block scoping
2. When defined under a block, the variable is only available inside that block only

*/

//__ Using the 'let' variable before they are defined
//__ When using 'let', you cannot use it before it is defined. Even though the variable will be assigned memory space, but since it is defined using let, we cannot use it before it is declared.

// console.log("g: ",g);  __ Commented because using 'g' here will create an error.
let g = 10;
console.log("g: ", g);


/*

Asynchronous
------------

1. More than one piece of code is being executed at a time
2. There is a 'queue' apart from execution context stack and that queue is known as the 'event queue'.
3. Event queue keeps all the event which needed to be handled.
4. Event are created during the execution for example, click event - someone click on a button. It is added in the event queue. JS Engine first completes the execution context stack, and when the stack is empty, it looks for the event queue, if anything is to be handled there or not.
5. So it is not running Asynchronously, instead the browser is putting things asynchronously into the event queue. But the javascript is running line by line.
6. Asynchronous in js is mostly about what's happening outside the js engine. (eg. browser)

*/

//__ If you click on the document before 3 seconds, the click event will be queued into the event queue and will wait for the execution context stack to be empty, after that only that click event will be considered.
//__ So the output will be, finished function -> finished execution -> click event ( '->' this symbolises a new line or the order in which they are going to be executed )
function waitForThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while(new Date()<ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

waitForThreeSeconds();
console.log('finished execution');