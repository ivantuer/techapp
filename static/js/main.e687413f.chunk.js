(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports={1:"Ukraine",2:"Germany",3:"France",4:"Spain",5:"Sweden",6:"USA",7:"Canada",8:"Moldova",9:"Belarus",10:"Poland"}},function(e,a,t){e.exports=t.p+"static/media/cat1.1bf0ea9a.jpg"},function(e,a,t){e.exports=t.p+"static/media/cat2.ba354008.jpg"},function(e,a,t){e.exports=t.p+"static/media/cat3.dcdd9149.jpg"},,function(e){e.exports={1:{country:1,name:"Ukraine"},2:{country:3,name:"Paris"},3:{country:4,name:"Madrid"},4:{country:6,name:"Houston"},5:{country:7,name:"Montreal"},6:{country:8,name:"\u041a\u0438\u0448\u0438\u043d\u0435\u0432"},7:{country:9,name:"Minsk"},8:{country:10,name:"Warsaw"},100:{country:1,name:"\u041b\u044c\u0432\u043e\u0432"},101:{country:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432"},103:{country:1,name:"\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432-\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u0438\u0439"},104:{country:1,name:"\u041a\u0430\u043c\u0435\u043d\u0435\u0446-\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0438\u0439"},105:{country:1,name:"Donetsk"},106:{country:1,name:"Kharkov"},107:{country:1,name:"\u041b\u0443\u0446\u043a"},108:{country:1,name:"Poltava"},109:{country:1,name:"\u0427\u0435\u0440\u043d\u043e\u0432\u0446\u044b"},299:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"},333:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"}}},,,,,,function(e,a,t){e.exports=t.p+"static/media/dog4.2ce9e417.jpg"},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),i=(t(22),t(2)),o=t(1),s=t(11),m=t(12),u=t(15),d=t(13),h=t(16),g=(t(24),function(e){var a=e.handleClickNextPage,t=e.handleClickPrevPage;return 4===e.pageNumber?l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:t,name:"prev"},"< \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439"),l.a.createElement("button",{onClick:a,className:"finish",name:"next"},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c")):l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:t,name:"prev"},"< \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439"),l.a.createElement("button",{onClick:a,name:"next"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 >"))}),y=(t(26),function(e){var a=e.name,t=e.nameIsValid,n=e.email,r=e.handleNameChange,c=e.handleEmailChange,i=e.validated,o=e.handleClickNextPage,s=e.handleClickPrevPage;return l.a.createElement("div",{className:"first-page"},l.a.createElement("p",null,"1. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 e-mail"),l.a.createElement("div",{className:"name"},l.a.createElement("input",{style:!1===t?{border:"1px solid red"}:{border:"none"},type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",value:a,onChange:r,name:"name"}),!1===t&&l.a.createElement("label",{htmlFor:"name",className:"error"},"- \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")),l.a.createElement("div",{className:"email"},l.a.createElement("input",{style:!1===i?{border:"1px solid red"}:{border:"none"},type:"email",placeholder:"\u0412\u0430\u0448 email...",value:n,onChange:c,name:"email"}),!1===i&&l.a.createElement("label",{htmlFor:"email",className:"error"},"- \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448 Email")),l.a.createElement(g,{handleClickNextPage:o,handleClickPrevPage:s}))}),C=(t(28),function(e){var a=e.handleCountryChange,t=e.handleCityChange,n=e.country,r=e.city,c=e.countryArray,i=e.citiesArray,o=e.cityIsValid,s=e.countryIsValid,m=e.setCountryWithClick,u=e.setCityWithClick,d=e.handleClickNextPage,h=e.handleClickPrevPage;return l.a.createElement("div",{className:"second-page"},l.a.createElement("p",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443 \u0438 \u0433\u043e\u0440\u043e\u0434"),l.a.createElement("div",{className:"input-country-search"},l.a.createElement("input",{onClick:a,type:"search",placeholder:"\u0421\u0442\u0440\u0430\u043d\u0430...",value:n,onChange:a,name:"country",className:!1===s?"error":""}),c&&l.a.createElement("ul",{className:"countries-search"},c.map(function(e,a){return l.a.createElement("li",{key:e+"_country",id:e+"_country",onClick:m},e)}))),l.a.createElement("div",{className:"input-city-search"},l.a.createElement("input",{onClick:t,type:"search",placeholder:"\u0413\u043e\u0440\u043e\u0434...",value:r,onChange:t,name:"city",className:!1===o?"error":""}),i&&l.a.createElement("ul",{className:"city-search"},i.map(function(e,a){return l.a.createElement("li",{key:a+"_city",id:a+"_city",onClick:u},e.name)}))),l.a.createElement(g,{handleClickNextPage:d,handleClickPrevPage:h}))}),v=function(e,a){return"next"===e&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)},p=function(e){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:\/?#[\]@!$&'()*+,;=.]+$/.test(e)},E=(t(30),function(e){var a=e.vk,t=e.ok,n=e.face,r=e.twit,c=e.vkInput,i=e.okInput,o=e.faceInput,s=e.twitInput,m=e.socialError,u=e.handleCheckbox,d=e.handleSocial,h=e.handleClickNextPage,y=e.handleClickPrevPage;return l.a.createElement("div",{className:"third-page"},l.a.createElement("p",null,"3. \u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),l.a.createElement("div",{className:"social"},l.a.createElement("div",{className:"social-name"},l.a.createElement("input",{name:"face",type:"checkbox",checked:n,onChange:u}),l.a.createElement("label",{htmlFor:"face"},"Facebook")),n&&l.a.createElement("input",{className:m&&!p(o)?"error":"",type:"text",name:"faceInput",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Facebook",value:o,onChange:d})),l.a.createElement("div",{className:"social"},l.a.createElement("div",{className:"social-name"},l.a.createElement("input",{name:"vk",type:"checkbox",checked:a,onChange:u}),l.a.createElement("label",{htmlFor:"vk"},"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")),a&&l.a.createElement("input",{className:m&&!p(c)?"error":"",type:"text",name:"vkInput",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Vk",value:c,onChange:d})),l.a.createElement("div",{className:"social"},l.a.createElement("div",{className:"social-name"},l.a.createElement("input",{name:"twit",type:"checkbox",checked:r,onChange:u}),l.a.createElement("label",{htmlFor:"twit"},"Twitter")),r&&l.a.createElement("input",{className:m&&!p(s)?"error":"",type:"text",name:"twitInput",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Twitter",value:s,onChange:d})),l.a.createElement("div",{className:"social"},l.a.createElement("div",{className:"social-name"},l.a.createElement("input",{name:"ok",type:"checkbox",checked:t,onChange:u}),l.a.createElement("label",{htmlFor:"ok"},"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438")),t&&l.a.createElement("input",{className:m&&!p(i)?"error":"",type:"text",name:"okInput",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Ok",value:i,onChange:d})),l.a.createElement(g,{handleClickNextPage:h,handleClickPrevPage:y}))}),k=(t(32),t(4)),P=t.n(k),I=t(5),f=t.n(I),b=t(6),N=t.n(b),w=t(14),S=t.n(w),x=function(e){var a=e.handleClickNextPage,t=e.handleClickPrevPage,n=e.handleImageClick,r=e.currentImage,c=e.animalError,i=e.animalIsEmpty;return l.a.createElement("div",{className:"fourth-page"},l.a.createElement("p",null,"4. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043a\u043e\u0442\u0438\u043a\u0430"),l.a.createElement("div",{className:"animals"},l.a.createElement("img",{className:"cat-1"===r?"currentImage":"",src:P.a,alt:"cat-1",onClick:n}),l.a.createElement("img",{className:"cat-2"===r?"currentImage":"",src:f.a,alt:"cat-2",onClick:n}),l.a.createElement("img",{className:"cat-3"===r?"currentImage":"",src:N.a,alt:"cat-3",onClick:n}),l.a.createElement("img",{className:"dog-4"===r?"currentImage":"",src:S.a,alt:"dog-4",onClick:n})),!0===c&&l.a.createElement("p",{className:"error"}," \u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0441\u043e\u0431\u0430\u0447\u043a\u0443, \u0430 \u043d\u0430\u0434\u043e \u043a\u043e\u0442\u0438\u043a\u0430"),!0===i&&l.a.createElement("p",{className:"error"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u0442\u0438\u043a\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"),l.a.createElement(g,{pageNumber:4,handleClickNextPage:a,handleClickPrevPage:t}))},O=(t(34),function(e){var a=e.name,t=e.email,n=e.city,r=e.country,c=e.currentImage,i=e.vk,o=e.face,s=e.twit,m=e.ok,u=e.vkInput,d=e.faceInput,h=e.twitInput,g=e.okInput,y=e.resetState;return l.a.createElement("div",{className:"fifth-page"},l.a.createElement("div",{className:"visit-card"},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"name-email"},l.a.createElement("h2",null,a),l.a.createElement("p",null,t)),l.a.createElement("p",null,r,", ",n),l.a.createElement("div",null,i&&l.a.createElement("p",null,l.a.createElement("span",null,"Vk: "),u),m&&l.a.createElement("p",null,l.a.createElement("span",null,"Ok: "),g),o&&l.a.createElement("p",null,l.a.createElement("span",null,"Facebook: "),d),s&&l.a.createElement("p",null,l.a.createElement("span",null,"Twitter: "),h))),"cat-1"===c&&l.a.createElement("img",{src:P.a,alt:""}),"cat-2"===c&&l.a.createElement("img",{src:f.a,alt:""}),"cat-3"===c&&l.a.createElement("img",{src:N.a,alt:""})),l.a.createElement("button",{onClick:y},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0437\u0430\u043d\u043e\u0432\u043e"))}),V=(t(36),function(e){var a=e.current,t=e.changeCurrentPage,n=e.availablePages;return l.a.createElement("div",{className:"page-numbers"},l.a.createElement("li",{onClick:t,style:1===a?{color:"black"}:{},className:n.includes(1)?"available":""},"1"),l.a.createElement("li",{onClick:t,style:2===a?{color:"black"}:{},className:n.includes(2)?"available":""},"2"),l.a.createElement("li",{onClick:t,style:3===a?{color:"black"}:{},className:n.includes(3)?"available":""},"3"),l.a.createElement("li",{onClick:t,style:4===a?{color:"black"}:{},className:n.includes(4)?"available":""},"4"))}),T=(t(38),t(3)),j=t(8),A={1:"FIRST_STEP",2:"SECOND_STEP",3:"THIRD_STEP",4:"FOURTH_STEP",5:"FIFTH_STEP"},F=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={availablePages:[1],currentPage:1,name:"",nameIsValid:null,email:"",validated:null,country:"",city:"",countryArray:[],citiesArray:[],cityIsValid:null,countryIsValid:null,face:!1,vk:!1,twit:!1,ok:!1,faceInput:"",vkInput:"",twitInput:"",okInput:"",currentImage:null},t.changeCurrentPage=function(e){t.state.availablePages.includes(+e.target.innerText)&&t.setState({currentPage:+e.target.innerText})},t.handleNameChange=function(e){t.setState({name:e.target.value,nameIsValid:null})},t.handleEmailChange=function(e){t.setState({email:e.target.value,validated:null,availablePages:[1]})},t.handleCountryChange=function(e){t.setState({country:e.target.value,citiesArray:[],countryIsValid:null,availablePages:[1,2]}),t.getCountryName(e)},t.handleCityChange=function(e){t.setState({city:e.target.value,cityIsValid:null,availablePages:[1,2]}),t.getCityName(e)},t.handleClickNextPage=function(e){var a=t.state,n=a.currentPage,l=a.availablePages,r=a.face,c=a.vk,i=a.twit,s=a.ok,m=a.faceInput,u=a.vkInput,d=a.twitInput,h=a.okInput,g=a.currentImage;if(1===n){var y=e.target.name,C=t.state.email;v(y,C)&&""!==t.state.name?t.setState({validated:!0,currentEmail:C,nameIsValid:""!==t.state.name,currentPage:n+1,availablePages:Object(o.a)(l).concat([n+1])}):t.setState({validated:v(y,C),nameIsValid:""!==t.state.name})}if(2===n){var E=t.state,k=E.city,P=E.country,I=Object.entries(T).filter(function(e){return e[1].toLowerCase()===P.toLowerCase()}).map(function(e){return e[0]}),f=Object.values(T).some(function(e){return e.toLowerCase()===P.toLowerCase()}),b=Object.values(j).some(function(e){return e.country===+I[0]&&e.name.toLowerCase()===k.toLowerCase()});f&&b?t.setState({cityIsValid:b,countryIsValid:f,currentPage:n+1,availablePages:Object(o.a)(l).concat([n+1])}):t.setState({cityIsValid:b,countryIsValid:f})}3===n&&(c===p(u)&&r===p(m)&&s===p(h)&&i===p(d)?t.setState({socialError:!1,currentPage:n+1,availablePages:Object(o.a)(l).concat([n+1])}):!1===c&&!1===r&&!1===s&&!1===i?t.setState({socialError:!1,currentPage:n+1,availablePages:Object(o.a)(l).concat([n+1])}):t.setState({socialError:!0})),4===n&&("dog-4"===g?t.setState({animalError:!0}):null===g?t.setState({animalIsEmpty:!0}):t.setState({animalError:!1,animalIsEmpty:!1,currentPage:n+1,availablePages:Object(o.a)(l).concat([n+1])}))},t.handleClickPrevPage=function(){var e=t.state.currentPage;e>1&&t.setState({currentPage:e-1})},t.getCountryName=function(e){var a=Object.values(T).filter(function(a,t){return a.toLowerCase().includes(e.target.value.toLowerCase())&&a.toLowerCase()!==e.target.value.toLowerCase()});t.setState({countryArray:a})},t.setCountryWithClick=function(e){t.setState({country:e.target.innerText,countryArray:[],citiesArray:[]})},t.setCityWithClick=function(e){t.setState({city:e.target.innerText,citiesArray:[]})},t.getCityName=function(e){var a=t.state.country,n=Object.entries(T).filter(function(e){return e[1].toLowerCase()===a.toLowerCase()}).map(function(e){return e[0]}),l=Object.values(j).filter(function(a){return a.country===+n[0]&&a.name.toLowerCase().includes(e.target.value.toLowerCase())&&a.name.toLowerCase()!==e.target.value.toLowerCase()});t.setState({citiesArray:l})},t.handleCheckbox=function(e){var a;t.setState((a={},Object(i.a)(a,e.target.name,!t.state[e.target.name]),Object(i.a)(a,"socialError",null),a))},t.handleSocial=function(e){var a;t.setState((a={},Object(i.a)(a,e.target.name,e.target.value),Object(i.a)(a,"socialError",null),a))},t.handleImageClick=function(e){t.setState({currentImage:e.target.alt,animalIsEmpty:!1,animalError:!1})},t.resetState=function(){t.setState({availablePages:[1],currentPage:1,name:"",nameIsValid:null,email:"",currentEmail:"",validated:null,country:"",city:"",countryArray:[],citiesArray:[],cityIsValid:null,countryIsValid:null,face:!1,vk:!1,twit:!1,ok:!1,faceInput:"",vkInput:"",twitInput:"",okInput:"",currentImage:null,socialError:null,animalError:null,animalIsEmpty:null})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state,a=e.currentPage,t=e.name,n=e.email,r=e.currentEmail,c=e.validated,i=e.city,o=e.country,s=e.countryArray,m=e.citiesArray,u=e.cityIsValid,d=e.countryIsValid,h=e.vk,g=e.ok,v=e.face,p=e.twit,k=e.faceInput,P=e.vkInput,I=e.twitInput,f=e.okInput,b=e.currentImage,N=e.availablePages,w=e.nameIsValid,S=e.socialError,T=e.animalError,j=e.animalIsEmpty,F=A[a];return"FIFTH_STEP"!==F?l.a.createElement("div",{className:"main-wrapper"},l.a.createElement(V,{availablePages:N,current:a,changeCurrentPage:this.changeCurrentPage}),"FIRST_STEP"===F&&l.a.createElement(y,{handleNameChange:this.handleNameChange,handleEmailChange:this.handleEmailChange,name:t,nameIsValid:w,email:n,validated:c,handleClickNextPage:this.handleClickNextPage,handleClickPrevPage:this.handleClickPrevPage}),"SECOND_STEP"===F&&l.a.createElement(C,{handleCountryChange:this.handleCountryChange,handleCityChange:this.handleCityChange,country:o,city:i,countryArray:s,citiesArray:m,setCountryWithClick:this.setCountryWithClick,setCityWithClick:this.setCityWithClick,handleClickNextPage:this.handleClickNextPage,handleClickPrevPage:this.handleClickPrevPage,cityIsValid:u,countryIsValid:d}),"THIRD_STEP"===F&&l.a.createElement(E,{vk:h,ok:g,face:v,twit:p,vkInput:P,faceInput:k,twitInput:I,okInput:f,socialError:S,handleCheckbox:this.handleCheckbox,handleSocial:this.handleSocial,handleClickNextPage:this.handleClickNextPage,handleClickPrevPage:this.handleClickPrevPage}),"FOURTH_STEP"===F&&l.a.createElement(x,{currentImage:b,handleImageClick:this.handleImageClick,animalError:T,handleClickNextPage:this.handleClickNextPage,handleClickPrevPage:this.handleClickPrevPage,animalIsEmpty:j})):l.a.createElement("div",{className:"visit-wrapper"},l.a.createElement(O,{name:t,email:r,city:i,country:o,currentImage:b,faceInput:k,vkInput:P,okInput:f,twitInput:I,resetState:this.resetState,vk:h,ok:g,face:v,twit:p}))}}]),a}(n.Component),L=function(){return l.a.createElement(F,null)};c.a.render(l.a.createElement(L,null),document.getElementById("root"))}],[[17,2,1]]]);
//# sourceMappingURL=main.e687413f.chunk.js.map