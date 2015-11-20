$(document).ready(function(){
    var i = 1;
    
    $('.start').click(function(){
        if (i > 6){
            i = 1;
        }
        else if (i < 1){
            i = 1;
        }
        $('.inst').css('display', 'block');
        $('.page' + i).css('display', 'block');
        $('.home').css('display', 'none');
    });
    
    $('.exit').click(function(){
        $('.inst').css('display', 'none');
        $('.home').css('display', 'block');
    });
    
    $('.about').click(function(){
        $('.home').css('display', 'none');
        $('.aboutPage').css('display', 'block');
    });
    $('.homeBTN').click(function(){
        $('.aboutPage').css('display', 'none');
        $('.home').css('display', 'block');
    });
    
    $('.next').click(function(){
        $('.page' + i).css('display', 'none');
        i++;
        $('.page' + i).css('display', 'block');
        if (i > 6){
            $('.home').css('display', 'block');
            $('.inst').css('display', 'none');
        }
    });
    
    $('.back').click(function(){
        $('.page' + i).css('display', 'none');
        i--;
        $('.page' + i).css('display', 'block');2
        if (i < 1){
            $('.home').css('display', 'block');
            $('.inst').css('display', 'none');
        }
    });
});