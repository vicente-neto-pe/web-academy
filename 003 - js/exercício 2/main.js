const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const changeOverlayVisibility = () =>{
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.classList.remove('dark');
        btn.textContent = 'Clarear';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.classList.add('dark');
        btn.textContent = 'Escurecer';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
const renderImages = () =>{
    const picQuantity = 6;
    for (let i=1; i<picQuantity; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `images/pic${i}.jpg`);
        newImage.setAttribute('alt', `imagem ${i}`);
        thumbBar.appendChild(newImage);
        newImage.onclick = function (e) {
            displayedImage.src = e.target.src;
        }
    }
}

renderImages();
btn.onclick = changeOverlayVisibility