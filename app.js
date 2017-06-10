//// long running function
//function waitThreeSeconds() {
//    var ms = 3000 + new Date().getTime();
//    while (new Date() < ms){}
//    console.log('finished function');
//}
//
//function clickHandler() {
//    console.log('click event!');   
//}
//
//// listen for the click event
//document.addEventListener('click', clickHandler);
//
//
//waitThreeSeconds();
//console.log('finished execution');
//
//var a = { name : 'jeevan'};
//var b;
//
//b = a;
//
//a.name= 'prathyu';
//
//console.log(b);
//console.log(a);

//objects, functions and this
//var c = {
//    name : 'Anusha',
//    log : function() {
//        var self = this;
//        self.name = 'Sega Anusha'
//        console.log(self);
//        
//        var setname = function(newname) {
//            self.name = newname;
//        }
//        
//        setname('sega poga anusha!!');
//        console.log(self.name);
//    }
//};
//
//c.log();

//arguments and spread
//function greet(firstname, lastname, language){
//    language = language || 'en';
//    
//    if(arguments.length === 0 ){
//        console.log('no arguments');
//        return;
//    }
//    
//    console.log(firstname);
//    console.log(lastname);
//    console.log(language);
//    console.log(arguments);
//    console.log('-------------------'); 
//    
//}
//
//greet();
//greet('Anusha');





//Immediately invoked function expression (IIFE)
//function statement
//function greet(name){
//    console.log("Hello "+name);
//}
//greet("prathyu");
//
////function expression
//var greeting = function(name){
//    console.log("hello "+name);
//};
//greeting("anusha");
//
//var greetfunc = function(name){
//    return name;
//}('Jeevan');
//
//console.log(function(name){
//    return name;
//}('g1'));
//
//
//(function(name) {
//
//    var greeting = "Welcome to IIFE :";
//    
// console.log( greeting + name);
//    console.log(this.greeting);//this will write window.greeting to the console.
// })('Jeevan');
//




//understanding closures
//function Greet(whattosay){
//    return function(name){
//        console.log(whattosay + " " + name);
//    }
//}
//
//var sayhi = Greet("hola");
//sayhi("Prathyusha");

//understanding closures a bit more
//function buildfunction(){
//    
//    var arr = [];
//    
//    for(var i = 0; i < 3; i++){
//        arr.push(function() {
//            console.log(i);
//        });
//    }
//    
//    return arr;     
//    
//}
//
//
//var fs = buildfunction();
//
////below code outputs 3 for all three functions
////this is because what stays in the memory stays in the memory.
////i's value will be 3 at the for loop.
//fs[0]();
//fs[1]();
//fs[2]();
//
//
////understanding closures a bit more
//function buildfunction2(){
//    
//    var arr = [];
//    
//    for(var i = 0; i < 3; i++){
//        
//        //ES6 solution
//        //let j = i; 
//        
//        //ES5 solution : IIFEs
//        arr.push(
//            (function(j){
//            return function() {
//                console.log(j);
//            }
//            })(i));
//    }
//    return arr;
//}
//
//
//var fs2 = buildfunction2();
//
////below code outputs 3 for all three functions
////this is because what stays in the memory stays in the memory.
////i's value will be 3 at the for loop.
//fs2[0]();
//fs2[1]();
//fs2[2]();

//Uses of closures: function factories
//function makeGreeting(language){
//    
//    return function(firstName, lastName) {
//        
//        //language will be trapped in a closure here
//        if( language === "en") {
//            console.log( "Hello " + firstName + " " + lastName);
//        }
//        
//        if ( language === "es") {
//            console.log("Hola " + firstName + " " + lastName);
//        }
//    }
//}
//
//var greetEnglish = makeGreeting("en");
//var greetSpanish = makeGreeting("es");
//
////everytime you call a function , a new execution context is returned.
//greetEnglish('Prathyusha' , 'Mavoori');
//greetSpanish('Anusha' , 'Mavoori');


//Closure and Callbacks
//function sayHiLater() {
//    
//    var greeting = "hi";
//    
//    setTimeout(function() {
//        console.log(greeting);
//    }, 3000);
//    
//}
//
//sayHiLater();
//
//function  tellMeWhenDone(callback) {
//    
//    var a = 1000;
//    var b = 2000;
//    
//    callback();
//    
//}
//
//tellMeWhenDone(function () {
//    
//    console.log("I am done!!");
//});
//
//
//tellMeWhenDone(function () {
//    
//    alert("I am done!!");
//});


//Call() , Bind() and apply()

//functional programming
//function mapForEach(arr, fn) {
//    var newArr=[];
//    
//    for(i=0;i<arr.length;i++){
//        newArr.push(fn(arr[i]));
//    }
//    return newArr;
//}
//
//var arr1 = [1,2,3];
//console.log(arr1);
//
//var arr2 = mapForEach(arr1,function(a) {
//    return a * 2;
//});
//
//console.log(arr2);
//
//var arr3 = mapForEach(arr1,function(a) {
//    return a > 2;
//});
//
//console.log(arr3);
//
//var checkPastLimit = function(limiter, item) {
//    return  item > limiter; 
//};
//
//var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
//console.log(arr4);
//
//
//var checkPastLimitSimplified = function(limiter) {
//    
//    return function(limiter, item) {
//        return  item > limiter; 
//    }.bind(this, limiter);
//}
//
//var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
//console.log(arr5);
//
////Functional Programming part 2
////underscore.js - http://underscorejs.org/docs/underscore.html
////https://lodash.com/
//
////underscore
//var arr6 = _.map(arr1, function(item) {return item * 3});
//console.log(arr6);
//
//var arr7 = _.filter([2,3,4,5,6,7,8,9], 
//                    function(item) {
//    return item % 2===0; 
//});
//console.log(arr7);



//Classical and Prototypal inheritance.
//prototype : all objects have a proto property.
//Prototype chain: where we have access to property or method.
//var person = {
//    firstname : "default",
//    lastname : "Default",
//    getFullName : function() {
//        return this.firstname + ' ' + this.lastname;
//    }
//}
//
//var john = {
//    firstname : "John",
//    lastname : "Doe"
//}
//
////don't do this EVER!! only for demo!!
//john.__proto__  = person;
//console.log(john.getFullName());//this will log John's first and last name because of prototypal chain.
//
//var jane = {
//    firstname : "Jane"
//}
//
//jane.__proto__ = person;
//console.log(jane.getFullName());//firtsname = jane, last name = Doe(john's last name)


//Everything in JS is an object
//All primitive objects have a prototype

//var a = {};
//var b = function() {};
//var c = [];
//prototype of a prototype is an object. That's the end of prototype chain.


//Reflection and Extend
//
//var person = {
//    firstname : "default",
//    lastname : "Default",
//    getFullName : function() {
//        return this.firstname + ' ' + this.lastname;
//    }
//}
//
//var john = {
//    firstname : "John",
//    lastname : "Doe"
//}
//
////don't do this EVER!! only for demo!!
//john.__proto__  = person;
//
//for( var prop in john){
//    if(john.hasOwnProperty(prop)){
//        console.log(prop + ': '+john[prop]);
//    }
//}
//
//var jane = {
//    address: "45 Rawson St",
//    getFormalName: function(){
//        console.log(this.firstname+ " "+ this.lastname);
//    }
//}
//
//var jim = {
//    getFirstName: function(){
//        console.log(this.firstname);
//    }
//}
//
//_.extend(john, jane, jim);
//console.log(john);


//Function constructors, new keyword.
//function person(){
//    console.log(this);
//    this.firstname = "Prathyusha";
//    this.lastname = "Mavoori";
//    console.log("this is invoked");
//    
//    return { greeting : "I got in the way!!"}
//}
//
//var jeevan = new person();
//console.log(jeevan);


//Function constructors and .prototype
//All functions have a prototype property
//when you use new operator , prototype property is used.
//
//function Person(firstName , lastName) {
//    console.log(this);
//    this.firstname = firstName;
//    this.lastname = lastName;
//    console.log("this is invoked");
//}
//
//Person.prototype.getFullName = function() {
//    return this.firstname + " " + this.lastname;
//}
//
//var prathyu = new Person("Prathyusha", "Mavoori");
//console.log(prathyu);
//
//var mercy = Person("Mercy", "Shanthapthi");
//console.log(mercy);
//
////you can add properties to the prototype obj at anypoint of time.
////it's better to add functions in prototype of an object. This is becasue 
////functions in javascript are objects and they are saved in memory. if you don't put it 
////on protoype, a copy of the function is created for every object.
//Person.prototype.getLastName = function() {
//    return this.firstname + " " + this.lastname;
//}



///New and functions
//dont miss new keyword for object instantiation.
//Any function you intend to use as constructors, 
//firstletter should be a capital letter(just to make sure)


///Built-In function constructors
//Built in constructors in JS : Number, String, Date
//each constructor has a prototype and it has properties to use.
//you can add properties to built in function constructors'prototype
//String.prototype.isLengthGreaterThan = function(limit) {
//    return this.length > limit;
//}
//
//console.log("Jeevan".isLengthGreaterThan(9));
//
////JS doesn't convert a number to an object automatically
//Number.prototype.isPositive = function(){
//    return this > 0;
//}
//
////it is dangerous to use built in fn constructors at times.
//var a = 3;
//var b = new Number(3);
//
//console.log(a==b);
//console.log(a===b);//returns false.
//
////for dates momentjs provides lot of functions to play with




///Arrays - for-in
//incase of arrays don't use for - in, use for loop with index.
//Array.prototype.myCustomFeature = "Cool!";
//
//var arr = ["Jeevan", "Anu", "Prathyu"];
//
//for(var prop in arr) {
//    console.log(prop + ":" + arr[prop]);
//}



///Object.create and pure prototypal inheritance
//built in function Object.create

//Polyfill - a code that adds a feature the engine may lack
//creating a Polyfill for Object.create
//if(!Object.create) {
//    Object.create = function(o){
//        if(arguments.length > 0) {
//            throw new Error("Only one ")
//        }
//        function F(){};
//        F.prototype = o;
//        return new F();
//    }
//}
//
//var person = {
//    firstname:"jeevan",
//    lastname:"Salai",
//    greeting:function(){
//        return "hi" + this.firstname;
//    }
//}
//
//var prathyu = Object.create(person);
//prathyu.firstname = "Prathyusha";
//prathyu.lastname = "Mavoori";
//console.log(prathyu);


///ES6 and Classes
//class is an object in JS.
//"extends" key word sets the prototype of the class



///Odds and Ends
//disadvantages about large pieces of code and declarations.


/// typeof, instanceof
//var a = 3;
//console.log(typeof(a));
//
//var b = "Jeevan";
//console.log(typeof(b));
//
//var c = [];
//console.log(typeof(c));
//console.log(Object.prototype.toString.call(c));
//
//var d = {};
//console.log(typeof(d));
//
//function Person(name) {
//    this.name = name;
//}
//
//var e = new Person("Surya");
//console.log(typeof(e));
//console.log(e instanceof Person);
//
//console.log(typeof(undefined));
//console.log(typeof(null));
//
//var z = function() {};
//console.log(typeof(z));


///Strict Mode
//"use strict"; this makes JS unforgiving. 
//"use strict"; can go on top your file or inside your function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
var person;

persom = {};
console.log(persom);//javascript is forgiving


///Learning from other's good code
///Deep dive into JQuery


