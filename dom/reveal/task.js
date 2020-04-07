document.addEventListener('scroll', (e) => {
	let windowHeight = window.innerHeight;
    let block = Array.of(document.querySelectorAll('.reveal'));
    let top = block.getBoundingClientRect().top;
    for (let i=0; i<block.length; i++) {

	if(top < windowHeight) {
		block[i].classList.add('reveal_active');
	} else {
        block[i].classList.remove('reveal_active');
    };
	};
});