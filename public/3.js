(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{12:function(t,e,o){var r=o(30);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(5)(r,a);r.locals&&(t.exports=r.locals)},23:function(t,e,o){"use strict";o(9)},24:function(t,e,o){(t.exports=o(3)(!1)).push([t.i,".card {\n  padding: 10px;\n  background-color: #FFF;\n}",""])},29:function(t,e,o){"use strict";o(12)},30:function(t,e,o){(t.exports=o(3)(!1)).push([t.i,".login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.login .card {\n  margin-top: 4rem;\n  padding: 60px;\n}\n.link {\n  color: #171717ac;\n  margin-top: 10px;\n}",""])},65:function(t,e,o){"use strict";o.r(e);var r=o(8),a=o(2),s={components:{Card:r.default},data:function(){return{form:{fullname:"",email:"",password:"",password_confirmation:"",ref_code:""},isSubmitting:!1}},name:"login-page",methods:{registerAccount:function(){var t=this,e=this.form,o=e.email,r=e.fullname,s=e.password,n=e.password_confirmation;o&&r&&s&&n&&(this.isSubmitting=!0,this.$store.dispatch("registerUser",this.form).then((function(e){e.data?(a.Notify.Success("Registration Successful"),t.$router.push({name:"dashboard-page"})):a.Notify.Failure("Registration failed: Account may already exist")})).catch((function(t){throw t})).finally((function(){t.isSubmitting=!1})))}}},n=(o(29),o(0)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("Card",{attrs:{customClass:"black-border pa",height:"450px",width:"400px"}},[[o("h2",[t._v("Join Us")]),t._v(" "),o("small",{staticStyle:{color:"#CCC"}},[t._v("Fill the form below to join")]),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.registerAccount(e)}}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.fullname,expression:"form.fullname"}],staticClass:"form-control",attrs:{placeholder:"Enter your fullname",required:"",type:"text",name:"fullname",autocomplete:""},domProps:{value:t.form.fullname},on:{input:function(e){e.target.composing||t.$set(t.form,"fullname",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{placeholder:"Enter your email address",required:"",type:"email",name:"email",autocomplete:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{placeholder:"Enter your password",required:"",type:"password",name:"passowrd",autocomplete:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{placeholder:"Confirm your password",required:"",type:"password",name:"passowrd",autocomplete:""},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.ref_code,expression:"form.ref_code"}],staticClass:"form-control",attrs:{placeholder:"Referral Code (optional)",type:"text",name:"ref_code"},domProps:{value:t.form.ref_code},on:{input:function(e){e.target.composing||t.$set(t.form,"ref_code",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group action"},[o("button",{staticClass:"btn btn--black",attrs:{disabled:t.isSubmitting,type:"submit"}},[t._v("Continue")]),t._v(" "),o("router-link",{staticClass:"link",attrs:{to:{name:"login-page"}}},[o("small",[t._v("Already have an account?")])])],1)])]],2)],1)}),[],!1,null,null,null);e.default=i.exports},8:function(t,e,o){"use strict";o.r(e);var r={name:"card",props:{height:{type:String,default:"100px"},width:{type:String,default:"300px"},customClass:{type:String,required:!1}}},a=(o(23),o(0)),s=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:"card shadow-1 "+this.customClass,style:"height: "+this.height+"; width: "+this.width},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},9:function(t,e,o){var r=o(24);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(5)(r,a);r.locals&&(t.exports=r.locals)}}]);