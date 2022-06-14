"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[39423],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Security"},c=void 0,u={unversionedId:"explanations/security",id:"version-0.6.2/explanations/security",title:"security",description:"A Quick Note On Security",source:"@site/versioned_docs/version-0.6.2/explanations/security.md",sourceDirName:"explanations",slug:"/explanations/security",permalink:"/0.6.2/explanations/security",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.6.2/explanations/security.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"Security"},sidebar:"docs",previous:{title:"Principles",permalink:"/0.6.2/explanations/principles"},next:{title:"HowTos",permalink:"/0.6.2/howtos/"}},l={},p=[{value:"A Quick Note On Security",id:"a-quick-note-on-security",level:4}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"a-quick-note-on-security"},"A Quick Note On Security"),(0,o.kt)("p",null,"Epinio secures access to its API with TLS and basic authentication."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio settings update")," command after installation to extract and save the necessary credentials\n(user, password) and certificates. The information is stored in Epinio's settings,\nfor pickup by other Epinio commands."),(0,o.kt)("p",null,"For a trial deployment the certificate securing the API will be generated by the\nunderlying cluster, and self-signed, and its CA certificate is stored in the\nsettings to allow verification."),(0,o.kt)("p",null,"For a production-oriented deployment on the other hand, with a proper\ndomain specified (",(0,o.kt)("inlineCode",{parentName:"p"},"--set global.domain=...")," when installing the chart),\nthe certificate can be obtained from ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),". Nothing is stored in the\nsettings in that case, as Let's Encrypt is a known CA. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Read more on how to use Let's Encrypt here: ",(0,o.kt)("a",{parentName:"p",href:"/0.6.2/howtos/certificate_issuers"},"Certificate Issuers"),".")),(0,o.kt)("p",null,"How Kubernetes accesses the Epinio registry (TLS or not) is handled a bit differently depending on installation flags.\nMore details here: ",(0,o.kt)("a",{parentName:"p",href:"/0.6.2/explanations/advanced#container-registry"},"Epinio Registry"),"."))}f.isMDXComponent=!0}}]);