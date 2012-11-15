
$(document).ready(function() {
    // $(".pop_out").animate({left:"100px"}, 2000);

    $(".awesome_icon").eq(0).click(function(){
        $(".client div").css("display", "none");
        $(".search_cont").css("display", "block");
    });
    $(".awesome_icon").eq(1).click(function(){
        $(".client div").css("display", "none");
        $(".share_cont").css("display", "block");
    });
    $(".awesome_icon").eq(2).click(function(){
        $(".client div").css("display", "none");
        $(".show_cont").css("display", "block");
    });

    $(window).bind("resize.browsersize", function() {               
        var $tab = $('.nav-tabs');    

        $(window).scroll(function(){   
            if ($(window).scrollTop() > 1300 ){    
                $(".nav-tabs li").removeClass("activeChapter");
                $(".nav-tabs li").eq(1).addClass("activeChapter");

                if ($(window).scrollTop() > 1700 ){
                    $(".nav-tabs li").removeClass("activeChapter");
                    $(".nav-tabs li").eq(2).addClass("activeChapter");
                }

                if ($(window).scrollTop() > 2290 ){     //Big resolution monitors
                    var windowWidth = $(window).width();
                    if (windowWidth > 1350) {           //Medium resolution monitors
                        $tab.css({ position:'fixed', top:'8%', left: '20.35%'});
                    } else if (windowWidth > 1000) {    //Smaller resolution monitors
                        $tab.css({ position:'fixed', top:'8%', left: '8%'});
                    } else {
                        $tab.css({ position:'fixed', top:'8%', left: '0%'});
                    } 
                    
                    if ($(window).scrollTop() > 4000 ) {
                        $(".nav-tabs li").removeClass("activeChapter");
                        $(".nav-tabs li").eq(3).addClass("activeChapter");
                    }
                    if ($(window).scrollTop() > 5000 ) {
                        $(".nav-tabs li").removeClass("activeChapter");
                        $(".nav-tabs li").eq(4).addClass("activeChapter");
                    }
                    if ($(window).scrollTop() > 6000 ) {
                        $(".nav-tabs li").removeClass("activeChapter");
                        $(".nav-tabs li").eq(5).addClass("activeChapter");
                    }
                    if ($(window).scrollTop() > 6700 ) {
                        $(".nav-tabs li").removeClass("activeChapter");
                        $(".nav-tabs li").eq(6).addClass("activeChapter");
                    }
                    if ($(window).scrollTop() > 7300 ) {
                        $(".nav-tabs li").removeClass("activeChapter");
                        $(".nav-tabs li").eq(7).addClass("activeChapter");
                    }
                } else {
                    $tab.css({ position:'relative', top:'0', left: '0' });   
                }
            } 
        });             
    }).trigger("resize.browsersize");
  });