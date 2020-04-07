let ctrl = Array.from(document.getElementsByClassName('font-size'));

for (let i=0; i<ctrl.length; i++) {
    ctrl[i].onclick = function() {
        this.classList.toggle('font-size_active')
    }
}