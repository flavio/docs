"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[8973],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],a={title:"",sidebar_label:"epinio settings"},l=void 0,p={unversionedId:"references/cli/epinio_settings",id:"version-0.9.0/references/cli/epinio_settings",title:"",description:"epinio settings",source:"@site/versioned_docs/version-0.9.0/references/cli/epinio_settings.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_settings",permalink:"/references/cli/epinio_settings",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.9.0/references/cli/epinio_settings.md",tags:[],version:"0.9.0",frontMatter:{title:"",sidebar_label:"epinio settings"},sidebar:"docs",previous:{title:"epinio service bind",permalink:"/references/cli/epinio_service_bind"},next:{title:"epinio settings colors",permalink:"/references/cli/epinio_settings_colors"}},c={},u=[{value:"epinio settings",id:"epinio-settings",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-settings"},"epinio settings"),(0,o.kt)("p",null,"Epinio settings management"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Manage the epinio cli settings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio settings [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for settings\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/cli/epinio_settings_colors"},"epinio settings colors"),"\t - Manage colored output"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/cli/epinio_settings_show"},"epinio settings show"),"\t - Show the current settings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/cli/epinio_settings_update-ca"},"epinio settings update-ca"),"\t - Update the api location and CA certificate")))}d.isMDXComponent=!0}}]);