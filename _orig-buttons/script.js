
let btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function(){
    document.body.style.background = 'linear-gradient(#43cea2, #185a9d)';
})

btn2.addEventListener('click', function(){
    document.body.style.background = 'linear-gradient(#360033, #0b8793)';
})

btn3.addEventListener('click', function(){
    document.body.style.background = 'linear-gradient(#D38312, #A83279)';
})



let b = document.querySelector('h1');
let c = document.getElementById('btn4');
let f = false;

c.addEventListener('click', function(){
    if(f == false ){
         b.innerHTML='True';
        f = true;
        document.body.style.background = '#dce324';
    } else {
        f = false;
        b.innerHTML='False';
        document.body.style.background = '#fff';
        
    }
   
})


let h = document.getElementById('btn5');
let text = document.getElementById('text');
let t = false;

h.addEventListener('click', function(){
    if(t == false ){
       t=true;
        text.hidden = true;
    } else {
        t=false;
        text.hidden = false;
    }
})


