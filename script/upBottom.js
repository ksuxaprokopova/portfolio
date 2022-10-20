$(window).on("scroll", function(){
    if($(this).scrollTop() > 500){
        $("#up").fadeIn()
    }else{
        $("#up").fadeOut()
    }
})

$("#up").on("click", function(){
    $("html, body").animate({scrollTop:0},500)
})

$("#about_link").on("click", function(e){
    e.preventDefault();   
    $("html, body").animate({scrollTop: $("#about").offset().top}, 1000)
})

$("#about_click").on("click", function(e){
    e.preventDefault();   
    $("html, body").animate({scrollTop: $("#portfolio").offset().top}, 1000)
})