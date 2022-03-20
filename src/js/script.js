$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 3,
        loop: true,
    });
  });
  
//   let popupBg = document.querySelector('.popup__bg');
// let popup = document.querySelector('.popup'); 
// let openPopupButtons = document.querySelectorAll('.open-popup'); 
// let closePopupButton = document.querySelector('.close-popup');

// openPopupButtons.forEach((button) => { 
//     button.addEventListener('click', (e) => { 
//         e.preventDefault(); 
//         popupBg.classList.add('active');
//         popup.classList.remove('active');
//     })

// });

// closePopupButton.addEventListener( 'click', () => {
//     popupBg.classList.remove('active');
//     popup.classList.remove('active'); 
// });

// document.addEventListener('click',(e) => {
//     if(e.target === popupBg){ 
//         popupBg.classList.remove('active');
//         popup.classList.remove('active'); 
//     }

// // });

// const wow = new WOW({
//     boxClass:'wow', /* класс, который необходим для работы wow.js */
//     animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
//     offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
//     mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
//     live: true  /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
// })

// wow.init();/* Инициализация плагина с установленными выше свойствами */
