"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[6809],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3783:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={title:""},s=void 0,l={unversionedId:"references/cli/epinio_configuration_show",id:"references/cli/epinio_configuration_show",title:"",description:"epinio configuration show",source:"@site/docs/references/cli/epinio_configuration_show.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_configuration_show",permalink:"/docs/next/references/cli/epinio_configuration_show",editUrl:"https://github.com/epinio/epinio-docs/docs/references/cli/epinio_configuration_show.md",tags:[],version:"current",frontMatter:{title:""},sidebar:"docs",previous:{title:"",permalink:"/docs/next/references/cli/epinio_configuration_list"},next:{title:"",permalink:"/docs/next/references/cli/epinio_configuration_unbind"}},u={},p=[{value:"epinio configuration show",id:"epinio-configuration-show",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-configuration-show"},"epinio configuration show"),(0,o.kt)("p",null,"Configuration information"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Show detailed information of the named configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio configuration show NAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for show\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/references/cli/epinio_configuration"},"epinio configuration"),"\t - Epinio configuration features")))}d.isMDXComponent=!0}}]);