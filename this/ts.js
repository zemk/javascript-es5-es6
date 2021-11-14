// this глобальный объект
// function showThis(){
//   console.log(this)
// }
//  showThis()

function showThis(a,b){
  console.log(this)
  function sum(){
    console.log(this);
    
    return this.a +this.b;
    // this.a +this.b; окно
  }
  console.log(sum());
}
showThis(4,5);
showThis(5,5);
// замыкание функции
//
// this.a +this.b;

// 1) просто вызов функии - window / undefined
function showThisS(a,b){
  console.log(this)
  function sum(){
    console.log(this);
    
    return a +b;
    // this.a +this.b; окно
  }
  console.log(sum());
}
showThisS(4,5);
showThisS(5,5);
// строгий режим 
// 'use strinct';





// 2) метод обьект - this = обьект 
let obj ={
  a: 20,
  b:10,
  sum: function(){
    console.log(this);
    // возрашеть обьект
    function shoul() {
      console.log(this)
    }
    shoul()
    // потерали конте визова
  }
}
// 3() конструктор (new) -this = новый созданный обьект
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log( 'Hello ' + this.name);
  };
}

let ivan = new User("Ivan",23),
    vadim = new User('vadim', 25);
console.log(vadim.hello())

// 4
let user ={
  name: 'jonh '
};
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smit'));

console.log(sayName.apply(user, ['vadim']));


// 4) Указание конкретного контекста - call apply bind

function count(number) {
  return this * number
}


let double = count.bind(2);
console.log(double(3))
console.log(double(10))

let btn =document.querySelector('button');
btn.addEventListener('click', function(){
  console.log(this);
  this.style.backgroundColor ='red'
  
  function shtThi(){
    console.log(this)
    
  }
  shtThi();
  
})