(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc61fba8"],{"2d94":function(t,e,a){},b81d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"behaviorBar"})},o=[],n={name:"",props:{data:Array},data:function(){return{myChart:null}},methods:{setChart:function(){var t={title:{text:"【柱图数据标题】",textStyle:{color:"#75deef",fontSize:12,fontWeight:"normal"},top:"5%",left:"31%"},tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",formatter:"{b}:{c1}",textStyle:{color:"#6dd0e3",fontSize:10}},grid:{top:"25%",left:"1%",right:"4%",bottom:"4%",containLabel:!0},xAxis:{type:"category",axisLabel:{interval:0,color:"#75deef",fontSize:9,showMinLabel:!0},axisLine:{lineStyle:{color:"#1a3c58",width:2}},axisTick:{show:!1},data:["数据1","数据2","数据3","数据4","数据5","数据6","数据7","数据8"]},yAxis:[{type:"value",min:0,max:300,axisLabel:{color:"#75deef",fontSize:9,showMaxLabel:!1},name:"(个)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:9,align:"right",padding:[0,6,0,0]},axisTick:{length:3},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1}}],series:[{name:"辅助",type:"bar",barWidth:12,itemStyle:{color:"#252448"},data:[300,300,300,300,300,300,300,300]},{name:"数据",type:"bar",barWidth:12,barGap:"-100%",data:this.data}]};this.myChart||(this.myChart=this.$echarts(this.$el)),this.myChart.clear(),this.myChart.resize(),this.myChart.setOption(t)}},mounted:function(){this.setChart()}},r=n,s=(a("cc56"),a("2877")),l=Object(s["a"])(r,i,o,!1,null,"b94bb9ee",null);e["default"]=l.exports},cc56:function(t,e,a){"use strict";a("2d94")}}]);
//# sourceMappingURL=chunk-cc61fba8.17a13be3.js.map