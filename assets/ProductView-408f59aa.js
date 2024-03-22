import{_ as m,a as h,e as v,L as g,g as n,o as r,c as l,h as d,b as t,i as _,t as i,d as b,x as f,F as w,r as x,w as L,j as u}from"./index-c3c5a18f.js";/* empty css              */import{c as T}from"./cartStore-a1a1b084.js";const{VITE_URL:V,VITE_PATH:k}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"camelpath2",BASE_URL:"/Vue-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},y={data(){return{product:{},qty:1,isLoading:!1}},methods:{getProduct(){const{id:c}=this.$route.params;this.isLoading=!0,h.get(`${V}/api/${k}/product/${c}`).then(o=>{this.product=o.data.product,this.isLoading=!1})},...v(T,["addToCart"])},mounted(){this.getProduct()},components:{Loading:g}},E={class:"container pt-5"},P={class:"row align-items-center"},R={class:"col-md-7"},C={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},D={class:"carousel-inner"},S={class:"carousel-item active"},U=["src"],N={class:"col-md-5"},A={"aria-label":"breadcrumb"},B={class:"breadcrumb bg-white px-0 mb-0 py-3"},I={class:"breadcrumb-item"},q={class:"breadcrumb-item"},H=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1),M={class:"fw-bold h1 mb-1"},F={class:"mb-0 text-muted text-end"},O={class:"h4 fw-bold text-end"},j={class:"row align-items-center"},z={class:"col-6"},G={class:"input-group my-3 bg-light rounded"},J=["value"],K={class:"col-6"},Q={class:"row my-5"},W={class:"col-md-7"},X={class:"col-md-5"};function Y(c,o,Z,$,s,tt){const p=n("Loading"),a=n("RouterLink");return r(),l("div",E,[d(p,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=e=>s.isLoading=e)},null,8,["active"]),t("div",P,[t("div",R,[t("div",C,[t("div",D,[t("div",S,[t("img",{src:s.product.imageUrl,class:"d-block w-100",alt:"..."},null,8,U)])])])]),t("div",N,[t("nav",A,[t("ol",B,[t("li",I,[d(a,{to:"/",class:"text-muted"},{default:_(()=>[u("Home")]),_:1})]),t("li",q,[d(a,{to:"/products",class:"text-muted"},{default:_(()=>[u("Product")]),_:1})]),H])]),t("h2",M,i(s.product.title),1),t("p",F,[t("del",null,"NT$"+i(s.product.origin_price),1)]),t("p",O,"NT$"+i(s.product.price),1),t("div",j,[t("div",z,[t("div",G,[b(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o[1]||(o[1]=e=>s.qty=e)},[(r(),l(w,null,x(20,e=>t("option",{value:e,key:e},i(e),9,J)),64))],512),[[f,s.qty]])])]),t("div",K,[t("a",{class:"text-nowrap btn btn-dark w-100 py-2",onClick:o[2]||(o[2]=L(e=>c.addToCart(s.product.id),["prevent"]))},"加入購物車")])])])]),t("div",Q,[t("div",W,[t("p",null,i(s.product.content),1)]),t("div",X,[t("p",null,i(s.product.description),1)])])])}const it=m(y,[["render",Y]]);export{it as default};
