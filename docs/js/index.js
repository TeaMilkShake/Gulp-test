$(document).ready(()=>{var e=!1;$(".languages").click(()=>{0==e?($(".language-pop-up").css({display:"block"}),e=!0):($(".language-pop-up").css({display:"none"}),e=!1)}),$(".purchase-button").mouseover(()=>{$(".purchase-pop-up").css({opacity:"1",visibility:"visible"})}),$(".purchase-button").mouseout(()=>{$(".purchase-pop-up").css({opacity:"0",visibility:"hidden"})});var s=!1;$(".burger-btn").click(()=>{0==s?($(".mobile-menu-wrapper").css({transition:"background-color, 0.2s ease-in-out","min-height":"100vh","background-color":"#273444"}),$("body").css({overflow:"hidden"}),$(".absolute-icons").css({visibility:"hidden",opacity:"0"}),$(".landing-particles").css({display:"none"}),$(".menu").delay(100).queue((function(e){$(this).css({"margin-left":"0",opacity:"1"}),e()})),$(".menu").css("display","flex"),window.scrollBy(0,-window.innerHeight),s=!0):($("body").css({overflow:"unset"}),$(".mobile-menu-wrapper").css({"background-color":"transparent"}),$(".mobile-menu-wrapper").delay(200).queue((function(e){$(this).css({"min-height":"unset"}),e()})),$(".landing-content").css({display:"flex"}),$(".absolute-icons").css({visibility:"visible",opacity:"1"}),$("main").css({display:"block"}),$(".landing-particles").css({display:"block"}),$(".menu").css({display:"none"}),$(".menu").css({"margin-left":"50px",opacity:"0"}),$("body").css({overflow:"unset"}),s=!1)}),$.each($(".mobile-sub-btn"),(function(){$(this).find(".mobile-flex").click(()=>{$(this).find(".sub-menu-wrapper").hasClass("mobile-menu-toggle")?$(this).find(".sub-menu-wrapper").removeClass("mobile-menu-toggle"):($.each($(".sub-menu-wrapper"),(function(){$(this).removeClass("mobile-menu-toggle")})),$(this).find(".sub-menu-wrapper").addClass("mobile-menu-toggle"))})})),$.each($(".sub-and-sub-sub"),(function(){$(this).find(".sub-menu-li").click(()=>{$(this).find(".sub-sub-menu").hasClass("mobile-menu-toggle")?$(this).find(".sub-sub-menu").removeClass("mobile-menu-toggle"):($.each($(".sub-sub-menu"),(function(){$(this).removeClass("mobile-menu-toggle")})),$(this).find(".sub-sub-menu").addClass("mobile-menu-toggle"))})}))}),$(".flex-btn").mouseover(()=>{$(".flex-device-line").animate({width:"100%"},100),$(".flex-device-line").animate({width:"90%"},100)}),$(".flex-btn").mouseout(()=>{$(".flex-device-line").animate({width:"75%"},100),$(".flex-device-line").animate({width:"85%"},100)}),$(".section5-down-wrapper").click(()=>{$("body,html").animate({scrollTop:$(".section5-wrapper").offset().top},1e3)}),$("#carousel").owlCarousel({margin:50,dots:!0,responsive:{0:{items:1},600:{items:2},1200:{items:3}}});