var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,i)=>{for(var s in i||(i={}))t.call(i,s)&&a(e,s,i[s]);if(o)for(var s of o(i))r.call(i,s)&&a(e,s,i[s]);return e};import{r as s,I as c,S as n,R as m,a as l,u as p,G as g,L as h,b as d,T as u,c as f,w,B as E,d as v,e as A,A as y,f as k,C,g as x,t as b,h as j,i as S,j as I,k as R}from"./vendor.dd46a42f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,i)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),n=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){i(new Error(`Failed to import: ${e}`)),a(n)},onload(){o(self[t].moduleMap[s]),a(n)}});document.head.appendChild(n)})),self[t].moduleMap={}}}("assets/");const B=e=>{const t=e.imagenDestacada;return s.createElement(c,{align:"0 50%",boxSize:"72vh",src:t,width:"100%"})},F=()=>s.createElement(c,{align:"0 80%",boxSize:"72vh",objectFit:"cover",src:"./assets/backgroundHome.7306d073.jpg",width:"100%"}),O=e=>s.createElement(n,null,s.createElement(m,{exact:!0,component:F,path:"/"}),s.createElement(m,{path:"/proyectos",render:()=>s.createElement(B,{imagenDestacada:e.imagenDestacada})}),s.createElement(m,{path:"/gestiones",render:()=>s.createElement(B,{imagenDestacada:e.imagenDestacada})}),s.createElement(m,{path:"/presupuestos",render:()=>s.createElement(B,{imagenDestacada:e.imagenDestacada})}),s.createElement(m,{path:"/contacto",render:()=>s.createElement(B,{imagenDestacada:e.imagenDestacada})}),s.createElement(l,{to:"/"})),P=[{href:"/proyectos/serie-14",text:"SERIE 14",serieCat:"serie-14"},{href:"/proyectos/serie-15",text:"SERIE 15",serieCat:"serie-15"},{href:"/proyectos/serie-16",text:"SERIE 16",serieCat:"serie-16"}],D=[{proyid:1,href:"/proyectos/casa-1",text:"CASA 1",cat:"serie-14"},{proyid:2,href:"/proyectos/casa-2",text:"CASA 2",cat:"serie-14"},{proyid:3,href:"/proyectos/casa-5",text:"CASA 5",cat:"serie-15"},{proyid:4,href:"/proyectos/casa-6",text:"CASA 6",cat:"serie-15"},{proyid:5,href:"/proyectos/casa-7",text:"CASA 7",cat:"serie-16"},{proyid:6,href:"/proyectos/casa-8",text:"CASA 8",cat:"serie-16"}],M=e=>{const{pathname:t}=p(),o=D.map((e=>e.href)).includes(t)&&0!=Object.keys(e.galeriaProyecto[0]).length?D.filter((e=>e.href==t))[0].proyid:null;return s.createElement(s.Fragment,null,s.createElement(g,{autoFlow:"column",fontSize:"xl",height:"12vh",spacing:0,templateRows:"repeat(6, 1fr)"},P.map((o=>s.createElement(h,{key:o.href,to:o.href},s.createElement(d,{_hover:{color:"primary.500"},color:t===o.href?"primary.500":"white",paddingLeft:8,spacing:0},s.createElement(u,{"data-seriecat":o.serieCat,fontSize:"xs",lineHeight:1.4,onClick:t=>e.onSerieClick(t)},o.text)))))),s.createElement(g,{autoFlow:"column",fontSize:"xl",height:"12vh",spacing:0,templateRows:"repeat(6, 1fr)"},D.filter((t=>t.cat==e.serie)).map(((o,r)=>s.createElement(h,{key:o.href,to:o.href},s.createElement(d,{_hover:{color:"primary.500"},color:t===o.href?"primary.500":"white",paddingLeft:8,spacing:0},s.createElement(u,{"data-proyid":o.proyid,fontSize:"xs",lineHeight:1.4,onClick:t=>e.onProyClick(t)},o.text)))))),s.createElement(f,{direction:"row",height:12,paddingLeft:16,spacing:2},o&&e.galeriaProyecto.map((t=>s.createElement(f,{key:t.id,_hover:{borderColor:"secondary.500",cursor:"pointer"},borderColor:"secondary.900",borderRadius:"md",borderWidth:2,padding:"1px"},s.createElement(c,{key:t.id,"data-proyid":o,"data-selectedimageid":t.id,height:12,objectFit:"cover",src:t.url,width:12,onClick:t=>e.onImageClick(t)}))))))},L=()=>s.createElement(s.Fragment,null,s.createElement(f,{flex:"1",justifyContent:"center"},s.createElement(u,{align:"center",color:"secondary.300"},"En construcción")));var z=w((e=>s.createElement(n,null,s.createElement(m,{exact:!0,path:"/gestiones",render:()=>s.createElement(L,null)}),s.createElement(m,{exact:!0,path:"/presupuestos",render:()=>s.createElement(L,null)}),s.createElement(m,{exact:!0,path:"/contacto",render:()=>s.createElement(L,null)}),s.createElement(m,{path:"/proyectos",render:()=>s.createElement(M,i(i({},e),{galeriaProyecto:e.galeriaProyecto,serie:e.serie,onImageClick:t=>e.onImageClick(t),onProyClick:t=>e.onProyClick(t),onSerieClick:t=>e.onSerieClick(t)}))}),s.createElement(l,{to:"/"}))));const N=[{id:"proyectos",href:"/proyectos",text:"MODELADOS & PROYECTOS"},{id:"gestiones",href:"/gestiones",text:"GESTIONES & TRÁMITES"},{id:"presupuestos",href:"/presupuestos",text:"COTIZACIONES & CÓMPUTOS"},{id:"contacto",href:"/contacto",text:"ACERCA & CONTACTO"}],Q=e=>{const{pathname:t}=p();return s.createElement(f,{divider:s.createElement(E,{borderTop:1,borderTopColor:"primary.500",height:0,width:"35%"}),fontSize:"xl",spacing:0},N.map((o=>s.createElement(h,{key:o.href,to:o.href,onClick:t=>e.onSeccionClick(t,o.id)},s.createElement(f,{_hover:{color:"primary.500"},color:t===o.href?"primary.500":"white",paddingLeft:8,spacing:0},s.createElement(u,{fontSize:"xs",lineHeight:1.4},o.text))))))},U=e=>s.createElement(f,{direction:"row",left:e.moveBarPosition,position:"absolute",spacing:0,transition:"all 1s ease-out;",onMouseEnter:()=>e.handleEnter(),onMouseLeave:()=>e.handleLeave()},s.createElement(v,{borderRightRadius:"9999",borderWidth:"0",paddingLeft:e.moveBarAnimationPL,paddingRight:e.moveBarAnimationPR,transition:"all 1s ease-out;",onClick:()=>e.moveNavbar()},s.createElement(A,{as:0==e.posicionMenu?y:k,height:6,width:6}))),J=()=>{const[e,t]=s.useState("-40px"),[o,r]=s.useState(0),[a,i]=s.useState("12"),[n,m]=s.useState("2"),[l,p]=s.useState("serie-14"),[g,d]=s.useState([{}]),[u,w]=s.useState("./assets/backgroundHome.7306d073.jpg");return s.createElement(f,{backgroundColor:"secondary.900",justifyContent:"space-between",minHeight:"100vh",overflow:"hidden",paddingX:0,spacing:0},s.createElement(f,{height:"28vh",justifyContent:"center",order:o,spacing:0},s.createElement(C,{maxWidth:"container.xl",paddingX:0},s.createElement(f,{direction:"row",spacing:0},s.createElement(f,{alignContent:"baseline",direction:"row",spacing:0},s.createElement(h,{to:"/"},s.createElement(c,{src:"data:image/png;base64,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"})),s.createElement(f,{paddingLeft:8,width:180},s.createElement(Q,{onSeccionClick:(e,t)=>((e,t)=>{const o=X.filter((e=>e.seccion==t)).map((e=>e.imgSrc)).join();w(o)})(0,t)}))),s.createElement(f,{direction:"row",flex:"1",spacing:0},s.createElement(z,{galeriaProyecto:g,serie:l,onImageClick:e=>(e=>{const t=T.filter((t=>t.proyId==e.target.dataset.proyid))[0].pictures.filter((t=>t.id==e.target.dataset.selectedimageid)).map((e=>e.url)).join();w(t)})(e),onProyClick:e=>(e=>{w(T.filter((t=>t.proyId==e.target.dataset.proyid))[0].imgSrcDestacada);const t=T.filter((t=>t.proyId==e.target.dataset.proyid)).map((e=>e.pictures))[0];d(t)})(e),onSerieClick:e=>(e=>{p(e.target.dataset.seriecat),w(Y.filter((t=>t.serie==e.target.dataset.seriecat)).map((e=>e.imgSrc)).join())})(e)})))),s.createElement(U,{handleEnter:()=>(t("0px"),i("6"),void m("8")),handleLeave:()=>(t("-40px"),i("12"),void m("2")),moveBarAnimationPL:a,moveBarAnimationPR:n,moveBarPosition:e,moveNavbar:()=>(r(0==o?1:0),t("-40px"),i("12"),void m("2")),posicionMenu:o})),s.createElement(f,null,s.createElement(O,{imagenDestacada:u})))},T=[{proyId:1,imgSrcDestacada:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",pictures:[{id:0,url:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"},{id:1,url:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg"},{id:2,url:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{id:3,url:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg"}]},{proyId:2,imgSrcDestacada:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg",pictures:[{id:0,url:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg"},{id:1,url:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"},{id:2,url:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{id:3,url:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg"}]},{proyId:3,imgSrcDestacada:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",pictures:[{id:0,url:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{id:1,url:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg"},{id:2,url:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg"},{id:3,url:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"}]},{proyId:4,imgSrcDestacada:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg",pictures:[{id:0,url:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg"},{id:1,url:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg"},{id:2,url:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{id:3,url:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"}]},{proyId:5,imgSrcDestacada:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg",pictures:[{id:0,url:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"},{id:1,url:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg"},{id:2,url:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{id:3,url:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg"}]},{proyId:6,imgSrcDestacada:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",pictures:[{id:0,url:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{id:1,url:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"},{id:2,url:"https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600w-555325381.jpg"},{id:3,url:"https://image.shutterstock.com/image-photo/beautiful-new-home-exterior-covered-600w-1722047152.jpg"}]}],Y=[{serie:"serie-14",imgSrc:"https://image.shutterstock.com/image-photo/exterior-view-house-green-grasshome-600w-700161730.jpg"},{serie:"serie-15",imgSrc:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"},{serie:"serie-16",imgSrc:"https://image.shutterstock.com/image-illustration/red-suv-car-3d-render-600w-584706703.jpg"}],X=[{seccion:"presupuestos",imgSrc:"https://image.shutterstock.com/image-photo/construction-theme-level-ruler-calculator-600w-399042244.jpg"},{seccion:"gestiones",imgSrc:"https://image.shutterstock.com/image-photo/aerial-view-construction-worker-site-600w-1006180303.jpg"},{seccion:"contacto",imgSrc:"https://image.shutterstock.com/image-photo/architectural-office-desk-background-construction-600w-383356447.jpg"},{seccion:"proyectos",imgSrc:"https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg"}];var q=x({styles:{global:e=>({"html, body, #root":{color:"blackAlpha.900",height:"100%"},"*::-webkit-scrollbar":{display:"none"}})},colors:{primary:{50:"#FFF9BD",100:"#FFF693",200:"#FFF693",300:"#FFF583",400:"#FFF372",500:"#fff159",600:"#E6D950",700:"#CCC147",800:"#BFB543",900:"#BFB543"},secondary:i(i({},b.colors.messenger),{100:b.colors.messenger[50],300:"#FFD60A",500:"#FFC300",600:"#003566",700:"#001D3D",900:"#000814",50:"rgba(65,137,230,.15)"}),success:b.colors.whatsapp,error:b.colors.red,warning:b.colors.orange},sizes:{container:{xl:"1200px"}},fonts:{body:"Proxima Nova",heading:"Proxima Nova"},components:{Link:{variants:{unstyled:({colorScheme:e="blackAlpha"})=>({color:`${e}.700`,_hover:{color:`${e}.800`,textDecoration:"none"}}),color:({colorScheme:e="secondary"})=>({color:`${e}.500`,_hover:{color:`${e}.600`,textDecoration:"none"}})},defaultProps:{variant:"color"}},Button:{sizes:{lg:{fontSize:"md"}},variants:{ghost:({colorScheme:e="secondary"})=>({backgroundColor:`${e}.50`,":hover, :focus":{backgroundColor:`${e}.100`}})}},Input:{parts:["field"],defaultProps:{focusBorderColor:"secondary.500"},variants:{filled:{field:{borderRadius:"sm",color:"blackAlpha.800",backgroundColor:"white",":hover, :focus":{backgroundColor:"white"}}},outline:{field:{borderColor:"gray.300"}}}}}});j.render(s.createElement(s.Fragment,null,s.createElement(S,{initialColorMode:q.config.initialColorMode}),s.createElement(I,null,s.createElement(R,{theme:q},s.createElement(J,null)))),document.getElementById("root"));
