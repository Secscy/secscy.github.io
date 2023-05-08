$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar ao dar scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // mostrar/esconder botão de scroll-up
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // botão de scroll-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // tirando o smooth scroll
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // colocando de novo o smooth scroll se clicar nos menus
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // animações de texto sendo escrito e apagado na tela
    var typed = new Typed(".typing", {
        strings: ["FullStack", "Mobile", "Flutter", "Unity C#", "JavaScript", "Angular"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["JavaScript,", "Unity C#,", "Flutter,", "Kotlin,", "Node,", "Mobile,", "React,", "Angular,", "Vue,", "Firebase,", "Python,"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});