const body = document.body;
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
const span = document.createElement('span');
const br = document.createElement('br');
const close = document.querySelector('#close')

const container = document.querySelector('#container')


const closeIt = ()=>{
    container.style.display = "none"
    
}

close.addEventListener('click',(closeIt))

// this keyword
// different inside local scope and global scope, doesn't work with arrow functions. 


// Passing in funcitons as arguments are the same thing as callbacks. This is what was stumping you up.


//    if()
    
//     if(middle element)
//     return true
//     else if num < middle element
//     search left
//     else if num > middle element
//     search right
//     else if num === num
//     return true




//best way to understand it is to basically learn that it loops the end first, until it gets to the condtion, then it starts on the seconds one, then goes up to the first one. 

// when we print index we get object properties, when we print name and index of the object  , we get object values
//for looping through objects with for in loop



//JAVASCRIPT ALL THE BASICS SECTION
    


// functions
// callback functions 
// currying
// compose
// passing functions as paramaters
// functions with objects 


// logical operators- &&, ||, !=;


// comparison operators- >= etc



// switch 

// PRIMATIVES
// string
// Boolean
// undefined
// null
// Number
// Symbol
// bigInt



// if

// recursion loop


// request animation frame 
    

// nested for loops 

// for loop

// for of, arrays strings iterating 




// for in, objects enumerating

// for each loop

// set timeout (), set interval, 


// map, reduce, filter, sort, find, main array methods

// array, 2d array 



// object literal 

// classes




// this keyword



// destructuring for objects, and functions



// PROMISES, ASYNC, AWAIT  
// We use try and catch to get the error




    

// api 



// flat method, trimstart trimend
// Object.formEntries converts an array into an object.



// Object.entries loops through and prints out the properties and values, converts it from object to an array.



// document.Write();



// from entries, and entries


// optional chaining operator, checks if they're in there are not. uses ? a substitute or using a bunch of &&.

//nullish coalescing is similar to the or operator, execpt it returns undefined. a substitute or using a bunch of ||.

//replace all for string method.

//object.assign creates a new object or a new array.







// json.parse-converts json to object and 
// json.stringify- converts object to json data.




// string methods, 

// reference type, value type


// coersion

// storing arrays inside of objects, storing functions



// recursion- looping two functions;
// binary sort- for sorted arrays 0(logn);


//closures- accesing outer enviornment.


//default values- old way of doing things is with a || keyword logical operator.


// window.addEventListener('keydown', function(e){
//     if(e.keyCode === 17){
//         console.log('hey')
//     }
// })




// prompt, alert window events which show up on the window.


// dom manipulation 

// classlist.add, .remove, .toggle;

// important event listeners
//keydown, keyup, keycode, click, mouseenter, mouseleave.
//
// get attribute 
// set attribute
// document.write
// begin path, and at the end there needs to be a stroke, this will make a circle and a line work.

// A line needs to have those and a line to and a move to point. 





// need to look at these again- function methods call() apply() bind()
//These are used because when we use the this keyword we want access to the object from a function outside the object scope. We use the function methods to attach it to the object.


//prototypal inheritance- The prototype is important because when we create methods in the function, and we have too many objects then it will increase memory compsumption, to fix this we store these methods inside the proto, which can be used for later. We use prototype property to store them inside of proto.


//

// es6 modules is a way to have more than one files of javascript, in which you they run seperately, but when they are saved they all are basically one.

// Primatives vs objects
//primatives are immutable, and objects are mutable. Primative types 


//You also have to know how to look at the properties and methods inside the global scope, or on the object.



// Refresher about Javascript: Just read this:

// Javascript is syncronous, and a dynamic launguage which coerses things. It has first class functions which are basically values, this is why higher order functions work, and it's a single threaded launguge. It can be run on the browser, and it can be run on the backend using node.js. Javascript hoistes things above, when you use the var and declaration function. Hoisting is bad don't use it, are don't use it too often. When we open up the browser, the v8 engine creates a new global or window execution context, and it creates the this keyword with it which is basically shorthand for window, it also creates a global object and a window object, all of those are the same(this,window, and global). When we setup variables and functions, it stores them in memory . When we run our code javacsript runs it line by line, called syntax parsing. Then it converts it to a launguage it can understand. After it then prints it out on the console. When we execute functions they create a new execution context, and store the things in their lexical environment, they are put at the top of the call stack, and get pop off one by one until completely off the callstack, then garbage collection takes in. When they finish they pop off the exectution or the call stack. Everything in javscript is an object or a primative type. Ojects literals have the __proto__ property, and every object based inherits this, and adds on to it.You can actually create a object by using a primative and the new keyword. Primatives can get access to properties and methods in javscript because javascript converts them into an object, and then back into a primative. Javascript classes are not actually classes like other launguages, they are taking from prototypal inheritance. Node is taking from v8 engine which is chromes because it's the best engine available. Javascript has several libraries, which give you access to different propeties and methods.When we create requests in the client we are usually trying to access a website, or making a get request. We use a get request to retreive specific data.

// THE CLIENT SIDE 
//Types of requests 
// Get, post, put, delete, patch
// When we access a website the browser takes the ip address and figures it out and sends it through ISP and then DNS, then it sends a request to the server, then it goes back to the client, and the client gets a response from the server.
//Ip address- internet protocol for sending sending data over.
//DNS-reads domain name and converts it into ip address.
//Domain name .com, .net.
//Ajax
// Asyncronous programming- aw way of getting data from somewhere, and still running code without the data blocking. 
//Promises,callback,async await
//api's- Like a messengar of the things you can get, basically grabbing something on a website, that will give you back json text is an api. Basically accessing new article, if you want something specific they give you api key, and then you get the json for it.
//


// Big o notation;
// ALGORITHMS- Search
// O(N) linear
// O(N^2)
// O(logN) binary search - one of the fastest searches, actually less and less operations, over time.
// O(1) constant- means that it only takes one or a couple of tries to search for what you're looking for. 
//Algorithms- sort
//Bubble sort
//Merge sort
// selection sort
//
// DATA STRUCTURES
//Linked List
// Trees
// matrices
// Arrays
// 2d arrays
//

//WHAT I DON'T KNOW 
//HOW TO REMOVE ELEMENT


//WHAT I JUST LEARNED
//THAT POPUP WON'T CLOSE UNLESS YOU SET A PATH FOR IT.


// new Array(100).fill(value);
// loop through any array size
// performance.now();



// --JAVASCRIPT GAME-------------
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// const img = new Image();

// img.src = 'mario.jpg';
// let x2 = 0;



// c.clearRect(0,0,canvas.width,canvas.height)
// c.drawImage(img,0,0)


// c.clearRect(0,0,canvas.width,canvas.height)
// c.drawImage(img,0,0)



//CIRCLE
// let rotate =  Math.PI * 2;
// let Move = 10;
// let position = 100;
// let positionY = 243;
// let radius = 30;
// let oneJump = 60;

//Square
// let x = 100;
// let dx = 5;
// let dy = 10;
// let y = 100;
// let width = 40;
// let height = 40;


// if we want to keep it up ther we would need a square inside the global, and one inside an event listener. 
// c.clearRect(0,0,canvas.width,canvas.height)
//     c.beginPath();
//     c.fillStyle = 'red'
// c.arc(position,243,radius,0, rotate, false)
// c.stroke()

// body.addEventListener('keydown', function (e) {
//     if(e.key === 'd'){
//         c.clearRect(0,0,canvas.width,canvas.height)
//           c.beginPath();
    
// c.arc(position,243,radius,0, rotate, false)
// c.stroke()
//     position += Move;
//     }else if(e.key === 's'){
//          c.clearRect(0,0,canvas.width,canvas.height)
//           c.beginPath();
//     c.fillStyle = 'red'
// c.arc(position,243,radius,0, rotate, false)
// c.stroke()
// position -= Move;

//     }else if(e.key === 'w'){
//          c.clearRect(0,0,canvas.width,canvas.height)
//           c.beginPath();
//     c.fillStyle = 'red'
// c.arc(position,positionY,radius,0, rotate, false)
// c.stroke()
// positionY -= oneJump;
//     }
   
//     if(positionY === 123){
//        const animate = ()=>{
//         requestAnimationFrame(animate);
//         c.clearRect(0,0,canvas.width,canvas.height)
//           c.beginPath();
//     c.fillStyle = 'red'
// c.arc(position,positionY,radius,0, rotate, false)
// c.stroke()
//         positionY += 10;
//         if(positionY > 230){
//             positionY = 243;
//         }//semi working jump
//        }
//        animate()
//     }
//     console.log(positionY)




//  })




// Data Structures and algorithms


//  collision detection
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// Square




// let x1 = 100
// let x2 = 400
// let x3 = Math.floor(Math.random() * 300);
// let dx2 = 1
// let dx = 1
// const animate = ()=>{
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,window.innerWidth,window.innerHeight)
//     c.beginPath();
//     c.rect(x1,200,50,50)
//     x1 += dx;
//     c.fillStyle = 'blue'
//     c.fill();
//     console.log(x1)
//     if(x1 > 226){
//         c.beginPath();
//         c.clearRect(0,0,window.innerWidth,window.innerHeight)
//         c.rect(x1,x3,50,50)
//         c.fillStyle = 'green'
//         c.fill()
//         x2 -= -dx2 - 1
//         x1 += -dx;
        
//     }

//     c.beginPath();
// c.rect(x2,200,50,50)
// c.fillStyle = 'red'
// x2 -= dx2
// c.fill();
// }
// animate();


// JAVASCRIPT DOM 
//document.write
//addeventlisteners, Canvas, get2dcontext, document.gtelementbyid, document.querySelector, classlist,getattribute,setattribute. 
// Animation
// beginpath()-rect, fillstyle,fill,requestanimationframe,clearrect,math.random,math.floor,arc,beginpath,stroke,canvas.width = window.innerWidth, canvas.height = window.innerHeight;



// NODE JS
// Every file is a module.
//Built in modules, OS,PATH,HTTP,FS.
//NPM- packages that can be manually installed using npm init.
//Express makes node easier.




//NODE JS BEHIND SCENES

//NODE JS IS AN ASYNCRONOUS RUNNING TIME LIBRARY FOR JS THAT CAN RUN OUTSIDE THE BROWSER USING C++. These C++ methods can be manipulated giving us more control. Node has asyncronous and has only one thread, it works great because of the event loop. Once it gets a request it loops thorugh, then looks for another request. Once all requests are completed event loop breaks. Node Require method is used to get modules. Node is a server side application used to create servers and built apps.Most things are written asyncronously meaning it uses callbacks, callbacks can lead to callback hell so we can use promises, and async await.
