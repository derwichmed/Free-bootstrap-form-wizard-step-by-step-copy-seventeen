$(function (){
   countStep = $('.form_wizard > div > section >  section .form_item').length;
   nbr_step = 0;
   $('.form_wizard > div > section > header .progress .progress-bar')
           .css('width',100/countStep+'%');
   
    
    $('.nxt_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        $('.form_wizard > div > section > header .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
        $('.form_wizard > div > section >  section .form_item:visible').hide();
        $('.form_wizard > div > section >  section .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
       $('.form_wizard > div > section > header .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
        $('.form_wizard > div > section >  section .form_item:visible').hide();
        $('.form_wizard > div > section >  section .form_item').eq(nbr_step).fadeIn(500);
    });
});