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
let paragrf = document.querySelectorAll('.sign p');
let signpa = document.querySelectorAll('.sign p a');
let flexchaSpan = document.querySelector('.flexcha span:nth-child(2)')
let naticha = document.getElementsByClassName("natija");
let natijaP = document.querySelector('.natija > div:nth-child(1) p');
let natijaSpan = document.querySelectorAll('.natija span');
let top3 =document.getElementsByClassName('top3')
let navDiva =document.querySelectorAll('nav div a')
let tugma4 = document.getElementsByClassName('tugma4');
let vaqtSpan = document.querySelectorAll('.vaqt span');
let suruvchi1 = document.getElementsByClassName('suruvchi1');
let suruvchi2 = document.getElementsByClassName('suruvchi2');
let kulrangSpan = document.querySelectorAll('.kulrang span');
let trlar = document.querySelectorAll('.jadval table tr');
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
    siklBackcolor(tugma3,'black');
    siklhover(tugma3,'rgb(40, 40, 40)','black');
    siklcolor(paragrf,'rgb(113, 113, 113)');
    siklcolor(signpa,"black");
    flexchaSpan.style.borderColor = 'rgb(104, 104, 104)';
    flexchaSpan.style.color = 'rgb(66, 66, 66)';
    siklBorder(naticha,"rgb(174, 174, 174)");
    siklcolor(natijaP,'black');
    siklcolor(natijaSpan,'rgb(95, 95, 95)');
    siklBoxShadow(top3,'0 0 3px yellowgreen');
    siklBackImage(top3,"linear-gradient(to right,rgb(247, 247, 152), white)")
    siklcolor(navDiva,'black');
    siklBackcolor(tugma4,'rgb(238, 238, 238)');
    siklBorder(tugma4,'rgb(167, 167, 167)');
    siklhover(tugma4,rgb(255, 255, 255),rgb(238, 238, 238));
    siklBorder(vaqtSpan,'rgb(167, 167, 167)');
    siklBackcolor(suruvchi1,'rgb(192, 192, 192)');
    siklBackcolor(suruvchi2,'rgb(233, 233, 233)');
    siklcolor(kulrangSpan,'rgb(147, 147, 147)');
    siklBorderBottom(trlar,'rgb(192, 192, 192)');

}


function tun() {
    body.style.backgroundColor = `rgba(10, 10, 10, 1)`;
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
    siklBackcolor(tugma3,'black');
    siklhover(tugma3,'rgb(40, 40, 40)','black');
    siklcolor(paragrf,'rgb(113, 113, 113)');
    siklcolor(signpa,"black");
    flexchaSpan.style.borderColor = 'rgb(104, 104, 104)';
    flexchaSpan.style.color = 'rgb(66, 66, 66)';
    siklBorder(naticha,"rgb(174, 174, 174)");
    siklcolor(natijaP,'black');
    siklcolor(natijaSpan,'rgb(95, 95, 95)');
    siklBoxShadow(top3,'0 0 3px yellowgreen');
    siklBackImage(top3,"linear-gradient(to right,rgb(247, 247, 152), white)")
    siklcolor(navDiva,'black');
    siklBackcolor(tugma4,'rgb(238, 238, 238)');
    siklBorder(tugma4,'rgb(167, 167, 167)');
    siklhover(tugma4,rgb(255, 255, 255),rgb(238, 238, 238));
    siklBorder(vaqtSpan,'rgb(167, 167, 167)');
    siklBackcolor(suruvchi1,'rgb(192, 192, 192)');
    siklBackcolor(suruvchi2,'rgb(233, 233, 233)');
    siklcolor(kulrangSpan,'rgb(147, 147, 147)');
    siklBorderBottom(trlar,'rgb(192, 192, 192)');

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

function siklBackImage(a,c) {
    let i = 0;
    while(a[i] != undefined) {
        a[i].style.backgroundImage = c;
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
function siklBorderBottom(a,c) {
    let i = 0;
    while(a[i] != undefined) {
        a[i].style.borderBottomColor = c;
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