// es6 fun
let fun = () => {
  console.log(this);
}


fun();


let obj ={
  number: 5,
  sayNumber: function() {
    let say = () => {
        console.log(this);
      }
      say();
    }
}


obj.sayNumber();

let bnt = document.querySelector('button');
bnt.addEventListener('click', function() {
  let show =() => {
    console.log(this);

  }
  show();
})