/**
 * Created by yd on 2016/12/19.
 */
!function(e, t) {
    function i() {
        o = 1, e.devicePixelRatioValue = o, s = 1 / o;
        var t = a.createElement("meta");
        if (t.setAttribute("name", "viewport"), t.setAttribute("content", "initial-scale=" + s + ", maximum-scale=" + s + ", minimum-scale=" + s + ", user-scalable=no"), d.firstElementChild) d.firstElementChild.appendChild(t);
        else {
            var i = a.createElement("div");
            i.appendChild(t), a.write(i.innerHTML)
        }
    }
    function n() {
        var e = Math.min(d.getBoundingClientRect().width, t.maxWidth);
        r = t.rem * e / t.desinWidth, d.style.fontSize = (parseInt(r*10))/10 + "px"
    }
    var a = e.document,
        d = a.documentElement,
        o = (e.devicePixelRatio, 1),
        s = 1;
    i();
    var l, r = 100;
    t.rem=50,t.desinWidth = 750, t.baseFont = 14,t.maxWidth= 2048, t.init = function() {
        e.addEventListener("resize", function() {
            clearTimeout(l), l = setTimeout(n, 300)
        }, !1), e.addEventListener("pageshow", function(e) {
            e.persisted && (clearTimeout(l), l = setTimeout(n, 300))
        }, !1), "complete" === a.readyState ? a.body.style.fontSize = t.baseFont * o + "px" : a.addEventListener("DOMContentLoaded", function() {
            a.body.style.fontSize = t.baseFont * o + "px"
        }, !1), n(), d.setAttribute("data-dpr", o)
    }
}(window, window.addrem || (window.addrem = {}));
window['addrem'].init();