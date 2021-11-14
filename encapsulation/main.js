// Инкапсуляция. 
function User(name, age) {
  this.name =name;
  let userAge =age;
  // Геттеры
  this.getAge = function(){
    return userAge
  };
  // сеттеры
  this.setAge  = function(age) {
    if(typeof age === 'number' && age>0 && age<110) {
      userAge = age;
    }else {
      console.log('Недопустимое значение');
    }
  }
  this.say = function() {
    console.log(`Имя пользователя ${this.name}, возраст: ${this.getAge()}`)
  }
}
let user = new User('Vadim', 24)
console.log(user.name);
user.say()
user.age =30;
console.log(user.getAge())

user.setAge(28)
user.say()

  