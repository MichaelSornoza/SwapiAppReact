(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e){e.exports={options:[{title:"Personajes de Star Wars",imgUrl:"http://www.tolucos.com/wp-content/uploads/2018/07/capa-abre.jpg",category:"people"},{title:"Planetas de Star Wars",imgUrl:"https://vignette.wikia.nocookie.net/es.starwars/images/4/46/Mustafar.png/revision/latest?cb=20160725191242",category:"planets"},{title:"Naves de Star Wars",imgUrl:"https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/03/22/58d2186e0d3e1.jpeg",category:"vehicles"}]}},20:function(e,t,a){e.exports=a(57)},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),i=a.n(c),r=a(17),s=a(2),o=a(3),d=a(5),m=a(4),u=a(6),p=a(18),h=a.n(p),g=(a(45),a(19)),b=a.n(g),f=function(){return l.a.createElement("div",{className:"Particle"},l.a.createElement(b.a,{params:{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}))},v=(a(47),function(){return l.a.createElement("div",{className:"lds-ripple"},l.a.createElement("div",null),l.a.createElement("div",null))}),E=(a(49),function(e){var t=e.children;return l.a.createElement("div",{className:"HomeLayout"},t)}),y=(a(51),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered contenido"},l.a.createElement("p",null,"Swapi App by ",l.a.createElement("a",{href:"https://github.com/MichaelSornoza",target:"blank"},"Michael Sornoza"),". The source code is licensed",l.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"}," MIT"),".")))}),w=(a(7),a(16),function(e){var t=e.title,a=e.imgUrl,n=e.category,c=e.handleClick;return l.a.createElement("div",{className:"column is-one-quarter",onClick:function(){return c(n)}},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("figure",{className:"image is-1by1"},l.a.createElement("img",{src:a,alt:t}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"p title.is-6 has-text-centered"},l.a.createElement("strong",null,t)))))))}),N=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"columns Options"},this.props.options.map(function(t){return l.a.createElement(w,Object.assign({},t,{handleClick:e.props.handleOpenModal,key:t.category}))})))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Object(c.createPortal)(this.props.children,document.getElementById("modal-container"))}}]),t}(n.Component),P=function(e){var t=e.children,a=e.handleClick;return l.a.createElement("div",{className:"modal is-active"},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-content"},t),l.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:a}))},C=(a(55),function(e){var t=e.data,a=(e.category,e.handleAddPage),n=e.handleSubtractPage;return l.a.createElement("div",{className:"tile"},l.a.createElement("div",{className:"tile is-vertical"},l.a.createElement("div",{className:"tile"},l.a.createElement("div",{className:"tile is-parent is-vertical"},l.a.createElement("article",{className:"tile is-child notification is-primary"},t.map(function(e){return l.a.createElement("p",{className:"subtitle has-text-centered"},e.name)})),l.a.createElement("div",{className:"button-div"},l.a.createElement("a",{className:"button is-dark",onClick:function(){return n()}},"\u25c0\ufe0f"),l.a.createElement("a",{className:"button is-dark next",onClick:function(){return a()}},"\u25b6\ufe0f"))))))}),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={url:"https://swapi.co/api/!category/!page",modalVisible:!1,selectedCategory:"",modalContentVisible:!1,selectedPage:1,showSpinner:!1,info:[]},a.handleOpenModal=function(e){a.setState({selectedCategory:e,modalVisible:!0,showSpinner:!0}),a.handleRequest(e)},a.handleRequest=function(e){var t=a.state.selectedPage,n=a.state.url.replace("!category/!page","".concat(e,"/?page=").concat(t));h.a.get(n).then(function(e){a.setState({info:e.data.results,showSpinner:!1,modalContentVisible:!0})})},a.handleCloseModal=function(){a.setState({modalVisible:!1,info:[],selectedPage:1,selectedCategory:""})},a.handleAddPage=function(){a.state.selectedPage>=1&&(a.setState({selectedPage:a.state.selectedPage++,showSpinner:!0,modalContentVisible:!1}),console.log(a.state.selectedPage),a.handleRequest(a.state.selectedCategory))},a.handleSubtractPage=function(){a.state.selectedPage>1&&(a.setState({selectedPage:a.state.selectedPage--,showSpinner:!0,modalContentVisible:!1}),console.log(a.state.selectedPage),a.handleRequest(a.state.selectedCategory))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null,l.a.createElement(f,null),l.a.createElement(N,{options:this.props.data.options,handleOpenModal:this.handleOpenModal}),this.state.modalVisible&&l.a.createElement(k,null,l.a.createElement(P,{handleClick:this.handleCloseModal},this.state.showSpinner?l.a.createElement(v,null):l.a.createElement(C,{data:this.state.info,category:this.state.category,handleAddPage:this.handleAddPage,handleSubtractPage:this.handleSubtractPage}))),l.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(O,{data:r}),document.getElementById("home-container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[20,2,1]]]);
//# sourceMappingURL=main.e02f3d8c.chunk.js.map