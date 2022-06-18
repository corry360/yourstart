!function(e){"use strict";e(window).on("load",(function(){e(".loader-wrapper").delay(700).fadeOut(500),e("body").addClass("loaded")})),e("a.page-scroll").on("click",(function(t){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=e(this.hash),s=e(this).data("speed")||800;(a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),e("html, body").animate({scrollTop:a.offset().top-60},s))}})),e(window).on("scroll",(function(){e(window).scrollTop()>=80?e("header").addClass("nav-fixed"):e("header").removeClass("nav-fixed")})),e(document).ready((function(){e(".dropdown-menu a.dropdown-toggler").on("click",(function(t){e(this),e(this).offsetParent(".dropdown-menu");return e(this).next().hasClass("show")||e(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),e(this).next(".dropdown-menu").toggleClass("show"),e(this).parent("li").toggleClass("show"),e(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",(function(t){e(".dropdown-menu .show").removeClass("show")})),!1}))}));var t=e(".header_wrap"),a=t.find(".navbar-collapse ul li a.nav_item");e.each(a,(function(a,s){e(this).on("click",(function(){t.find(".navbar-collapse").collapse("hide"),e("header").removeClass("active")}))})),e(".navbar-toggler").on("click",(function(){e("header").toggleClass("active")})),e(document).on("ready",(function(){e(window).width()>991&&e("header").removeClass("active"),e(window).on("resize",(function(){e(window).width()>991&&e("header").removeClass("active")}))})),e(document).ready((function(){e("#lng_select,#doc_select").msDropdown()})),e("#banner_bg_effect").length>0&&particlesJS("banner_bg_effect",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4,random:!1,anim:{enable:!1,speed:1,opacity_min:.5,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:.2,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.2,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:20,duration:2,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),e(".roadmap").owlCarousel({loop:!1,margin:30,autoHeight:!0,nav:!0,navText:['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],responsive:{0:{items:1},380:{items:2},600:{items:3,margin:15},1e3:{items:5},1199:{items:6}}}),e(".roadmap_wrap").owlCarousel({loop:!1,margin:30,autoHeight:!0,nav:!0,navText:['<i class="ion-arrow-left-c"></i>','<i class="ion-arrow-right-c"></i>'],responsive:{0:{items:1},380:{items:2},767:{items:3},1e3:{items:4},1199:{items:5}}}),e(".timeline").owlCarousel({loop:!1,margin:30,autoHeight:!0,nav:!0,navText:['<i class="ion-ios-arrow-back"></i>','<i class="ion-ios-arrow-forward"></i>'],responsive:{0:{items:1},380:{items:2},767:{items:3},1e3:{items:4},1199:{items:5}}}),e(".blog_slider").owlCarousel({loop:!1,margin:30,nav:!1,dots:!0,responsive:{0:{items:1},380:{items:1},768:{items:2},1e3:{items:3},1199:{items:3}}}),e(".testimonial_slider").owlCarousel({loop:!1,margin:30,nav:!1,dots:!0,autoHeight:!0,responsive:{0:{items:1},768:{items:1},1e3:{items:2},1199:{items:2}}}),e(".tk_countdown_time").each((function(){var t=e(this).data("time");e(this).countdown(t,(function(t){e(this).html(t.strftime('<span class="counter_box"><span class="tk_counter days">%D </span><span class="tk_text">Days</span></span><span class="counter_box"><span class="tk_counter hours">%H</span><span class="tk_text">Hours</span></span><span class="counter_box"><span class="tk_counter minutes">%M</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span class="tk_counter seconds">%S</span><span class="tk_text">Seconds</span></span>'))}))})),e(".video").magnificPopup({type:"iframe"}),e("#submitButton").on("click",(function(t){t.preventDefault();var a=e("form").serialize();e.ajax({type:"POST",dataType:"json",url:"contact.php",data:a,success:function(t){"error"===t.type?(e("#alert-msg").removeClass("alert-msg-success"),e("#alert-msg").addClass("alert-msg-failure")):(e("#alert-msg").addClass("alert-msg-success"),e("#alert-msg").removeClass("alert-msg-failure"),e("#first-name").val("Enter Name"),e("#email").val("Enter Email"),e("#subject").val("Enter Subject"),e("#description").val("Enter Message")),e("#alert-msg").html(t.msg),e("#alert-msg").show()},error:function(e,t){alert(t)}})})),e(window).scroll((function(){e(this).scrollTop()>150?e(".scrollup").fadeIn():e(".scrollup").fadeOut()})),e(".scrollup").on("click",(function(t){return t.preventDefault(),e("html, body").animate({scrollTop:0},600),!1})),e(".content-popup").magnificPopup({type:"inline",preloader:!0,mainClass:"mfp-zoom"}),e((function(){function t(t,a){t.each((function(){var t=e(this),s=t.attr("data-animation"),o=t.attr("data-animation-delay");t.css({"-webkit-animation-delay":o,"-moz-animation-delay":o,"animation-delay":o,opacity:0}),(a||t).waypoint((function(){t.addClass("animated").css("opacity","1"),t.addClass("animated").addClass(s)}),{triggerOnce:!0,offset:"90%"})}))}t(e(".animation")),t(e(".staggered-animation"),e(".staggered-animation-wrap"))})),jQuery(document).ready((function(e){jQuery(".counter").counterUp({delay:10,time:1e3})})),e(".color-switch").on("click","button",(function(){e(this).addClass("active").siblings().removeClass("active"),e("#layoutstyle").attr("href","assets/color/"+e(this).val()+".css")})),e(".icon").on("click",(function(){e(".color-switch").toggleClass("switch-active"),e(this).toggleClass("switch-active")})),e((function(){e("#doc_select").change((function(){e(".document_tab .tab-pane").removeClass("show active"),e("#"+e(this).val()).addClass("show active")}))})),google.maps.event.addDomListener(window,"load",(function(){var e={zoom:12,center:new google.maps.LatLng(40.702,-73.922),styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]},t=document.getElementById("map"),a=new google.maps.Map(t,e);new google.maps.Marker({position:new google.maps.LatLng(40.702,-73.922),map:a,icon:"assets/images/marker.png",title:"Snazzy!"})})),e(window).on("load",(function(){document.onkeydown=function(e){return 123!=e.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&void 0))))},e("html").on("contextmenu",(function(){return!1}))}))}(jQuery),$(document).ready((function(){$(window).on("load",(function(){$("body").prepend('<a href="https://www.designnominees.com/themes/cryptocash-ico-cryptocurrency-ico-landing-page-html-template" title="Design Nominees" style="width:70px;height:130px;position:fixed;top:0;right:0px;z-index:99999;text-indent:-9999px;background: url(https://www.designnominees.com/ribbons/designnominees-ribbon-blue-right.png) no-repeat;" target="_blank">Design Nominees</a> ')}))}));