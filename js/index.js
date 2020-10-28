$(window).on("scroll",function(){
    if  ($(window).scrollTop()){
        $('nav').addClass("bg-dark");
    }
    else{
    $('nav').removeClass("bg-dark")
    }
});

$("a").click(function(){
    let aHref = $(this).attr("href")
    let profileOffset = $(aHref).offset().top;
    $("body,html").animate({scrollTop:profileOffset},1000)
});


$(window).ready(function(){
    $('nav a').on('click',function(){
        $("nav a").removeClass("nav-a-color");
        $(this).addClass("nav-a-color");
    });
});



new WOW().init();

var typed = new Typed('.type', {
    strings: ['web-designer', 'web-developer','frontend-developer'],
    typeSpeed: 80, 
    backSpeed: 60, 
    loop:true 
});
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
if ( scrollTop > 800)
{
    $("#btnUp").fadeIn(500)
}
else{
   $("#btnUp").fadeOut(500)

}
})
$("#btnUp").click(function(){
    $("body,html").animate({scrollTop:0},1000)
})


$(document).ready(function(){
    $("#loading").fadeOut(2500 , function(){
        $("body").css("overflow","auto")
    });
});



    // document.addEventListener("contextmenu", function(e){
    //     e.preventDefault(alert("Right Click Are Not Allowed"));
    // }, false);

    // document.onkeydown=function(e){
    //     if(e.keyCode == 16 )
    //     {
    //         return false;
    //     }
    //     else if (e.keyCode == 73)
    //     {
    //         return false;
    //     }
    //     else if (e.keyCode == 123)
    //     {
    //         return false;
    //     }
    // };