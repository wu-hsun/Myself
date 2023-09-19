
$(function(){

    var N = 1

    $('.fa-solid').click(function(){        
        
        if(N == 1){
            $('.nav').animate({right: '70px'}, 600)
            N = 2
        }
        else{
            $('.nav').animate({right: '-200px'}, 600)
            N = 1
        }

    })

    $('.nav li').click(function(){
        if(this.id == 'ch1'){
            $('.nav').animate({right: '-200px'}, 0)
            $('.exp , .pro').css({'display' : 'none'})
            $('.mySelf').css({'display' : 'block'})            
            N = 1
        }

        if(this.id == 'ch2'){
            $('.nav').animate({right: '-200px'}, 0)
            $('.mySelf , .pro').css({'display' : 'none'})
            $('.exp').css({'display' : 'block'})
            N = 1
        }

        if(this.id == 'ch3'){
            $('.nav').animate({right: '-200px'}, 0)
            $('.mySelf , .exp').css({'display' : 'none'})
            $('.pro').css({'display' : 'block'})
            N = 1
        }
    })

    var swiper = new Swiper(".mySwiper", {

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });

})