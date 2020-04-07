let drop = document.querySelector(".dropdown__value");
let droplist = document.querySelector("ul.dropdown__list");
let links = Array.from(document.querySelectorAll(".dropdown__link"));

drop.onclick = function() {
    droplist.classList = 'dropdown__list dropdown__list_active'
}

for (let i=0; i<links.length; i++) {
    links[i].onclick = function(event){
        event.preventDefault();
        drop.textContent = links[i].textContent;
        droplist.classList = 'dropdown__list'
    }
}