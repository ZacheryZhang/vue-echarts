(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89810512"],{"086e":function(t,a,e){"use strict";e("9a8d")},"67d2":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"webBar"})},s=[],o=(e("9805"),{name:"",props:{data:Object},data(){return{myChart:null}},methods:{setData(){var t=Math.max.apply(null,this.data.value),a=[];for(let e=0;e<6;e++)a.push(t/10);return a},setChart(){let t={tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",textStyle:{color:"#6dd0e3",fontSize:10},formatter:t=>(t[1].number=this.data.number,t[1].name+"<br>"+t[1].seriesName+":"+t[1].number+"/"+t[1].value+"人")},grid:{left:"4%",top:"5%",bottom:10,containLabel:!0},yAxis:{type:"category",inverse:!0,position:"left",axisLine:{show:!0,lineStyle:{color:"#1a3c58"}},axisTick:{show:!1},axisLabel:{show:!0,margin:13,fontSize:10,color:"#75deef"},data:this.data.data},xAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},series:[{name:"辅助",type:"bar",stack:"总量",barCategoryGap:20,barWidth:8,itemStyle:{color:"rgba(0,0,0,0)"},data:this.setData()},{name:this.data.name,type:"bar",stack:"总量",barCategoryGap:20,barWidth:8,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgb("+this.data.color+",0.1)"},{offset:1,color:"rgb("+this.data.color+",1)"}],globalCoord:!1},borderRadius:5},data:this.data.value}]};this.myChart||(this.myChart=this.$echarts(this.$el)),this.myChart.clear(),this.myChart.resize(),this.myChart.setOption(t)}},mounted(){this.setChart()}}),i=o,l=(e("086e"),e("1805")),n=Object(l["a"])(i,r,s,!1,null,"c3c5ba60",null);a["default"]=n.exports},"9a8d":function(t,a,e){}}]);
//# sourceMappingURL=chunk-89810512.6defad3c.js.map