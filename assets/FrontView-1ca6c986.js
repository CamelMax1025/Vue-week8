import{m as g,e as f,_ as c,g as l,o as r,c as d,b as e,h as a,i as s,j as n,t as h,F as x,s as k}from"./index-f6e6df68.js";import{c as i}from"./cartStore-375bf033.js";const w="/Vue-week8/assets/logo_plus-26695aca.png";const y={computed:{...g(i,["carts"])},methods:{...f(i,["getCart"])},watch:{},mounted(){this.getCart()}},N={class:"container-fluid d-flex flex-column",style:{background:"#0d274a"}},$={class:"container d-flex navbar navbar-expand-lg navbar-light"},V=e("img",{src:w,alt:"Logo",class:"navbar-brand-img"},null,-1),C=e("button",{class:"navbar-toggler bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},A={class:"navbar-nav"},B=e("i",{class:"bi bi-cart w-20 h-20"},null,-1),S={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"};function T(_,m,p,u,v,b){const t=l("RouterLink");return r(),d("div",N,[e("nav",$,[a(t,{class:"navbar-brand big-title",to:"/"},{default:s(()=>[n("7.11")]),_:1}),a(t,{class:"navbar-brand",to:"/"},{default:s(()=>[V]),_:1}),a(t,{class:"navbar-brand small-title",to:"/"},{default:s(()=>[n("TacTical")]),_:1}),C,e("div",j,[e("div",A,[a(t,{class:"nav-item nav-link me-4",to:"/products"},{default:s(()=>[n("商品頁面")]),_:1}),a(t,{class:"nav-item nav-link me-4",to:"/login"},{default:s(()=>[n("帳號登入")]),_:1}),a(t,{class:"nav-item nav-link me-4",to:"/admin/products"},{default:s(()=>[n("會員後台管理")]),_:1}),a(t,{class:"nav-item btn btn-outline-primary position-relative",to:"/cart"},{default:s(()=>{var o;return[B,e("span",S,h((o=this.carts)==null?void 0:o.length),1)]}),_:1})])])])])}const F=c(y,[["render",T]]),L={components:{NavbarComponentVue:F}},M=k('<div class="bg-dark py-2"><div class="container"><div class="d-flex align-items-center justify-content-center text-white mb-md-2 mb-1"><ul class="d-flex list-unstyled mb-0 h2 align-items-center"><li><a href="#" class="text-white mx-3"><i class="bi bi-github"></i></a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-center align-items-md-center align-items-center text-white"><p class="mb-0">©僅個人練習使用 不做任何商業用途</p></div></div></div>',1);function R(_,m,p,u,v,b){const t=l("NavbarComponentVue"),o=l("router-view");return r(),d(x,null,[a(t),a(o),M],64)}const q=c(L,[["render",R]]);export{q as default};