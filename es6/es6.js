// 2015 es6

let name = 'ivan',
    age =30,
    mail ='ex@mail.ru';

// document.write('пользователю' + age);

document.write(`пользвовалею ${name} ${age} лет. почтовый адрес: ${mail}`);

// let const
function makeArray() {
  var items =[];
  for(var i =0; i<10; i++) {
    var item= function(){
      console.log(i);
    };
    items.push(item);
  }
  return items
}
var arr=  makeArray();

arr[1]();
arr[3]();
arr[7]();
// i   10 10 10
function makeArray() {
  var items =[];
  for(let i =0; i<10; i++) {
    var item= function(){
      console.log(i);
    };
    items.push(item);
  }
  return items
}
var arr=  makeArray();

arr[1]();
arr[3]();
arr[7]();
// 1 3 7