"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[85825],{3905:function(e,i,n){n.d(i,{Zo:function(){return p},kt:function(){return v}});var t=n(67294);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},p=function(e){var i=l(e.components);return t.createElement(s.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},f=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),v=r,d=f["".concat(s,".").concat(v)]||f[v]||u[v]||o;return n?t.createElement(d,a(a({ref:i},p),{},{components:n})):t.createElement(d,a({ref:i},p))}));function v(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in i)hasOwnProperty.call(i,s)&&(c[s]=i[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16341:function(e,i,n){n.r(i),n.d(i,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"",sidebar_label:"epinio service"},s=void 0,l={unversionedId:"references/cli/epinio_service",id:"version-0.9.0/references/cli/epinio_service",title:"",description:"epinio service",source:"@site/versioned_docs/version-0.9.0/references/cli/epinio_service.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_service",permalink:"/0.9.0/references/cli/epinio_service",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.9.0/references/cli/epinio_service.md",tags:[],version:"0.9.0",frontMatter:{title:"",sidebar_label:"epinio service"},sidebar:"docs",previous:{title:"epinio app update",permalink:"/0.9.0/references/cli/epinio_app_update"},next:{title:"epinio service catalog",permalink:"/0.9.0/references/cli/epinio_service_catalog"}},p={},u=[{value:"epinio service",id:"epinio-service",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function v(e){var i=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-service"},"epinio service"),(0,o.kt)("p",null,"Epinio service management"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Manage the epinio services"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for service\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_bind"},"epinio service bind"),"\t - Bind a service SERVICENAME to an Epinio app APPNAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_catalog"},"epinio service catalog"),"\t - Lists all available Epinio catalog services, or show the details of the specified one"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_create"},"epinio service create"),"\t - Create a service SERVICENAME of an Epinio catalog service CATALOGSERVICENAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_delete"},"epinio service delete"),"\t - Delete service SERVICENAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_list"},"epinio service list"),"\t - List all the services in the targeted namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_show"},"epinio service show"),"\t - Show details of a service SERVICENAME"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.9.0/references/cli/epinio_service_unbind"},"epinio service unbind"),"\t - Unbinds a service SERVICENAME from an Epinio app APPNAME")))}v.isMDXComponent=!0}}]);