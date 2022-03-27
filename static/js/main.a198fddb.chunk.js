(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(59)},32:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(32),n(7)),s=n.n(i),l=n(8),u=n(1),m=n(6),d=n(3),f=n(2),h=n(4),p=(n(36),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0},n.handleClick=function(){n.setState({collapsed:!n.state.collapsed})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return r.a.createElement("div",{className:"event"},r.a.createElement("h2",{className:"summary"},e.summary),r.a.createElement("p",{className:"start-date"},e.start.dateTime," (",e.start.timeZone,")"),r.a.createElement("p",{className:"location"},"@",e.summary," | ",e.location),r.a.createElement("button",{variant:"outline-info",className:"details-button ".concat(t?"show":"hide","-details"),onClick:this.handleClick},t?"Show Details":"Hide Details"),!t&&r.a.createElement("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show")},r.a.createElement("h3",null,"About the event:")," ",r.a.createElement("a",{href:e.htmlLink,rel:"noreferrer",target:"_blank"},"See details on Google Calendar"),r.a.createElement("p",{className:"event-description"},e.description)))}}]),t}(a.Component)),v=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("div",{className:"list"},r.a.createElement("ul",{className:"EventList"},e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))})))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).color="blue",n}return Object(h.a)(t,e),t}(g),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).color="red",n}return Object(h.a)(t,e),t}(g),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).color="fc1303",n}return Object(h.a)(t,e),t}(g),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:null},n.handleInputChanged=function(e){var t=e.target.value;n.setState({showSuggestions:!0});var a=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==a.length)return n.setState({query:t,suggestions:a,infoText:""});n.setState({query:t,infoText:"City is not to be found. Please try another city"})},n.handleItemClicked=function(e,t){n.setState({query:e,showSuggestions:!1,infoText:""}),n.props.updateEvents(e,t)},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.numberOfEvents;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("div",{className:"infoAlert"},r.a.createElement(b,{text:this.state.infoText})),r.a.createElement("br",null),r.a.createElement("p",null,"Select a City:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),r.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(n){return r.a.createElement("li",{key:n,onClick:function(){return e.handleItemClicked(n,t)}},n)}),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all",t)}},r.a.createElement("b",null,"See all cities"))))}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32,message:""},n.handleInputChanged=function(e){var t=e.target.value;t<1||t>32?n.setState({numberOfEvents:"",infoText:"Please enter a number between 1 and 32"}):n.setState({numberOfEvents:t,infoText:""}),n.props.updateNumberOfEvents(e.target.value)},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("br",null),r.a.createElement("p",null,"Number of Events:"),r.a.createElement("input",{type:"number",className:"numberOfEvents",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement("div",{className:"errorAlert"},r.a.createElement(w,{text:this.state.infoText})))}}]),t}(a.Component);n(39);var O=function(e){return e.showWelcomeScreen?r.a.createElement("div",{className:"WelcomeScreen"},r.a.createElement("h1",null,"Welcome to the Meet app"),r.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),r.a.createElement("div",{className:"button_cont",align:"center"},r.a.createElement("div",{class:"google-btn"},r.a.createElement("div",{class:"google-icon-wrapper"},r.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})),r.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement("a",{href:"https://roxanaldwg.github.io/meet/privacy.html",rel:"nofollow noopener"},"Privacy policy")):null},S=n(26),j=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],x=n(12),T=n.n(x),C=n(9),N=n.n(C),W=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",j);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,M();case 10:if(!(n=e.sent)){e.next=20;break}return I(),a="https://fn1vr9ifoc.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,T.a.get(a);case 16:return(r=e.sent).data&&(o=A(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=e.map(function(e){return e.location});return Object(S.a)(new Set(t))},I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://fn1vr9ifoc.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://fn1vr9ifoc.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).updateEvents=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.eventCount;Z().then(function(a){var r="all"===e?a:a.filter(function(t){return t.location===e});r=r.slice(0,t),n.setState({events:r,numberOfEvents:t,activeLocation:e})})},n.updateNumberOfEvents=function(e){n.setState({numberOfEvents:e},n.updateEvents(n.state.location,e))},n.state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,offlineText:"",showWelcomeScreen:void 0},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,r,o=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,W(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&Z().then(function(e){o.mounted&&o.setState({events:e,locations:A(e)})}),navigator.onLine?this.setState({offlineText:""}):this.setState({offlineText:"You are currently offline, events may not be updated."});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events,o=e.OfflineAlertText;if(void 0===this.state.showWelcomeScreen)return r.a.createElement("div",{className:"App"},r.a.createElement(E,{text:o}),r.a.createElement(y,{updateEvents:this.updateEvents,locations:t}),r.a.createElement(v,{events:a,numberOfEvents:n}),r.a.createElement(k,{updateNumberOfEvents:this.updateNumberOfEvents,numberOfEvents:n}),r.a.createElement(O,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){M()}}))}}]),t}(a.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var B=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,60)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};n(25).config("27827ffe2fd4472d8ac012d1f6060a14").install(),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meet","/service-worker.js");J?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):U(t,e)})}}(),B()}},[[27,3,2]]]);
//# sourceMappingURL=main.a198fddb.chunk.js.map