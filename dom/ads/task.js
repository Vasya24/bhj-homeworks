let phrases = Array.from(document.getElementsByClassName('rotator__case'));
// let active = document.getElementsByClassName('rotator__case_active');
for (let i=0; i<phrases.length; i++) {
    if (i > phrases.length) {
        i=0;
    }
    setInterval(() => {
        phrases[i].nextElementSibling.classList.add('rotator__case_active');
        phrases[i].previousElementSibling.classList.remove('rotator__case_active')
    }, 1000);
}