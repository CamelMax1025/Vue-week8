import{e as y,_ as M,o as d,c as a,b as t,d as c,v as p,j as C,f as v,F as U,r as x,l as L,g as _,h as g,t as f}from"./index-651112a7.js";import{u as k}from"./toastMessage-c524b087.js";import{m as D,D as N}from"./DelModal-05bdaeb0.js";import{P as E}from"./Pagination-4c40ddc6.js";const I={props:{product:Object,isNew:Boolean},data(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[D],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{...y(k,["pushMessage"]),uploadFile(){const l=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",l);const i=`${{}.VITE_API}/api/camelpath2/admin/upload`;this.status.fileUploading=!0,this.$http.post(i,e,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{this.status.fileUploading=!1,this.tempProduct.imageUrl=r.data.imageUrl,this.$refs.fileInput.value="",this.pushMessage({style:"success",title:"圖片上傳結果",content:r.data.message})}).catch(r=>{this.status.fileUploading=!1,this.pushMessage({style:"danger",title:"圖片上傳結果",content:r.response.data.message})})}}},T={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},F={class:"modal-dialog modal-xl",role:"document"},$={class:"modal-content border-0"},A={class:"modal-header bg-dark text-white"},B={class:"modal-title",id:"exampleModalLabel"},R={key:0},S={key:1},O=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},H={class:"row"},z={class:"col-sm-4"},q={class:"mb-3"},G=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),J={class:"mb-3"},K={for:"customFile",class:"form-label"},Q={key:0,class:"fas fa-spinner fa-spin"},W=["src"],X={key:0,class:"mt-5"},Y=["onUpdate:modelValue"],Z=["src"],tt=["onClick"],et={key:0},st={class:"col-sm-8"},ot={class:"mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),it={class:"row gx-2"},nt={class:"mb-3 col-md-6"},dt=t("label",{for:"category",class:"form-label"},"分類",-1),at={class:"mb-3 col-md-6"},rt=t("label",{for:"price",class:"form-label"},"單位",-1),ct={class:"row gx-2"},ut={class:"mb-3 col-md-6"},pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),mt={class:"mb-3 col-md-6"},ht=t("label",{for:"price",class:"form-label"},"售價",-1),_t=t("hr",null,null,-1),gt={class:"mb-3"},ft=t("label",{for:"description",class:"form-label"},"產品描述",-1),bt={class:"mb-3"},Pt=t("label",{for:"content",class:"form-label"},"說明內容",-1),vt={class:"mb-3"},yt={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Ut={class:"modal-footer"},xt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function kt(l,e,i,r,s,n){return d(),a("div",T,[t("div",F,[t("div",$,[t("div",A,[t("h5",B,[i.isNew?(d(),a("span",R,"新增產品")):(d(),a("span",S,"編輯產品"))]),O]),t("div",j,[t("div",H,[t("div",z,[t("div",q,[G,c(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=o=>s.tempProduct.imageUrl=o),placeholder:"請輸入圖片連結"},null,512),[[p,s.tempProduct.imageUrl]])]),t("div",J,[t("label",K,[C("或 上傳圖片 "),s.status.fileUploading?(d(),a("i",Q)):v("",!0)]),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...o)=>n.uploadFile&&n.uploadFile(...o))},null,544)]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl},null,8,W),s.tempProduct.imagesUrl?(d(),a("div",X,[(d(!0),a(U,null,x(s.tempProduct.imagesUrl,(o,m)=>(d(),a("div",{class:"mb-3",key:m},[c(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":h=>s.tempProduct.imagesUrl[m]=h,placeholder:"請輸入連結"},null,8,Y),[[p,s.tempProduct.imagesUrl[m]]]),t("div",null,[t("img",{class:"img-fluid",src:o},null,8,Z)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:h=>s.tempProduct.imagesUrl.splice(m,1)}," 移除 ",8,tt)]))),128)),s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]||!s.tempProduct.imagesUrl.length?(d(),a("div",et,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):v("",!0)])):v("",!0)]),t("div",st,[t("div",ot,[lt,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=o=>s.tempProduct.title=o),placeholder:"請輸入標題"},null,512),[[p,s.tempProduct.title]])]),t("div",it,[t("div",nt,[dt,c(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=o=>s.tempProduct.category=o),placeholder:"請輸入分類"},null,512),[[p,s.tempProduct.category]])]),t("div",at,[rt,c(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=o=>s.tempProduct.unit=o),placeholder:"請輸入單位"},null,512),[[p,s.tempProduct.unit]])])]),t("div",ct,[t("div",ut,[pt,c(t("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.origin_price=o),placeholder:"請輸入原價"},null,512),[[p,s.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",mt,[ht,c(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.price=o),min:"0",placeholder:"請輸入售價"},null,512),[[p,s.tempProduct.price,void 0,{number:!0}]])])]),_t,t("div",gt,[ft,c(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.description=o),placeholder:"請輸入產品描述"},null,512),[[p,s.tempProduct.description]])]),t("div",bt,[Pt,c(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.content=o),placeholder:"請輸入產品說明內容"},null,512),[[p,s.tempProduct.content]])]),t("div",vt,[t("div",yt,[c(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.is_enabled=o),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[L,s.tempProduct.is_enabled]]),Mt])])])])]),t("div",Ut,[xt,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=o=>l.$emit("update-product",s.tempProduct))}," 確認 ")])])])],512)}const Vt=M(I,[["render",kt]]),{VITE_URL:b,VITE_PATH:P}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"camelpath2",BASE_URL:"/live-vue3-dashboard-2023/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},wt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},modal:{editModal:"",delModal:""},currentPage:1}},components:{ProductModal:Vt,DelModal:N,Pagination:E},methods:{...y(k,["pushMessage"]),getProducts(l=1){this.currentPage=l;const e=`${b}/api/${P}/admin/products?page=${l}`;this.isLoading=!0,this.$http.get(e).then(i=>{this.products=i.data.products,this.pagination=i.data.pagination,this.isLoading=!1,this.pushMessage({style:"success",title:"成功取得產品資訊",content:i.data.message})}).catch(i=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:i.response.data.message})})},openModal(l,e){l?(this.tempProduct={},this.isNew=!0):(this.tempProduct={...e},this.isNew=!1),this.$refs.productModal.openModal()},updateProduct(l){this.tempProduct=l;let e=`${b}/api/${P}/admin/product`;this.isLoading=!0;let i="post",r="新增產品";this.isNew||(e=`${b}/api/${P}/admin/product/${this.tempProduct.id}`,i="put",r="更新產品");const s=this.$refs.productModal;this.$http[i](e,{data:this.tempProduct}).then(n=>{this.isLoading=!1,this.pushMessage({style:"success",title:r,content:n.data.message}),s.hideModal(),this.getProducts(this.currentPage)}).catch(n=>{this.isLoading=!1,this.pushMessage({style:"danger",title:r,content:n.response.data.message})})},openDelProductModal(l){this.tempProduct={...l},this.$refs.delModal.openModal()},delProduct(){const l=`${b}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(l).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除產品",content:e.data.message}),this.$refs.delModal.hideModal(),this.getProducts(this.currentPage)}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除產品",content:e.response.data.message})})}},created(){this.getProducts()}},Ct={class:"text-end mt-4"},Lt={class:"table mt-4"},Dt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"200"},"編輯")])],-1),Nt={class:"text-right"},Et={class:"text-right"},It={key:0,class:"text-success"},Tt={key:1},Ft={class:"btn-group"},$t=["onClick"],At=["onClick"];function Bt(l,e,i,r,s,n){const o=_("VueLoading"),m=_("Pagination"),h=_("ProductModal"),V=_("DelModal");return d(),a("div",null,[g(o,{active:s.isLoading,"z-index":1060},null,8,["active"]),t("div",Ct,[t("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=u=>n.openModal(!0))}," 建立新的產品 ")]),t("table",Lt,[Dt,t("tbody",null,[(d(!0),a(U,null,x(s.products,u=>(d(),a("tr",{key:u.id},[t("td",null,f(u.category),1),t("td",null,f(u.title),1),t("td",Nt,f(l.$filters.currency(u.origin_price)),1),t("td",Et,f(l.$filters.currency(u.price)),1),t("td",null,[u.is_enabled?(d(),a("span",It,"啟用")):(d(),a("span",Tt,"未啟用"))]),t("td",null,[t("div",Ft,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:w=>n.openModal(!1,u)}," 編輯 ",8,$t),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:w=>n.openDelProductModal(u)}," 刪除 ",8,At)])])]))),128))])]),g(m,{pages:s.pagination,onEmitPages:n.getProducts},null,8,["pages","onEmitPages"]),g(h,{onUpdateProduct:n.updateProduct,product:s.tempProduct,isNew:s.isNew,ref:"productModal"},null,8,["onUpdateProduct","product","isNew"]),g(V,{item:s.tempProduct,ref:"delModal",onDelItem:n.delProduct},null,8,["item","onDelItem"])])}const Ht=M(wt,[["render",Bt]]);export{Ht as default};
