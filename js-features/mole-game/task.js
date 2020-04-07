let killCount = document.getElementById('dead');
let missCount = document.getElementById('lost');
let holes = document.getElementsByClassName('hole');


for (let i=0; i<holes.length; i++) {
    if(holes[i].className.includes('has-mole')) {
    holes[i].onclick = function() {
        killCount.textContent++;
        if (killCount.textContent == 5) {
            alert("Победитель!");
            killCount.textContent = 0;
        }
    }
} else if (!holes[i].className.includes('has-mole')) {
    holes[i].onclick = function() {
        missCount.textContent++;
        if (missCount.textContent == 5) {
            alert("Мазила!")
        }
    }
}
}