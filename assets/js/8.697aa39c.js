(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{531:function(t,i,s){t.exports=s.p+"assets/img/bg7.af68deb6.jpeg"},535:function(t,i,s){t.exports=s.p+"assets/img/bg10.eaa9de63.jpeg"},536:function(t,i,s){t.exports=s.p+"assets/img/bg9.aa9a9041.jpeg"},570:function(t,i,s){},638:function(t,i,s){t.exports=s.p+"assets/img/bg8.ac4915a4.jpeg"},639:function(t,i,s){"use strict";s(570)},679:function(t,i,s){"use strict";s.r(i);s(39);var o={name:"carousel",data:function(){return{carouselData:[{title:"背景1",src:s(531)},{title:"背景2",src:s(638)},{title:"背景3",src:s(536)},{title:"背景4",src:s(535)},{title:"背景5",src:s(531)}],positionList:[{width:"172px",height:"500px",top:"-20px",left:"60px",right:"",bottom:""},{width:"172px",height:"500px",top:"",left:"300px",right:"",bottom:"100px"},{width:"172px",height:"500px",top:"",left:"-150px",right:"",bottom:"60px"},{width:"172px",height:"500px",top:"-130px",left:"",right:"140px",bottom:""},{width:"172px",height:"500px",top:"",left:"",right:"-50px",bottom:"10px"}],flag:!0,timer:null}},mounted:function(){var t=this;this.start(),this.timer=setInterval((function(){t.flag=!1,t.start()}),6e3)},destroyed:function(){clearInterval(this.timer)},methods:{start:function(){var t=this;this.flag=!0,requestAnimationFrame((function(){t.positionList=t.shuffle(t.positionList)}))},shuffle:function(t){for(var i=t.length;i;){var s=Math.floor(Math.random()*i--),o=[t[i],t[s]];t[s]=o[0],t[i]=o[1]}return t}}},e=(s(639),s(2)),n=Object(e.a)(o,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"carousel"},[s("ul",{staticClass:"carousel-ul"},t._l(t.carouselData,(function(i,o){return t.flag?s("li",{staticClass:"accordion-item",style:{backgroundImage:"url("+i.src+")",width:t.positionList[o].width,height:t.positionList[o].height,top:t.positionList[o].top,left:t.positionList[o].left,right:t.positionList[o].right,bottom:t.positionList[o].bottom}},[s("p",{staticClass:"accordion-title"},[t._v(t._s(i.title))])]):t._e()})),0)])}),[],!1,null,"55dd2368",null);i.default=n.exports}}]);