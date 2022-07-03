$(document).ready(function () {
    var scroll = new SmoothScroll('a[href^="#"]', {
        easing: "easeOutQuint",
        header: "[data-scroll-header]"
    });

    $("#sign-up, #start").click(function(){
        $(".sign-up").show();
        $("body").css({"overflow-y": "hidden"});
    });

    $("#sign-in").click(function(){
        $(".sign-in").show();
        $("body").css({"overflow-y": "hidden"});
    });

    $(".sign-up, .sign-in").click(function(e){
        if(!$(e.target).closest(".modal").length){
            $(this).hide();
            $("body").css({"overflow-y": "scroll"});
        }
    });
});