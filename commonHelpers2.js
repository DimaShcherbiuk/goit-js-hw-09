import"./assets/styles-6d8181f3.js";const o=document.querySelector("form.feedback-form");let l=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]');o.addEventListener("input",s);o.addEventListener("submit",n);let t=localStorage.getItem("feedback-form-state");if(t){let e=JSON.parse(t);l.value=e.email,m.value=e.message}function s(e){e.preventDefault();const a={email:l.value,message:m.value};let r=JSON.stringify(a);localStorage.setItem("feedback-form-state",r)}function n(e){e.preventDefault();let a=JSON.parse(t);console.log(`Об'єкт feedback-form-state:
 email: ${a.email} 
 message: ${a.message}`),l.value="",m.value="",localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers2.js.map
