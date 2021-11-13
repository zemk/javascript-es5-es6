let drink =1;


function shoot(arrow){
  console.log('Вы сделали выстерл...');
  let promise =new Promise(function(resolve, reject){
    // resolve успешное исполнение промиса   reject  нет
      setTimeout(function(){
        Math.random()> .5 ? resolve({}) : reject('Вы промахнулись');
      }, 3000)
  });
  
  return promise;
  
  
};
function win() {
  console.log('Вы победили!');
  (drink ==1) ? buyBeer() : giveMoney();
}
function buyBeer() {
  console.log("Вам купили пиво")
}
function giveMoney() {
  console.log("Вам заплатили!")
}
function loose(){
  console.log('Вы проиграли!')
}
shoot({})
        .then(mark=> console.log('Вы сделали выстерл...'))
        .then(win)
        .catch(loose)
        