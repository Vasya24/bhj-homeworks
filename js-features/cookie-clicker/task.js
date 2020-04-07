let crack = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');


crack.onmousedown = function() {
    this.width = 400;
    this.height = 200;
}

crack.onmouseup = function() {
    this.width = 200;
    this.height = 128;
    counter.textContent++
}
