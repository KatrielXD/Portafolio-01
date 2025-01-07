"use strict";(self.webpackChunkportafolio=self.webpackChunkportafolio||[]).push([[261],{261:(v,l,n)=>{n.r(l),n.d(l,{ProyectosModule:()=>F});var s=n(177),i=n(172),t=n(438);const d=[{nombre:"Contador",img:"/assets/contador.png",tecnologias:["Angular Framework","CSS","PWA","Bootstrap"],descripcion:"Aplicaci\xf3n de contador aprendiendo Angular y a manejar eventos y reactividad",url:"https://cheery-platypus-872719.netlify.app/"},{nombre:"Pokeapp",img:"/assets/pokeapp.png",tecnologias:["Angular Framework","Angular Material","PWA"],descripcion:"Aplicacion de pokemon usando Angular Material para los estilos",url:"https://startling-smakager-b90bd4.netlify.app/"},{nombre:"Listado de Tareas",img:"/assets/tareas.png",tecnologias:["Angular Framework","Bulma CSS"],descripcion:"Aplicacion de listado de tareas usando Bulma CSS como Framework para los estilos",url:"https://regal-croissant-d7fdcb.netlify.app/"},{nombre:"Pipes App",img:"/assets/pipes.png",tecnologias:["Angular Framework","Bootstrap 5"],descripcion:"Aplicacion con diferentes pipes que tenemos en Angular Framework",url:"https://radiant-flan-e0f1dd.netlify.app/"},{nombre:"RxJs - Directivas",img:"/assets/rxjs.png",tecnologias:["Angular Framework","CSS","PWA"],descripcion:"Aplicaci\xf3n de RxJS aplicando directivas",url:"https://exquisite-caramel-ec6c38.netlify.app/"},{nombre:"Formularios",img:"/assets/formularios.png",tecnologias:["Angular Framework","CSS","PWA"],descripcion:"Aplicaci\xf3n de formularios usando template y reactive",url:"https://stellular-rolypoly-daef6d.netlify.app/"}];let m=(()=>{class o{constructor(){this._data=d}get data(){return this._data}getProyecto(e){return this._data.filter(a=>a.nombre===e)[0]}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function u(o,c){if(1&o&&(t.j41(0,"div",2)(1,"div",3),t.nrm(2,"img",4),t.j41(3,"div",5)(4,"h5",6),t.EFF(5),t.k0s(),t.j41(6,"div",7)(7,"a",8),t.EFF(8,"Visitar Aplicaci\xf3n"),t.k0s()(),t.j41(9,"div",7)(10,"a",9),t.EFF(11,"Ver Detalles"),t.k0s()()()()()),2&o){const e=c.$implicit,r=t.XpG();t.R7$(2),t.Y8G("src",e.img,t.B4B)("alt",e.nombre),t.R7$(3),t.JRh(e.nombre),t.R7$(2),t.Y8G("href",e.url,t.B4B),t.R7$(3),t.Y8G("routerLink","informacion/"+r.getURI(e.nombre))}}function f(o,c){if(1&o&&(t.j41(0,"span",9),t.EFF(1),t.k0s()),2&o){const e=c.$implicit;t.R7$(),t.JRh(e)}}const h=[{path:"",component:(()=>{class o{constructor(e){this.proyectosDataService=e}get data(){return this.proyectosDataService.data}getURI(e){return encodeURI(e)}static{this.\u0275fac=function(r){return new(r||o)(t.rXU(m))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-proyectos"]],decls:2,vars:1,consts:[[1,"row"],["class","col-12 col-md-4",4,"ngFor","ngForOf"],[1,"col-12","col-md-4"],[1,"card","m-2",2,"width","18rem"],[1,"card-img-top","p-2",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"mt-2"],["target","_blank",1,"btn","btn-warning","w-100",3,"href"],[1,"btn","btn-success","w-100",3,"routerLink"]],template:function(r,a){1&r&&(t.j41(0,"div",0),t.DNE(1,u,12,5,"div",1),t.k0s()),2&r&&(t.R7$(),t.Y8G("ngForOf",a.data))},dependencies:[s.Sq,i.Wk]})}}return o})()},{path:"informacion/:id",component:(()=>{class o{constructor(e,r,a){this.activatedRoute=e,this.router=r,this.proyectoDataService=a,this.parametro="",this.proyectoData={};let p="";e.params.subscribe(({id:k})=>{p=k}),this.parametro=decodeURI(p)}ngOnInit(){this.proyectoData=this.proyectoDataService.getProyecto(this.parametro)}goProyecto(){this.router.navigate(["/proyectos"])}static{this.\u0275fac=function(r){return new(r||o)(t.rXU(i.nX),t.rXU(i.Ix),t.rXU(m))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-informacion"]],decls:21,vars:6,consts:[[1,"row"],[1,"col-12","col-md-4"],[1,"img-thumbnail","rounded",3,"src","alt"],[1,"mt-2"],["target","_blank",1,"btn","btn-warning","w-100",3,"href"],[1,"col-12","col-md-8"],[1,"list-group"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"btn","btn-info","my-3",3,"click"],[1,"list-group-item","list-group-item-action"]],template:function(r,a){1&r&&(t.j41(0,"div",0)(1,"div",1),t.nrm(2,"img",2),t.j41(3,"h2"),t.EFF(4),t.k0s(),t.j41(5,"div",3)(6,"a",4),t.EFF(7,"Visitar Aplicaci\xf3n"),t.k0s()()(),t.j41(8,"div",5)(9,"h2"),t.EFF(10,"Descripci\xf3n"),t.k0s(),t.nrm(11,"hr"),t.j41(12,"p"),t.EFF(13),t.k0s(),t.j41(14,"h2"),t.EFF(15,"Tecnolog\xedas"),t.k0s(),t.nrm(16,"hr"),t.j41(17,"div",6),t.DNE(18,f,2,1,"span",7),t.k0s(),t.j41(19,"button",8),t.bIt("click",function(){return a.goProyecto()}),t.EFF(20,"Volver al inicio"),t.k0s()()()),2&r&&(t.R7$(2),t.Y8G("src",a.proyectoData.img,t.B4B)("alt",a.proyectoData.nombre),t.R7$(2),t.SpI(" ",a.proyectoData.nombre," "),t.R7$(2),t.Y8G("href",a.proyectoData.url,t.B4B),t.R7$(7),t.SpI(" ",a.proyectoData.descripcion," "),t.R7$(5),t.Y8G("ngForOf",a.proyectoData.tecnologias))},dependencies:[s.Sq]})}}return o})()}];let y=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[i.iI.forChild(h),i.iI]})}}return o})(),F=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[s.MD,y,i.iI]})}}return o})()}}]);