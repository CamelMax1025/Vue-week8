import{_ as g,a as p,g as u,o as _,c as h,b as e,h as l,i as V,F as k,r as w,t as d,n as m,j as y}from"./index-f6e6df68.js";const{VITE_URL:f,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"camelpath2",BASE_URL:"/Vue-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},C={data(){return{carts:{},temporder:{},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){const r=`${f}/api/${b}/cart`;p.get(r).then(s=>{this.carts=s.data.data}).catch(s=>{alert(s.message)})},createOrder(){const r=`${f}/api/${b}/order`,s=this.form;p.put(r,{data:s}).then(c=>{console.log(c),this.$router.push(`/FrontView/checkout/${c.data.orderId}`),c.form.resetForm()}).catch(c=>{})}},mounted(){this.getCart()}},R={class:"bg-light pt-7 pb-7"},T={class:"container"},E={class:"row justify-content-center flex-md-row flex-column-reverse"},N={class:"col-md-6"},P={class:"bg-white p-4"},F=e("h4",{class:"fw-bold"},"1. 訂購資訊",-1),U=e("p",{class:"mt-4"},"聯絡資訊",-1),j={class:"mb-2"},A=e("label",{for:"ContactMail",class:"text-muted mb-0 form-label"},"Email",-1),L=e("div",{class:"form-group form-check"},[e("input",{type:"checkbox",class:"form-check-input rounded-0",id:"ContactLorem"}),e("label",{class:"form-check-label",for:"ContactLorem"}," 是否記住Email")],-1),S={class:"mb-2"},q=e("label",{for:"ContactName",class:"text-muted mb-0 form-label"},"訂購人姓名",-1),I={class:""},M=e("label",{for:"ContactPhone",class:"text-muted mb-0 form-label"},"Phone",-1),O={class:"bg-white p-4 mt-3"},B=e("h4",{class:"fw-bold"},"2. 寄送資訊",-1),D=e("p",{class:"mt-4 mb-3"},"寄送地址",-1),H={class:"form-row"},$={class:"col mb-2"},z=e("p",{class:"mt-4 mb-2"},"Payment",-1),W=e("div",{class:"form-check mb-2"},[e("input",{class:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios1",value:"option1",checked:""}),e("label",{class:"form-check-label text-muted",for:"gridRadios1"},"WebATM ")],-1),G=e("div",{class:"form-check mb-2"},[e("input",{class:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios2",value:"option2"}),e("label",{class:"form-check-label text-muted",for:"gridRadios2"},"ATM ")],-1),J=e("div",{class:"form-check mb-2"},[e("input",{class:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios3",value:"option3"}),e("label",{class:"form-check-label text-muted",for:"gridRadios3"},"ApplePay ")],-1),K=e("div",{class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},[e("a",{href:"./product.html",class:"text-dark mt-md-0 mt-3"},[e("i",{class:"fas fa-chevron-left me-2"}),y(" 購物須知")]),e("button",{type:"submit",class:"btn btn-dark py-3 px-7 rounded-0"}," 確認訂單 ")],-1),Q={class:"col-md-4"},X={class:"border p-4 mb-4"},Y=e("h4",{class:"mb-4"},"訂購明細",-1),Z=["src"],ee={class:"w-100"},se={class:"d-flex justify-content-between fw-bold"},te={class:"mb-0"},oe={class:"mb-0"},le={class:"d-flex justify-content-between"},ae={class:"text-muted mb-0"},de={class:"mb-0"},ce={class:"table mt-4 border-top border-bottom text-muted"},re=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),ie={class:"text-end border-0 px-0 pt-4"},ne=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 支付方式 "),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),me={class:"d-flex justify-content-between mt-4"},ue=e("p",{class:"mb-0 h4 fw-bold"},"結帳金額",-1),_e={class:"mb-0 h4 fw-bold"};function he(r,s,c,pe,t,x){const i=u("VField"),n=u("error-message"),v=u("VForm");return _(),h("div",R,[e("div",T,[e("div",E,[e("div",N,[l(v,{ref:"form",onSubmit:x.createOrder},{default:V(({errors:o})=>[e("div",P,[F,U,e("div",j,[A,l(i,{type:"email",class:m(["form-control rounded-0",{"is-invalid":o.email}]),id:"ContactMail",name:"email","aria-describedby":"emailHelp",placeholder:"example@gmail.com",rules:"required|email",modelValue:t.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>t.form.user.email=a)},null,8,["class","modelValue"]),l(n,{name:"email",class:"invalid-feedback"})]),L,e("div",S,[q,l(i,{type:"text",class:m(["form-control rounded-0",{"is-invalid":o.name}]),id:"ContactName",name:"name",placeholder:"姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>t.form.user.name=a)},null,8,["modelValue","class"]),l(n,{name:"name",class:"invalid-feedback"})]),e("div",I,[M,l(i,{type:"text",class:m(["form-control rounded-0",{"is-invalid":o.tel}]),id:"ContactPhone",placeholder:"09xxxxxxxx",rules:"required|min:10|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>t.form.user.tel=a),name:"tel"},null,8,["modelValue","class"]),l(n,{name:"tel",class:"invalid-feedback"})])]),e("div",O,[B,D,e("div",H,[e("div",$,[l(i,{type:"text",class:m(["form-control",{"is-invalid":o.address}]),id:"Contactaddress",name:"address",placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>t.form.user.address=a)},null,8,["class","modelValue"]),l(n,{name:"address",class:"invalid-feedback"})])]),z,W,G,J]),K]),_:1},8,["onSubmit"])]),e("div",Q,[e("div",X,[Y,(_(!0),h(k,null,w(t.carts.carts,o=>(_(),h("div",{class:"d-flex mb-2",key:o.id},[e("img",{src:o.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,Z),e("div",ee,[e("div",se,[e("p",te,d(o.product.title),1),e("p",oe,"x"+d(o.qty),1)]),e("div",le,[e("p",ae,[e("small",null,"NT$"+d(o.product.price),1)]),e("p",de,"NT$"+d(o.total),1)])])]))),128)),e("table",ce,[e("tbody",null,[e("tr",null,[re,e("td",ie," NT$"+d(t.carts.total),1)]),ne])]),e("div",me,[ue,e("p",_e,"NT$"+d(t.carts.final_total),1)])])])])])])}const be=g(C,[["render",he]]);export{be as default};