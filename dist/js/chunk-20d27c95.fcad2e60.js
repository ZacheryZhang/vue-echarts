(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d27c95"],{"1d5d":function(t,a,e){"use strict";e("faad")},f897:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"chart"})},s=[],r={name:"",props:{data:Object},data(){return{myChart:null}},methods:{setChart(){let t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{text:this.data.title,top:"5%",left:"5%",textStyle:{color:"#fff",fontSize:12}},legend:{data:[{name:this.data.data[0].name,icon:"circle"},{name:this.data.data[1].name,icon:"circle"}],left:"center",top:"17%",orient:"horizontal",itemWidth:7,itemHeight:7,itemGap:10,textStyle:{color:"#67C3D6",fontSize:10}},grid:{left:"5%",top:"35%",right:"5%",bottom:"15%"},xAxis:{axisLine:{lineStyle:{color:"#2B427F"}},axisLabel:{color:"#0DF5F8",fontSize:8,interval:0},axisTick:{inside:!0,alignWithLabel:!0,interval:0,color:"#2B427F"},data:["TOP1","TOP2","TOP3","TOP4","TOP5","TOP6"]},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#2B427F"}}},series:[{type:"bar",name:this.data.data[0].name,barWidth:4,barGap:0,itemStyle:{borderRadius:2,color:this.data.data[0].color},data:this.data.data[0].value},{type:"bar",name:this.data.data[1].name,barWidth:4,barGap:0,itemStyle:{borderRadius:2,color:this.data.data[1].color},data:this.data.data[1].value}]};this.myChart||(this.myChart=this.$echarts(this.$el)),this.myChart.clear(),this.myChart.resize(),this.myChart.setOption(t)}},mounted(){this.setChart()}},o=r,l=(e("1d5d"),e("1805")),d=Object(l["a"])(o,i,s,!1,null,"393d95b4",null);a["default"]=d.exports},faad:function(t,a,e){}}]);
//# sourceMappingURL=chunk-20d27c95.fcad2e60.js.map