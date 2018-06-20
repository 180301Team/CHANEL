
$('header>nav').find('ul').hide();

// $(window).scroll(function(){
//     if($(this).scrollTop()>200){
//         $('header>nav').find('ul').stop().slideDown();
//     }else{
//         $('header>nav').find('ul').stop().slideUp();
//     }
// });
var index = 0;
$('section').find('div').mouseenter(function(){
    index = $(this).index();
    $('section').find('img').attr('src','../images/finished/banner'+index+'.jpg');
});

