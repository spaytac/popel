!function(e,a){e.ak=e.ak||{};var t=e.ak;a(document).ready(function(){t.privacy()});t.privacy=function(){var t,e=(t=[],a("ul.links>li>a").each(function(){var e=a(this);e.text().startsWith("###")&&(e.text(e.text().replace("###","")),t.push('<li class="dropdown">'+e.parent().html()+"</li>"),e.parent().hide())}),'<ul id="navigation">'+t.join("")+"</ul>");a("#sidebar .inner").append(e)}}(window,window.jQuery)(function(o){var e,n=o(window),t=o("head"),a=o("body");breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"],"xlarge-to-max":"(min-width: 1681px)","small-to-xlarge":"(min-width: 481px) and (max-width: 1680px)"}),n.on("load",function(){window.setTimeout(function(){a.removeClass("is-preload")},100)}),n.on("resize",function(){a.addClass("is-resizing"),clearTimeout(e),e=setTimeout(function(){a.removeClass("is-resizing")},100)}),browser.canUse("object-fit")&&"safari"!=browser.name||o(".image.object").each(function(){var e=o(this),t=e.children("img");t.css("opacity","0"),e.css("background-image",'url("'+t.attr("src")+'")').css("background-size",t.css("object-fit")?t.css("object-fit"):"cover").css("background-position",t.css("object-position")?t.css("object-position"):"center")});var l=o("#sidebar"),r=l.children(".inner");breakpoints.on("<=large",function(){l.addClass("inactive")}),"android"==browser.os&&"chrome"==browser.name&&o("<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>").appendTo(t),o('<a href="#sidebar" class="toggle">Toggle</a>').appendTo(l).on("click",function(e){e.preventDefault(),e.stopPropagation(),l.toggleClass("inactive")}),l.on("click","a",function(e){var t,a,i;breakpoints.active(">large")||(t=o(this),a=t.attr("href"),i=t.attr("target"),e.preventDefault(),e.stopPropagation(),a&&"#"!=a&&""!=a&&(l.addClass("inactive"),setTimeout(function(){"_blank"==i?window.open(a):window.location.href=a},500)))}),l.on("click touchend touchstart touchmove",function(e){breakpoints.active(">large")||e.stopPropagation()}),a.on("click touchend",function(e){breakpoints.active(">large")||l.addClass("inactive")}),n.on("load.sidebar-lock",function(){var a,i;1==n.scrollTop()&&n.scrollTop(0),n.on("scroll.sidebar-lock",function(){var e,t;breakpoints.active("<=large")?r.data("locked",0).css("position","").css("top",""):(e=Math.max(a-i,0),t=Math.max(0,n.scrollTop()-e),1==r.data("locked")?t<=0?r.data("locked",0).css("position","").css("top",""):r.css("top",-1*e):0<t&&r.data("locked",1).css("position","fixed").css("top",-1*e))}).on("resize.sidebar-lock",function(){i=n.height(),a=r.outerHeight()+30,n.trigger("scroll.sidebar-lock")}).trigger("resize.sidebar-lock")});var i=o("#menu").children("ul").find(".opener");i.each(function(){var t=o(this);t.on("click",function(e){e.preventDefault(),i.not(t).removeClass("active"),t.toggleClass("active"),n.triggerHandler("resize.sidebar-lock")})})})(jQuery),function(n){n.fn.navList=function(){var e=n(this);return $a=e.find("a"),b=[],$a.each(function(){var e=n(this),t=Math.max(0,e.parents("li").length-1),a=e.attr("href"),i=e.attr("target");b.push('<a class="link depth-'+t+'"'+(void 0!==i&&""!=i?' target="'+i+'"':"")+(void 0!==a&&""!=a?' href="'+a+'"':"")+'><span class="indent-'+t+'"></span>'+e.text()+"</a>")}),b.join("")},n.fn.panel=function(e){if(0==this.length)return l;if(1<this.length){for(var t=0;t<this.length;t++)n(this[t]).panel(e);return l}var l=n(this),a=n("body"),i=n(window),o=l.attr("id"),r=n.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:l,visibleClass:"visible"},e);return"jQuery"!=typeof r.target&&(r.target=n(r.target)),l._hide=function(e){r.target.hasClass(r.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),r.target.removeClass(r.visibleClass),window.setTimeout(function(){r.resetScroll&&l.scrollTop(0),r.resetForms&&l.find("form").each(function(){this.reset()})},r.delay))},l.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),r.hideOnClick&&(l.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),l.on("click","a",function(e){var t=n(this),a=t.attr("href"),i=t.attr("target");a&&"#"!=a&&""!=a&&a!="#"+o&&(e.preventDefault(),e.stopPropagation(),l._hide(),window.setTimeout(function(){"_blank"==i?window.open(a):window.location.href=a},r.delay+10))})),l.on("touchstart",function(e){l.touchPosX=e.originalEvent.touches[0].pageX,l.touchPosY=e.originalEvent.touches[0].pageY}),l.on("touchmove",function(e){if(null!==l.touchPosX&&null!==l.touchPosY){var t=l.touchPosX-e.originalEvent.touches[0].pageX,a=l.touchPosY-e.originalEvent.touches[0].pageY,i=l.outerHeight(),o=l.get(0).scrollHeight-l.scrollTop();if(r.hideOnSwipe){var n=!1;switch(r.side){case"left":n=a<20&&-20<a&&50<t;break;case"right":n=a<20&&-20<a&&t<-50;break;case"top":n=t<20&&-20<t&&50<a;break;case"bottom":n=t<20&&-20<t&&a<-50}if(n)return l.touchPosX=null,l.touchPosY=null,l._hide(),!1}(l.scrollTop()<0&&a<0||i-2<o&&o<i+2&&0<a)&&(e.preventDefault(),e.stopPropagation())}}),l.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),l.on("click",'a[href="#'+o+'"]',function(e){e.preventDefault(),e.stopPropagation(),r.target.removeClass(r.visibleClass)}),a.on("click touchend",function(e){l._hide(e)}),a.on("click",'a[href="#'+o+'"]',function(e){e.preventDefault(),e.stopPropagation(),r.target.toggleClass(r.visibleClass)}),r.hideOnEscape&&i.on("keydown",function(e){27==e.keyCode&&l._hide(e)}),l},n.fn.placeholder=function(){if(void 0!==document.createElement("input").placeholder)return n(this);if(0==this.length)return t;if(1<this.length){for(var e=0;e<this.length;e++)n(this[e]).placeholder();return t}var t=n(this);return t.find("input[type=text],textarea").each(function(){var e=n(this);""!=e.val()&&e.val()!=e.attr("placeholder")||e.addClass("polyfill-placeholder").val(e.attr("placeholder"))}).on("blur",function(){var e=n(this);e.attr("name").match(/-polyfill-field$/)||""==e.val()&&e.addClass("polyfill-placeholder").val(e.attr("placeholder"))}).on("focus",function(){var e=n(this);e.attr("name").match(/-polyfill-field$/)||e.val()==e.attr("placeholder")&&e.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var t=n(this),a=n(n("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=t.attr("id")&&a.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&a.attr("name",t.attr("name")+"-polyfill-field"),a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(t),(""==t.val()?t:a).hide(),t.on("blur",function(e){e.preventDefault();e=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");""==t.val()&&(t.hide(),e.show())}),a.on("focus",function(e){e.preventDefault();e=a.parent().find("input[name="+a.attr("name").replace("-polyfill-field","")+"]");a.hide(),e.show().focus()}).on("keypress",function(e){e.preventDefault(),a.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(e){var t=n(this);t.attr("name").match(/-polyfill-field$/)&&t.attr("name",""),t.val()==t.attr("placeholder")&&(t.removeClass("polyfill-placeholder"),t.val(""))})}).on("reset",function(e){e.preventDefault(),t.find("select").val(n("option:first").val()),t.find("input,textarea").each(function(){var e,t=n(this);switch(t.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue")),e=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]"),""==t.val()?(t.hide(),e.show()):(t.show(),e.hide());break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue")),""==t.val()&&(t.addClass("polyfill-placeholder"),t.val(t.attr("placeholder")));break;default:t.val(t.attr("defaultValue"))}})}),t},n.prioritize=function(e,i){var o="__prioritize";(e="jQuery"!=typeof e?n(e):e).each(function(){var e,t=n(this),a=t.parent();0!=a.length&&(t.data(o)?i||(e=t.data(o),t.insertAfter(e),t.removeData(o)):i&&0!=(e=t.prev()).length&&(t.prependTo(a),t.data(o,e)))})}}(jQuery);
//# sourceMappingURL=popel.js.map