(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e){e.exports={1:"Ukraine",2:"Germany",3:"France",4:"Spain",5:"Sweden",6:"USA",7:"Canada",8:"Moldova",9:"Belarus",10:"Poland"}},function(e){e.exports={1:{country:1,name:"Ukraine"},2:{country:3,name:"Paris"},3:{country:4,name:"Madrid"},4:{country:6,name:"Houston"},5:{country:7,name:"Montreal"},6:{country:8,name:"\u041a\u0438\u0448\u0438\u043d\u0435\u0432"},7:{country:9,name:"Minsk"},8:{country:10,name:"Warsaw"},100:{country:1,name:"\u041b\u044c\u0432\u043e\u0432"},101:{country:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432"},103:{country:1,name:"\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432-\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u0438\u0439"},104:{country:1,name:"\u041a\u0430\u043c\u0435\u043d\u0435\u0446-\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0438\u0439"},105:{country:1,name:"Donetsk"},106:{country:1,name:"Kharkov"},107:{country:1,name:"\u041b\u0443\u0446\u043a"},108:{country:1,name:"Poltava"},109:{country:1,name:"\u0427\u0435\u0440\u043d\u043e\u0432\u0446\u044b"},299:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"},333:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"}}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),l=(a(16),a(10)),s=a(6),o=a(1),u=a(2),m=a(4),h=a(3),y=a(5),g=(a(18),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.email,n=e.handleChange,c=e.validated;return r.a.createElement("div",{className:"first-page"},r.a.createElement("p",null,"1. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 e-mail"),r.a.createElement("input",{type:"text",placeholder:"Your name...",value:t,onChange:n,name:"name"}),r.a.createElement("div",{className:"email"},r.a.createElement("input",{style:!1===c?{border:"1px solid red"}:{border:"none"},type:"email",placeholder:"Your email...",value:a,onChange:n,name:"email"}),!1===c&&r.a.createElement("label",{htmlFor:"email",className:"error"},"-check your email")))}}]),t}(n.Component)),d=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.country,a=e.city,n=(e.getCountryName,e.getCityName,e.countryArray),c=e.handleChange,i=e.setCountryWithClick,l=e.citiesArray,s=e.setCityWithClick;return r.a.createElement("div",{className:"first-page"},r.a.createElement("p",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443 \u0438 \u0433\u043e\u0440\u043e\u0434"),r.a.createElement("div",{className:"input-country-search"},r.a.createElement("input",{type:"search",placeholder:"Select your country",value:t,onChange:c,name:"country"}),n&&r.a.createElement("ul",{className:"countries-search"},n.map(function(e){return r.a.createElement("li",{key:e.key+"_country",id:e.key+"_country",onClick:i},e.data)}))),r.a.createElement("div",{className:"input-city-search"},r.a.createElement("input",{type:"search",placeholder:"Select Your City",value:a,onChange:c,name:"city"}),l&&r.a.createElement("ul",{className:"city-search"},l.map(function(e,t){return r.a.createElement("li",{key:t+"_city",id:t+"_city",onClick:s},e)}))))}}]),t}(n.Component)),C=(a(22),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={face:!1,vk:!1,twit:!1,ok:!1},a.changeChecked=function(e){a.setState(Object(s.a)({},e.target.name,!a.state[e.target.name]))},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"third-page"},r.a.createElement("p",null,"3. \u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),r.a.createElement("div",{className:"social"},r.a.createElement("div",{className:"social-name"},r.a.createElement("input",{name:"face",type:"checkbox",onClick:this.changeChecked}),r.a.createElement("label",{htmlFor:"face"},"Facebook")),this.state.face&&r.a.createElement("input",{type:"text",name:"faceLink"})),r.a.createElement("div",{className:"social"},r.a.createElement("div",{className:"social-name"},r.a.createElement("input",{name:"vk",type:"checkbox",onClick:this.changeChecked}),r.a.createElement("label",{htmlFor:"vk"},"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")),this.state.vk&&r.a.createElement("input",{type:"text",name:"vkLink"})),r.a.createElement("div",{className:"social"},r.a.createElement("div",{className:"social-name"},r.a.createElement("input",{name:"twit",type:"checkbox",onClick:this.changeChecked}),r.a.createElement("label",{htmlFor:"twit"},"Twitter")),this.state.twit&&r.a.createElement("input",{type:"text",name:"twitLink"})),r.a.createElement("div",{className:"social"},r.a.createElement("div",{className:"social-name"},r.a.createElement("input",{name:"ok",type:"checkbox",onClick:this.changeChecked}),r.a.createElement("label",{htmlFor:"ok"},"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438")),this.state.ok&&r.a.createElement("input",{type:"text",name:"okLink"})))}}]),t}(n.Component)),p=(a(24),a(25),function(e){var t=e.current,a=e.changeCurrentPage;return r.a.createElement("div",{className:"page-numbers"},r.a.createElement("li",{onClick:a,className:1===t?"current":""},"1"),r.a.createElement("li",{onClick:a,className:2===t?"current":""},"2"),r.a.createElement("li",{onClick:a,className:3===t?"current":""},"3"),r.a.createElement("li",{onClick:a,className:4===t?"current":""},"4"))}),k=(a(27),function(e){var t=e.changeCurrentPage;e.handleClick;return r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:t,name:"prev"},"< \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439"),r.a.createElement("button",{onClick:t,name:"next"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 >"))}),v=(a(29),a(31)),E=a(32),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={availablePages:[1,2,3],currentPage:1,name:"",email:"",validated:null,country:"",countryNumber:null,city:"",countryArray:[],citiesArray:[]},a.changeCurrentPage=function(e){a.state.availablePages.includes(+e.target.innerText)&&a.setState({currentPage:+e.target.innerText})},a.handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value)),"email"===e.target.name&&a.setState({validated:null}),"country"===e.target.name&&a.getCountryName(e),"city"===e.target.name&&a.getCityName()},a.changePageWithButton=function(e){"next"===e.target.name&&/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)?a.setState({validated:!0,currentPage:a.state.currentPage+1,availablePages:Object(l.a)(a.state.availablePages).concat([a.state.currentPage+1]),currentEmail:a.state.email}):a.setState({validated:!1}),"prev"===e.target.name&&a.state.currentPage>1&&a.setState({currentPage:a.state.currentPage-1})},a.getCountryName=function(e){for(var t,n=[],r=Object.keys(v),c=0;c<r.length;c++){var i=r[c];v[i].toLowerCase().includes(e.target.value.toLowerCase())&&v[i].toLowerCase()!==e.target.value.toLowerCase()&&n.push({key:i,data:v[i]}),v[i].toLowerCase()===e.target.value.toLowerCase()&&(t=i)}a.setState({countryArray:n,countryNumber:t})},a.setCountryWithClick=function(e){a.setState({country:e.target.innerText,countryArray:[],countryNumber:parseInt(e.target.id)})},a.setCityWithClick=function(e){a.setState({city:e.target.innerText,citiesArray:[]})},a.getCityName=function(e){for(var t=[],n=a.state.countryNumber,r=Object.keys(E),c=0;c<r.length;c++){var i=r[c];+E[i].country===n&&E[i].name.includes(a.state.city)&&t.push(E[i].name)}a.setState({citiesArray:t})},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(p,{current:this.state.currentPage,changeCurrentPage:this.changeCurrentPage}),1===this.state.currentPage?r.a.createElement(g,{handleChange:this.handleChange,name:this.state.name,email:this.state.email,validated:this.state.validated}):"",2===this.state.currentPage?r.a.createElement(d,{handleChange:this.handleChange,city:this.state.city,country:this.state.country,getCountryName:this.getCountryName,countryArray:this.state.countryArray,citiesArray:this.state.citiesArray,setCountryWithClick:this.setCountryWithClick,setCityWithClick:this.setCityWithClick}):"",3===this.state.currentPage?r.a.createElement(C,null):"",r.a.createElement(k,{changeCurrentPage:this.changePageWithButton,handleClick:this.handleClick}))}}]),t}(n.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.1407734e.chunk.js.map