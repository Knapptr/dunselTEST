(this.webpackJsonpdunselslider=this.webpackJsonpdunselslider||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1-0.223e9025.png"},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./DUNSEL1/1-0.png":7,"./DUNSEL1/1-1.png":19,"./DUNSEL1/1-2.png":20,"./DUNSEL1/1-3.png":21,"./DUNSEL1/1-4.png":22,"./DUNSEL1/1-5.png":23,"./DUNSEL1/1-6.png":24,"./DUNSEL1/1-7.png":25};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=18},function(e,t,a){e.exports=a.p+"static/media/1-1.b52d5da7.png"},function(e,t,a){e.exports=a.p+"static/media/1-2.1cade47f.png"},function(e,t,a){e.exports=a.p+"static/media/1-3.d203b031.png"},function(e,t,a){e.exports=a.p+"static/media/1-4.b5d33577.png"},function(e,t,a){e.exports=a.p+"static/media/1-5.40ef82d3.png"},function(e,t,a){e.exports=a.p+"static/media/1-6.b7567596.png"},function(e,t,a){e.exports=a.p+"static/media/1-7.7e302c4f.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r);a(15),a(9),a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(1),o=a(2),u=a(4),l=a(3),p=a(5),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).orient=function(e){return e.landscape?"landscape":"portrait"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return function(){var t,a=e.props.currentPages;e.props.issue;if(1===e.props.displayAmount||0===a||a===e.props.issue.pages.length-1)t=s.a.createElement("div",{className:"pages"},s.a.createElement("div",{className:"frame single "+e.orient(e.props.issue.pages[a])},s.a.createElement("img",{onClick:function(){e.props.handleClick(a)},src:e.props.issue.pages[a].image,alt:"Page "+a})));else{var n=a,r=a+1;t=s.a.createElement("div",{className:"pages"},s.a.createElement("div",{className:"frame Dual left"},s.a.createElement("img",{onClick:function(){e.props.handleClick(n)},src:e.props.issue.pages[n].image,alt:"Page "+n})),s.a.createElement("div",{className:"frame Dual right"},s.a.createElement("img",{onClick:function(){e.props.handleClick(r)},src:e.props.issue.pages[r].image,alt:"Page "+r})))}return t}()}}]),t}(n.Component),g=(a(17),a(7),function(e,t,n){var s=function(e){var t={};return e.keys().map((function(a,n){t[a.replace("./","")]=e(a)})),t}(a(18));console.log(s);return{issueNumber:e,pages:function(){for(var a=[],r=0;r<=t;r++){var i=s["DUNSEL"+e+"/"+e+"-"+r+".png"],c=!1;n.includes(r)&&(c=!0);var o={number:r,image:i,landscape:c};a.push(o)}return a}()}}),m=(g(1,1,"none"),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={currentPages:0,screenWidth:window.innerWidth,displayAmount:2,issueLength:a.props.issue.pages.length,focus:!1},a.displayLogic=function(){var e,t=a.state.currentPages;a.state.screenWidth<900||0===t||t===a.props.issue.pages.length-1?e=1:(e=2,t%2?t=t:t-=1),a.setState({displayAmount:e,currentPages:t})},a.updateDisplayAmount=function(){var e=a.state.screenWidth;a.state.displayAmount;e<900?a.setState({displayAmount:1}):a.setState({displayAmount:2})},a.updateWidth=function(){a.setState({screenWidth:window.innerWidth},a.displayLogic)},a.setFocus=function(e){var t=e;a.state.focus?a.setPage(e):a.setState({displayAmount:1,currentPages:t,focus:!0})},a.nextPage=function(){var e=a.state.currentPages,t=a.state.issueLength-1;(e+=a.state.displayAmount)>t&&(e=t),a.setPage(e)},a.prevPage=function(){var e=a.state.currentPages;a.state.issueLength;(e-=a.state.displayAmount)<0&&(e=0),a.setState({currentPages:e},a.updateWidth)},a.toCover=function(){a.setState({currentPages:0},a.displayLogic)},a.toBack=function(){a.setState({currentPages:a.props.issue.pages.length-1,displayAmount:1})},a.onCover=function(){return 0===a.state.currentPages||a.state.currentPages===a.state.issueLenth},a.setPage=function(e){var t,n=a.state.displayAmount,s=a.state.screenWidth;!a.onCover()&&s>900&&(n=2),t=2===n&&e>0&&!(e%2)?e-1:e,a.setState({focus:!1,currentPages:t},a.displayLogic)},a.currentlyDisplayed=function(){for(var e=a.state.displayAmount,t=a.state.currentPages,n=[];n.length<e;)n.push(t),t+=1;return n},a.isViewed=function(e){return!!a.currentlyDisplayed().some((function(t){return t===e}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateWidth(),window.addEventListener("resize",this.updateWidth),window.addEventListener("keydown",(function(t){37===t.keyCode&&e.prevPage(),39===t.keyCode&&e.nextPage()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"createNavBtns",value:function(e){for(var t=this,a=[],n=0;n<e.length;n++){var r=n;a.push(r)}return a.map((function(a){return s.a.createElement("span",{onClick:function(){t.setPage(a)},key:"page"+a,className:"pageBtn "+(t.isViewed(a)?"viewed":null)},0===a?"front":a===e.length-1?"back":"")}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"imageSlider"},s.a.createElement("div",{className:"sliderHeader"},"DUNSEL ",s.a.createElement("span",{className:"light"},"no.",this.props.issue.issueNumber)),s.a.createElement("div",{className:"imageWindow"},s.a.createElement(d,{screenWidth:this.state.screenWidth,handleClick:this.setFocus,displayAmount:this.state.displayAmount,issue:this.props.issue,currentPages:this.state.currentPages})),s.a.createElement("div",{className:"navBar"},s.a.createElement("div",{className:"arrow",onClick:this.prevPage},s.a.createElement("i",{className:"fas fa-caret-left"})),s.a.createElement("div",{className:"pageNav"},this.createNavBtns(this.props.issue.pages)),s.a.createElement("div",{className:"arrow",onClick:this.nextPage},s.a.createElement("i",{className:"fas fa-caret-right"}))),s.a.createElement("footer",null,s.a.createElement("p",null,"Dunsel ",s.a.createElement("span",{className:"light"},this.props.issue.issueNumber)," @Dunsel_fahq ",s.a.createElement("span",{className:"light"}," By Luke H. Berry"))))}}]),t}(n.Component));a(26),s.a.createElement("img",{src:"./imgs/DUNSEL1/1-5.png",alt:"image"});(new Image).src="./imgs/DUNSEL1/1-0.png";var f=g(1,7,[5,6]);i.a.render(s.a.createElement(m,{issue:f}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.713bd4d2.chunk.js.map