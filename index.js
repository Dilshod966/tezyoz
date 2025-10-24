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




function kun() {
    body.style.backgroundColor = `rgb(240, 240, 240)`;
    nav.style.borderBottom = '0.5px solid rgb(185, 185, 185);'
    sikl(tugma,'black');
    
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



tanlovRejim.addEventListener('change', ()=>{
    if(tanlovRejim.value == "tun") {
        tun()
    }
    else {
        kun()
    }
    
})