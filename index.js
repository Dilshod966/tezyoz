document.createElement('div').style.backgroundColor

function surish(a) {
    let tugmacha = document.getElementsByClassName('suruvchi1')[a];

    if(tugmacha.style.justifyContent == 'flex-start') {
        tugmacha.style.justifyContent = 'flex-end'
        tugmacha.style.backgroundColor = 'black'
    }
    else {
        tugmacha.style.justifyContent = 'flex-start'
        tugmacha.style.backgroundColor = 'rgb(192, 192, 192)'
    }
    
    
}






let body = document.body;
let nav = document.getElementsByTagName('nav')[0];
let tugma = document.getElementsByClassName('tugma');
let tanlovRejim = document.getElementById('tanlovRejim');
let yoniq = document.getElementById('yoniq');
let main = document.getElementsByTagName('main')[0];
let Mainspan = document.querySelectorAll('main span');
let tugma2 = document.getElementsByClassName('tugma2');
let odiyuq = document.querySelector('main > div:nth-child(2)')
let sign = document.getElementsByClassName('sign');
let input = document.querySelectorAll('.sign input');
let tugma3 = document.getElementsByClassName('tugma3');
function kun() {
    body.style.backgroundColor = `rgb(240, 240, 240)`;
    nav.style.borderBottom = '0.5px solid rgb(185, 185, 185);'
    siklcolor(tugma,'black');
    siklhover(tugma,'white','rgba(0, 0, 0, 0)');
    yoniq.style.backgroundColor = 'black';
    main.style.backgroundColor = 'white';
    siklBorder(Mainspan,'rgb(206, 206, 206)');
    siklBoxShadow(tugma2,'0 0 4px rgb(171, 171, 171)');
    siklhover(tugma2,'rgb(219, 219, 219)','rgba(0, 0, 0, 0)')
    odiyuq.style.borderColor = 'rgb(198, 198, 198)';
    odiyuq.style.color = 'rgb(198, 198, 198)';
    siklBackcolor(sign,'white');
    siklBoxShadow(sign,'0 0 10px rgb(136, 136, 136)');
    siklBoxShadow(input,'0 1px 3px rgb(167, 167, 167)')
    siklcolor(tugma3,'white');
}


function tun() {

}

function siklcolor(a,c) {
    let i = 0;
    while(a[i] != undefined) {
        a[i].style.color = c;
        i++;
    }
}
function siklBackcolor(a,c) {
    let i = 0;
    while(a[i] != undefined) {
        a[i].style.backgroundColor = c;
        i++;
    }
}

function siklBorder(a,c) {
    let i = 0;
    while(a[i] != undefined) {
        a[i].style.borderColor = c;
        i++;
    }
}
function siklBoxShadow(a,c) {
    let i = 0;
    while(a[i] != undefined) {
        a[i].style.boxShadow = c;
        i++;
    }
}




function siklhover(a,c1,c2) {
    let i = 0;
    while(a[i] != undefined) {
        let index = i
        a[i].addEventListener('mouseenter',()=>{
            a[index].style.backgroundColor = c1
        })
        a[i].addEventListener('mouseleave',()=>{
            a[index].style.backgroundColor = c2
            
        })
        i++;
        
    }
}




tanlovRejim.addEventListener('change', ()=>{
    if(tanlovRejim.value == "tun") {
        tun()
    }
    else {
        kun()
    }
    
})