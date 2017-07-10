/**
* @name      Portfolio - My github portfolio!
* @version   v1.0.0
* @author    Musthafa SM
* @link      http://musthafasm.github.io
* @license   GNU General Public License
*/
jQuery(document).ready(function(a){a(".page-link").bind("click",function(n){var e=a(this);a("html, body").stop().animate({scrollTop:a(e.attr("href")).offset().top-50},1100,"easeInOutExpo"),n.preventDefault()}),a("#navbtn").click(function(){a(".navbar-nav").is(":hidden")?(a(".navbar-nav").slideDown(),a(this).addClass("collapsed")):(a(".navbar-nav").slideUp(),a(this).removeClass("collapsed"))}),a(".page-link").click(function(){a("#navbtn").is(":visible")&&a(".navbar-nav").slideUp()}),a("body").scrollspy({target:".navbar",offset:51}),a(".carousel").carousel({interval:!1})}),jQuery(window).scroll(function(){jQuery(this).scrollTop()>100?jQuery("#topbar").addClass("sticky-nav"):jQuery("#topbar").removeClass("sticky-nav")});