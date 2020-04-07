window.onload = function() {
    // let modals = document.getElementsByClassName('modal');
    // modals.item(0).classList = 'modal modal_active';
    // let change = document.querySelector('a.show-success');
    // change.onclick = function() {
    //     modals.item(0).classList = 'modal';
    //     modals.item(1).classList = 'modal modal_active';
    // }
    // let close = document.getElementsByClassName('modal__close_times');
    // close.onclick = function() {
    //    modals.classList = 'modal' 
    // }
    let main = document.getElementById("modal_main"),
    success = document.getElementById('modal_success'),
    change = document.querySelector('a.show-success'),
    close = document.getElementsByClassName('modal__close_times')
    main.classList = 'modal modal_active'
    change.onclick = function() {
        main.classList = 'modal',
        success.classList = 'modal modal_active'
    }
}


