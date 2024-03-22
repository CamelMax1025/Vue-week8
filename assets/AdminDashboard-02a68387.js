import{m as V,e as v,_ as m,o as n,c as r,F as k,r as M,n as b,b as s,t as f,f as T,g as p,h as l,i as d,j as u,w as E,k as R}from"./index-c3c5a18f.js";import{u as _}from"./toastMessage-0c9ae897.js";const y={computed:{...V(_,["messages"])},methods:{...v(_,["clearToast"])}},L={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},x={class:"toast-header"},A={class:"me-auto"},N=["onClick"],S={key:0,class:"toast-body"};function w(a,e,c,g,h,i){return n(),r("div",L,[(n(!0),r(k,null,M(a.messages,(t,o)=>(n(),r("div",{key:`toast${o}`,class:b(["toast show",`toast${o}`]),role:"alert"},[s("div",x,[s("span",{class:b([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),s("strong",A,f(t.title),1),s("button",{type:"button",class:"btn-close",onClick:$=>a.clearToast(o),"aria-label":"Close"},null,8,N)]),t.content?(n(),r("div",S,f(t.content),1)):T("",!0)],2))),128))])}const C=m(y,[["render",w]]),{VITE_URL:D}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"camelpath2",BASE_URL:"/Vue-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={methods:{...v(_,["pushMessage"]),logout(){const a=`${D}/logout`;this.$http.post(a).then(e=>{this.pushMessage({style:"success",title:"登出狀態",content:e.data.message}),this.$router.push("/")}).catch(e=>{this.pushMessage({style:"danger",title:"登出狀態",content:e.response.data.message})})}}},U={class:"navbar navbar-expand-lg navbar-dark bg-dark"},B={class:"container-fluid"},P=s("a",{class:"navbar-brand",href:"#"},"返回前台頁面",-1),O=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),z={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},H={class:"navbar-nav"},F=s("div",{class:"navbar-nav ms-auto"},null,-1);function j(a,e,c,g,h,i){const t=p("RouterLink");return n(),r("nav",U,[s("div",B,[P,O,s("div",z,[s("div",H,[l(t,{to:"/admin/products",class:"nav-link"},{default:d(()=>[u("產品")]),_:1}),l(t,{to:"/admin/orders",class:"nav-link"},{default:d(()=>[u("訂單")]),_:1}),l(t,{to:"/admin/coupons",class:"nav-link"},{default:d(()=>[u("優惠券")]),_:1}),l(t,{to:"/admin/article",class:"nav-link"},{default:d(()=>[u("貼文")]),_:1}),s("a",{href:"#",onClick:e[0]||(e[0]=E((...o)=>i.logout&&i.logout(...o),["prevent"])),class:"nav-link"},"登出")]),F])])])}const q=m(I,[["render",j]]),{VITE_URL:G,VITE_PATH:Y}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"camelpath2",BASE_URL:"/Vue-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},J={components:{NavbarLayout:q,ToastMessages:C},data(){return{status:!1}},methods:{...v(_,["pushMessage"])},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${a}`;const e=`${G}/api/user/check`;this.$http.post(e).then(c=>{this.pushMessage({style:"success",title:"成功登入",content:c.data.message}),this.status=!0}).catch(c=>{this.pushMessage({style:"danger",title:"錯誤訊息",content:c.response.data.message}),this.$router.push("/")})}},K={class:"container-fluid mt-3 position-relative"};function Q(a,e,c,g,h,i){const t=p("NavbarLayout"),o=p("ToastMessages"),$=p("RouterView");return n(),r(k,null,[l(t),s("div",K,[l(o),h.status?(n(),R($,{key:0})):T("",!0)])],64)}const Z=m(J,[["render",Q]]);export{Z as default};
