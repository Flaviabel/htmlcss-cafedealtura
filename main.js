function openClose() {
    let texto = document.querySelector('#funcionopenclose');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
}

function closeOpen(){
    let open = document.querySelector('#funcionopen');
    if(open.style.display === 'none'){
        open.style.display= 'block';
    }else{
        open.style.display='none';
    }
}

function closeClose(){
let close= document.querySelector('#funcionclose');
if (close.style.display === 'none') {
    close.style.display='block';
}else{
    close.style.display='none'
}
}