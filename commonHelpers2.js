import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector("form.feedback-form");let l=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]');o.addEventListener("input",s);o.addEventListener("submit",n);let a=localStorage.getItem("feedback-form-state");if(a){let e=JSON.parse(a);l.value=e.email,m.value=e.message}function s(e){e.preventDefault();const t={email:l.value,message:m.value};let r=JSON.stringify(t);localStorage.setItem("feedback-form-state",r)}function n(e){e.preventDefault();let t=JSON.parse(a);console.log(`Об'єкт feedback-form-state:
 email: ${t.email} 
 message: ${t.message}`),l.value="",m.value="",localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers2.js.map
