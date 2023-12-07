"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[578],{5578:(jt,N,l)=>{l.r(N),l.d(N,{TurfAdminModule:()=>$t});var g=l(6814),h=l(4190),p=l(3610),m=l(4221);const M=(0,m.ZF)("turfAdmin"),H=(0,m.P1)(M,e=>e.turfadmin),L=(0,m.P1)(M,e=>e.error),X=(0,m.P1)(M,e=>e.error);var t=l(5879),f=l(6553),R=l(5233);let z=(()=>{var e;class a{constructor(n,r,o){this.turfAdminService=n,this.store=r,this.router=o,this.user="Turf Admin"}getLoginData(n){this.loginData=n,this.store.dispatch((0,p.KQ)({data:this.loginData})),this.store.select(X).subscribe({next:r=>{this.loginError=r}})}ngOnInit(){this.turfAdminService.isLoggedIn()&&this.router.navigate(["turf-owner"])}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f),t.Y36(m.yh),t.Y36(h.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turfadmin-login"]],decls:1,vars:2,consts:[[3,"role","error","loginData"]],template:function(n,r){1&n&&(t.TgZ(0,"app-login",0),t.NdJ("loginData",function(s){return r.getLoginData(s)}),t.qZA()),2&n&&t.Q6J("role",r.user)("error",r.loginError)},dependencies:[R.G]}),a})();var J=l(8440),$=l(1277);let j=(()=>{var e;class a{constructor(n,r,o){this.turfAdminService=n,this.store=r,this.firbaseService=o,this.role="Turf Admin"}ngOnInit(){this.firbaseService.config()}getSignupData(n){this.signupData=n,this.turfAdminService.verifyTurfAdminBeforeOTP(this.signupData.phone).subscribe(r=>{this.store.dispatch((0,p.AK)({userData:this.signupData})),this.firbaseService.sendTurfAdminOTP(this.signupData.phone)},r=>{this.serverError=r.error.message})}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f),t.Y36(m.yh),t.Y36(J.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turfadmin-signup"]],decls:3,vars:2,consts:[[1,"full-height"],["id","signinbutton"],[3,"typeofUser","errorMessage","formData"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"app-signup",2),t.NdJ("formData",function(s){return r.getSignupData(s)}),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("typeofUser",r.role)("errorMessage",r.serverError))},dependencies:[$.X],styles:[".full-height[_ngcontent-%COMP%]{height:100%}"]}),a})();var K=l(3434);let V=(()=>{var e;class a{constructor(n){this.turfAdminService=n,this.chartLabels=[],this.pieLabels=[],this.weeklySales="",this.monthySales="",this.annualSales="",this.chartText="Monthly Revenue",this.pieText="Turf Booked"}ngOnInit(){this.turfAdminService.isLoggedIn()&&(this.isLoggedIn=!0)}logout(n){"user"!=n&&(this.isLoggedIn=!1,this.turfAdminService.logout())}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turfadmin-dashboard"]],decls:2,vars:2,consts:[[3,"isAdmin","isLoggedIn","isLogout"]],template:function(n,r){1&n&&(t.TgZ(0,"app-navbar",0),t.NdJ("isLogout",function(s){return r.logout(s)}),t._UZ(1,"router-outlet"),t.qZA()),2&n&&t.Q6J("isAdmin",!0)("isLoggedIn",r.isLoggedIn)},dependencies:[K.S,h.lC],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{background-color:#6495ed;color:#fff}.mat-button[_ngcontent-%COMP%]{color:#fff}mat-icon[_ngcontent-%COMP%]{transform:scale(2)}"]}),a})();var w=l(7142),y=(l(1718),l(15),l(2939)),tt=l(339);let et=(()=>{var e;class a{constructor(n,r,o,s,c){this.firebaseService=n,this.router=r,this.store=o,this.turfAdminService=s,this.snackBar=c,this.OTP="",this.verify=JSON.parse(localStorage.getItem("verificationId")||"")}ngOnInit(){this.firebaseService.config()}getOTP(n){this.OTP=n;const r=w.Z.auth.PhoneAuthProvider.credential(this.verify,this.OTP);w.Z.auth().signInWithCredential(r).then(o=>{this.store.select(H).subscribe(s=>{this.turfAdminData=s,this.turfAdminService.turfAdminSignup(this.turfAdminData).subscribe(c=>{this.snackBar.open("Turf Admin registered successfully","close",{duration:3e3}),this.router.navigate(["/turf-owner/login"]),this.store.dispatch((0,p.Qg)({userData:this.turfAdminData}))},c=>{console.log(c),this.store.dispatch((0,p.PE)({error:c.error.message})),this.store.select(L).subscribe({next:d=>{console.log(d),this.otpError="Enter a Valid OTP"}})})})}).catch(o=>{console.log(o),this.store.dispatch((0,p.PE)({error:o})),this.store.select(L).subscribe({next:s=>{console.log(s),this.otpError="Enter A valid OTP"}})})}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(J.O),t.Y36(h.F0),t.Y36(m.yh),t.Y36(f.f),t.Y36(y.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turfadmin-verify-otp"]],decls:1,vars:1,consts:[[3,"getError","OTP"]],template:function(n,r){1&n&&(t.TgZ(0,"app-verify-otp",0),t.NdJ("OTP",function(s){return r.getOTP(s)}),t.qZA()),2&n&&t.Q6J("getError",r.otpError)},dependencies:[tt.c]}),a})();var E=l(2574),S=l(7700),Z=l(9862),nt=l(9020);let rt=(()=>{var e;class a{constructor(n,r,o){this.dialogRef=n,this.http=r,this.mapBoxService=o}ngOnInit(){this.initializeMap()}initializeMap(){this.map=new E.Map({container:"map-container",style:"mapbox://styles/mapbox/streets-v11",center:[77.5946,12.9716],zoom:9,accessToken:"pk.eyJ1IjoiaGFmaXphaG1lZCIsImEiOiJjbHA3dTR6aHcyZnFiMmlubDl5Nmk4czg0In0.ovDRjWjrKqgwPu7tMeZq9w"}),this.map.on("click",n=>{const r=n.lngLat;this.selectedLocation={longitude:`${r.lng}`,latitude:`${r.lat}`},console.log(this.selectedLocation),this.mapBoxService.getAdress(r.lng,r.lat).subscribe({next:o=>{console.log(o.features[0].place_name," this is addrss"),this.selectedAddres=o.features[0].place_name,this.dialogRef.close([this.selectedLocation,this.selectedAddres])}})}),this.map.addControl(new E.NavigationControl)}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(S.so),t.Y36(Z.eN),t.Y36(nt.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-map-diolog"]],decls:1,vars:0,consts:[["id","map-container",1,"map"]],template:function(n,r){1&n&&t._UZ(0,"div",0)},styles:[".map[_ngcontent-%COMP%]{width:50%;height:100%}#map-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:100%}button[_ngcontent-%COMP%]{margin-top:10px}"]}),a})();var u=l(6223),Y=l(1274),C=l(2296),P=l(617),U=l(5195),T=l(4170),x=l(2032),D=l(3814),I=l(8525),O=l(3680);function ot(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Turf Name is required "),t.qZA())}function at(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Minimum 4 characters required "),t.qZA())}function it(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Turf Location is required "),t.qZA())}function st(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Turf Contact is required "),t.qZA())}function lt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Enter a valid contact "),t.qZA())}function ct(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Turf Facilities is required "),t.qZA())}function ut(e,a){if(1&e&&(t.TgZ(0,"div",22),t._UZ(1,"img",23),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.Q6J("src",i.url,t.LSH)}}function mt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Image is required "),t.qZA())}function dt(e,a){if(1&e&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.Q6J("value",i),t.xp6(1),t.Oqu(i)}}function ft(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Sports type is required "),t.qZA())}function pt(e,a){if(1&e&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.Q6J("value",i),t.xp6(1),t.Oqu(i)}}function gt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Sports dimension is required "),t.qZA())}function ht(e,a){if(1&e&&(t.TgZ(0,"mat-form-field",4)(1,"mat-select",25),t.YNc(2,pt,2,2,"mat-option",18),t.qZA(),t.YNc(3,gt,2,0,"mat-error",6),t.qZA()),2&e){const i=t.oxw();let n;t.xp6(2),t.Q6J("ngForOf",i.sportsDimension),t.xp6(1),t.Q6J("ngIf",null==(n=i.turfForm.get("sportsDimension"))?null:n.hasError("required"))}}function Tt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Turf price per hour is required "),t.qZA())}function At(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Enter a valid price "),t.qZA())}let _t=(()=>{var e;class a{constructor(n,r,o,s,c){this.matDialog=n,this.fb=r,this.turfAdminService=o,this.snackBar=s,this.router=c,this.selectedLocation={long:"",lat:"",address:""},this.addDimension=!1,this.loading=!1,this.submitted=!1}ngOnInit(){this.turfAdminService.getSportsType().subscribe({next:n=>{this.sportsType=n.sports,this.sports=n.sports.map(r=>r.sportsName)}}),this.formValidation()}formValidation(){this.turfForm=this.fb.group({turfName:["",[u.kI.required,u.kI.pattern(/^.{4,}$/)]],turfLocation:["",[u.kI.required]],turfContact:["",[u.kI.required,u.kI.pattern(/^\d{10}$/)]],turfFacilities:["",[u.kI.required]],sportsDimension:["",[u.kI.required]],sportsType:["",[u.kI.required]],turfPrice:["",[u.kI.required,u.kI.pattern(/^\d{1,4}$/)]],turfImages:[[],[u.kI.required]]})}openMatDialog(){this.matDialog.open(rt,{width:"50%",height:"50%"}).afterClosed().subscribe({next:r=>{console.log(r),this.selectedLocation.long=r[0].longitude,this.selectedLocation.lat=r[0].latitude,this.selectedLocation.address=r[1],this.location=r[1]}})}onFileSelected(n){const r=n.target.files;if(r&&r.length>0){const o=[];for(let s=0;s<r.length;s++){const c=r[s],d=new FileReader;d.onload=v=>{o.push({url:v.target.result,file:c}),o.length===r.length&&(this.turfForm.patchValue({turfImages:o.map(b=>b.file)}),this.selectedFile=o)},d.readAsDataURL(c)}}}onSelected(n){const r=n.value;this.dimensions=this.sportsType.filter(o=>o.sportsName==r),this.sportsDimension=this.dimensions[0].sportsDimensions,this.addDimension=!0}onSubmit(){if(this.submitted=!0,this.turfForm.valid&&this.selectedFile.length>0){const n=this.turfForm.value.turfImages,r=JSON.stringify(this.selectedLocation),o=new FormData;o.append("turfName",this.turfForm.get("turfName")?.value),o.append("turfLocation",r),o.append("turfContact",this.turfForm.get("turfContact")?.value),o.append("turfFacilities",this.turfForm.get("turfFacilities")?.value),o.append("sportsDimension",this.turfForm.get("sportsDimension")?.value),o.append("sportsType",this.turfForm.get("sportsType")?.value),o.append("turfPrice",this.turfForm.get("turfPrice")?.value);for(let s=0;s<n.length;s++)o.append("turfImages",n[s],n[s].name);this.loading=!0,this.turfAdminService.addTurf(o).subscribe({next:s=>{this.snackBar.open("New Turf added successfully ","Close",{duration:3e3}),this.loading=!1,setTimeout(()=>{this.router.navigate(["/turf-owner/manage-slots"])},3e3)},error:s=>{this.loading=!1,this.snackBar.open(s.error.message,"Close",{duration:3e3}),403==s.status&&this.snackBar.open("Cannot add Turf ,Turf Admin Not verified ","close",{duration:4e3}),404==s.status&&this.snackBar.open("entered turf already exists","close",{duration:3e3})}})}}performAction(){}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(S.uw),t.Y36(u.qu),t.Y36(f.f),t.Y36(y.ux),t.Y36(h.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-turf"]],decls:53,vars:18,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"main-div"],["fxFlex","75",1,"container","box-shadow","mt-5","mb-5","p-5"],[1,"text-center","toolbar","mt-5","mb-5"],["fxLayout","column","fxLayoutAlign","stretch",3,"formGroup","submit"],["appearance","fill"],["matInput","","formControlName","turfName","placeholder","Turf Name"],[4,"ngIf"],["matInput","","placeholder","Location","formControlName","turfLocation",3,"ngModel","ngModelChange","click"],["type","tel","matInput","","formControlName","turfContact","placeholder","Contact Number"],["matInput","","formControlName","turfFacilities","placeholder","Facilities provided by turf"],[1,"mb-3","g-2"],["for","image"],["type","button","mat-raised-button","",1,"mt-1",3,"click"],["color","primary"],["hidden","","name","image","accept","image/*","type","file","multiple","",3,"change"],["fileInput",""],["class","pt-2","class","image-preview",4,"ngFor","ngForOf"],["formControlName","sportsType","placeholder","Select your Game",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill",4,"ngIf"],["matInput","","formControlName","turfPrice","placeholder","Price Per Hour"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[1,"image-preview"],["alt","Selected Image",3,"src"],[3,"value"],["formControlName","sportsDimension","placeholder","Select your Game dimension"]],template:function(n,r){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-toolbar",2),t._uU(3," Enter your turf details "),t.qZA(),t.TgZ(4,"form",3),t.NdJ("submit",function(){return r.onSubmit()}),t.TgZ(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Enter Turf name"),t.qZA(),t._UZ(8,"input",5),t.YNc(9,ot,2,0,"mat-error",6),t.YNc(10,at,2,0,"mat-error",6),t.qZA(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"Location Of the Turf"),t.qZA(),t.TgZ(14,"input",7),t.NdJ("ngModelChange",function(c){return r.location=c})("click",function(){return r.openMatDialog()}),t.qZA(),t.YNc(15,it,2,0,"mat-error",6),t.qZA(),t.TgZ(16,"mat-form-field",4)(17,"mat-label"),t._uU(18,"Enter the Turf Contact "),t.qZA(),t._UZ(19,"input",8),t.YNc(20,st,2,0,"mat-error",6),t.YNc(21,lt,2,0,"mat-error",6),t.qZA(),t.TgZ(22,"mat-form-field",4)(23,"mat-label"),t._uU(24,"Facilities available "),t.qZA(),t.TgZ(25,"textarea",9),t._uU(26," "),t.qZA(),t.YNc(27,ct,2,0,"mat-error",6),t.qZA(),t.TgZ(28,"div",10)(29,"mat-label",11),t._uU(30," Add your turf Image"),t.qZA(),t._UZ(31,"br"),t.TgZ(32,"button",12),t.NdJ("click",function(){t.CHM(o);const c=t.MAs(37);return t.KtG(c.click())}),t.TgZ(33,"mat-icon",13),t._uU(34,"attach_file"),t.qZA(),t._uU(35," Choose File "),t.qZA(),t.TgZ(36,"input",14,15),t.NdJ("change",function(c){return r.onFileSelected(c)}),t.qZA(),t.YNc(38,ut,2,1,"div",16),t.qZA(),t.YNc(39,mt,2,0,"mat-error",6),t.TgZ(40,"mat-form-field",4)(41,"mat-select",17),t.NdJ("selectionChange",function(c){return r.onSelected(c)}),t.YNc(42,dt,2,2,"mat-option",18),t.qZA(),t.YNc(43,ft,2,0,"mat-error",6),t.qZA(),t.YNc(44,ht,4,2,"mat-form-field",19),t.TgZ(45,"mat-form-field",4)(46,"mat-label"),t._uU(47,"Price Per Hour "),t.qZA(),t._UZ(48,"input",20),t.YNc(49,Tt,2,0,"mat-error",6),t.YNc(50,At,2,0,"mat-error",6),t.qZA(),t.TgZ(51,"button",21),t._uU(52," Submit "),t.qZA()()()()}if(2&n){let o,s,c,d,v,b,k,B,W,G;t.xp6(4),t.Q6J("formGroup",r.turfForm),t.xp6(5),t.Q6J("ngIf",null==(o=r.turfForm.get("turfName"))?null:o.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(s=r.turfForm.get("turfName"))?null:s.hasError("pattern")),t.xp6(4),t.Q6J("ngModel",r.location),t.xp6(1),t.Q6J("ngIf",null==(c=r.turfForm.get("turfLocation"))?null:c.hasError("required")),t.xp6(5),t.Q6J("ngIf",null==(d=r.turfForm.get("turfContact"))?null:d.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(v=r.turfForm.get("turfContact"))?null:v.hasError("pattern")),t.xp6(6),t.Q6J("ngIf",null==(b=r.turfForm.get("turfFacilities"))?null:b.hasError("required")),t.xp6(11),t.Q6J("ngForOf",r.selectedFile),t.xp6(1),t.Q6J("ngIf",r.submitted&&!(null!=(k=r.turfForm.get("turfImages"))&&k.value)),t.xp6(3),t.Q6J("ngForOf",r.sports),t.xp6(1),t.Q6J("ngIf",null==(B=r.turfForm.get("sportsType"))?null:B.hasError("required")),t.xp6(1),t.Q6J("ngIf",r.addDimension),t.xp6(5),t.Q6J("ngIf",null==(W=r.turfForm.get("turfPrice"))?null:W.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(G=r.turfForm.get("turfPrice"))?null:G.hasError("pattern")),t.xp6(1),t.ekj("spinner",r.loading),t.Q6J("disabled",r.loading)}},dependencies:[g.sg,g.O5,u._Y,u.Fj,u.JJ,u.JL,Y.Ye,C.lW,P.Hw,U.a8,T.KE,T.hX,T.TO,x.Nt,D.xw,D.Wh,D.yH,I.gD,O.ey,u.sg,u.u],styles:['.toolbar[_ngcontent-%COMP%]{justify-content:center;color:#2fb563}mat-form-field[_ngcontent-%COMP%]{color:#2fb563}mat-label[_ngcontent-%COMP%]{color:#000}.main-div[_ngcontent-%COMP%]{background:#9de0b7}.display-none[_ngcontent-%COMP%]{display:none}#map-container[_ngcontent-%COMP%]{width:100%;height:400px}.file-name[_ngcontent-%COMP%]{margin-left:1rem}.image-preview[_ngcontent-%COMP%]{display:inline-block;margin-right:10px;margin-left:10px}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover}@keyframes _ngcontent-%COMP%_spinner{to{transform:rotate(360deg)}}.spinner[_ngcontent-%COMP%]:before{content:"";box-sizing:border-box;position:absolute;top:50%;left:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border:2px solid #ffffff;border-top-color:#000;animation:_ngcontent-%COMP%_spinner .8s linear infinite}']}),a})(),A=(()=>{var e;class a{constructor(n,r){this.turfAdminService=n,this.router=r}canActivate(n,r){return!!this.turfAdminService.isLoggedIn()||(this.router.navigate(["turf-owner/login"]),!1)}}return(e=a).\u0275fac=function(n){return new(n||e)(t.LFG(f.f),t.LFG(h.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var q=l(3091);function vt(e,a){1&e&&(t.ynx(0),t.TgZ(1,"div",5)(2,"h3",6),t._uU(3,"No Turf Found"),t.qZA()(),t.BQk())}function bt(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"app-table",7),t.NdJ("tableAction2",function(r){t.CHM(i);const o=t.oxw();return t.KtG(o.getBlockAction(r))}),t.qZA()}if(2&e){const i=t.oxw();t.Q6J("dataSource",i.turfLists)("actionType",i.turfTable)("tableConfig",i.columnDatas)}}let Ct=(()=>{var e;class a{constructor(n){this.turfAdminService=n,this.turfTable="turfTable",this.isEmpty=!0,this.columnDatas={columns:[{title:"Turf ",dataProperty:"turfName",sortable:!1,filterable:!1},{title:"Game",dataProperty:"sportsType",sortable:!1,filterable:!1},{title:"Turf Price",dataProperty:"turfPrice",sortable:!1,filterable:!1},{title:"Turf Status",dataProperty:"turfStatus",sortable:!1,filterable:!1},{title:"Block",dataProperty:"action2",sortable:!1,filterable:!1},{title:"Action",dataProperty:"actions",sortable:!1,filterable:!1}],rowActions:[{label:"View",dataProperty:"_id",actionIdtoReturn:""}],rowsPerPage:"3"}}ngOnInit(){this.turfLists={turfImages:"",turfName:"",turfPrice:""},this.turfAdminService.getTurfs().subscribe({next:n=>{this.turfLists=n.turflists.map(r=>({turfName:r.turfName,sportsType:r.sportsType,turfPrice:r.turfPrice,turfStatus:r.status,actions:"Edit",action2:"active"==r.status?"Block":"Unblock",color:"primary",secondColor:"active"==r.status?"red":"green",turfID:r._id})),this.isEmpty=!1},error:n=>{400==n.status&&(this.isEmpty=!0),console.log(n)}})}getBlockAction(n){console.log(n," this is turf"),this.turfAdminService.blockUnblockTurf(n).subscribe({next:r=>{this.turfLists=r.turfs.map(o=>({turfName:o.turfName,sportsType:o.sportsType,turfPrice:o.turfPrice,turfStatus:o.status,actions:"Edit",action2:"active"==o.status?"Block":"Unblock",color:"primary",secondColor:"active"==o.status?"red":"green",turfID:o._id})),this.isEmpty=!1},error:r=>{400==r.status&&(this.isEmpty=!0),console.log(r)}})}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turf-management"]],decls:8,vars:2,consts:[["mat-title","",1,"m-4","text-center"],[1,"text-center","m-5"],["routerLink","add-turf","mat-flat-button","",1,"button-color","mb-5","text-white"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"mt-3"],[1,"text-danger"],[3,"dataSource","actionType","tableConfig","tableAction2"]],template:function(n,r){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"TURF MANAGEMENT"),t.qZA(),t.TgZ(2,"div",1)(3,"button",2),t._uU(4," Add New Turf Here"),t.qZA(),t.YNc(5,vt,4,0,"ng-container",3),t.YNc(6,bt,1,3,"ng-template",null,4,t.W1O),t.qZA()),2&n){const o=t.MAs(7);t.xp6(5),t.Q6J("ngIf",r.isEmpty)("ngIfElse",o)}},dependencies:[g.O5,q.a,h.rH,C.lW],styles:[".button-color[_ngcontent-%COMP%]{background:#2FB563;width:50%}"]}),a})();function yt(e,a){1&e&&(t.ynx(0),t.TgZ(1,"div",3)(2,"h3",4),t._uU(3,"No Turf Found"),t.qZA()(),t.BQk())}function St(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"app-table",5),t.NdJ("tableAction",function(r){t.CHM(i);const o=t.oxw();return t.KtG(o.getTurfId(r))}),t.qZA()}if(2&e){const i=t.oxw();t.Q6J("dataSource",i.turfLists)("actionType",i.turfTable)("tableConfig",i.columnDatas)}}let Mt=(()=>{var e;class a{constructor(n,r,o){this.fb=n,this.turfAdminService=r,this.router=o,this.turfTable="turfTable",this.columnDatas={columns:[{title:"Turf ",dataProperty:"turfName",sortable:!1,filterable:!1},{title:"Game",dataProperty:"game",sortable:!1,filterable:!1},{title:"Location",dataProperty:"location",sortable:!1,filterable:!1},{title:"Action",dataProperty:"actions",sortable:!1,filterable:!1}],rowActions:[{label:"View",dataProperty:"_id",actionIdtoReturn:""}],rowsPerPage:"3"}}ngOnInit(){this.turfLists={turfImages:"",turfName:"",turfPrice:""},this.turfAdminService.getTurfs().subscribe({next:n=>{const r=n.turflists.map(o=>({turfName:o.turfName,game:o.sportsType,location:`${o.turfLocation.Address.split(",")[4]},${o.turfLocation.Address.split(",")[5]}`,contact:o.turfContact,id:o._id,actions:"Manage Slots"}));this.turfLists=r,this.isEmpty=!1},error:n=>{400==n.status&&(this.isEmpty=!0)}})}getTurfId(n){this.router.navigate(["/turf-owner/manage-slots/add-slots/",n.id])}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(u.qu),t.Y36(f.f),t.Y36(h.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-slot"]],decls:5,vars:2,consts:[[1,"text-center","m-3"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"mt-3"],[1,"text-danger"],[3,"dataSource","actionType","tableConfig","tableAction"]],template:function(n,r){if(1&n&&(t.TgZ(0,"h1",0),t._uU(1,"SLOT MANAGEMENT"),t.qZA(),t.YNc(2,yt,4,0,"ng-container",1),t.YNc(3,St,1,3,"ng-template",null,2,t.W1O)),2&n){const o=t.MAs(4);t.xp6(2),t.Q6J("ngIf",r.isEmpty)("ngIfElse",o)}},dependencies:[g.O5,q.a]}),a})();const Zt=[{start:"12:00 AM",end:"1:00 AM"},{start:"1:00 AM",end:"2:00 AM"},{start:"2:00 AM",end:"3:00 AM"},{start:"3:00 AM",end:"4:00 AM"},{start:"4:00 AM",end:"5:00 AM"},{start:"5:00 AM",end:"6:00 AM"},{start:"6:00 AM",end:"7:00 AM"},{start:"7:00 AM",end:"8:00 AM"},{start:"8:00 AM",end:"9:00 AM"},{start:"9:00 AM",end:"10:00 AM"},{start:"10:00 AM",end:"11:00 AM"},{start:"11:00 AM",end:"12:00 PM"},{start:"12:00 PM",end:"1:00 PM"},{start:"1:00 PM",end:"2:00 PM"},{start:"2:00 PM",end:"3:00 PM"},{start:"3:00 PM",end:"4:00 PM"},{start:"4:00 PM",end:"5:00 PM"},{start:"5:00 PM",end:"6:00 PM"},{start:"6:00 PM",end:"7:00 PM"},{start:"7:00 PM",end:"8:00 PM"},{start:"8:00 PM",end:"9:00 PM"},{start:"9:00 PM",end:"10:00 PM"},{start:"10:00 PM",end:"11:00 PM"},{start:"11:00 PM",end:"12:00 AM"}];var Q=l(8034),F=l(6380);function Pt(e,a){if(1&e&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.Q6J("value",i),t.xp6(1),t.AsE("",i.start," to ",i.end,"")}}function xt(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Oqu(i.error)}}let Dt=(()=>{var e;class a{constructor(n,r,o,s,c){this.route=n,this.turfadminService=r,this.fb=o,this.snackBar=s,this.cdr=c,this.turfData={turfName:"",turfLocation:"",turfPrice:"",turfFacilities:null,turfImages:[],turfContact:null,sportsDimension:null,sportsType:null,_id:null},this.timeSlots=Zt,this.isSelected=d=>{const v=d.getFullYear()+"-"+("00"+(d.getMonth()+1)).slice(-2)+"-"+("00"+d.getDate()).slice(-2);return this.daysSelected.find(b=>b==v)?"selected":""}}ngOnInit(){this.startDate=new Date,this.startDate.setDate(this.startDate.getDate()+1),this.encodedDate=this.startDate.toISOString(),this.daysSelected=[this.encodedDate.split("T")[0]],this.route.paramMap.subscribe(n=>{this.turfId=n.get("turfId"),1==this.daysSelected.length?this.turfadminService.getTurfTimeSlots(this.turfId,this.daysSelected[0]).subscribe({next:r=>{206==r.status||(this.error="",this.selectedTimeSlots=r.timeSlots.map(o=>({start:o.start,end:o.end}))),this.turfData=r.turfData},error:r=>{this.error=r.error.message}}):this.daysSelected.length>1&&(this.selectedTimeSlots=[])})}compareTimeSlots(n,r){return!(!n||!r)&&n.start===r.start&&n.end===r.end}onSubmit(){console.log(this.daysSelected,this.selectedTimeSlots),!this.selectedTimeSlots||this.selectedTimeSlots.length<1?this.error="Please select slots":(this.error="",this.turfadminService.addSlots({turfId:this.turfId,date:this.daysSelected,timeSlots:this.selectedTimeSlots}).subscribe({next:r=>{this.error="",this.snackBar.open("Slot added Successfully","close",{duration:3e3})},error:r=>{console.log(r),this.error=r.error.message}}))}select(n,r){const o=n.getFullYear()+"-"+("00"+(n.getMonth()+1)).slice(-2)+"-"+("00"+n.getDate()).slice(-2);this.daysSelected=this.daysSelected.findIndex(c=>c==o)<0?[...this.daysSelected,o]:this.daysSelected.filter(c=>c!==o),r.updateTodaysDate(),1==this.daysSelected.length?this.turfadminService.getTurfTimeSlots(this.turfId,this.daysSelected[0]).subscribe({next:c=>{206==c.status||(this.error="",this.selectedTimeSlots=c.timeSlots.map(d=>({start:d.start,end:d.end}))),this.turfData=c.turfData},error:c=>console.log(c)}):this.selectedTimeSlots=[]}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(h.gz),t.Y36(f.f),t.Y36(u.qu),t.Y36(y.ux),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-slots"]],decls:29,vars:13,consts:[[1,"text-center","bgcolorfortext"],[1,"text-black","mt-5"],[1,"colorfortext"],[1,"example-full-width"],[1,"date-width",3,"matMenuTriggerFor"],["readonly","true","matInput","","placeholder","Select a Date",3,"value","ngModel","ngModelChange"],[1,"drop-calendar"],["calenderMenu","matMenu"],[3,"click"],[3,"dateClass","minDate","selectedChange"],["calendar",""],["multiple","",1,"add-color",3,"disabled","compareWith","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","","type","submit",1,"text-success","mb-3",3,"click"],[3,"value"]],template:function(n,r){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2)(3,"b"),t._uU(4),t.ALo(5,"uppercase"),t.qZA()()(),t.TgZ(6,"h3"),t._uU(7,"Pick Date to select time slots"),t.qZA(),t.TgZ(8,"mat-form-field",3)(9,"div",4)(10,"input",5),t.NdJ("ngModelChange",function(c){return r.daysSelected=c}),t.qZA(),t.TgZ(11,"mat-icon"),t._uU(12,"calendar_today"),t.qZA()(),t.TgZ(13,"mat-menu",6,7)(15,"div",8),t.NdJ("click",function(c){return c.stopPropagation()}),t.TgZ(16,"mat-calendar",9,10),t.NdJ("selectedChange",function(c){t.CHM(o);const d=t.MAs(17);return t.KtG(r.select(c,d))}),t.qZA()()()(),t.TgZ(18,"p"),t._uU(19,"You can select multiple dates and add slots together "),t.qZA(),t.TgZ(20,"mat-form-field",3)(21,"mat-label"),t._uU(22,"Select Slots"),t.qZA(),t.TgZ(23,"mat-select",11),t.NdJ("ngModelChange",function(c){return r.selectedTimeSlots=c}),t.YNc(24,Pt,2,3,"mat-option",12),t.qZA()(),t.YNc(25,xt,2,1,"mat-error",13),t.TgZ(26,"p")(27,"button",14),t.NdJ("click",function(){return r.onSubmit()}),t._uU(28," Submit "),t.qZA()()()}if(2&n){const o=t.MAs(14);t.xp6(4),t.hij("",t.lcZ(5,11,r.turfData.turfName)," "),t.xp6(5),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Q6J("value",r.encodedDate)("ngModel",r.daysSelected),t.xp6(6),t.Q6J("dateClass",r.isSelected)("minDate",r.startDate),t.xp6(7),t.Q6J("disabled",r.daysSelected.length<1)("compareWith",r.compareTimeSlots)("ngModel",r.selectedTimeSlots),t.xp6(1),t.Q6J("ngForOf",r.timeSlots),t.xp6(1),t.Q6J("ngIf",r.error)}},dependencies:[g.sg,g.O5,u.Fj,u.JJ,u.On,C.lW,P.Hw,T.KE,T.hX,T.TO,x.Nt,I.gD,O.ey,Q._H,F.VK,F.p6,g.gd],styles:[".example-full-width{width:60%}.date-width{display:flex;align-items:baseline}.add-color{color:#000}.bgcolorfortext{border-radius:5px;margin-left:5%;margin-right:5%;box-shadow:0 0 5px 5px #0000004d;background-color:#addfc0;padding-bottom:5%}.drop-calendar{width:40rem}.mat-calendar-body-cell.selected{background-color:#2fb563!important;border-radius:50%}\n"],encapsulation:2}),a})();var It=l(3633);let Ot=(()=>{var e;class a{constructor(n){this.turfAdminService=n,this.chartLabels=[],this.pieLabels=[],this.weeklySales="",this.monthySales="",this.annualSales="",this.chartText="Monthly Revenue",this.pieText="Turf Booked"}ngOnInit(){this.turfAdminService.isLoggedIn()&&(this.isLoggedIn=!0),this.turfAdminService.getTurfAdminDashboard().subscribe({next:n=>{this.chartData=n.bookingsByMonth.map(r=>Number(r.TotalAmount)),this.chartLabels=n.bookingsByMonth.map(r=>`${r.month}`),this.pieChartData=n.turfCount.map(r=>r.count),this.pieLabels=n.turfCount.map(r=>r.turfName),this.weeklySales=n.weeklySales,this.monthySales=n.monthlySales,this.annualSales=n.annualSales},error:n=>{console.log(n," this isthe error")}})}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turf-home"]],decls:1,vars:9,consts:[[3,"annualSales","chartData","pieChartData","chartLabels","pieLabels","monthySales","weeklySales","chartText","pieChartText"]],template:function(n,r){1&n&&t._UZ(0,"app-dashboard",0),2&n&&t.Q6J("annualSales",r.annualSales)("chartData",r.chartData)("pieChartData",r.pieChartData)("chartLabels",r.chartLabels)("pieLabels",r.pieLabels)("monthySales",r.monthySales)("weeklySales",r.weeklySales)("chartText",r.chartText)("pieChartText",r.pieText)},dependencies:[It.M]}),a})();var Ft=l(3361),Nt=l(3236);function Lt(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"app-profile",1),t.NdJ("Edit",function(r){t.CHM(i);const o=t.oxw();return t.KtG(o.getEdit(r))}),t.qZA()}if(2&e){const i=t.oxw();t.Q6J("profileData",i.turfAdminData)}}let Jt=(()=>{var e;class a{constructor(n,r){this.turfAdminService=n,this.matDiolog=r,this.showSpinner=!0}ngOnInit(){this.turfAdminService.getTurfAdminProfile().subscribe({next:n=>{this.showSpinner=!1,console.log(n," tis is response "),this.turfAdminData={name:n.profile.turfAdminName,email:n.profile.email,phone:n.profile.phone,location:null,age:n.profile.age,_id:n.profile._id,wallet:n.profile.wallet}}})}getEdit(n){console.log("got event ",n);const r={...n},o=this.matDiolog.open(Ft.D,{data:r,height:"70%",width:"60%"});o.componentInstance.cancelClicked.subscribe({next:()=>{o.close()}}),o.componentInstance.saveProfile.subscribe({next:s=>{console.log(s),this.updateProfile(s),o.close()}})}updateProfile(n){this.turfAdminService.updateProfile(n).subscribe({}),console.log(n," this is data ")}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f),t.Y36(S.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turf-profile"]],decls:1,vars:1,consts:[[3,"profileData","Edit",4,"ngIf"],[3,"profileData","Edit"]],template:function(n,r){1&n&&t.YNc(0,Lt,1,1,"app-profile",0),2&n&&t.Q6J("ngIf",!r.showSpinner)},dependencies:[g.O5,Nt.d],styles:[".box[_ngcontent-%COMP%]{margin:0 auto;width:40px;height:140px;position:relative}.box[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{position:absolute;width:100%;height:10px;background-color:gray;bottom:0;border-radius:100%;transform:scaleX(.8);opacity:.6;animation:_ngcontent-%COMP%_shadowScale 1s linear infinite}.gravity[_ngcontent-%COMP%]{width:40px;height:40px;animation:_ngcontent-%COMP%_bounce 1s cubic-bezier(.68,.35,.29,.54) infinite}.ball[_ngcontent-%COMP%]{width:40px;height:40px;background-image:url(https://cdn2.iconfinder.com/data/icons/activity-5/50/26BD-soccer-ball-128.png);background-size:cover;animation:_ngcontent-%COMP%_roll .7s linear infinite}@keyframes _ngcontent-%COMP%_roll{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_bounce{50%{transform:translateY(100px)}}@keyframes _ngcontent-%COMP%_shadowScale{50%{transform:scaleX(1);opacity:.8}}"]}),a})();var _=l(3305);function wt(e,a){if(1&e&&(t.TgZ(0,"div")(1,"mat-accordion")(2,"mat-expansion-panel",12)(3,"mat-expansion-panel-header")(4,"mat-panel-title"),t._uU(5),t.qZA(),t.TgZ(6,"mat-panel-description"),t._uU(7," This is a summary of the content "),t.qZA()(),t.TgZ(8,"p"),t._uU(9,"This is the primary content of the panel."),t.qZA()()()()),2&e){const i=a.$implicit;t.xp6(5),t.hij(" ",i," ")}}function Et(e,a){if(1&e&&(t.TgZ(0,"div",10)(1,"h4"),t._uU(2,"Wallet History"),t.qZA(),t.YNc(3,wt,10,1,"div",11),t.qZA()),2&e){const i=t.oxw();t.xp6(3),t.Q6J("ngForOf",i.walletDetails)}}function Yt(e,a){1&e&&(t.TgZ(0,"div",13)(1,"p",14),t._uU(2," No Wallet history found"),t.qZA()())}const Ut=[{path:"",component:V,children:[{path:"login",component:z},{path:"signup",component:j},{path:"verify",component:et},{path:"",component:Ot,canActivate:[A]},{path:"profile",component:Jt,canActivate:[A]},{path:"wallet",component:(()=>{var e;class a{constructor(n){this.turfAdminService=n}ngOnInit(){this.profileSubscription=this.turfAdminService.getTurfAdminProfile().subscribe(n=>{console.log(n),this.walletDetails=n.profile.walletStatements,this.walletAmount=n.profile.wallet})}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return(e=a).\u0275fac=function(n){return new(n||e)(t.Y36(f.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-turf-wallet"]],decls:12,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-md-12","mx-auto","text-center"],[1,"text-center"],[1,"text-center","text-success"],[1,"add-border","m-5","p-3"],[1,"pb-2"],["disabled","","mat-button",""],["class","p-5",4,"ngIf"],["class","m-3",4,"ngIf"],[1,"p-5"],[4,"ngFor","ngForOf"],["hideToggle",""],[1,"m-3"],[1,"text-primary"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),t._uU(5,"Wallet Management"),t.qZA(),t.TgZ(6,"div",5)(7,"div",6)(8,"button",7),t._uU(9),t.qZA()(),t.YNc(10,Et,4,1,"div",8),t.YNc(11,Yt,3,0,"div",9),t.qZA()()()()()),2&n&&(t.xp6(9),t.hij(" WalletAmount :",r.walletAmount,""),t.xp6(1),t.Q6J("ngIf",r.walletDetails&&r.walletDetails.length>0),t.xp6(1),t.Q6J("ngIf",!r.walletDetails||r.walletDetails.length<=0))},dependencies:[g.sg,g.O5,C.lW,_.pp,_.ib,_.yz,_.yK,_.u4]}),a})(),canActivate:[A]},{path:"turf-management",component:Ct,canActivate:[A]},{path:"turf-management/add-turf",component:_t,canActivate:[A]},{path:"manage-slots",component:Mt,canActivate:[A]},{path:"manage-slots/add-slots/:turfId",component:Dt,canActivate:[A]},{path:"dashboard",redirectTo:"turf-owner"}]}];let qt=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(Ut),h.Bz]}),a})();var Qt=l(5250);const Bt=(0,m.Lq)({turfadmin:null,isLoggedIn:!1,error:"",success:""},(0,m.on)(p.T$,e=>({...e})),(0,m.on)(p.OV,e=>({...e,success:"OTP send success"})),(0,m.on)(p.tc,e=>({...e,error:"OTP sending failed"})),(0,m.on)(p.AK,(e,{userData:a})=>({...e,turfadmin:a})),(0,m.on)(p.Qg,(e,{userData:a})=>({...e,turfadmin:a})),(0,m.on)(p.PE,(e,{error:a})=>({...e,error:a})),(0,m.on)(p.v_,(e,{token:a})=>({...e,isLoggedIn:!0,success:a})),(0,m.on)(p.BI,(e,{error:a})=>({...e,error:a})));var Wt=l(5315),Gt=l(8260);let Ht=(()=>{var e;class a{constructor(n,r){this.turfAdminService=n,this.turfAdminUrl=r}intercept(n,r){if(n.url.startsWith(this.turfAdminUrl.TurfOwnerAPIEndPoint)){const o=this.turfAdminService.getToken();if(o){let s=n.clone({setHeaders:{Authorization:`Bearer ${o}`}});return r.handle(s)}return r.handle(n)}return r.handle(n)}}return(e=a).\u0275fac=function(n){return new(n||e)(t.LFG(f.f),t.LFG(Gt.g))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),a})();var Xt=l(2651),Rt=l(1447),zt=l(5986);let $t=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[Wt.B,{provide:Z.TP,useClass:Ht,multi:!0},f.f],imports:[g.ez,Qt.m,Z.JF,qt,u.u5,Y.g0,C.ot,P.Ps,U.QW,T.lN,Xt.SJ,_.To,x.c,Rt.o9,S.Is,I.LD,Q.FA,O.XK,zt.p9,y.ZX,F.Tx,u.UX,m.Aw.forFeature("turfAdmin",Bt)]}),a})()}}]);