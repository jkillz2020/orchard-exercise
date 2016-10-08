// console.log("es6");
//const
// const a=8;
// console.log("a", a);
// a=12;
// console.log("a2", a);

//let
let b=8;
console.log('b', b);
b=12;
console.log('b2', b);

function varTest(){
  var x=1;
  if(true){
    var x=2;
    console.log(x);
  }
  console.log(x);
}

varTest();

function letTest(){
  let y=1;
  if(true){
    let y=12;
    console.log('inside if', y);
  }
  console.log('outside if', y);
}

letTest();

//arrow functions
// var sum = function(){
//   let a=1, b=2;
//   return a+b;
// }
// console.log('hardcoded sum ES5', sum());

// var sum2 = ()=>{
//   let a=1, b=2;
//   return a+b;
// }
// console.log('hardcoded sum ES6', sum2());

// var reflect = function(value){
//   return value;
// }
// console.log('reflect in ES5', reflect("ES5 is SO yesterday"));

// var reflect2 = (value)=>{
//   return value;
// }
// console.log('reflect in ES6', reflect2("ES6 is new HOTness"));

// var realSum = function(num1, num2){
//   return num1 + num2;
// }
//   console.log("realsum ES5", realSum(2,3));

// var realSum2 = (num1, num2)=> {
//   return num1 + num2;
// }
// console.log("realsum ES6", realSum(4,5));
//string templates
// let m='biteme';
// console.log('m', m);
// let r = `hello my name is ${m}`;
// console.log('r', r);
// //object literal property shorthand
// let wow = "Hi there", es6="ES6", numNum = ()=>{console.log('howdy')}

// let myOldObject = {
//   wow:wow,
//   es6:es6,
//   numNum:numNum
// }
// console.log(myOldObject);

// let myNewObject = {
//   wow, es6, numNum
// }
// console.log("my new object", myNewObject);
//method properties
var e5Obj = {
  foo:function(){console.log('foo')},
  bar:function(){console.log('bar')}
}
console.log('e5Obj', e5Obj);

var es6Obj = {
  foo() {console.log('foo')},
  bar() {console.log('bar')}
}
console.log('es6Obj', es6Obj);