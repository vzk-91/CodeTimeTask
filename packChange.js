// task 4

let pack = $('.lastpack');
let count;
localStorage.getItem('count') ? count =localStorage.getItem('count') : count = 60;
    pack.text(count)


let packInterval = setInterval(()=>{
   count<= 7 ? clearInterval(packInterval) : count--, pack.text(count)
   localStorage.setItem('count', count);
},15000)

