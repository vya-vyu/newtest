const e=document.querySelector(".feedback-form");document.querySelector('[name="message"]');e.addEventListener("submit",(function(e){e.preventDefault(),console.log(t),e.target.reset(),localStorage.clear()})),e.addEventListener("input",(function(e){"email"===e.target.name&&(t.email=e.target.value);"message"===e.target.name&&(t.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(t))}));const t={email:"",message:""};localStorage.getItem("feedback-form-state")?(e.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,e.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message,console.log("fill")):(e.elements.email.value="",e.elements.message.value="",console.log("empty"));
//# sourceMappingURL=03-feedback.43d71e36.js.map
