const clickbotonmenu = () => {
    const seleccmenu = document.querySelector('.menu');
    const seleccnav = document.querySelector('nav');

    seleccmenu.addEventListener('click',() =>{
        seleccnav.classList.toggle('clasenavaparecer');
        seleccmenu.classList.toggle('cambio');
    });
}

clickbotonmenu();