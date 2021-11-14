// конструктор js
// es5

// function конструктор
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log( 'Hello ' + this.name);
  };
}
User.prototype.exit = function(name) {
  console.log("Пользватьл" + this.name + 'ушел')
}


let ivan = new User("Ivan",23),
    vadim = new User('vadim', 25);
console.log(vadim.hello())

// es6 классы
class User1 {
  constructor (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  
  hello () {
    console.log( `Hello   ${this.name} `);
  }
  exit() {
    console.log(`Пользватьл  ${this.name}  ушел `)
  }
}



let ivan11 = new User1("Ivan1",23),
    vadim2 = new User1('vadim1', 25);
console.log(ivan11.hello())
