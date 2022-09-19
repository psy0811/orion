$(function(){

    // if($(window).width() < 768){ $('#fullpage').removeAttr('id'); }

    //fullpage
    $('#fullpage').fullpage({
        responsiveWidth: 768,
        anchors: ['OrionPowerBrand', 'OrionBrand', 'ChocopieHouse','Q&A'],
        sectionsColor: ['#fff7f7', '#ffe1e9', '#fff2e4', '#fff'],
        scrollingSpeed: 800,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['OrionPowerBrand', 'OrionBrand', 'ChocopieHouse','Q&A'],
        slidesNavigation: true,
        // scrollOverflow:true,
        // css3: true,
        slidesNavPosition: 'bottom',
        onLeave : function(index, nextIndex, direction){
            if(nextIndex >= 2){ //top-btn 이벤트
                    $('.floating-banner').addClass('active');
                    $('.top-btn').addClass('active');
            }else{
                    $('.floating-banner').removeClass('active');
                    $('.top-btn').removeClass('active');
            }if(nextIndex == 3){ //초코파이 스크롤 이벤트
                $('#section2').find('.chocopie-move').addClass('active');
            }
        },
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                autoslide = setInterval(function() {
                    $.fn.fullpage.moveSlideRight();
                }, 4000);
            }
        },
    });

    //floating-banner
    $('.open-btn').click(function(){
        $(this).toggleClass('close');
        $('.kakao-bnr').toggleClass('active');
    });

    // go to top 
    $('.top-btn').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
        $.fn.fullpage.setScrollingSpeed(500); 
    });


    //tab & mobile nav button
    $('.m-open-btn').click(function(){
        $('.m-nav-btn').addClass('on');
    });
    $('.m-close-btn').click(function(){
        $('.m-nav-btn').removeClass('on');
    });

    //header bg
    $(window).scroll(function(){
        var scrollAmt = $(this).scrollTop();

        if($(this).scrollTop()>0){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });


}); //ready