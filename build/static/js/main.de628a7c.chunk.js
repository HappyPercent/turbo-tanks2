(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/red_tank.256832b1.svg"},21:function(e,t,n){e.exports=n.p+"static/media/green_tank.829f81ef.svg"},24:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(4),u=(n(34),r.a.createContext()),s=u.Provider,l=u.Consumer,p=function(){return function(e){return function(t){return r.a.createElement(l,null,(function(n){return r.a.createElement(e,Object.assign({},t,{api:n}))}))}}},d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},h={ru:{emptyInput:"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",outOfRange:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",password:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",invalidLink:"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430",correctInput:""}},f=n(2),m=n(3),v=function(){function e(t){Object(f.a)(this,e),this.errors=t}return Object(m.a)(e,[{key:"validate",value:function(e){var t=e.currentTarget.elements,n=t.nickname,a=t.password,r=t.link;n.validity.valid&&a.validity.valid&&r.validity.valid?(this.removeErrors(e),this.activateButton(e)):(this.checkEmptyInput(e,n,a,r),this.checkRange(e,n,a,r),this.checkCorrectInput(e,n,a,r),this.checkLink(e,r),this.checkPassword(e,a),this.disableButton(e))}},{key:"checkEmptyInput",value:function(e){var t=this;if(0===e.target.value.length){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];a.forEach((function(n){e.target.name===n.name&&(document.querySelector("#".concat(n.name)).textContent=t.errors.ru.emptyInput)}))}}},{key:"checkRange",value:function(e){var t=this;if(1===e.target.value.length||e.target.value.length>30){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];a.forEach((function(n){e.target.name===n.name&&(document.querySelector("#".concat(n.name)).textContent=t.errors.ru.outOfRange)}))}}},{key:"checkCorrectInput",value:function(e){var t=this;if(e.target.validity.valid){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];a.forEach((function(n){e.target.name===n.name&&(document.querySelector("#".concat(n.name)).textContent=t.errors.correctInput)}))}}},{key:"checkLink",value:function(e){for(var t=this,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];e.target.validity.valid||0!==e.target.value.length?e.target.validity.valid||"link"!==e.target.name&&"avatar"!==e.target.name||a.forEach((function(n){e.target.name===n.name&&(document.querySelector("#".concat(n.name)).textContent=t.errors.ru.invalidLink)})):a.forEach((function(n){e.target.name===n.name&&(document.querySelector("#".concat(n.name)).textContent=t.errors.ru.emptyInput)}))}},{key:"checkPassword",value:function(e,t){1===e.target.value.length&&e.target.name===t.name&&(document.querySelector("#".concat(t.name)).textContent=this.errors.ru.password)}},{key:"removeErrors",value:function(e){e.currentTarget.querySelectorAll(".error").forEach((function(e){e.textContent=""}))}},{key:"disableButton",value:function(e){var t=e.currentTarget.querySelector("button");t.setAttribute("disabled",!0),t.classList.add("button_disabled"),t.classList.remove("button_active")}},{key:"activateButton",value:function(e){var t=e.currentTarget.querySelector("button");t.removeAttribute("disabled"),t.classList.remove("button_disabled"),t.classList.add("button_active")}}]),e}(),b=n(6),y=n(5),g=n(7),k=n(1),O=function(e){var t=e.params,n=t.width,a=t.height,o=t.posX,c=t.posY,i=t.type,u={position:"absolute",left:o,top:c,backgroundColor:"steel"===i?"grey":"brick"===i?"orange":"",width:n,height:a};return r.a.createElement("div",{style:u})},E=(n(35),function(e){var t=e.params,n=t.posX,a={top:t.posY,left:n};return r.a.createElement("div",{className:"bullet",style:a})}),w=(n(36),n(20)),T=n.n(w),j=n(21),A=n.n(j),S=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.params,n=t.posX,a=t.posY,o=t.direction,c="up"===o?0:"left"===o?270:"down"===o?180:"right"===o?90:"",i=e.player?A.a:T.a,u={position:"absolute",top:a,left:n,transform:"rotate(".concat(c,"deg)"),backgroundImage:"url(".concat(i,")")};return r.a.createElement("div",{className:"tank",style:u})}}]),t}(a.Component),Y=(n(37),function(e){var t=e.walls,n=e.bullets,a=e.playerTank,o=e.computerTank;return r.a.createElement("div",{className:"field"},t.map((function(e,t){var n=Object.assign({},e);return r.a.createElement(O,{key:t,params:n})})),n.map((function(e,t){var n=Object.assign({},e);return r.a.createElement(E,{key:t,params:n})})),r.a.createElement(S,{params:Object(k.a)({},a),player:!0}),r.a.createElement(S,{params:Object(k.a)({},o)}))}),X=(n(38),function(e){return{type:"UPDATE_LEADERBOARD",payload:e}}),C=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.api,n=e.nickname,a=e.password,r=e.link,o=e.score,c=e.updateLeaderboard;t.get().then((function(e){return e.players})).then((function(e){var i=e.find((function(e){return e.login===n&&e.password===a}));i?t.put(i.id,i.login,i.password,i.avatar,o).then((function(){return t.get().then((function(e){return e.players.sort((function(e,t){return t.score-e.score}))})).then((function(e){return e.slice(0,9)})).then((function(e){c(e)}))})):t.post(n,a,r,o).then((function(){return t.get().then((function(e){return e.players.sort((function(e,t){return t.score-e.score}))})).then((function(e){return e.slice(0,9)})).then((function(e){c(e)}))}))}))}},{key:"render",value:function(){var e=this.props.restart;return r.a.createElement("div",{className:"gameover-overlay"},r.a.createElement("button",{className:"restart-button",onClick:function(){return e()}},"RESTART"))}}]),t}(a.Component),R=d(p(),Object(i.b)((function(e){return{score:e.field.score,form:e.form}}),(function(e){return{restart:function(){return e({type:"RESTART"})},updateLeaderboard:function(t){return e(X(t))}}})))(C),I=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).interval1=0,n.interval2=0,n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.playerTank.shootingDelay,n=e.moveObjects,a=e.computerFire;window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("keyup",this.handleKeyUp.bind(this)),this.interval1=setInterval(n,20),this.interval2=setInterval(a,t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval1),clearInterval(this.interval2)}},{key:"handleKeyUp",value:function(e){if("INPUT"!==e.target.tagName){var t=this.props.toggleMoving;switch(e.code){case"KeyA":case"ArrowLeft":case"KeyW":case"ArrowUp":case"KeyD":case"ArrowRight":case"KeyS":case"ArrowDown":t(!1)}}}},{key:"handleKeyDown",value:function(e){if("INPUT"!==e.target.tagName){var t=this.props,n=t.playerFire,a=t.togglePause,r=t.makeSootAvaliable,o=t.playerTank,c=o.canShoot,i=o.shootingDelay,u=function(e){var t=this.props,n=t.toggleMoving,a=t.updateMovingDirection,r=t.startGame;t.field.gameStarted||r();n(!0),a(e)}.bind(this);switch(e.code){case"KeyA":case"ArrowLeft":u("left");break;case"KeyW":case"ArrowUp":u("up");break;case"KeyD":case"ArrowRight":u("right");break;case"KeyS":case"ArrowDown":u("down");break;case"Escape":a();break;case"Space":c&&(n(),setTimeout((function(){r()}),i))}}}},{key:"render",value:function(){var e=this.props,t=e.walls,n=e.bullets,a=e.playerTank,o=e.computerTank,c=e.field.gameOver;return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(R,null):r.a.createElement(Y,{walls:t,bullets:n,playerTank:a,computerTank:o}))}}]),t}(a.Component),L=Object(i.b)((function(e){return{walls:e.walls,bullets:e.bullets,playerTank:e.playerTank,computerTank:e.computerTank,field:e.field}}),(function(e){return{toggleMoving:function(t){return e(function(e){return e?{type:"START_MOVING"}:{type:"STOP_MOVING"}}(t))},updateMovingDirection:function(t){return e(function(e){return{type:"UPDATE_MOVING_DIRECTION",payload:e}}(t))},moveObjects:function(){return e({type:"MOVE_OBJECTS"})},playerFire:function(){return e({type:"PLAYER_FIRE"})},togglePause:function(){return e({type:"TOGGLE_PAUSE"})},makeSootAvaliable:function(){return e({type:"MAKE_SHOOT_AVALIABLE"})},computerFire:function(){return e({type:"COMPUTER_FIRE"})},startGame:function(){return e({type:"START_GAME"})}}}))(I),_=n(8),N=(n(39),new v(h)),D=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(b.a)(this,Object(y.a)(t).call(this))).validation=N,e.handleFormChange=e.handleFormChange.bind(Object(_.a)(e)),e.submit=e.submit.bind(Object(_.a)(e)),e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"submit",value:function(e){e.preventDefault();var t=this.props,n=t.api,a=t.authorize,r=t.form,o=r.nickname,c=r.password,i=r.link;n.post(o,c,i,0).then((function(){return a(!0)}))}},{key:"handleFormChange",value:function(e){this.props.updateFormValues(e.target.name,e.target.value)}},{key:"render",value:function(){var e=this.validation,t=this.submit,n=this.handleFormChange,a=this.props.form,o=a.nickname,c=a.password,i=a.avatarLink;return r.a.createElement("form",{onSubmit:function(e){t(e)},onChange:function(t){e.validate(t)},className:"form"},r.a.createElement("div",{className:"row"},r.a.createElement("label",null,"Nickname"),r.a.createElement("input",{name:"nickname",value:o,type:"text",minLength:"2",maxLength:"30",required:!0,onChange:function(e){n(e)}}),r.a.createElement("p",{id:"nickname",className:"error"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",value:c,type:"password",minLength:"8",maxLength:"30",required:!0,onChange:function(e){n(e)}}),r.a.createElement("p",{id:"password",className:"error"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",null,"Avatar url"),r.a.createElement("input",{name:"link",value:i,type:"url",required:!0,onChange:function(e){n(e)}}),r.a.createElement("p",{id:"link",className:"error"})),r.a.createElement("button",{className:"button button_disabled",type:"submit"},"Submit"))}}]),t}(a.Component),M=d(Object(i.b)((function(e){return{form:e.form}}),(function(e){return{authorize:function(){return e({type:"AUTHORIZE"})},updateFormValues:function(t,n){return e(function(e,t){return{type:"UPDATE_FORM_VALUES",key:e,value:t}}(t,n))}}})),p())(D),P=(n(40),function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.api,n=e.updateLeaderboard;t.get().then((function(e){return e.players.sort((function(e,t){return t.score-e.score}))})).then((function(e){return e.slice(0,9)})).then((function(e){n(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("table",{className:"leaderboard"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Score")),this.props.leaderboard.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.login),r.a.createElement("td",null,e.score))})))))}}]),t}(a.Component)),U=d(p(),Object(i.b)((function(e){return{leaderboard:e.leaderboard}}),(function(e){return{updateLeaderboard:function(t){return e(X(t))}}})))(P),F=(n(41),Object(i.b)((function(e){var t=e.field;return{lifes:t.lifes,score:t.score}}))((function(e){var t=e.lifes,n=e.score;return r.a.createElement("div",{className:"info-table"},r.a.createElement("div",null,"Lifes - ",t),r.a.createElement("div",null,"Score - ",n))}))),x=d(Object(i.b)((function(e){return{authorized:e.form.authorized}})),p())((function(e){var t=e.authorized;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),t?r.a.createElement(U,null):r.a.createElement(M,null),r.a.createElement(F,null))})),G=(n(42),function(){return r.a.createElement("div",null,"Error!")}),K=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(G,null):this.props.children}}]),t}(a.Component),V=n(16),q=n.n(V),B=n(22),z=function(){function e(){Object(f.a)(this,e),this.url="https://v2-api.sheety.co/a5ef5d923274b26c584a4e108ade8c58/panzer/players"}return Object(m.a)(e,[{key:"get",value:function(){var e=Object(B.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.url));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"post",value:function(e,t,n,a){return fetch("".concat(this.url),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:{login:e,password:t,avatar:n,score:a}})}).then(this.checkStatus).catch(this.showError)}},{key:"put",value:function(e,t,n,a,r){return fetch("".concat(this.url,"/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:{login:t,password:n,avatar:a,score:r}})}).then(this.checkStatus).catch(this.showError)}},{key:"delete",value:function(e,t){return fetch("".concat(this.url,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:{login:e.currentTarget.elements.login.value,password:e.currentTarget.elements.password.value,avatar:e.currentTarget.elements.avatar.value,score:e.currentTarget.elements.score.value}})}).then(this.checkStatus).catch(this.showError)}}]),e}(),J=n(11),H=n(12),W=function(e,t){var n=2,a=e.playerTank,r=e.bullets,o=e.computerTank,c=e.walls,i=e.field,u=Object(k.a)({},a);return function(e){var t=e.playerTank,n=e.computerTank,a=e.bullets,r=e.field,o=r.lifes,c=r.gameOver,u=r.score,s=!1,p=!1,d=a.map((function(e){var a=e.posX,r=e.posY;return l(t,t.width,t.width,3,a,r)?(s=!0,null):l(n,n.width,n.width,3,a,r)?(p=!0,null):e})).filter((function(e){return null!==e}));s&&(o>0?o--:c=!0);p&&(n.posX=(i.width-n.width)/2,n.posY=0,n.direction="down",u++);return Object(k.a)({},e,{computerTank:n,bullets:d,field:Object(k.a)({},e.field,{gameOver:c,lifes:o,score:u})})}(Object(k.a)({},e,{bullets:function(e,t){return e.map((function(e){var n=e.posX,a=e.posY,r=e.direction,o=n+("left"===r?-t:"right"===r?t:0),c=a+("up"===r?-t:"down"===r?t:0);return s(3,o,c)?{posX:o,posY:c,direction:r}:null})).filter((function(e){return null!==e}))}(r,4),playerTank:function(t,n){if(t.moving){var a=t.width,r=t.direction;t.posY+="up"===r?-n:"down"===r?n:0,t.posX+="left"===r?-n:"right"===r?n:0,s(a,t.posX,t.posY)&&!l(o,a,a,a,t.posX,t.posY)||(t.posY=e.playerTank.posY,t.posX=e.playerTank.posX)}return t}(u,2),computerTank:function(){var t=u.posX,r=u.posY,c=o.posX,i=o.posY,p=o.direction,d=o.width,h=c,f=i,m=p;return[{posX:h,posY:f+n,direction:"down"},{posX:h,posY:f-n,direction:"up"},{posX:h+n,posY:f,direction:"right"},{posX:h-n,posY:f,direction:"left"}].forEach((function(e){(Math.abs(e.posX-t)<Math.abs(c-t)||Math.abs(e.posY-r)<Math.abs(i-r))&&s(d,e.posX,e.posY)&&!l(a,a.width,a.width,d,h,f)&&(h=e.posX,f=e.posY,m=e.direction)})),Object(k.a)({},e.computerTank,{posX:h,posY:f,direction:m})}()}));function s(e,t,n){var a=!0;return c.forEach((function(r){l(r,r.width,r.height,e,t,n)&&(a=!1)})),(t<0||n<0||t>i.width-e||n>i.height-e)&&(a=!1),a}function l(e,t,n,a,r,o){return r>=e.posX&&r<=e.posX+t&&o>=e.posY&&o<=e.posY+n||r+a>=e.posX&&r+a<=e.posX+t&&o>=e.posY&&o<=e.posY+n||r>=e.posX&&r<=e.posX+t&&o+a>=e.posY&&o+a<=e.posY+n||r+a>=e.posX&&r+a<=e.posX+t&&o+a>=e.posY&&o+a<=e.posY+n}},Z=n(23),Q=function(e,t){var n,a,r,o;t?(n=e.playerTank.posX,a=e.playerTank.posY,r=e.playerTank.direction,o=e.playerTank.width):(n=e.computerTank.posX,a=e.computerTank.posY,r=e.computerTank.direction,o=e.computerTank.width);var c=n,i=a;return"up"===r?(c+=o/2,i-=3):"right"===r?(c+=o,i+=o/2):"down"===r?(c+=o/2,i+=o):"left"===r&&(i+=o/2,c-=3),Object(k.a)({},e,{playerTank:t?Object(k.a)({},e.playerTank,{canShoot:!1}):Object(k.a)({},e.playerTank),bullets:[].concat(Object(Z.a)(e.bullets),[{posX:c,posY:i,direction:r}])})},$={field:{width:500,height:500,pause:!1,gameOver:!1,gameStarted:!1,score:0,lifes:2},walls:[{width:90,height:30,posX:0,posY:30,type:"brick"},{width:30,height:80,posX:60,posY:60,type:"brick"},{width:30,height:240,posX:340,posY:50,type:"brick"},{width:260,height:30,posX:240,posY:140,type:"brick"},{width:200,height:30,posX:0,posY:210,type:"brick"},{width:40,height:40,posX:260,posY:210,type:"steel"},{width:30,height:180,posX:100,posY:320,type:"brick"},{width:200,height:30,posX:300,posY:390,type:"brick"}],bullets:[],playerTank:{canShoot:!0,shootingDelay:500,moving:!1,width:30,posX:235,posY:470,direction:"up"},computerTank:{width:30,posX:235,posY:0,direction:"down"},form:{nickname:"",password:"",link:"",authorized:!1},leaderboard:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_OBJECTS":return e.field.pause||!e.field.gameStarted||e.field.gameOver?e:W(Object(k.a)({},e),t);case"START_MOVING":return Object(k.a)({},e,{playerTank:Object(k.a)({},e.playerTank,{moving:!0})});case"STOP_MOVING":return Object(k.a)({},e,{playerTank:Object(k.a)({},e.playerTank,{moving:!1})});case"UPDATE_MOVING_DIRECTION":return e.field.pause||!e.field.gameStarted||e.field.gameOver?e:Object(k.a)({},e,{playerTank:Object(k.a)({},e.playerTank,{direction:t.payload})});case"PLAYER_FIRE":return Q(Object(k.a)({},e),!0);case"COMPUTER_FIRE":return e.field.pause||!e.field.gameStarted||e.field.gameOver?e:Q(Object(k.a)({},e),!1);case"TOGGLE_PAUSE":return Object(k.a)({},e,{field:Object(k.a)({},e.field,{pause:!e.field.pause})});case"MAKE_SHOOT_AVALIABLE":return Object(k.a)({},e,{playerTank:Object(k.a)({},e.playerTank,{canShoot:!0})});case"AUTHORIZE":return Object(k.a)({},e,{form:Object(k.a)({},e.form,{authorized:!0})});case"UPDATE_FORM_VALUES":return Object(k.a)({},e,{form:Object(k.a)({},e.form,Object(H.a)({},t.key,t.value))});case"UPDATE_LEADERBOARD":return Object(k.a)({},e,{leaderboard:t.payload});case"START_GAME":return Object(k.a)({},e,{field:Object(k.a)({},e.field,{gameStarted:!0})});case"RESTART":return $;default:return e}},te=Object(J.b)(ee),ne=new z;c.a.render(r.a.createElement(i.a,{store:te},r.a.createElement(K,null,r.a.createElement(s,{value:ne},r.a.createElement(x,null)))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.de628a7c.chunk.js.map