_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"3Hq7":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),u=n.n(a),c=o.a.createElement,i={marginRight:15},f=function(){return c("div",null,c(u.a,{href:"/"},c("a",{style:i},"Home")),c(u.a,{href:"/about"},c("a",{style:i},"About")))},s=o.a.createElement,l={margin:20,padding:20,border:"1px solid #DDD"};t.a=function(e){return s("div",{style:l},s(f,null),e.children)}},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("3Hq7"),u=o.a.createElement;t.default=function(){return u(a.a,null,u("p",null,"This is the about page"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,u=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),f=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=u.default.useState(),o=r(n,2),a=o[0],f=o[1],h=(0,i.useRouter)(),v=h&&h.pathname||"/",y=u.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),w=y.href,g=y.as;u.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,c.isLocalURL)(w)&&!l[w+"%"+g])return p(a,(function(){d(h,w,g)}))}),[t,a,w,g,h]);var E=e.children,_=e.replace,b=e.shallow,m=e.scroll;"string"===typeof E&&(E=u.default.createElement("a",null,E));var L=u.Children.only(E),T={ref:function(e){e&&f(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,g,_,b,m)}};return t&&(T.onMouseEnter=function(e){(0,c.isLocalURL)(w)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(h,w,g,{priority:!0}))}),(e.passHref||"a"===L.type&&!("href"in L.props))&&(T.href=(0,c.addBasePath)(g)),u.default.cloneElement(L,T)};t.default=h},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);