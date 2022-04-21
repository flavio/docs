"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[266],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||p;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<p;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),p=(n(7294),n(3905)),a=["components"],o={},l=void 0,c={unversionedId:"references/cli/epinio_app",id:"version-0.6.2/references/cli/epinio_app",title:"epinio_app",description:"epinio app",source:"@site/versioned_docs/version-0.6.2/references/cli/epinio_app.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_app",permalink:"/docs/0.6.2/references/cli/epinio_app",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.6.2/references/cli/epinio_app.md",tags:[],version:"0.6.2",frontMatter:{},sidebar:"docs",previous:{title:"epinio",permalink:"/docs/0.6.2/references/cli/epinio"},next:{title:"epinio_app_create",permalink:"/docs/0.6.2/references/cli/epinio_app_create"}},s={},u=[{value:"epinio app",id:"epinio-app",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,p.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"epinio-app"},"epinio app"),(0,p.kt)("p",null,"Epinio application features"),(0,p.kt)("h3",{id:"synopsis"},"Synopsis"),(0,p.kt)("p",null,"Manage epinio application"),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"  -h, --help   help for app\n")),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_create"},"epinio app create"),"\t - Create just the app, without creating a workload"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_delete"},"epinio app delete"),"\t - Deletes an application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_env"},"epinio app env"),"\t - Epinio application configuration"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_exec"},"epinio app exec"),"\t - creates a shell to the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_list"},"epinio app list"),"\t - Lists applications"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_logs"},"epinio app logs"),"\t - Streams the logs of the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_manifest"},"epinio app manifest"),"\t - Save state of the named application as a manifest"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_port-forward"},"epinio app port-forward"),"\t - forward one or more local ports to a pod"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_push"},"epinio app push"),"\t - Push an application declared in the specified manifest"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_restage"},"epinio app restage"),"\t - Restage the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_restart"},"epinio app restart"),"\t - Restart the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_show"},"epinio app show"),"\t - Describe the named application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/0.6.2/references/cli/epinio_app_update"},"epinio app update"),"\t - Update the named application")))}d.isMDXComponent=!0}}]);