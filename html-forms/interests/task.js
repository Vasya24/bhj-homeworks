const inter = Array.from(document.querySelectorAll('.interest__check'));

inter[0].onchange = function() { for (let i=1; i<=2; i++) {
    inter[i].checked = true;
    if (inter[0].checked == false) {
        inter[i].checked = false;
    }
}
}

inter[3].onchange = function() { for (let j=4; j<=5; j++) {
    inter[j].checked = true;
    if (inter[3].checked == false) {
        inter[j].checked = false;
    }
}
}