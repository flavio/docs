"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7731],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return d}});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(i),d=r,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return i?t.createElement(m,a(a({ref:n},u),{},{components:i})):t.createElement(m,a({ref:n},u))}));function d(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=i[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}s.displayName="MDXCreateElement"},4629:function(e,n,i){i.r(n),i.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var t=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],c={},p=void 0,l={unversionedId:"references/cli/epinio_configuration",id:"version-0.6.2/references/cli/epinio_configuration",title:"epinio_configuration",description:"epinio configuration",source:"@site/versioned_docs/version-0.6.2/references/cli/epinio_configuration.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_configuration",permalink:"/0.6.2/references/cli/epinio_configuration",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.6.2/references/cli/epinio_configuration.md",tags:[],version:"0.6.2",frontMatter:{},sidebar:"docs",previous:{title:"epinio_server",permalink:"/0.6.2/references/cli/epinio_server"},next:{title:"epinio_configuration_bind",permalink:"/0.6.2/references/cli/epinio_configuration_bind"}},u={},f=[{value:"epinio configuration",id:"epinio-configuration",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:f};function d(e){var n=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-configuration"},"epinio configuration"),(0,o.kt)("p",null,"Epinio configuration features"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Handle configuration features with Epinio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio configuration [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for configuration\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_bind"},"epinio configuration bind"),"\t - Bind a configuration to an application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_create"},"epinio configuration create"),"\t - Create a configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_delete"},"epinio configuration delete"),"\t - Delete a configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_list"},"epinio configuration list"),"\t - Lists configurations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_show"},"epinio configuration show"),"\t - Configuration information"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_unbind"},"epinio configuration unbind"),"\t - Unbind configuration from an application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_configuration_update"},"epinio configuration update"),"\t - Update a configuration")))}d.isMDXComponent=!0}}]);