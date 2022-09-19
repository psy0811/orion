$(function(){

    //floating-banner
    $('.open-btn').click(function(){
        $(this).toggleClass('close');
        $('.kakao-bnr').toggleClass('active');
    });

    //go to top & 닥터유Drink Fly-txt & header Nav
    var headerNav = $('header nav > ul > li ');
    var goTop = $('.top-btn');


    goTop.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},400);
        return false;
    });



    $(window).scroll(function(){
        var scrollAmt = $(this).scrollTop();
        //header sticky(스크롤시 헤더 모양 변경)
        if($(this).scrollTop()>0){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }

        //go to top
        if(scrollAmt > 400){
            goTop.addClass('active');
            $('.floating-banner').addClass('active');
        }else{
            goTop.removeClass('active');
            $('.floating-banner').removeClass('active');
        }
    });


    //header on(deps2 펼치기)
    headerNav.mouseover(function(e){
        e.preventDefault();
        $('header').addClass('on');
    });
    headerNav.mouseout(function(){
        $('header').removeClass('on');
    });                
  
       
 
    //tab & mobile nav button
    $('.m-open-btn').click(function(){
        $('.m-nav-btn').addClass('on');
        $('header').addClass('on');

        //스크롤 이벤트 막기
        $('body').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
          });
    });
    $('.m-close-btn').click(function(){
        $('.m-nav-btn').removeClass('on');
        $('header').removeClass('on');

        //스크롤 이벤트 활성화
        $('body').off('scroll touchmove mousewheel');
    });


    //header random 
    
    $('header nav > ul > li > a').mouseover(function(e){   
        e.preventDefault(); 
        var randomImg = ["product_snack_01", "product_biscuit_01", "product_biscuit_20", "product_candy_01", "product_chocolate_01", "product_chocolate_02","product_chocolate_07"];    
        var imgContents= $('.random_img').find('img');
        
        for(var i = 0; imgContents.length-1 > i; i++){  
            let randomNumber = Math.floor((Math.random() * 7));   
            imgContents.eq(i).attr('src', 'images/' + randomImg[randomNumber] + '.jpg');
        }        
    }); 



}); //ready



    
