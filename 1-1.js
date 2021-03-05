$(document).ready(function()
{ $(window).scroll(function(){
if ($(this).scrollTop() > 100) { /*появляется ссылка при больше 100зч*/
    $('.scrollup').fadeIn();/*плавно показать нужный вам элемент.*/
} else {
$('.scrollup').fadeOut();/*сокрытие*/
}
});
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);/*анимация прокрутки наверх*/
return false;
});
});