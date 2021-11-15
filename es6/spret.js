let video = ['youtobe', 'vimeo', 'rutube'],
    blogs= ['wordpress', 'livejour', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
// ... spret 
console.log(internet)

function log(a, b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
let number =[2,5,7];
// ... spret 
log(...number)