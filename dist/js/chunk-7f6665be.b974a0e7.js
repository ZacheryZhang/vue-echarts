(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f6665be"],{b81d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"behaviorBar"})},o=[],r={name:"",props:{data:Array},data(){return{myChart:null}},methods:{setChart(){let t={title:{text:"【柱图数据标题】",textStyle:{color:"#75deef",fontSize:12,fontWeight:"normal"},top:"5%",left:"31%"},tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",formatter:"{b}:{c1}",textStyle:{color:"#6dd0e3",fontSize:10}},grid:{top:"25%",left:"1%",right:"4%",bottom:"4%",containLabel:!0},xAxis:{type:"category",axisLabel:{interval:0,color:"#75deef",fontSize:9,showMinLabel:!0},axisLine:{lineStyle:{color:"#1a3c58",width:2}},axisTick:{show:!1},data:["数据1","数据2","数据3","数据4","数据5","数据6","数据7","数据8"]},yAxis:[{type:"value",min:0,max:300,axisLabel:{color:"#75deef",fontSize:9,showMaxLabel:!1},name:"(个)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:9,align:"right",padding:[0,6,0,0]},axisTick:{length:3},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1}}],series:[{name:"辅助",type:"bar",barWidth:12,itemStyle:{color:"#252448"},data:[300,300,300,300,300,300,300,300]},{name:"数据",type:"bar",barWidth:12,barGap:"-100%",data:this.data}]};this.myChart||(this.myChart=this.$echarts(this.$el)),this.myChart.clear(),this.myChart.resize(),this.myChart.setOption(t)}},mounted(){this.setChart()}},n=r,s=(a("d96f"),a("1805")),l=Object(s["a"])(n,i,o,!1,null,"b94bb9ee",null);e["default"]=l.exports},d96f:function(t,e,a){"use strict";a("ea07")},ea07:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7f6665be.b974a0e7.js.map