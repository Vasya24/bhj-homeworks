let time = document.getElementById('timer');

let count = function() {
time.textContent -= 1;
if (time.textContent == 0) {
    alert("Победитель!")
}
}

setInterval(count, 100)