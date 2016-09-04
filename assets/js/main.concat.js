"use strict";var breakpoint={above_desktop:window.matchMedia("(min-width: 1025px)"),below_desktop:window.matchMedia("(max-width: 1024px)"),above_small:window.matchMedia("(min-width: 851px)"),below_small:window.matchMedia("(max-width: 850px)"),above_tablet:window.matchMedia("(min-width: 768px)"),below_tablet:window.matchMedia("(max-width: 767px)"),below_mobile:window.matchMedia("(max-width: 550px)")},checkForm=function(){var e=$("#company_query").val();if(""===e)throw showTooltipAndScroll($("#company_query"),"需填寫公司/單位"),new Error("需填寫公司/單位")},showTooltipAndScroll=function(e,o){var t=e.closest(".form-group");t.hasClass("has-error")||(t.addClass("has-error"),t.append('<div class="form-error-message">'+o+"</div>")),$("html, body").animate({scrollTop:e.offset().top-100},600)},showTooltip=function(e,o){var t=e.closest(".form-group");t.hasClass("has-error")||(t.addClass("has-error"),t.append('<div class="form-error-message">'+o+"</div>"))},removeTooltip=function(e){var o=e.closest(".form-group");o.removeClass("has-error"),o.find(".form-error-message").remove()},$form_input=$("#work-form :input.is-required");$form_input.on("blur",function(){$(this).val()?removeTooltip($(this)):$(this).hasClass("ui-autocomplete-input")?showTooltip($(this),"本欄必填 (可自動完成)"):showTooltip($(this),"本欄必填")});var has_fee_option=document.getElementById("has-fee-option"),clearHasFee=function(){has_fee_option.classList.remove("is-active");for(var e=has_fee_option.childNodes,o=0;o<e.length;o++)for(var t=0;t<e[o].childNodes.length;t++)"INPUT"===e[o].childNodes[t].nodeName&&(e[o].childNodes[t].checked=!1)};$('#select-fee :input[type="radio"]').on("change",function(){document.getElementById("fee_yes").checked?has_fee_option.classList.add("is-active"):clearHasFee()});for(var clear_radio_btn=document.querySelectorAll(".btn-radio-clear"),i=0;i<clear_radio_btn.length;i++)clear_radio_btn[i].addEventListener("click",function(){for(var e=this.parentNode.parentNode.childNodes,o=0;o<e.length;o++)for(var t=0;t<e[o].childNodes.length;t++)"INPUT"===e[o].childNodes[t].nodeName&&(e[o].childNodes[t].checked=!1);"select-fee"===this.parentNode.parentNode.id&&clearHasFee()});var header=document.getElementById("header");breakpoint.above_small.matches&&window.addEventListener("scroll",function(){document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop>100?header.classList.add("is-fixed"):(document.documentElement&&document.documentElement.scrollTop||0==document.body.scrollTop)&&header.classList.remove("is-fixed")});var header_button=document.getElementById("header-button"),header_nav=document.getElementById("header-nav");header_button.addEventListener("click",function(){this.classList.toggle("is-open"),header_nav.classList.toggle("is-open"),document.querySelector(".btn-scroll-down")&&document.querySelector(".btn-scroll-down").classList.toggle("hide")});for(var nav_scroll=document.querySelectorAll(".js-scrollpage"),i=0;i<nav_scroll.length;i++)nav_scroll[i].addEventListener("click",function(){header_button.classList.remove("is-open"),header_nav.classList.remove("is-open")});var scroll_to_form=document.querySelectorAll(".js-scrollToForm"),scroll_to_faq=document.querySelectorAll(".js-scrollToFaq"),section_form=document.getElementById("section-form"),section_faq=document.getElementById("section-faq");section_form&&!function(){for(var e=section_form.offsetTop-58,o=0;o<scroll_to_form.length;o++)scroll_to_form[o].addEventListener("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:e},600)})}(),section_faq&&!function(){for(var e=section_faq.offsetTop-58,o=0;o<scroll_to_faq.length;o++)scroll_to_faq[o].addEventListener("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:e},600)})}();