!function() {
    "use strict";
    function e(e, t) {
        let n = (null == t ? void 0 : t.runOnLoad) ? void 0 : document.documentElement.clientWidth
          , o = (null == t ? void 0 : t.runOnLoad) ? void 0 : window.innerHeight;
        const i = ()=>{
            const i = {
                runOnLoad: !1,
                runOnWidthChange: !0,
                runOnHeightChange: !1,
                ...t
            }
              , a = document.documentElement.clientWidth
              , r = window.innerHeight
              , s = o !== r;
            (n !== a && i.runOnWidthChange || s && i.runOnHeightChange) && e(),
            n = a,
            o = r
        }
          , a = function(e, t) {
            let n;
            return (...o)=>{
                clearTimeout(n),
                n = setTimeout((()=>{
                    e(...o)
                }
                ), t)
            }
        }(i, 100);
        window.addEventListener("resize", a),
        (null == t ? void 0 : t.runOnLoad) && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", i) : i())
    }
    var t;
    const n = "undefined" != typeof window ? null === (t = window.navigator) || void 0 === t ? void 0 : t.userAgent : void 0;
    const o = !(!n || (i = n,
    !i.match(/AppleWebKit\//) || i.match(/Chrome\//) || i.match(/Chromium\//)));
    var i;
    !function() {
        const t = document.querySelectorAll("video");
        if (!t.length)
            return;
        (function() {
            if (document.querySelector("template#playPauseButton"))
                return;
            const e = '\n<div class="playPauseButton">\n<svg class="loadingIndicator" style="display: none" viewBox="0 0 50 50"><path d="M 25 1 A 24 24 0 1 1 24.9 1" stroke="white" stroke-opacity="0.5" stroke-width="2" fill="none"></svg>\n<svg class="playSvg" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z" fill="currentColor"/></svg>\n<svg class="pauseSvg" style="display: none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="7" y="5" width="3" height="14" rx="1.5" fill="currentColor"/><rect x="14" y="5" width="3" height="14" rx="1.5" fill="currentColor"/></svg>\n</div>\n'.trim()
              , t = "\n  .playPauseButton {\n    cursor: pointer;\n    position: absolute;\n    top: calc(50% - 24px);\n    left: calc(50% - 24px);\n    width: 48px;\n    height: 48px;\n    border-radius: 100%;\n    background: rgba(17,23,29,.4);\n    transition: opacity 0.2s ease-out;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .loadingIndicator {\n    width: 48px;\n    height: 48px;\n    position: absolute;\n  }\n  .loadingIndicator path {\n    stroke-dasharray: 175;\n    stroke-dashoffset: 350;\n    animation: dash 5s linear forwards;\n    animation-iteration-count: infinite;\n  }\n  @keyframes dash {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n".trim()
              , n = document.createElement("template");
            n.id = "playPauseButton",
            n.innerHTML = e,
            document.body.appendChild(n);
            const o = document.createElement("style");
            o.innerHTML = t,
            document.body.appendChild(o)
        }
        )(),
        function() {
            if (document.querySelector("template#seekBar"))
                return;
            const e = '\n<div class="videoSeek">\n  <div class="videoSeekBarContainer">\n    <div class="videoSeekBar">\n      <div class="videoSeekBarCurrent"></div>\n    </div>\n    <input class="videoSeekInput" type="range" min="0" max="100" step="any" value="0" disabled="disabled">\n  </div>\n  <div class="soundButton">\n    <svg class="soundOnSvg" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.102L8.778 8.35a2.5 2.5 0 0 1-1.643.616H4.5v6.065h2.632a2.5 2.5 0 0 1 1.644.617l3.724 3.25V5.102zM14 19.998c0 .858-1.01 1.318-1.658.753L7.79 16.778a1 1 0 0 0-.658-.247H4a1 1 0 0 1-1-1V8.466a1 1 0 0 1 1-1h3.135a1 1 0 0 0 .657-.246l4.55-3.971C12.99 2.684 14 3.143 14 4.002v15.996zM15.25 7a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 0 11.5.75.75 0 0 1 0-1.5 4.25 4.25 0 0 0 0-8.5.75.75 0 0 1-.75-.75zM16 9.25a.75.75 0 0 0 0 1.5 1.25 1.25 0 1 1 0 2.5.75.75 0 0 0 0 1.5 2.75 2.75 0 1 0 0-5.5z" fill="currentColor"/></svg>\n    <svg class="soundMutedSvg" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5.08l-3.742 3.171a2.5 2.5 0 01-.243.182L15.5 12.4V5.08zm1.5 8.814V4.002a1 1 0 00-1.646-.763l-4.566 3.868a1 1 0 01-.398.206L6.53 3.468a.75.75 0 10-1.06 1.063l14 13.94a.75.75 0 101.06-1.063L17 13.894zM6.293 7.637l1.208 1.207H7.5v5.8h2.642a2.5 2.5 0 011.616.593l3.742 3.17v-1.564l1.5 1.5v1.143a1 1 0 01-1.646.763l-4.566-3.868a1 1 0 00-.646-.237H7a1 1 0 01-1-1v-6.8c0-.276.112-.526.293-.707z" fill="currentColor"/></svg>\n  </div>\n</div>\n'.trim()
              , t = "\n  .videoSeek {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 0;\n    box-sizing: border-box;\n    background: linear-gradient(0, rgba(17,23,29,.4) 0%, transparent 100%);\n    color: white;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .soundButton {\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-right: 24px;\n    cursor: pointer;\n  }\n\n  .soundOnSvg,\n  .soundMutedSvg {\n    color: white;\n  }\n\n  .soundMutedSvg {\n    display: none;\n  }\n\n  .videoSeekBarContainer {\n    position: relative;\n    flex-grow: 1;\n  }\n\n  .videoSeekBar {\n    position: absolute;\n    top: calc(50% - 2px);\n    left: 22px;\n    right: 22px;\n    height: 4px;\n    background: rgba(255, 255, 255, 0.4);\n    border-radius: 4px;\n  }\n\n  .videoSeekBarCurrent {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background: white;\n    border-radius: 4px;\n  }\n\n  .videoSeekInput {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    padding: 16px 8px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: none;\n    direction: ltr;\n  }\n\n  .videoSeekInput:hover {\n    cursor: pointer;\n  }\n\n  .videoSeekInput:active {\n    cursor: grabbing;\n  }\n\n  /* chrome, safari */\n  .videoSeekInput::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border: 14px solid transparent;\n    border-radius: 100%;\n    background-clip: content-box;\n    background-color: white;\n    filter: drop-shadow(0 0 1px black);\n    opacity: 1;\n  }\n\n  .videoSeekInput:active::-webkit-slider-thumb {\n    transform: scale(1.25);\n  }\n\n  /* firefox */\n  .videoSeekInput::-moz-focus-outer {\n    border: none;\n  }\n\n  .videoSeekInput::-moz-range-thumb {\n    -moz-appearance: none;\n    appearance: none;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border: 14px solid transparent;\n    border-radius: 100%;\n    background-clip: content-box;\n    background-color: white;\n    filter: drop-shadow(0 0 1px black);\n    opacity: 1;\n  }\n\n  .videoSeekInput:active::-moz-range-thumb {\n    transform: scale(1.25);\n  }\n".trim()
              , n = document.createElement("template");
            n.id = "seekBar",
            n.innerHTML = e,
            document.body.appendChild(n);
            const o = document.createElement("style");
            o.innerHTML = t,
            document.body.appendChild(o)
        }();
        const n = []
          , i = new IntersectionObserver((e=>{
            e.forEach((e=>{
                if (!e.isIntersecting)
                    return;
                const t = e.target;
                i.unobserve(t),
                t.play()
            }
            ))
        }
        ));
        t.forEach((e=>{
            var t, a;
            if (function(e) {
                var t;
                if (e.getAttribute("src"))
                    return;
                const n = e.getAttribute("data-srcset");
                if (!n)
                    return;
                const o = n.split(", ").map((e=>e.split(" "))).map((([e,t])=>({
                    url: e,
                    width: t
                })))
                  , i = (e.getAttribute("data-sizes") || "").split(", ").map((e=>{
                    const t = e.lastIndexOf(" ");
                    return {
                        media: e.substring(0, t),
                        width: e.substring(t, e.length)
                    }
                }
                ));
                let a;
                for (const e of i)
                    if (window.matchMedia(e.media).matches) {
                        a = parseFloat(e.width.replace("vw", "")) / 100 * document.documentElement.clientWidth * window.devicePixelRatio;
                        break
                    }
                if (a)
                    for (const t of o) {
                        if (parseFloat(t.width.replace("w", "")) >= a)
                            return void e.setAttribute("src", t.url)
                    }
                e.setAttribute("src", null === (t = o[o.length - 1]) || void 0 === t ? void 0 : t.url)
            }(e),
            !e.controls && !e.dataset.trimStartUs && !e.dataset.trimEndUs)
                return;
            const r = {}
              , {maybeResetVideoProgress: s, videoStart: d} = function(e, t) {
                const n = e.dataset.trimStartUs
                  , i = e.dataset.trimEndUs
                  , a = null != n ? parseFloat(n) / 1e6 : 0;
                let r = null != i ? parseFloat(i) / 1e6 : void 0;
                e.currentTime = a,
                e.loop && a > 0 && (e.dataset.loop = "true",
                e.loop = !1);
                e.addEventListener("timeupdate", (()=>{
                    const t = e.currentTime;
                    let n;
                    null != r && t >= r - (o ? .25 : 0) ? e.loop || e.dataset.loop ? (n = a,
                    e.play()) : e.pause() : t < a && (n = a),
                    null != n && t !== n && (e.currentTime = n)
                }
                ));
                const s = ()=>{
                    var n;
                    isNaN(e.duration) || (null == r && (r = e.duration),
                    null === (n = t.updateDuration) || void 0 === n || n.call(t, a, r))
                }
                ;
                e.addEventListener("durationchange", s),
                e.addEventListener("loadedmetadata", s),
                s();
                return {
                    maybeResetVideoProgress: ()=>{
                        null != r && e.currentTime >= r && (e.currentTime = a)
                    }
                    ,
                    videoStart: a
                }
            }(e, r);
            if (e.autoplay ? (e.autoplay = !1,
            e.paused || e.pause(),
            i.observe(e)) : function(e, t) {
                if (e.getAttribute("poster"))
                    return;
                e.preload = "metadata";
                const n = t > 0 ? t : .01;
                e.src = `${e.src}#t=${n}`,
                o && t > 0 && (e.style.opacity = "0",
                e.addEventListener("seeked", (()=>{
                    e.style.opacity = "1"
                }
                ), {
                    once: !0
                }))
            }(e, d),
            !e.controls)
                return;
            const l = null !== (t = e.closest(".video_container")) && void 0 !== t ? t : (null !== (a = e.closest("svg")) && void 0 !== a ? a : e).closest("div")
              , {onResizeCallback: c} = function(e, t, n, o, i) {
                "relative" !== e.style.position && "absolute" !== e.style.position && (e.style.position = "relative");
                const a = document.createElement("div");
                e.appendChild(a),
                a.style.position = "absolute",
                a.style.top = t.getAttribute("data-controls-top") || "0%",
                a.style.left = t.getAttribute("data-controls-left") || "0%",
                a.style.width = t.getAttribute("data-controls-width") || "100%",
                a.style.height = t.getAttribute("data-controls-height") || "100%",
                t.controls = !1;
                const {seekBar: r, updateDuration: s} = function(e) {
                    const t = document.querySelector("template#seekBar");
                    if (null == t)
                        throw new Error("template does not exist");
                    const n = t.content.firstChild.cloneNode(!0);
                    n.addEventListener("click", (t=>{
                        t.stopPropagation(),
                        "none" === e.preload && (e.preload = "metadata")
                    }
                    ));
                    const o = n.querySelector("input");
                    let i = 0
                      , a = 100;
                    const r = (e,t)=>{
                        i = e,
                        a = t,
                        o.min = e.toString(),
                        o.max = t.toString()
                    }
                    ;
                    r(i, a),
                    o.addEventListener("input", (t=>{
                        const n = parseFloat(t.target.value);
                        e.currentTime = n
                    }
                    )),
                    e.addEventListener("loadedmetadata", (()=>{
                        o.removeAttribute("disabled")
                    }
                    ), {
                        once: !0
                    });
                    const s = n.querySelector(".videoSeekBarCurrent");
                    return e.addEventListener("timeupdate", (()=>{
                        o.value = e.currentTime.toString();
                        const t = a - i
                          , n = Math.min((e.currentTime - i) / t * 100, 100);
                        s.style.width = `${n}%`
                    }
                    )),
                    {
                        seekBar: n,
                        updateDuration: r
                    }
                }(t);
                i.updateDuration = s,
                a.appendChild(r),
                function(e, t) {
                    const n = t.querySelector(".soundButton")
                      , o = n.querySelector(".soundOnSvg")
                      , i = n.querySelector(".soundMutedSvg")
                      , a = Number.parseFloat(e.getAttribute("data-volume") || "1");
                    function r() {
                        const t = e.muted || 0 === e.volume;
                        o.style.display = t ? "none" : "block",
                        i.style.display = t ? "block" : "none"
                    }
                    e.addEventListener("volumechange", r),
                    r(),
                    n.addEventListener("click", (()=>{
                        e.muted ? (e.muted = !1,
                        e.volume = a) : e.volume = e.volume > 0 ? 0 : a
                    }
                    ))
                }(t, r);
                const {playButton: d, playPause: l} = function(e, t) {
                    let n = !1;
                    const o = document.querySelector("template#playPauseButton");
                    if (null == o)
                        throw new Error("template does not exist");
                    const i = o.content.firstChild.cloneNode(!0)
                      , a = async o=>{
                        if (n)
                            return;
                        n = !0,
                        o.stopPropagation();
                        const a = i.parentElement.querySelector(".loadingIndicator");
                        try {
                            e.paused ? (t(),
                            e.muted && (e.muted = !1),
                            a.style.display = "block",
                            await e.play()) : e.pause()
                        } finally {
                            n = !1,
                            a.style.display = "none"
                        }
                    }
                    ;
                    return i.addEventListener("click", a),
                    {
                        playButton: i,
                        playPause: a
                    }
                }(t, n);
                a.appendChild(d);
                const c = d.querySelector(".pauseSvg")
                  , u = d.querySelector(".playSvg")
                  , p = ()=>{
                    d.style.opacity = "0",
                    c.style.display = "block",
                    u.style.display = "none"
                }
                  , v = ()=>{
                    d.style.opacity = "1",
                    c.style.display = "none",
                    u.style.display = "block"
                }
                ;
                t.addEventListener("play", p),
                t.addEventListener("pause", v),
                t.paused ? v() : p();
                const h = ()=>{
                    t.paused || (d.style.opacity = "1"),
                    r.style.opacity = "1"
                }
                  , m = ()=>{
                    t.paused || (d.style.opacity = "0"),
                    r.style.opacity = "0"
                }
                ;
                a.addEventListener("mouseenter", h),
                a.addEventListener("mouseover", h),
                a.addEventListener("mousemove", h),
                a.addEventListener("mouseleave", m),
                a.addEventListener("mouseout", m),
                a.addEventListener("click", l);
                return {
                    onResizeCallback: ()=>{
                        const e = a.clientWidth > 50 && a.clientHeight > 50
                          , t = a.clientWidth > 125 && a.clientHeight > 100;
                        d.style.visibility = e ? "visible" : "hidden",
                        r.style.visibility = t ? "visible" : "hidden"
                    }
                    ,
                    videoStart: o
                }
            }(l, e, s, d, r);
            n.push(c)
        }
        )),
        e((()=>n.forEach((e=>e()))), {
            runOnLoad: !0
        })
    }()
}();
