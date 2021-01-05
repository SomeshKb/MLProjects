function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0k1G":function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectModule",(function(){return q}));var r,i=n("ofXK"),o=n("tyNb"),a=n("3Pt+"),c=n("fXoL"),l=n("tk/3"),s=((r=function(){function e(t){_classCallCheck(this,e),this.httpClient=t}return _createClass(e,[{key:"postFile",value:function(e){var t=new FormData;return t.append("file",e),this.httpClient.post("https://dog-breed-classifeir-flask.herokuapp.com/",t)}},{key:"pingModel",value:function(e){var t=new l.d({"X-Skip-Interceptor":"skip"});return this.httpClient.get(e,{headers:t})}},{key:"postData",value:function(e,t){return this.httpClient.post(e,t)}}]),e}()).\u0275fac=function(e){return new(e||r)(c.Yb(l.b))},r.\u0275prov=c.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),u=n("Wp6s"),b=n("kmnG"),p=n("qFsG"),f=n("d3UM"),m=n("bTqV"),d=n("FKr1");function h(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}function g(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}function C(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}function v(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}function y(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}function k(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}function w(e,t){if(1&e&&(c.Ub(0,"mat-option",11),c.zc(1),c.Tb()),2&e){var n=t.$implicit;c.lc("value",n.value),c.Cb(1),c.Bc(" ",n.label," ")}}function U(e,t){1&e&&(c.Ub(0,"mat-error"),c.zc(1,"Required"),c.Tb())}var T,F=((T=function(){function e(t,n){_classCallCheck(this,e),this.formBuilder=t,this.httpService=n,this.inputForm=null,this.originCountry=[{value:1,label:"India"},{value:2,label:"USA"},{value:3,label:"Germany"}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.checkModelHealth(),this.createForm()}},{key:"createForm",value:function(){this.inputForm=this.formBuilder.group({Cylinders:["",[a.n.required]],Displacement:["",[a.n.required]],Horsepower:["",[a.n.required]],Weight:["",[a.n.required]],Acceleration:["",[a.n.required]],Model_Year:["",[a.n.required]],Origin:["",[a.n.required]]})}},{key:"checkModelHealth",value:function(){this.httpService.pingModel("https://blooming-stream-22306.herokuapp.com/health").subscribe((function(e){}))}},{key:"submit",value:function(){if(this.inputForm.valid){var e=this.inputForm.value;e.Cylinders=[this.inputForm.value.Cylinders],e.Displacement=[this.inputForm.value.Displacement],e.Horsepower=[this.inputForm.value.Horsepower],e.Weight=[this.inputForm.value.Weight],e.Acceleration=[this.inputForm.value.Acceleration],e["Model Year"]=[this.inputForm.value.Model_Year],e.Origin=[this.inputForm.value.Origin],console.log(e),this.httpService.postData("https://blooming-stream-22306.herokuapp.com/predict",[e]).subscribe((function(e){console.log()}))}}}]),e}()).\u0275fac=function(e){return new(e||T)(c.Ob(a.c),c.Ob(s))},T.\u0275cmp=c.Ib({type:T,selectors:[["app-car-mileage"]],decls:45,vars:15,consts:[[1,"container"],[1,"heading"],[1,"card-container"],[1,"card"],["appearance","fill"],["matInput","","required","","autocomplete","off",3,"formControl"],[4,"ngIf"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"button-wrapper"],["mat-flat-button","","color","primary",3,"click"],[3,"value"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"h2",1),c.zc(2,"Car Mileage"),c.Tb(),c.Ub(3,"div",2),c.Ub(4,"mat-card"),c.Ub(5,"div",3),c.Ub(6,"mat-form-field",4),c.Ub(7,"mat-label"),c.zc(8,"Enter Cylinders "),c.Tb(),c.Pb(9,"input",5),c.yc(10,h,2,0,"mat-error",6),c.Tb(),c.Ub(11,"mat-form-field",4),c.Ub(12,"mat-label"),c.zc(13,"Enter Displacement "),c.Tb(),c.Pb(14,"input",5),c.yc(15,g,2,0,"mat-error",6),c.Tb(),c.Ub(16,"mat-form-field",4),c.Ub(17,"mat-label"),c.zc(18,"Enter Horsepower "),c.Tb(),c.Pb(19,"input",5),c.yc(20,C,2,0,"mat-error",6),c.Tb(),c.Ub(21,"mat-form-field",4),c.Ub(22,"mat-label"),c.zc(23,"Enter Weight "),c.Tb(),c.Pb(24,"input",5),c.yc(25,v,2,0,"mat-error",6),c.Tb(),c.Ub(26,"mat-form-field",4),c.Ub(27,"mat-label"),c.zc(28,"Enter Acceleration "),c.Tb(),c.Pb(29,"input",5),c.yc(30,y,2,0,"mat-error",6),c.Tb(),c.Ub(31,"mat-form-field",4),c.Ub(32,"mat-label"),c.zc(33,"Enter Model Year "),c.Tb(),c.Pb(34,"input",5),c.yc(35,k,2,0,"mat-error",6),c.Tb(),c.Ub(36,"mat-form-field",4),c.Ub(37,"mat-label"),c.zc(38,"Select Origin Country "),c.Tb(),c.Ub(39,"mat-select",7),c.yc(40,w,2,2,"mat-option",8),c.Tb(),c.yc(41,U,2,0,"mat-error",6),c.Tb(),c.Tb(),c.Ub(42,"mat-card-actions",9),c.Ub(43,"button",10),c.cc("click",(function(){return t.submit()})),c.zc(44,"Submit"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e&&(c.Cb(9),c.lc("formControl",t.inputForm.controls.Cylinders),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Cylinders.invalid),c.Cb(4),c.lc("formControl",t.inputForm.controls.Displacement),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Displacement.invalid),c.Cb(4),c.lc("formControl",t.inputForm.controls.Horsepower),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Horsepower.invalid),c.Cb(4),c.lc("formControl",t.inputForm.controls.Weight),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Weight.invalid),c.Cb(4),c.lc("formControl",t.inputForm.controls.Acceleration),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Acceleration.invalid),c.Cb(4),c.lc("formControl",t.inputForm.controls.Model_Year),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Model_Year.invalid),c.Cb(4),c.lc("formControl",t.inputForm.controls.Origin),c.Cb(1),c.lc("ngForOf",t.originCountry),c.Cb(1),c.lc("ngIf",t.inputForm.controls.Origin.invalid))},directives:[u.a,b.c,b.f,p.a,a.b,a.m,a.j,a.d,i.k,f.a,i.j,u.b,m.a,b.b,d.k],styles:[".container[_ngcontent-%COMP%]{width:100%;max-height:70%}.card-container[_ngcontent-%COMP%]{display:flex;width:100%;height:50%;justify-content:center;align-items:center;flex-flow:column}.heading[_ngcontent-%COMP%]{margin-top:20px;color:#fff;text-align:center;font-size:30px}.card[_ngcontent-%COMP%]{display:grid;grid-template-columns:200px 200px;-moz-column-gap:10px;column-gap:10px;row-gap:1px}.button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (max-width:481px){.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.mat-card[_ngcontent-%COMP%]{width:80vw}}"]}),T);function x(e,t){if(1&e&&(c.Ub(0,"h2",1),c.zc(1),c.Tb()),2&e){var n=c.gc();c.Cb(1),c.Ac(n.breedName)}}var M,_,P,O=[{path:"dog-breed-classifier",component:(M=function(){function e(t){_classCallCheck(this,e),this.httpService=t,this.breedName=null,this.url="assets/images/select-image.png",this.pingModel()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"pingModel",value:function(){this.httpService.pingModel("https://dog-breed-classifeir-flask.herokuapp.com/health").subscribe((function(e){}))}},{key:"onSelectFile",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){this.getPrediction(e.target.files[0]);var n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=function(e){t.url=e.target.result}}}},{key:"getPrediction",value:function(e){var t=this;this.httpService.postFile(e).subscribe((function(e){t.breedName=e.class_name}))}}]),e}(),M.\u0275fac=function(e){return new(e||M)(c.Ob(s))},M.\u0275cmp=c.Ib({type:M,selectors:[["app-dog-breed-classifier"]],decls:9,vars:2,consts:[[1,"container"],[1,"heading"],[1,"card-container"],[1,"card"],["mat-card-image","",1,"image-preview",3,"src"],["type","file",1,"custom-button",3,"change"],["class","heading",4,"ngIf"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"h2",1),c.zc(2,"Dog Breed Classifier"),c.Tb(),c.Ub(3,"div",2),c.Ub(4,"mat-card",3),c.Pb(5,"img",4),c.Ub(6,"mat-card-actions"),c.Ub(7,"input",5),c.cc("change",(function(e){return t.onSelectFile(e)})),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.yc(8,x,2,1,"h2",6),c.Tb()),2&e&&(c.Cb(5),c.lc("src",t.url,c.tc),c.Cb(3),c.lc("ngIf",t.breedName))},directives:[u.a,u.e,u.b,i.k],styles:['.container[_ngcontent-%COMP%]{width:100%;max-height:70%}.card-container[_ngcontent-%COMP%]{display:flex;width:100%;height:50%;justify-content:center;align-items:center;flex-flow:column}.custom-button[_ngcontent-%COMP%]{display:block;position:relative;width:300px;margin:auto;cursor:pointer;border:0;height:60px;border-radius:5px;outline:0}.custom-button[_ngcontent-%COMP%]:hover:after{background:#5978f8}.custom-button[_ngcontent-%COMP%]:after{transition:all .2s ease;border-bottom:3px solid rgba(0,0,0,.2);background:#3c5ff4;text-shadow:0 2px 0 rgba(0,0,0,.2);color:#fff;font-size:20px;text-align:center;position:absolute;top:0;left:0;width:100%;height:100%;display:block;content:"Upload Image";line-height:60px;border-radius:5px}.image-preview[_ngcontent-%COMP%]{display:block;max-width:400px;max-height:500px;width:auto;height:auto;padding:10px}.heading[_ngcontent-%COMP%]{margin-top:20px;color:#fff;text-align:center;font-size:30px}']}),M)},{path:"car",component:F}],z=((_=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:_}),_.\u0275inj=c.Lb({factory:function(e){return new(e||_)},imports:[[o.d.forChild(O)],o.d]}),_),I=n("hctd"),q=((P=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:P}),P.\u0275inj=c.Lb({factory:function(e){return new(e||P)},imports:[[i.c,z,I.a,a.f,a.l]]}),P)}}]);