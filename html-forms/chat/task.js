let chat = document.querySelector('.chat-widget');

chat.onclick = function() {
    chat.classList.add('chat-widget_active')
}

let time = document.querySelectorAll('.message__time');
let data = new Date();


// const messages = document.querySelector( '.chat-widget__messages' );
// // добавит
// messages.innerHTML += `
//   <div class="message">
//     <div class="message__time">09:21</div>
//     <div class="message__text">
//       Добрый день, мы ещё не проснулись. Позвоните через 10 лет
//     </div>
//   </div>
// `;