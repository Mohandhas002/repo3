!function(e) {
    "use strict";
    e.fn.meanmenu = function(n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".mobile-nav",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        n = e.extend(a, n);
        var t = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var e = n.meanMenuTarget
              , a = n.meanMenuContainer
              , i = n.meanMenuClose
              , s = n.meanMenuCloseSize
              , m = n.meanMenuOpen
              , l = n.meanRevealPosition
              , r = n.meanRevealPositionDistance
              , o = n.meanRevealColour
              , c = n.meanScreenWidth
              , u = n.meanNavPush
              , h = ".meanmenu-reveal"
              , v = n.meanShowChildren
              , d = n.meanExpandableChildren
              , f = n.meanExpand
              , p = n.meanContract
              , g = n.meanRemoveAttrs
              , C = n.onePage
              , x = n.meanDisplay
              , A = n.removeElements
              , E = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (E = !0),
            (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var M = ""
              , P = function() {
                if ("center" === l) {
                    var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                    M = "left:" + e + ";right:auto;",
                    E ? jQuery(".meanmenu-reveal").animate({
                        left: e
                    }) : jQuery(".meanmenu-reveal").css("left", e)
                }
            }
              , $ = !1
              , _ = !1;
            "right" === l && (M = "right:" + r + ";left:auto;"),
            "left" === l && (M = "left:" + r + ";right:auto;"),
            P();
            var W = ""
              , b = function() {
                W.html(jQuery(W).is(".meanmenu-reveal.meanclose") ? i : m)
            }
              , w = function() {
                jQuery(".mean-bar,.mean-push").remove(),
                jQuery(a).removeClass("mean-container"),
                jQuery(e).css("display", x),
                $ = !1,
                _ = !1,
                jQuery(A).removeClass("mean-remove")
            }
              , S = function() {
                var n = "background:" + o + ";color:" + o + ";" + M;
                if (c >= t) {
                    jQuery(A).addClass("mean-remove"),
                    _ = !0,
                    jQuery(a).addClass("mean-container"),
                    jQuery(".mean-container").prepend('<div class="mean-bar"><a aria-label="menuic" href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var i = jQuery(e).html();
                    jQuery(".mean-nav").html(i),
                    g && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"),
                        jQuery(this).removeAttr("id")
                    }),
                    jQuery(e).before('<div class="mean-push" />'),
                    jQuery(".mean-push").css("margin-top", u),
                    jQuery(e).hide(),
                    jQuery(".meanmenu-reveal").show(),
                    jQuery(h).html(m),
                    W = jQuery(h),
                    jQuery(".mean-nav ul").hide(),
                    v ? d ? (jQuery(".mean-nav ul ul").each(function() {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + s + '">' + f + "</a>")
                    }),
                    jQuery(".mean-expand").on("click", function(e) {
                        e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(f),
                        jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(p),
                        jQuery(this).prev("ul").slideDown(300, function() {})),
                        jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(),
                    jQuery(".mean-nav ul li").last().addClass("mean-last"),
                    W.removeClass("meanclose"),
                    jQuery(W).click(function(e) {
                        e.preventDefault(),
                        !1 === $ ? (W.css("text-align", "center"),
                        W.css("text-indent", "0"),
                        W.css("font-size", s),
                        jQuery(".mean-nav ul:first").slideDown(),
                        $ = !0) : (jQuery(".mean-nav ul:first").slideUp(),
                        $ = !1),
                        W.toggleClass("meanclose"),
                        b(),
                        jQuery(A).addClass("mean-remove")
                    }),
                    C && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                        jQuery(".mean-nav ul:first").slideUp(),
                        $ = !1,
                        jQuery(W).toggleClass("meanclose").html(m)
                    })
                } else
                    w()
            };
            E || jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth,
                w(),
                c >= t ? (S(),
                P()) : w()
            }),
            jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth,
                E ? (P(),
                c >= t ? !1 === _ && S() : w()) : (w(),
                c >= t && (S(),
                P()))
            }),
            S()
        })
    }
}(jQuery);
