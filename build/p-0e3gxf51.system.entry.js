System.register(["./p-334f7fd6.system.js"],function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.g}],execute:function(){var n=function(t,e,i){if(t<e){return e}if(t>i){return i}return t};var o=function(){function t(t){e(this,t);this.exposure=50;this.isMouseDown=false}t.prototype.componentDidRender=function(){this.slide(0);this.updateAfterWidth();this.el.setAttribute("tabindex","0")};t.prototype.slide=function(t){if(t===void 0){t=0}this.exposure=n(this.exposure+t,0,100);this.after.style.width=this.exposure+"%";this.hint.style.left=this.exposure+"%"};t.prototype.onKeyDown=function(t){if(t.key==="ArrowLeft"){this.slide(-1);return}if(t.key==="ArrowRight"){this.slide(1);return}};t.prototype.onMouseDown=function(t){this.isMouseDown=true;this.slideToEvent(t)};t.prototype.onMouseUp=function(t){this.isMouseDown=false};t.prototype.onMouseMove=function(t){if(this.isMouseDown){this.slideToEvent(t)}};t.prototype.updateAfterWidth=function(){this.imageWidth=this.el.offsetWidth;this.afterImageContainer.style.width=this.el.offsetWidth+"px"};t.prototype.slideToEvent=function(t){var e=t.pageX-this.el.offsetLeft;this.exposure=e/this.imageWidth*100;this.slide()};t.prototype.render=function(){var t=this;return i("div",null,i("div",{ref:function(e){return t.before=e}},i("slot",{name:"before"})),i("div",{class:"after",ref:function(e){return t.after=e}},i("div",{ref:function(e){return t.afterImageContainer=e}},i("slot",{name:"after"}))),i("div",{class:"hint",ref:function(e){return t.hint=e}}))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--divider-color:#dedede;--divider-color-focus:#fbfbfb;--divider-width:1px;--hint-size:40px;--hint-bg-color:#d7d7d7;--hint-border:1px solid #d7d7d7;--hint-opacity:0.5;--hint-opacity-hover:0;position:relative;display:inline-block;font-size:0;overflow:hidden;outline:none}:host(:focus) .hint{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}:host(:hover) .hint{opacity:0}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}.component:hover .hint{opacity:var(--hint-opacity-hover)}.hint{position:absolute;width:var(--hint-size);height:var(--hint-size);background-color:var(--hint-bg-color);top:50%;margin-top:calc(var(--hint-size) / (-2));margin-left:calc(var(--hint-size) / (-2));-webkit-transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,transform 1s;transition:opacity 1s,transform 1s,-webkit-transform 1s;border:var(--hint-border);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.75);box-shadow:0 0 15px 0 rgba(0,0,0,.75);pointer-events:none;opacity:var(--hint-opacity);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.focused .hint{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}.after{position:absolute;left:0;top:0;bottom:0;overflow:hidden;border-right:var(--hint-border)}"},enumerable:true,configurable:true});return t}();t("img_comparison_slider",o)}}});