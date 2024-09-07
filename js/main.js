var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.img1').mouseenter(function (){
    $('.designs').css('background-image',"url('imgs/011.jpg')")
    $('.img1 .overlay').css('background-color','#0000005c')
    $('.img1 .black-bg').animate({height:'150px'},400)
})
$('.img2').mouseenter(function (){
    $('.designs').css('background-image',"url('imgs/013.jpg')")
    $('.img2 .overlay').css('background-color','#0000005c')
    $('.img2 .black-bg').animate({height:'150px'},400)
})
$('.img3').mouseenter(function (){
    $('.designs').css('background-image',"url('imgs/012.jpg')")
    $('.img3 .overlay').css('background-color','#0000005c')
    $('.img3 .black-bg').animate({height:'150px'},400)
})
$('.img4').mouseenter(function (){
    $('.designs').css('background-image',"url('imgs/014.jpg')")
    $('.img4 .overlay').css('background-color','#0000005c')
    $('.img4 .black-bg').animate({height:'150px'},400)
})
$('.img1').mouseleave(function (){
    $('.img1 .overlay').css('background-color','transparent')
    $('.img1 .black-bg').animate({height:'0px'},400)
})
$('.img2').mouseleave(function (){
    $('.img2 .overlay').css('background-color','transparent')
    $('.img2 .black-bg').animate({height:'0px'},400)
})
$('.img3').mouseleave(function (){
    $('.img3 .overlay').css('background-color','transparent')
    $('.img3 .black-bg').animate({height:'0px'},400)
})
$('.img4').mouseleave(function (){
    $('.img4 .overlay').css('background-color','transparent')
    $('.img4 .black-bg').animate({height:'0px'},400)
})