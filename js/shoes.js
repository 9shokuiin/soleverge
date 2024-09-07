$('.header-menubar-button').on('click',function(){
    $('.header-nav').addClass('active');
    $('#menu').addClass('active');
    $('.header-icons').addClass('active');
    $('.header-close-btn').addClass('active');
    $('.header-menubar').addClass('active');
    $('.header-icon-instagram').addClass('active');
    $('.header-icon-link').addClass('active');
    // $('.header-nav').removeClass('close');
});

$('.header-close-btn').on('click',function(){
    $('.header-nav').removeClass('active');
    $('#menu').removeClass('active');
    $('.header-icons').removeClass('active');
    $('.header-close-btn').removeClass('active');
    $('.header-menubar').removeClass('active');
    $('.header-icon-instagram').removeClass('active');
    $('.header-icon-link').removeClass('active');
    // $('.header-nav').addClass('close');
});

const contentClassObjects = document.querySelectorAll('.scroll');
let i;

window.addEventListener('scroll',function(){
    let scrollValue = window.scrollY;

    let position = 'center '+ -(scrollValue/5) + 'px';

    for( i = 0; i < contentClassObjects.length ; i++){
        contentClassObjects[i].style.backgroundPosition = position;
    }
});

luxy.init();