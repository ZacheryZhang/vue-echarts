webpackJsonp([29],{A3ix:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"",inject:["rem"],data:function(){return{value:2,xAxisData:[],seriesData:[],selected:{},year:2018,month:12}},methods:{handleSelect:function(e){this.xAxisData=[],this.seriesData=[],this.selected={},this.value=e;var t=["#bf232a","#feed2c","#2c7bfe","#feac2c","#ff7b7e","#2cd9fe","#a262f2","#2ca8fe"];if(1==e){for(var i=["2017","2018"],a=0;a<12;a++)this.xAxisData.push(a+1+"月");for(var o=0;o<i.length;o++){for(var s={name:i[o]+"年",type:"line",symbol:"circle",smooth:!1,itemStyle:{color:t[o%8]},lineStyle:{width:1,color:t[o%8]},data:[]},n=0;n<12;n++)s.data.push((300*Math.random()).toFixed(0));for(var r={name:i[o]+"年",type:"line",symbol:"circle",smooth:!1,xAxisIndex:1,yAxisIndex:1,itemStyle:{color:t[o%8]},lineStyle:{width:1,color:t[o%8]},data:[]},l=0;l<12;l++)r.data.push((300*Math.random()).toFixed(0));this.seriesData.push(s),this.seriesData.push(r)}}else{for(var c=new Date(this.year,this.month,0).getDate(),h=0;h<c;h++)this.xAxisData.push(h+1+"号");for(var d=0;d<12;d++){this.selected[d+1+"月"]=!1,d<4&&(this.selected[d+1+"月"]=!0);for(var m={name:d+1+"月",type:"line",symbol:"circle",smooth:!1,itemStyle:{color:t[d%8]},lineStyle:{width:1,color:t[d%8]},data:[]},f=0;f<c;f++)m.data.push((300*Math.random()).toFixed(0));for(var u={name:d+1+"月",type:"line",symbol:"circle",xAxisIndex:1,yAxisIndex:1,smooth:!1,itemStyle:{color:t[d%8]},lineStyle:{width:1,color:t[d%8]},data:[]},x=0;x<c;x++)u.data.push((300*Math.random()).toFixed(0));this.seriesData.push(m),this.seriesData.push(u)}}this.setChart()},setChart:function(){var e=this,t={title:[{text:"【交易笔数分析】",textStyle:{fontSize:.6*this.rem,color:"#75deef",fontWeight:"normal"},top:"24%",left:"20%"},{text:"【交易金额分析】",textStyle:{fontSize:.6*this.rem,color:"#75deef",fontWeight:"normal"},top:"24%",right:"12%"}],grid:[{show:!1,left:"2%",top:"38%",right:"51%",bottom:0,containLabel:!0},{show:!1,left:"51%",top:"38%",bottom:0,right:"2%",containLabel:!0}],tooltip:{trigger:"item",axisPointer:{type:"none"},backgroundColor:"#11367a",formatter:function(e){return 0==e.seriesId.substr(e.seriesId.length-1,1)?e.seriesName+"/"+e.name+"<br>交易笔数:"+e.value+"笔":e.seriesName+"/"+e.name+"<br>交易金额:"+e.value+"元"},textStyle:{color:"#6dd0e3",fontSize:.5*this.rem}},legend:{type:"scroll",top:"10%",textStyle:{color:"#75deef",padding:[3,0,0,0],fontSize:.6*this.rem},pageTextStyle:{color:"#75deef"},pageIconSize:.5*this.rem,pageIconColor:"#75deef",itemWidth:.6*this.rem,itemHeight:.35*this.rem,right:"15%",left:"15%",selected:this.selected},xAxis:[{type:"category",data:this.xAxisData,boundaryGap:!1,axisLabel:{fontSize:.45*this.rem,color:"#75deef",interval:0,showMaxLabel:!0,showMinLabel:!0,formatter:function(t,i){if(1==e.value){if(i%2==1)return t}else if((i+1)%5==0)return t;if(0==i)return t}},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1},axisTick:{show:!0,inside:!0}},{gridIndex:1,type:"category",data:this.xAxisData,axisLabel:{fontSize:.45*this.rem,color:"#75deef",interval:0,showMaxLabel:!0,showMinLabel:!0,formatter:function(t,i){if(1==e.value){if(i%2==1)return t}else if((i+1)%5==0)return t;if(0==i)return t}},axisLine:{lineStyle:{color:"#1a3c58"}},splitLine:{show:!1},axisTick:{show:!0,inside:!0}}],yAxis:[{type:"value",splitLine:{show:!1},min:0,max:300,splitNumber:5,axisLabel:{showMaxLabel:!1,fontSize:.45*this.rem,color:"#75deef"},name:"(笔)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:.45*this.rem,align:"right",padding:[0,.3*this.rem,0,0]},axisLine:{lineStyle:{color:"#1a3c58"}},axisTick:{length:3}},{gridIndex:1,type:"value",min:0,max:300,interval:50,splitLine:{show:!1},axisLabel:{showMaxLabel:!1,fontSize:.45*this.rem,color:"#75deef"},name:"(元)",nameGap:-5,nameTextStyle:{color:"#75deef",fontSize:.45*this.rem,align:"right",padding:[0,.3*this.rem,0,0]},axisLine:{lineStyle:{color:"#1a3c58"}},axisTick:{length:3}}],series:this.seriesData},i=this.$echarts.init(document.getElementById("bottom_1"));i.clear(),i.resize({width:document.getElementById("bottom_1").offsetWidth,height:document.getElementById("bottom_1").offsetHidth}),i.setOption(t),i.on("legendselectchanged",function(t){var a=[];for(var o in t.selected)1==t.selected[o]&&a.push(t.selected[o]);a.length>4&&(e.$Modal.error({content:"<p>当前最多显示4个图例</p>"}),i.dispatchAction({type:"legendUnSelect",name:t.name}))})}},mounted:function(){this.handleSelect(this.value)}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"lines"},[i("div",{staticClass:"switchButton"},[i("a",{class:{active:1==e.value},on:{click:function(t){return e.handleSelect(1)}}},[e._v("月")]),i("a",{class:{active:2==e.value},on:{click:function(t){return e.handleSelect(2)}}},[e._v("日")])]),e._v(" "),i("div",{attrs:{id:"bottom_1"}})])},staticRenderFns:[]};var s=i("VU/8")(a,o,!1,function(e){i("S9Ny")},"data-v-36545a98",null);t.default=s.exports},S9Ny:function(e,t){}});