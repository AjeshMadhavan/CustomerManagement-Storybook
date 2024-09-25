"use strict";(self.webpackChunkcustomer_management=self.webpackChunkcustomer_management||[]).push([[231],{"./src/stories/OptionDropdown.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdown:()=>Dropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OptionDropdown_stories}),__webpack_require__("./src/index.css");var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),constants=__webpack_require__("./src/constants.ts");let OptionsDropdownvue_type_script_lang_ts_setup_true=(0,vue_esm.defineComponent)({__name:"OptionsDropdown",props:{dropdownContent:null,contentPosition:{default:constants.s.Left},shouldHideToggleArrow:{type:Boolean,default:!1},icon:{default:""},imageUrl:{default:""},text:{default:""},toggleButtonStyle:{default:""}},emits:["dropdown-item-click"],setup(__props,{emit:emits}){let dropdownTitle=(0,vue_esm.ref)(__props.text),shouldShowOptions=(0,vue_esm.ref)(!1),dropdownContainer=(0,vue_esm.ref)(null),hasOnlyIcon=(0,vue_esm.computed)(()=>__props.icon&&!__props.text&&!__props.imageUrl);return document.addEventListener("click",event=>{dropdownContainer.value?.contains(event?.target)||(shouldShowOptions.value=!1)}),{__sfc:!0,props:__props,emits,dropdownTitle,shouldShowOptions,dropdownContainer,hasOnlyIcon,toggleOptions:toggleValue=>{shouldShowOptions.value=toggleValue},onDropdownItemClick:dropdownItem=>{dropdownTitle.value=dropdownItem,shouldShowOptions.value=!1,emits("dropdown-item-click",dropdownItem)},DropdownContentPosition:constants.s}}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OptionsDropdownvue_type_style_index_0_id_5dad1d42_prod_lang_scss_scoped_true=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/OptionsDropdown.vue?vue&type=style&index=0&id=5dad1d42&prod&lang=scss&scoped=true"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(OptionsDropdownvue_type_style_index_0_id_5dad1d42_prod_lang_scss_scoped_true.A,options),OptionsDropdownvue_type_style_index_0_id_5dad1d42_prod_lang_scss_scoped_true.A&&OptionsDropdownvue_type_style_index_0_id_5dad1d42_prod_lang_scss_scoped_true.A.locals&&OptionsDropdownvue_type_style_index_0_id_5dad1d42_prod_lang_scss_scoped_true.A.locals;let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(OptionsDropdownvue_type_script_lang_ts_setup_true,function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c("div",{ref:"dropdownContainer",staticClass:"relative w-full"},[_c("button",{class:["dropdown-button w-full hover:bg-zinc-200",{"bg-zinc-200":_setup.shouldShowOptions},_setup.props.toggleButtonStyle],on:{click:function($event){return $event.stopPropagation(),_setup.toggleOptions(!_setup.shouldShowOptions)}}},[_c("div",{staticClass:"flex items-center w-4/5"},[_c("v-icon",{class:["!text-base/4",{"mr-1":!_setup.hasOnlyIcon}]},[_vm._v("\n        "+_vm._s(_setup.props.icon)+"\n      ")]),_vm._v(" "),_setup.props.imageUrl?_c("img",{staticClass:"dropdown-image mr-1",attrs:{src:_setup.props.imageUrl,alt:"dropdown image"}}):_vm._e(),_vm._v(" "),_setup.props.text?_c("span",{staticClass:"dropdown-title"},[_vm._v("\n        "+_vm._s(_setup.dropdownTitle)+"\n      ")]):_vm._e()],1),_vm._v(" "),_vm.shouldHideToggleArrow?_vm._e():_c("v-icon",{staticClass:"!text-base/4 ml-1 w-min"},[_vm._v("\n      mdi-menu-down\n    ")])],1),_vm._v(" "),_setup.shouldShowOptions?_c("div",{class:["absolute shadow-md bg-white z-50",{"left-0":_vm.contentPosition===_setup.DropdownContentPosition.Left,"right-0":_vm.contentPosition===_setup.DropdownContentPosition.Right}]},[_c("ul",{staticClass:"w-max"},_vm._l(_vm.dropdownContent,function(dropdownItem){return _c("li",{key:dropdownItem.text,class:["dropdown-item",{"hover:bg-zinc-100 cursor-pointer":!dropdownItem.disableHover,"bg-black-12 hover:bg-black-14":_setup.dropdownTitle===dropdownItem.text}],on:{click:function(){return _setup.onDropdownItemClick(dropdownItem.text)}}},[dropdownItem.prependIcon?_c("v-icon",{staticClass:"dropdown-item__icon"},[_vm._v("\n          "+_vm._s(dropdownItem.prependIcon)+"\n        ")]):_vm._e(),_vm._v(" "),_c("span",[_vm._v(_vm._s(dropdownItem.text))]),_vm._v(" "),dropdownItem.appendIcon?_c("v-icon",{staticClass:"dropdown-item__icon"},[_vm._v("\n          "+_vm._s(dropdownItem.appendIcon)+"\n        ")]):_vm._e()],1)}),0)]):_vm._e()])},[],!1,null,"5dad1d42",null).exports;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"OptionsDropdown",description:"",tags:{},props:[{name:"dropdownContent",required:!0,type:{name:"Array",elements:[{name:"DropdownContent"}]}},{name:"contentPosition",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"DropdownContentPosition.Left"}},{name:"shouldHideToggleArrow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"imageUrl",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"toggleButtonStyle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"dropdown-item-click",type:{names:["string"]}}],sourceFiles:["/home/ajesh/Documents/me/Project/exercises/customer-management/src/components/OptionsDropdown.vue"]};let UIdata_namespaceObject=JSON.parse('{"SM":{"rF":{"f":[{"text":"All"},{"text":"Salaried"},{"text":"Commission"},{"text":"Terminated"}]}}}'),OptionDropdown_stories={component:__vuedocgen_export_0,tags:["autodocs"],argTypes:{contentPosition:{type:"select",options:Object.values(constants.s)},hideToggleArrow:{control:"boolean"},icon:{control:"text"},imageUrl:{control:"text"},toggleButtonStyle:{control:"text"},text:{control:"text"}},render:function(args,param){return{props:Object.keys(param.argTypes),components:{OptionsDropdown:__vuedocgen_export_0},template:'<options-dropdown v-bind="$props" />'}}};var Dropdown={args:{text:"All",contentPosition:constants.s.Left,dropdownContent:UIdata_namespaceObject.SM.rF.f,toggleButtonStyle:"p-2"}};Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "All",\n    contentPosition: DropdownContentPosition.Left,\n    dropdownContent: UIdata.contactListPage.categoryOptions.options,\n    toggleButtonStyle: "p-2"\n  }\n}',...Dropdown.parameters?.docs?.source}}};let __namedExportsOrder=["Dropdown"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/OptionsDropdown.vue?vue&type=style&index=0&id=5dad1d42&prod&lang=scss&scoped=true":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-button[data-v-5dad1d42]{width:100%;font-size:13px;letter-spacing:.52px;display:flex;align-items:center}.dropdown-image[data-v-5dad1d42]{width:28px;height:28px;border:1px solid #e0e0e0;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 0%;object-position:50% 0%;border-radius:50%}.dropdown-image[data-v-5dad1d42]:hover{border-color:#03a9f4;color:rgba(0,0,0,.078)}.dropdown-title[data-v-5dad1d42]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-transform:uppercase}.dropdown-item[data-v-5dad1d42]{padding:10px 11px 9px;font-size:13px;font-weight:400;text-align:left}.dropdown-item[data-v-5dad1d42]:first-child{margin-top:4px}.dropdown-item[data-v-5dad1d42]:last-child{margin-bottom:4px}.dropdown-item__icon[data-v-5dad1d42]{width:29px;font-size:18px;justify-content:left}","",{version:3,sources:["webpack://./src/components/OptionsDropdown.vue"],names:[],mappings:"AACA,kCACE,UAAA,CACA,cAAA,CACA,oBAAA,CACA,YAAA,CACA,kBAAA,CAGF,iCACE,UAAA,CACA,WAAA,CACA,wBAAA,CACA,mBAAA,CAAA,gBAAA,CACA,yBAAA,CAAA,sBAAA,CACA,iBAAA,CAEA,uCACE,oBAAA,CACA,sBAAA,CAIJ,iCACE,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAGF,gCACE,qBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CAEA,4CACE,cAAA,CAGF,2CACE,iBAAA,CAGF,sCACE,UAAA,CACA,cAAA,CACA,oBAAA",sourcesContent:["\n.dropdown-button {\n  width: 100%;\n  font-size: 13px;\n  letter-spacing: 0.52px;\n  display: flex;\n  align-items: center;\n}\n\n.dropdown-image {\n  width: 28px;\n  height: 28px;\n  border: 1px solid rgb(224, 224, 224);\n  object-fit: cover;\n  object-position: 50% 0%;\n  border-radius: 50%;\n\n  &:hover {\n    border-color: rgb(3, 169, 244);\n    color: hsla(0, 0%, 0%, 0.078);\n  }\n}\n\n.dropdown-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n}\n\n.dropdown-item {\n  padding: 10px 11px 9px;\n  font-size: 13px;\n  font-weight: 400;\n  text-align: left;\n\n  &:first-child {\n    margin-top: 4px;\n  }\n\n  &:last-child {\n    margin-bottom: 4px;\n  }\n\n  &__icon {\n    width: 29px;\n    font-size: 18px;\n    justify-content: left;\n  }\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map(function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content}).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]&&(item[1]="@media ".concat(item[2]," {").concat(item[1],"}")),item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));return[content].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64)," */")]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier:identifier,updater:updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);return api.update(obj),function updater(newObj){newObj?(newObj.css!==obj.css||newObj.media!==obj.media||newObj.sourceMap!==obj.sourceMap||newObj.supports!==obj.supports||newObj.layer!==obj.layer)&&api.update(obj=newObj):api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}function insertBySelector(insert,style){var target=getTarget(insert);if(!target)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}module.exports=insertBySelector},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}module.exports=insertStyleElement},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}module.exports=setAttributesWithoutAttributes},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){apply(styleElement,options,obj)},remove:function remove(){removeStyleElement(styleElement)}}}module.exports=domAPI},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}module.exports=styleTagTransform},"./src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ButtonVariants,DropdownContentPosition;__webpack_require__.d(__webpack_exports__,{h:()=>ButtonVariants,s:()=>DropdownContentPosition}),function(ButtonVariants){ButtonVariants.Outlined="outlined",ButtonVariants.Normal="normal"}(ButtonVariants||(ButtonVariants={})),function(DropdownContentPosition){DropdownContentPosition.Left="left",DropdownContentPosition.Right="right"}(DropdownContentPosition||(DropdownContentPosition={}))},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>normalizeComponent});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);