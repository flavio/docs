"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[36905],{3905:function(e,i,n){n.d(i,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,r,t=function(e,i){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var a=r.createContext({}),l=function(e){var i=r.useContext(a),n=i;return e&&(n="function"==typeof e?e(i):s(s({},i),e)),n},p=function(e){var i=l(e.components);return r.createElement(a.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},u=r.forwardRef((function(e,i){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=t,v=u["".concat(a,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(v,s(s({ref:i},p),{},{components:n})):r.createElement(v,s({ref:i},p))}));function f(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var a in i)hasOwnProperty.call(i,a)&&(c[a]=i[a]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37736:function(e,i,n){n.r(i),n.d(i,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var r=n(83117),t=n(80102),o=(n(67294),n(3905)),s=["components"],c={title:"",sidebar_label:"epinio service"},a=void 0,l={unversionedId:"references/commands/cli/service/epinio_service",id:"version-1.5.1/references/commands/cli/service/epinio_service",title:"",description:"epinio service",source:"@site/versioned_docs/version-1.5.1/references/commands/cli/service/epinio_service.md",sourceDirName:"references/commands/cli/service",slug:"/references/commands/cli/service/epinio_service",permalink:"/1.5.1/references/commands/cli/service/epinio_service",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.1/references/commands/cli/service/epinio_service.md",tags:[],version:"1.5.1",frontMatter:{title:"",sidebar_label:"epinio service"},sidebar:"docs",previous:{title:"epinio namespace show",permalink:"/1.5.1/references/commands/cli/namespace/epinio_namespace_show"},next:{title:"epinio service bind",permalink:"/1.5.1/references/commands/cli/service/epinio_service_bind"}},p={},m=[{value:"epinio service",id:"epinio-service",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:m};function f(e){var i=e.components,n=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-service"},"epinio service"),(0,o.kt)("p",null,"Epinio service management"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Manage the epinio services"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for service\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_bind"},"epinio service bind"),"\t - Bind a service SERVICENAME to an Epinio app APPNAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_catalog"},"epinio service catalog"),"\t - Lists all available Epinio catalog services, or show the details of the specified one"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_create"},"epinio service create"),"\t - Create a service SERVICENAME of an Epinio catalog service CATALOGSERVICENAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_delete"},"epinio service delete"),"\t - Delete one or more services"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_list"},"epinio service list"),"\t - List all the services in the targeted namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_show"},"epinio service show"),"\t - Show details of a service SERVICENAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.5.1/references/commands/cli/service/epinio_service_unbind"},"epinio service unbind"),"\t - Unbinds a service SERVICENAME from an Epinio app APPNAME")))}f.isMDXComponent=!0}}]);