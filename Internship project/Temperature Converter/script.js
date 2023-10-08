'use scrict'

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("btn");

let f = 0;
let c = 0;

num1.value = 0;
num2.value = 0;

const func = function(){
    if(num1.value != 0){
        f = Number(num1.value);
        c = ((5 / 9) * (f - 32));
        ans=c.toFixed(2);
        num2.value=ans;
        num1.value=0;
        return;
    }
    if(num2.value != 0){
        c=Number(num2.value);
        f=((9/5)*c)+32;
        ans=f.toFixed(2);
        num1.value=ans;
        num2.value=0;
        return;
    }
}

btn.addEventListener('click', () => {
    func();
})

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        func();
    }
})