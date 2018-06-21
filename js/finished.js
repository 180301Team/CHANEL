/*******************************导航脚本*********************************/
$(".thiUl").hide();

$(window).scroll(function(){
    if($(this).scrollTop()>=$('main').offset().top-150){
        $(".thiUl").slideDown();
    }else {
        $(".thiUl").slideUp();
    }
    console.log($(this).scrollTop());
});
console.log($('main').offset().top);
$('.glyphicon-chevron-down').click(function(){
    $('body,html').animate({scrollTop:$('main').offset().top-140},500)
});
/*******************************切换脚本*********************************/
var index = 1;

// $('section').find('div').mouseenter(function(){
//     index = $(this).index();
//     $('section').find('img').attr('src','../images/finished/banner'+index+'.jpg');
// });

$(".secTop").find('div').mouseenter(function(){
    index = $(this).index()+1;
    $('section').find('img').attr('src','../images/finished/banner'+index+'.jpg');
});
/*******************************轮播脚本*********************************/
var index1=1,
    index2=1,
    timer1 = setInterval(goright1,1000),
    timer2 = setInterval(goright2,1000);

function change1(index1){
    $('.banner').find('img').attr('src',"../images/finished/a"+index1+".jpg");
    $('.banner').find('strong').html('0'+index1);
}
function goright1(){
    index1++;
    if(index1>=5){
        index1=1;
    }
    change1(index1);
}
function goleft1(){
    index1--;
    if(index1<=0){
        index1=4;
    }
    change1(index1);
}
$('.banner>h5').find('.glyphicon-chevron-right').click(goright1);
$('.banner>h5').find('.glyphicon-chevron-left').click(goleft1);

$('.banner').mouseenter(function(){
    clearInterval(timer1);
});
$('.banner').mouseleave(function(){
    timer1 = setInterval(goright1,1000);
});

function change2(index2){
    $('.banner2').find('img').attr('src',"../images/finished/e"+index2+".jpg");
    $('.banner2').find('strong').html('0'+index2);
}
function goright2(){
    index2++;
    if(index2>=8){
        index2=1;
    }
    change2(index2);
}
function goleft2(){
    index2--;
    if(index2<=0){
        index2=7;
    }
    change2(index2);
}
$('.banner2>h5').find('.glyphicon-chevron-right').click(goright2);
$('.banner2>h5').find('.glyphicon-chevron-left').click(goleft2);

$('.banner2').mouseenter(function(){
    clearInterval(timer2);
});
$('.banner2').mouseleave(function(){
    timer2 = setInterval(goright2,1000);
});

