(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(42),c=n.n(r),i=(n(96),n(84)),l=n(85),s=n(90),u=n(89),m=n(86),g=n.n(m),A=n(43),h=n.n(A),E=(n(301),function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 link dim black underline pa3 pointer"},"Sign Out"))}),p=n(87),d=n.n(p),f=(n(302),n(88)),b=n.n(f),v=function(){return o.a.createElement("div",null,o.a.createElement(d.a,{className:"Tilt ml5 br2 shadow-2",options:{max:55},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:b.a}))))},w=(n(303),function(e){var t=e.onInputChange,n=e.onSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try..."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:" fan center pa4 br-3 shadow-2"},o.a.createElement("input",{className:"f4 w-70 center",type:"text",placeholder:"url...",onChange:t}),o.a.createElement("button",{className:" ml3 w-30 grow f4 link ph3 pv2 dib white ",onClick:n}," Detect"))))}),x=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"Yash your current rank is..."),o.a.createElement("div",{className:"white f1"},"#5"))},I=(n(304),function(e){var t=e.imageUrl,n=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",heigh:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),Q=new h.a.App({apiKey:"3ff0019decd44ab1b360ff1aefe36fac"}),K={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},R=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box;console.log(t,"boundingbox_parameters");var n=document.getElementById("inputImage"),a=Number(n.width),o=Number(n.height);return console.log(a,o),{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){e.setState({box:t}),console.log(t,"state_box")},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),Q.models.predict(h.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{className:"particles",params:K}),o.a.createElement(E,null),o.a.createElement(v,null),o.a.createElement(x,null),o.a.createElement(w,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),o.a.createElement(I,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(305);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,n){e.exports=n(306)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.e0f8968e.chunk.js.map