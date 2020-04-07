let navig = Array.from(document.querySelectorAll('.tab'));
let content = Array.from(document.querySelectorAll('.tab__content'));

for (let i=0; i<navig.length; i++) {
        navig[i].onclick = function() {
            
            for (let j = 0; j<content.length; j++) {
                if (i == j) {
                    content[j].classList.add('tab__content_active');
                } else if (i !== j) {
                    content[j].classList.remove('tab__content_active');
                }
            }
        }
}