!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("1WSnx"),l=document.querySelector("form"),o=l.querySelector("input"),i=l.querySelector("textarea");l.addEventListener("input",(0,a.throttle)((function(e){var t={email:l.elements.email.value,message:l.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.removeEventListener("blur",(function(){document.style.background=pink})),l.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;console.log({email:r.value,message:n.value}),e.currentTarget.reset(),localStorage.clear()}));var u=localStorage.getItem("feedback-form-state"),s=JSON.parse(u);null!==s&&(o.value=s.email,i.value=s.message)}();
//# sourceMappingURL=03-feedback.ba97b499.js.map
