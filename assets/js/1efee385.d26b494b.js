"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[24372],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73037:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return f}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=["components"],p={title:"",sidebar_label:"epinio app manifest"},s=void 0,c={unversionedId:"references/commands/cli/app/epinio_app_manifest",id:"version-1.5.2/references/commands/cli/app/epinio_app_manifest",title:"",description:"epinio app manifest",source:"@site/versioned_docs/version-1.5.2/references/commands/cli/app/epinio_app_manifest.md",sourceDirName:"references/commands/cli/app",slug:"/references/commands/cli/app/epinio_app_manifest",permalink:"/references/commands/cli/app/epinio_app_manifest",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.2/references/commands/cli/app/epinio_app_manifest.md",tags:[],version:"1.5.2",frontMatter:{title:"",sidebar_label:"epinio app manifest"},sidebar:"docs",previous:{title:"epinio app logs",permalink:"/references/commands/cli/app/epinio_app_logs"},next:{title:"epinio app port-forward",permalink:"/references/commands/cli/app/epinio_app_port-forward"}},l={},f=[{value:"epinio app manifest",id:"epinio-app-manifest",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:f};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-app-manifest"},"epinio app manifest"),(0,o.kt)("p",null,"Save state of the named application as a manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app manifest NAME MANIFESTPATH [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for manifest\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/references/commands/cli/app/epinio_app"},"epinio app"),"\t - Epinio application features")))}m.isMDXComponent=!0}}]);