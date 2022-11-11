function botaoBulbo(){
    let bulbo = document.getElementById('bulboluz');
    let body = document.querySelector('body');

    if(bulbo.src.match('LampadaOff')){
        bulbo.src = 'Assets/Images/LampadaOn.png'
        document.body.style.backgroundColor = "#fff";
    } else {
        bulbo.src = 'Assets/Images/LampadaOff.png'
        document.body.style.backgroundColor = "#000";
    }
}