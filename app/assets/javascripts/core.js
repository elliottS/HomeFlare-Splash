
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
            if ($(window).scrollTop() > 2300 ){     //Big resolution monitors
                var windowWidth = $(window).width();
                if (windowWidth > 1350) {           //Medium resolution monitors
                    $tab.css({ position:'fixed', top:'11%', left: '20.25%'});
                } else if (windowWidth > 1000) {    //Smaller resolution monitors
                    $tab.css({ position:'fixed', top:'11%', left: '8%'});
                } else {
                    $tab.css({ position:'fixed', top:'11%', left: '0%'});
                }            
            }  else {
                $tab.css({ position:'relative', top:'0', left: '0' });   
            }
        });             
    }).trigger("resize.browsersize");
  });