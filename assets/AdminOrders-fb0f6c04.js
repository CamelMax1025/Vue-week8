import{_ as O,o,c as n,b as t,t as l,f as b,F as p,r as y,d as k,l as M,e as x,g as _,h as m,n as L}from"./index-651112a7.js";import{u as P}from"./toastMessage-c524b087.js";import{m as D,D as V}from"./DelModal-05bdaeb0.js";import{P as E}from"./Pagination-4c40ddc6.js";const w={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[D],watch:{order(){this.tempOrder=this.order}}},U={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},S={class:"modal-dialog modal-xl",role:"document"},T={class:"modal-content border-0"},I=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},N={class:"row"},R={class:"col-md-4"},B=t("h3",null,"用戶資料",-1),j={class:"table"},q={key:0},z=t("th",{style:{width:"100px"}},"姓名",-1),F=t("th",null,"Email",-1),H=t("th",null,"電話",-1),G=t("th",null,"地址",-1),J={class:"col-md-8"},K=t("h3",null,"訂單細節",-1),Q={class:"table"},W=t("th",{style:{width:"100px"}},"訂單編號",-1),X=t("th",null,"下單時間",-1),Y=t("th",null,"付款時間",-1),Z={key:0},tt={key:1},et=t("th",null,"付款狀態",-1),st={key:0,class:"text-success"},ot={key:1,class:"text-muted"},nt=t("th",null,"總金額",-1),lt=t("h3",null,"選購商品",-1),dt={class:"table"},at=t("thead",null,[t("tr")],-1),rt={class:"text-end"},it={class:"d-flex justify-content-end"},ct={class:"form-check"},ut={class:"form-check-label",for:"flexCheckDefault"},ht={key:0},pt={key:1},_t={class:"modal-footer"},mt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function gt(s,a,c,h,e,u){return o(),n("div",U,[t("div",S,[t("div",T,[I,t("div",A,[t("div",N,[t("div",R,[B,t("table",j,[e.tempOrder.user?(o(),n("tbody",q,[t("tr",null,[z,t("td",null,l(e.tempOrder.user.name),1)]),t("tr",null,[F,t("td",null,l(e.tempOrder.user.email),1)]),t("tr",null,[H,t("td",null,l(e.tempOrder.user.tel),1)]),t("tr",null,[G,t("td",null,l(e.tempOrder.user.address),1)])])):b("",!0)])]),t("div",J,[K,t("table",Q,[t("tbody",null,[t("tr",null,[W,t("td",null,l(e.tempOrder.id),1)]),t("tr",null,[X,t("td",null,l(s.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[Y,t("td",null,[e.tempOrder.paid_date?(o(),n("span",Z,l(s.$filters.date(e.tempOrder.paid_date)),1)):(o(),n("span",tt,"時間不正確"))])]),t("tr",null,[et,t("td",null,[e.tempOrder.is_paid?(o(),n("strong",st,"已付款")):(o(),n("span",ot,"尚未付款"))])]),t("tr",null,[nt,t("td",null,l(s.$filters.currency(e.tempOrder.total)),1)])])]),lt,t("table",dt,[at,t("tbody",null,[(o(!0),n(p,null,y(e.tempOrder.products,r=>(o(),n("tr",{key:r.id},[t("th",null,l(r.product.title),1),t("td",null,l(r.qty)+" / "+l(r.product.unit),1),t("td",rt,l(s.$filters.currency(r.final_total)),1)]))),128))])]),t("div",it,[t("div",ct,[k(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":a[0]||(a[0]=r=>e.tempOrder.is_paid=r)},null,512),[[M,e.tempOrder.is_paid]]),t("label",ut,[e.tempOrder.is_paid?(o(),n("span",ht,"已付款")):(o(),n("span",pt,"未付款"))])])])])])]),t("div",_t,[mt,t("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=r=>s.$emit("update-paid",e.tempOrder))}," 修改付款狀態 ")])])])],512)}const ft=O(w,[["render",gt]]),{VITE_URL:g,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"camelpath2",BASE_URL:"/live-vue3-dashboard-2023/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},bt={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:E,DelModal:V,OrderModal:ft},methods:{...x(P,["pushMessage"]),getOrders(s=1){this.currentPage=s;const a=`${g}/api/${f}/admin/orders?page=${s}`;this.isLoading=!0,this.$http.get(a,this.tempProduct).then(c=>{this.orders=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1}).catch(c=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"錯誤訊息",content:c.response.data.message})})},openModal(s){this.tempOrder={...s},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.openModal()},updatePaid(s){this.isLoading=!0;const a=`${g}/api/${f}/admin/order/${s.id}`,c={is_paid:s.is_paid};this.$http.put(a,{data:c}).then(h=>{this.isLoading=!1,this.$refs.orderModal.hideModal(),this.pushMessage({style:"success",title:"更新付款狀態",content:h.data.message}),this.getOrders(this.currentPage)}).catch(h=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"錯誤訊息",content:h.response.data.message})})},delOrder(){const s=`${g}/api/${f}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(s).then(()=>{this.isLoading=!1,this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(a=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"錯誤訊息",content:a.response.data.message})})}},created(){this.getOrders()}},yt={class:"table mt-4"},Ot=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),kt=["textContent"],Mt={class:"list-unstyled"},vt={class:"text-right"},Ct={class:"form-check form-switch"},$t=["id","onUpdate:modelValue","onChange"],xt=["for"],Lt={key:0},Pt={key:1},Dt={class:"btn-group"},Vt=["onClick"],Et=["onClick"];function wt(s,a,c,h,e,u){const r=_("VueLoading"),v=_("OrderModal"),C=_("DelModal"),$=_("Pagination");return o(),n(p,null,[m(r,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("table",yt,[Ot,t("tbody",null,[(o(!0),n(p,null,y(e.orders,d=>(o(),n(p,{key:d.id},[e.orders.length?(o(),n("tr",{key:0,class:L({"text-secondary":!d.is_paid})},[t("td",null,l(s.$filters.date(d.create_at)),1),t("td",null,[d.user?(o(),n("span",{key:0,textContent:l(d.user.email)},null,8,kt)):b("",!0)]),t("td",null,[t("ul",Mt,[(o(!0),n(p,null,y(d.products,i=>(o(),n("li",{key:i.id},l(i.product.title)+" 數量："+l(i.qty)+" "+l(i.product.unit),1))),128))])]),t("td",vt,l(d.total),1),t("td",null,[t("div",Ct,[k(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${d.id}`,"onUpdate:modelValue":i=>d.is_paid=i,onChange:i=>u.updatePaid(d)},null,40,$t),[[M,d.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${d.id}`},[d.is_paid?(o(),n("span",Lt,"已付款")):(o(),n("span",Pt,"未付款"))],8,xt)])]),t("td",null,[t("div",Dt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:i=>u.openModal(d)}," 檢視 ",8,Vt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:i=>u.openDelOrderModal(d)}," 刪除 ",8,Et)])])],2)):b("",!0)],64))),128))])]),m(v,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),m(C,{item:e.tempOrder,ref:"delModal",onDelItem:u.delOrder},null,8,["item","onDelItem"]),m($,{pages:e.pagination,onEmitPages:u.getOrders},null,8,["pages","onEmitPages"])],64)}const At=O(bt,[["render",wt]]);export{At as default};