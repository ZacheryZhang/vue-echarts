(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64270ef4"],{"0738":function(t,e,s){"use strict";s("0801")},"0801":function(t,e,s){},"0c0b":function(t,e,s){"use strict";var i=s("648c"),r=s("9628"),a=s("47c4"),o=s("5e7c"),n=URLSearchParams,l=n.prototype,c=r(l.append),h=r(l["delete"]),u=r(l.forEach),d=r([].push),m=new n("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&i(l,"delete",(function(t){var e=arguments.length,s=e<2?void 0:arguments[1];if(e&&void 0===s)return h(this,t);var i=[];u(this,(function(t,e){d(i,{key:e,value:t})})),o(e,1);var r,n=a(t),l=a(s),m=0,f=0,p=!1,g=i.length;while(m<g)r=i[m++],p||r.key===n?(p=!0,h(this,r.key)):f++;while(f<g)r=i[f++],r.key===n&&r.value===l||c(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},"2a2b":function(t,e,s){"use strict";var i=s("7169"),r=s("7e80"),a=s("bbdd"),o=s("242f"),n=o("toStringTag"),l=Object,c="Arguments"===a(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(s){}};t.exports=i?a:function(t){var e,s,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(s=h(e=l(t),n))?s:c?a(e):"Object"===(i=a(e))&&r(e.callee)?"Arguments":i}},"36d0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("el-dialog",{staticClass:"class_dialog_hospital",attrs:{title:"无接触测量中...",visible:t.modal,"close-on-click-modal":!1},on:{open:function(e){return t.show()},"update:visible":function(e){t.modal=e}}},[e("video",{ref:"videoElement",attrs:{autoplay:""}})]),e("svg",{staticClass:"guideLine",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 783 500"}},[e("image",{attrs:{x:"5%",y:"20","xlink:href":t.$images.center,width:"90%",height:"100%"}}),t.status?e("image",{attrs:{id:"textBox_1",x:"220",y:"110","xlink:href":t.$images.sensitive_bg,width:"300",height:"170"}}):e("image",{style:{opacity:t.number},attrs:{x:"250",y:"320","xlink:href":t.$images.normal_bg,width:"250",height:"170"}}),t._l(t.swiperData,(function(s,i){return e("g",{key:s.title,on:{click:function(e){return t.selectBegin(s.title)}}},[e("image",{staticClass:"bg_img",attrs:{x:s.image.x,y:s.image.y,"xlink:href":s.status?t.$images.sensitive_title:t.$images.normal_title,width:"130",height:"50"}}),e("foreignObject",{staticClass:"title_1",attrs:{x:s.pos.x,y:s.pos.y,id:"title_"+(i+1),width:"100",height:"40"},on:{mouseenter:t.onmouseenter,mouseleave:t.onmouseleave}},[e("div",{staticClass:"title-text-box",attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[e("p",{style:{color:s.status?"#FFDBDB":""}},[e("span",{staticClass:"titleText"},[t._v(t._s(s.title))]),e("Rate",{attrs:{"show-text":!1,disabled:""},model:{value:s.rate,callback:function(e){t.$set(s,"rate",e)},expression:"item.rate"}})],1)])]),e("foreignObject",{ref:"textBox",refInFor:!0,staticClass:"text",attrs:{x:"250",y:"320",width:"250",height:"170"}},[e("div",{staticClass:"text-box",attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[e("div",{staticClass:"promptBox"},[e("div",{staticClass:"promptTitle"},[t._v(t._s(s.title))]),e("div",{staticClass:"psychologyContent"},[t._v(" "+t._s(s.descript)+" ")])])])]),e("path",{class:s.path.className,attrs:{id:"line_"+(i+1),d:s.path.d,stroke:"#AFE5FB","stroke-width":"2",fill:"none"}})])}))],2)],1)},r=[],a=(s("9805"),s("0c0b"),s("b667"),s("6176"),{name:"",props:{selectRangeDate:Array,_width:Number},mounted(){this.setChart()},data(){return{mediaRecorder:null,mediaStream:null,recordedChunks:[],recording:!1,timer1:null,modal:!1,status:!1,timer:null,rid:null,index:0,number:0,length:0,frames:0,isIE:!1,swiperData:[{image:{x:85,y:354},status:!1,rate:0,title:"心率",descript:"心率是心脏每分钟跳动的次数，反映心脏功能和体能状态。正常成年人的静息心率一般在60-100次/分钟之间。",pos:{x:102,y:364},path:{d:"M150,402 L150,432 250,432",className:"swap1"}},{image:{x:58,y:224},status:!1,rate:0,title:"血压",descript:"血压由收缩压（高压）和舒张压（低压）组成，反映血液在动脉中的压力。正常血压范围一般为120/80 mmHg。",pos:{x:76,y:232},path:{d:"M125,272 L125,337 250,337",className:"swap2"}},{image:{x:87,y:110},status:!1,rate:0,title:"血氧饱和度",descript:"血氧饱和度是血液中氧气的含量，正常值在95%-100%之间。低于90%可能表示低氧血症。",pos:{x:105,y:118},path:{d:"M207,135 L260,135 260,322",className:"swap3"}},{image:{x:310,y:40},status:!1,rate:0,title:"血糖",descript:"血糖水平反映体内葡萄糖的浓度，正常空腹血糖范围为70-99 mg/dL（3.9-5.5 mmol/L）。",pos:{x:328,y:49},path:{d:"M319,66 L279,66 279,321",className:"swap4"}},{image:{x:522,y:110},status:!1,rate:0,title:"心率变异性",descript:"心率变异性反映自主神经系统的活动，较高通常表示更好的健康状态和更好的适应能力。",pos:{x:538,y:118},path:{d:"M538,135 L485,135 485,322",className:"swap3"}},{image:{x:560,y:224},status:!1,rate:0,title:"心电图",descript:"心电图反映心脏的电生理活动，用于检测心律不齐、心肌梗塞等心脏问题。",pos:{x:578,y:230},path:{d:"M625,272 L625,337 500,337",className:"swap2"}},{image:{x:538,y:354},status:!1,rate:0,title:"呼吸频率",descript:"呼吸频率是每分钟的呼吸次数，正常成人的呼吸频率为12-20次/分钟。",pos:{x:555,y:364},path:{d:"M600,402 L600,432 500,432",className:"swap1"}}],psychologicalRate:0,speechRate:0,internetPreferenceRate:0,riskRate:0,makeFriendRate:0,entertainmentPreferenceRate:0,consumptionCharacteristicsRate:0,psychologicalStatus:!1,speechStatus:!1,internetPreferenceStatus:!1,riskStatus:!1,entertainmentPreferenceStatus:!1,makeFriendStatus:!1,consumptionCharacteristicsStatus:!1}},methods:{stopRecordingAfterTime(){setTimeout(()=>{this.stopRecording()},1e4)},show(){setTimeout(()=>{this.videoElement=this.$refs.videoElement},0)},selectBegin(t){"心率"!=t||this.recording||(this.startRecording(),this.modal=!0,this.stopRecordingAfterTime())},startRecording(){navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(t=>{this.mediaStream=t,this.mediaRecorder=new MediaRecorder(t),this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.recordedChunks.push(t.data)},this.mediaRecorder.start(),this.recording=!0,this.videoElement.srcObject=t}).catch(t=>{console.error("无法启动录制:",t)})},stopRecording(){this.mediaRecorder&&"recording"===this.mediaRecorder.state&&(this.mediaRecorder.stop(),this.recording=!1,this.mediaStream.getTracks().forEach(t=>t.stop()),this.processRecordedData(),this.modal=!1)},processRecordedData(){if(this.recordedChunks.length>0){const t=new Blob(this.recordedChunks,{type:"video/webm"}),e=URL.createObjectURL(t),s=document.createElement("a");document.body.appendChild(s),s.style="display: none",s.href=e,s.download="recordedVideo.webm",s.click(),URL.revokeObjectURL(e),console.log("录制完成，数据处理或保存:",t),this.recordedChunks=[]}},onmouseenter(t){document.querySelectorAll(".text").forEach(t=>t.style.opacity=0),document.querySelectorAll(".swap1").forEach(t=>t.style.strokeDashoffset=130),document.querySelectorAll(".swap2").forEach(t=>t.style.strokeDashoffset=190),document.querySelectorAll(".swap3").forEach(t=>t.style.strokeDashoffset=240),document.querySelectorAll(".swap4").forEach(t=>t.style.strokeDashoffset=295),cancelAnimationFrame(this.rid),this.rid=null,clearTimeout(this.timer),this.timer=null,this.animation(Number(t.currentTarget.id.substr(t.currentTarget.id.length-1,1)),!0)},onmouseleave(){this.animation(1,!1)},frame(){cancelAnimationFrame(this.rid),this.rid=null,this.rid=requestAnimationFrame(this.frame);let t=document.querySelector("#line_"+this.index);if(t.style.strokeDashoffset=this.frames,t.getPointAtLength(this.length-this.frames),t.getPointAtLength((this.length-this.frames+2)%this.length),this.index>1&&(t=document.querySelector("#line_"+(this.index-1)),this.$refs.textBox[this.index-2].style.opacity=0,t.style.strokeDashoffset=t.style.strokeDasharray),1===this.index)for(let e=2;e<8;e++)t=document.querySelector("#line_"+e),this.$refs.textBox[e-1].style.opacity=0,t.style.strokeDashoffset=t.style.strokeDasharray;this.$refs.textBox[this.index-1].style.opacity=this.number,this.number+=5/this.length,this.frames-=5,this.frames<=-5&&(cancelAnimationFrame(this.rid),this.rid=null)},animation(t,e){clearTimeout(this.timer),cancelAnimationFrame(this.rid),this.rid=null,this.timer=null,t>7&&(t=1),this.swiperData.forEach(t=>t.status=!1),this.swiperData[t-1].status=!0;const s=document.querySelector("#line_"+t);this.length=s.getTotalLength(),s.style.strokeDasharray=this.length,s.style.strokeDashoffset=this.length,this.frames=this.length,this.index=t,this.number=0,this.frame(),e||(clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(()=>{this.animation(t+1,e)},5e3))},setChart(){clearTimeout(this.timer1),clearTimeout(this.timer),cancelAnimationFrame(this.rid),this.frames=0,this.rid=null,this.timer=null,this.timer1=null,this.timer1=setTimeout(()=>{this.animation(1,!1)},5e3)}},watch:{selectRangeDate:function(){this.setChart()}},created(){window.SVGForeignObjectElement||(this.isIE=!0)},beforeDestroy(){document.querySelectorAll(".text").forEach(t=>t.style.opacity=0),document.querySelectorAll(".swap1").forEach(t=>t.style.strokeDashoffset=130),document.querySelectorAll(".swap2").forEach(t=>t.style.strokeDashoffset=190),document.querySelectorAll(".swap3").forEach(t=>t.style.strokeDashoffset=240),document.querySelectorAll(".swap4").forEach(t=>t.style.strokeDashoffset=295),cancelAnimationFrame(this.rid),this.rid=null,clearTimeout(this.timer),clearTimeout(this.timer1),this.timer=null,this.timer1=null,this.swiperData.forEach(t=>t.status=!1)}}),o=a,n=(s("0738"),s("1805")),l=Object(n["a"])(o,i,r,!1,null,"d542d554",null);e["default"]=l.exports},"47c4":function(t,e,s){"use strict";var i=s("2a2b"),r=String;t.exports=function(t){if("Symbol"===i(t))throw new TypeError("Cannot convert a Symbol value to a string");return r(t)}},"5e7c":function(t,e,s){"use strict";var i=TypeError;t.exports=function(t,e){if(t<e)throw new i("Not enough arguments");return t}},6176:function(t,e,s){"use strict";var i=s("668d"),r=s("9628"),a=s("fc55"),o=URLSearchParams.prototype,n=r(o.forEach);i&&!("size"in o)&&a(o,"size",{get:function(){var t=0;return n(this,(function(){t++})),t},configurable:!0,enumerable:!0})},7169:function(t,e,s){"use strict";var i=s("242f"),r=i("toStringTag"),a={};a[r]="z",t.exports="[object z]"===String(a)},b667:function(t,e,s){"use strict";var i=s("648c"),r=s("9628"),a=s("47c4"),o=s("5e7c"),n=URLSearchParams,l=n.prototype,c=r(l.getAll),h=r(l.has),u=new n("a=1");!u.has("a",2)&&u.has("a",void 0)||i(l,"has",(function(t){var e=arguments.length,s=e<2?void 0:arguments[1];if(e&&void 0===s)return h(this,t);var i=c(this,t);o(e,1);var r=a(s),n=0;while(n<i.length)if(i[n++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},fc55:function(t,e,s){"use strict";var i=s("b85b"),r=s("593c");t.exports=function(t,e,s){return s.get&&i(s.get,e,{getter:!0}),s.set&&i(s.set,e,{setter:!0}),r.f(t,e,s)}}}]);
//# sourceMappingURL=chunk-64270ef4.f99a220c.js.map