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
let nav = document.getElementsByTagName('nav');
let tugma = document.getElementsByClassName('tugma');
let tanlovRejim = document.getElementById('tanlovRejim');

tanlovRejim.addEventListener('change', ()=>{
    if(tanlovRejim.value == "tun") {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else {

    }
    
})

