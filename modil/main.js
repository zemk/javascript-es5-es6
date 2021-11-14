// let user = (function(){
//   let privat = function () {
//     console.log('I am privat')
//   }
//   return {
//     sayHello: function() {
//       console.log('hello');
//     }
//   };
// }());
// console.log(user)
// console.log(user.sayHello())

let user = (function(){
  let privat = function () {
    console.log('I am privat')
  }
  let  sayHello = function() {
      console.log('hello');
    }
  return {
    sayHello: sayHello
  };
}());
console.log(user)
console.log(user.sayHello())