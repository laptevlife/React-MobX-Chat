(this["webpackJsonpreact-mobx-chat"]=this["webpackJsonpreact-mobx-chat"]||[]).push([[0],{12:function(e,s,t){e.exports={messages__block:"MessagesBlock_messages__block__Hwiyw",messages__window:"MessagesBlock_messages__window__3HdQc",messages__window__head:"MessagesBlock_messages__window__head__1lbQe",messages__window__body:"MessagesBlock_messages__window__body__3i7KN",divider:"MessagesBlock_divider__32N5I",line:"MessagesBlock_line__32Qtr",channelName:"MessagesBlock_channelName__m_np6",message__line:"MessagesBlock_message__line__2UhcT",message__box:"MessagesBlock_message__box__3lXlI",message__line__right:"MessagesBlock_message__line__right__1WDoq",messages__window__footer:"MessagesBlock_messages__window__footer__SrjsI"}},13:function(e,s,t){e.exports={rooms__sidebar:"RoomsSidebar_rooms__sidebar__2cyjg",rooms__sidebar__headline:"RoomsSidebar_rooms__sidebar__headline__1Ed05",rooms__sidebar__scrollbox:"RoomsSidebar_rooms__sidebar__scrollbox__3COQb",room__card:"RoomsSidebar_room__card__VuMtV",avatar:"RoomsSidebar_avatar__PsNNg",right__content:"RoomsSidebar_right__content__3L--k",line1:"RoomsSidebar_line1__30AsE",msg__count:"RoomsSidebar_msg__count__3IBfW",time:"RoomsSidebar_time__1iUBA",line2:"RoomsSidebar_line2__1LHMT",name:"RoomsSidebar_name__ydu3D",text:"RoomsSidebar_text__2BuzN",room__card__active:"RoomsSidebar_room__card__active__3kdiT"}},55:function(e,s,t){},56:function(e,s,t){},74:function(e,s,t){"use strict";t.r(s);var a=t(0),n=t.n(a),c=t(8),i=t.n(c),r=(t(55),t(56),t(41)),o=t(18),l=t(10);function _(){return{messages:[],pushMessage:function(e){this.messages.push(e)},sortRoom:function(){var e=Object(l.g)(this.messages).concat(),s=[];e.forEach((function(e,t){if(s.includes(e.roomId)){var a=s.indexOf(e.roomId);s.splice(a,1)}s.push(e.roomId)}));var t=[];return s.forEach((function(s){t.push(Object(o.a)({},s,e.filter((function(e){return e.roomId===s}))))})),t.reverse()},activeChat:null,setActiveChat:function(e){this.activeChat=e,this.filterRecivedMessages()},getActiveChat:function(){return this.activeChat},filterRecivedMessages:function(){var e=this;this.messages=this.messages.map((function(s){return s.roomId===e.activeChat?Object(r.a)(Object(r.a)({},s),{},{recived:!0}):s}))},chanelFilter:"",setchanelFilter:function(e){this.chanelFilter=e},getRoomMessages:function(){var e=this,s=Object(l.g)(this.messages).concat();return""!==this.chanelFilter?s.filter((function(s){return s.roomId===e.activeChat})).filter((function(s){return s.channelId===e.chanelFilter})):s.filter((function(s){return s.roomId===e.activeChat}))}}}var d=t(114),m=t(2),h=n.a.createContext(null),u=function(e){var s=e.children,t=Object(d.a)(_);return Object(m.jsx)(h.Provider,{value:t,children:s})},b=function(){return n.a.useContext(h)},j=t(13),g=t.n(j),f=t(108),v=t(116),x=Object(f.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}})),O=n.a.memo((function(){var e=x();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)(v.a,{alt:"Remy Sharp",src:"",className:e.small})})})),p=t(35),w=t.n(p),N=n.a.memo((function(){var e=b();return Object(d.b)((function(){return Object(m.jsxs)("div",{className:g.a.rooms__sidebar,children:[Object(m.jsx)("div",{className:g.a.rooms__sidebar__headline,children:"Perry the Platypus"}),Object(m.jsx)("div",{className:g.a.rooms__sidebar__scrollbox,children:e.sortRoom().map((function(e,s){return Object(m.jsx)(y,{room:e},s)}))})]})}))})),y=n.a.memo((function(e){var s=e.room,t=b(),a=Object.keys(s)[0],n=Object.values(s),c=n[0].filter((function(e){return!1===e.recived})).length,i=n[0][n[0].length-1],r=i.roomId,l=i.body,_=i.ts.toLocaleTimeString().slice(0,-3);return Object(d.b)((function(){return Object(m.jsxs)("div",{className:w()(g.a.room__card,Object(o.a)({},g.a.room__card__active,r===t.getActiveChat())),onClick:function(){return t.setActiveChat(r)},children:[Object(m.jsx)("div",{className:g.a.avatar,children:Object(m.jsx)(O,{})}),Object(m.jsxs)("div",{className:g.a.right__content,children:[Object(m.jsxs)("div",{className:g.a.line1,children:[Object(m.jsx)("h6",{children:a.length>14?"".concat(a.slice(0,15),"..."):a}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:g.a.msg__count,children:c}),Object(m.jsx)("div",{className:g.a.time,children:_})]})]}),Object(m.jsx)("div",{className:g.a.line2,children:Object(m.jsxs)("span",{children:[Object(m.jsxs)("span",{className:g.a.name,children:[r," - "]}),Object(m.jsx)("span",{className:g.a.text,children:l.length>35?"".concat(l.slice(0,30),"..."):l})]})})]})]})}))})),C=t(36),I=t(12),M=t.n(I),R=t(115),k=t(113),S=Object(f.a)((function(e){return{formControl:{minWidth:220,background:"#fff"},selectEmpty:{font:"Roboto",fontSize:"14px",background:"#fff",height:"43px",display:"flex",alignItems:"center",paddingTop:"8px",paddingRight:"10px",borderBottom:"5px solid white",marginTop:e.spacing(0)}}}));function B(){var e=S(),s=n.a.useState(""),t=Object(C.a)(s,2),a=t[0],c=t[1],i=b();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(k.a,{value:a,onChange:function(e){c(e.target.value),i.setchanelFilter(e.target.value)},displayEmpty:!0,className:e.selectEmpty,inputProps:{"aria-label":"Without label"},children:[Object(m.jsx)(R.a,{value:"",children:"ALL CHANNELS"}),Object(m.jsx)(R.a,{value:"VK",children:"VK"}),Object(m.jsx)(R.a,{value:"FB",children:"FB"}),Object(m.jsx)(R.a,{value:"OK",children:"OK"})]})})}var L=t(112),F=t(46),E=n.a.memo((function(){var e=b();return Object(d.b)((function(){return Object(m.jsx)("div",{className:M.a.messages__block,children:null===e.activeChat?Object(m.jsx)(m.Fragment,{children:"Choose a chat"}):Object(m.jsx)(A,{})})}))})),A=n.a.memo((function(){var e=b(),s=n.a.useRef();n.a.useEffect((function(){s.current.scrollIntoView({behavior:"smooth"})})),n.a.useEffect((function(){return e.filterRecivedMessages(),function(){return e.filterRecivedMessages()}}),[e.messages.length]);var t=n.a.useState(""),a=Object(C.a)(t,2),c=a[0],i=a[1],r=e.messages.filter((function(s){return s.roomId===e.activeChat})),o=function(s){s.preventDefault();var t={id:Object(F.a)(),roomId:e.activeChat,channelId:e.chanelFilter||r[r.length-1].channelId,sender:"You",body:c,ts:new Date};i(""),e.pushMessage(t)};return Object(d.b)((function(){return Object(m.jsxs)("div",{className:M.a.messages__window,children:[Object(m.jsxs)("div",{className:M.a.messages__window__head,children:[Object(m.jsx)("span",{children:e.activeChat}),Object(m.jsx)(B,{})]}),Object(m.jsxs)("div",{className:M.a.messages__window__body,children:[e.getRoomMessages().map((function(e,s){return Object(m.jsx)(P,{ms:e,index:s},e.id)})),Object(m.jsx)("span",{ref:s})]}),Object(m.jsxs)("form",{onSubmit:o,action:"",className:M.a.messages__window__footer,children:[Object(m.jsx)("input",{onChange:function(e){return i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",value:c,type:"text"}),Object(m.jsx)("button",{onClick:o,children:Object(m.jsx)(T,{})})]})]})}))})),P=n.a.memo((function(e){var s=e.ms,t=e.index,a=b(),n=s.ts.toLocaleTimeString().slice(0,-3),c=a.getRoomMessages();return Object(d.b)((function(){return Object(m.jsxs)(m.Fragment,{children:[!(t>=1&&c[t].channelId===c[t-1].channelId)&&Object(m.jsx)(D,{channel:s.channelId}),Object(m.jsx)("div",{className:w()(M.a.message__line,Object(o.a)({},M.a.message__line__right,"You"===s.sender)),children:Object(m.jsxs)(L.a.div,{className:M.a.message__box,initial:{opacity:0,y:"10%"},animate:{opacity:1,y:"0",transition:{duration:.5}},children:[Object(m.jsx)("p",{children:s.body}),Object(m.jsx)("span",{children:n})]})})]})}))})),D=function(e){var s=e.channel;return Object(m.jsxs)("div",{className:M.a.divider,children:[Object(m.jsx)("span",{className:M.a.line}),Object(m.jsx)("span",{className:M.a.channelName,children:s}),Object(m.jsx)("span",{className:M.a.line})]})},T=function(){return Object(m.jsx)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M1.4 16.8849L18.85 9.40488C19.66 9.05488 19.66 7.91488 18.85 7.56488L1.4 0.0848801C0.74 -0.20512 0.00999999 0.28488 0.00999999 0.99488L0 5.60488C0 6.10488 0.37 6.53488 0.87 6.59488L15 8.48488L0.87 10.3649C0.37 10.4349 0 10.8649 0 11.3649L0.00999999 15.9749C0.00999999 16.6849 0.74 17.1749 1.4 16.8849Z",fill:"#083DCC"})})};t(43).loremIpsum;var K=function(){var e=b();n.a.useEffect((function(){o()}),[]);var s=t(43).loremIpsum,a=!0,c=0,i=["Perry the Platypus","Tyler Durden","Amy Pond","Le Petit Prince","Dr. Heinz Doofenshmirtz","Gregory"],r=["VK","OK","FB"];function o(){var t,n=_(i);a?a=!1:(t={id:++c,roomId:n,channelId:_(r),sender:n,recived:!1,body:s({count:l(1,5),format:"plain",units:_(["sentences","words"])}),ts:new Date},e.pushMessage(t)),setTimeout(o,l(3e3,6e3))}function l(e,s){return Math.floor((s-e+1)*Math.random())+e}function _(e){return e[l(0,e.length-1)]}return Object(d.b)((function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(N,{}),Object(m.jsx)(E,{})]})}))};i.a.render(Object(m.jsx)(u,{children:Object(m.jsx)(K,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1b9083e8.chunk.js.map