$(function (){
    $('input[name=phone]').mask('+7 (999) 999-99-99');
    $('input[name=phone2]').mask('+7 (999) 999-99-99');

    $('.keys-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:20,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-arrow-left.svg">','<img src="images/slide-arrow-right.svg">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
                margin:0,
            },
            1000:{
                items:1,
                margin:0,
            }
        }
    });

    $('.tab-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:20,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-arrow-left.svg">','<img src="images/slide-arrow-right.svg">'],
        responsive:{
            0:{
                items:1.2,
            },
            768:{
                items:1.2,
                margin:0,
            },
            992:{
                items:1.3,
                margin:0,
            }
        }
    });


    $('.comment-slide').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-arrow-right-blue.svg">','<img src="images/slide-arrow-right-blue.svg">'],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
                margin:0,
            },
            992:{
                items:1,
                margin:0,
            }
        }
    });


    $('.step-btn').on('click',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
    $('.adap-btn').on('click',function(e){
        e.preventDefault();
        $('.adap-num').toggleClass('active');
    });

    $('.btn-link').on('click',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
    $('.q-btn, .arrow').on('click',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
    $('.card-header .arrow').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    

    $('.nav-pills .nav-item').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('yes');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".nav-item"); // тут указываем class элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 1) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });
    
});



