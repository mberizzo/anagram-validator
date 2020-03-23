webpackJsonp([1],[,,function(A,t){},,function(A,t,i){"use strict";t.a={name:"app"}},function(A,t,i){"use strict";var a=i(20);t.a={name:"anagram",mixins:[a.a],data:function(){return{initialText:"",initialTextSplited:[],showInitial:!0,anagram:""}},computed:{textStatus:function(){var A="";return this.initialTextSplited.forEach(function(t){A+=t.isAvailable?t.char:'<span class="disabled">'+t.char+"</span>"}),A},btnColor:function(){return this.initialTextSplited.find(function(A){return A.isAvailable})?"primary":"success"}},methods:{onCharInput:function(A){if(!this.isSpecial(A.keyCode)&&!A.ctrlKey){var t=this.initialTextSplited.find(function(t){return t.isAvailable&&t.char.toLowerCase()===A.key});t?t.isAvailable=!1:(this.beep(),A.preventDefault())}},onPlayAgain:function(){this.initialText="",this.initialTextSplited=[],this.showInitial=!0,this.anagram=""},isSpecial:function(A){return this.specialChars.includes(A)},switchCharStatus:function(){var A=this;this.initialTextSplited.map(function(A){var t=A;return t.isAvailable=!0,t}),this.anagram.split("").forEach(function(t){var i=A.initialTextSplited.find(function(A){return A.isAvailable&&A.char.toLowerCase()===t});i&&(i.isAvailable=!1)})},saveInitial:function(){var A=this;this.showInitial=!1,this.initialText.split("").forEach(function(t){A.initialTextSplited.push({char:t,isAvailable:!0})})}}}},function(A,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(2),n=(i.n(a),i(8)),e=i.n(n),r=i(0),o=i(12),s=i(16);r.default.use(e.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},,,,,,function(A,t,i){"use strict";function a(A){i(13)}var n=i(4),e=i(15),r=i(3),o=a,s=r(n.a,e.a,!1,o,null,null);t.a=s.exports},function(A,t){},,function(A,t,i){"use strict";var a=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"grid-content bg-purple-dark"},[i("router-view")],1)])},n=[],e={render:a,staticRenderFns:n};t.a=e},function(A,t,i){"use strict";var a=i(0),n=i(17),e=i(18);a.default.use(n.a),t.a=new n.a({routes:[{path:"/",name:"Anagram",component:e.a}]})},,function(A,t,i){"use strict";function a(A){i(19)}var n=i(5),e=i(21),r=i(3),o=a,s=r(n.a,e.a,!1,o,null,null);t.a=s.exports},function(A,t){},function(A,t,i){"use strict";t.a={data:function(){return{specialChars:[8,9,32,17,18,35,36,37,38,39,40,46]}},methods:{beep:function(){new Audio("data:audio/wav;base64,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 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play()}}}},function(A,t,i){"use strict";var a=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",[A.showInitial?i("el-form",{attrs:{inline:!0}},[i("h1",[A._v("Write your text")]),A._v(" "),i("el-form-item",[i("el-input",{attrs:{id:"init-text",placeholder:"Jane Doe"},model:{value:A.initialText,callback:function(t){A.initialText=t},expression:"initialText"}})],1),A._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:A.saveInitial}},[A._v("Start")])],1)],1):i("div",[i("h1",{staticClass:"anagram__initial",domProps:{innerHTML:A._s(A.textStatus)}}),A._v(" "),i("div",[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[i("el-input",{ref:"anagramInput",attrs:{type:"success"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:A.switchCharStatus()},keydown:function(t){return A.onCharInput(t)}},model:{value:A.anagram,callback:function(t){A.anagram=t},expression:"anagram"}})],1)],1),A._v(" "),i("el-button",{attrs:{type:A.btnColor},on:{click:function(t){return A.onPlayAgain()}}},[A._v("\n        Play Again\n      ")])],1)])],1)},n=[],e={render:a,staticRenderFns:n};t.a=e}],[6]);
//# sourceMappingURL=main.2da85207aa8e0c87e1f2.js.map