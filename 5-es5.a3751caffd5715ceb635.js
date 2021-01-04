function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0k1G":function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectModule",(function(){return m}));var i,r=n("ofXK"),a=n("tyNb"),o=n("fXoL"),c=n("tk/3"),s=((i=function(){function e(t){_classCallCheck(this,e),this.httpClient=t}return _createClass(e,[{key:"postFile",value:function(e){var t=new FormData;return t.append("file",e),this.httpClient.post("https://dog-breed-classifeir-flask.herokuapp.com/",t)}},{key:"pingModel",value:function(){var e=new c.d({"X-Skip-Interceptor":"skip"});return this.httpClient.get("https://dog-breed-classifeir-flask.herokuapp.com/health",{headers:e})}}]),e}()).\u0275fac=function(e){return new(e||i)(o.Qb(c.b))},i.\u0275prov=o.Gb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),l=n("Wp6s");function f(e,t){if(1&e&&(o.Nb(0,"h2",1),o.hc(1),o.Mb()),2&e){var n=o.Xb();o.Ab(1),o.ic(n.breedName)}}var p,d,u,h=[{path:"dog-breed-classifier",component:(p=function(){function e(t){_classCallCheck(this,e),this.httpService=t,this.breedName=null,this.url="assets/images/select-image.png",this.pingModel()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"pingModel",value:function(){this.httpService.pingModel().subscribe((function(e){}))}},{key:"onSelectFile",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){this.getPrediction(e.target.files[0]);var n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=function(e){t.url=e.target.result}}}},{key:"getPrediction",value:function(e){var t=this;this.httpService.postFile(e).subscribe((function(e){t.breedName=e.class_name}))}}]),e}(),p.\u0275fac=function(e){return new(e||p)(o.Kb(s))},p.\u0275cmp=o.Eb({type:p,selectors:[["app-dog-breed-classifier"]],decls:9,vars:2,consts:[[1,"container"],[1,"heading"],[1,"card-container"],[1,"card"],["mat-card-image","",1,"image-preview",3,"src"],["type","file",1,"foo",3,"change"],["class","heading",4,"ngIf"]],template:function(e,t){1&e&&(o.Nb(0,"div",0),o.Nb(1,"h2",1),o.hc(2,"Dog Breed Classifier"),o.Mb(),o.Nb(3,"div",2),o.Nb(4,"mat-card",3),o.Lb(5,"img",4),o.Nb(6,"mat-card-actions"),o.Nb(7,"input",5),o.Ub("change",(function(e){return t.onSelectFile(e)})),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.gc(8,f,2,1,"h2",6),o.Mb()),2&e&&(o.Ab(5),o.ac("src",t.url,o.dc),o.Ab(3),o.ac("ngIf",t.breedName))},directives:[l.a,l.e,l.b,r.i],styles:['.container[_ngcontent-%COMP%]{width:100%;max-height:70%}.card-container[_ngcontent-%COMP%]{display:flex;width:100%;height:50%;justify-content:center;align-items:center;flex-flow:column}.foo[_ngcontent-%COMP%]{display:block;position:relative;width:300px;margin:auto;cursor:pointer;border:0;height:60px;border-radius:5px;outline:0}.foo[_ngcontent-%COMP%]:hover:after{background:#5978f8}.foo[_ngcontent-%COMP%]:after{transition:all .2s ease;border-bottom:3px solid rgba(0,0,0,.2);background:#3c5ff4;text-shadow:0 2px 0 rgba(0,0,0,.2);color:#fff;font-size:20px;text-align:center;position:absolute;top:0;left:0;width:100%;height:100%;display:block;content:"Upload Image";line-height:60px;border-radius:5px}.image-preview[_ngcontent-%COMP%]{display:block;max-width:400px;max-height:500px;width:auto;height:auto;padding:10px}.heading[_ngcontent-%COMP%]{margin-top:20px;color:#fff;text-align:center;font-size:30px}']}),p)}],b=((d=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:d}),d.\u0275inj=o.Hb({factory:function(e){return new(e||d)},imports:[[a.d.forChild(h)],a.d]}),d),g=n("hctd"),m=((u=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:u}),u.\u0275inj=o.Hb({factory:function(e){return new(e||u)},imports:[[r.b,b,g.a]]}),u)}}]);