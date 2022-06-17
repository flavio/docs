"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[57726],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(o),f=i,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||r;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},49538:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],p={sidebar_label:"Supported Applications",title:""},s="Epinio supported applications",u={unversionedId:"references/supported_applications",id:"version-0.8.0/references/supported_applications",title:"",description:"This section describes what kind of application you can expect to work with Epinio.",source:"@site/versioned_docs/version-0.8.0/references/supported_applications.md",sourceDirName:"references",slug:"/references/supported_applications",permalink:"/0.8.0/references/supported_applications",editUrl:"https://github.com/epinio/docs/versioned_docs/version-0.8.0/references/supported_applications.md",tags:[],version:"0.8.0",frontMatter:{sidebar_label:"Supported Applications",title:""},sidebar:"docs",previous:{title:"CLI Settings",permalink:"/0.8.0/references/settings"},next:{title:"Application Manifests",permalink:"/0.8.0/references/manifests"}},c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Supported buildpacks",id:"supported-buildpacks",level:2},{value:"Detailed push process",id:"detailed-push-process",level:2}],d={toc:l};function f(e){var t=e.components,p=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"epinio-supported-applications"},"Epinio supported applications"),(0,r.kt)("p",null,"This section describes what kind of application you can expect to work with Epinio.\nTo understand what enables an application to work with Epinio, you need to know how staging works."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Epinio relies on ",(0,r.kt)("a",{parentName:"p",href:"https://buildpacks.io/"},"Cloud Native Buildpacks")," to create a container image for your\napplication. It does that by creating Kubernetes Jobs."),(0,r.kt)("p",null,"Staging starts with you (the developer) running ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio push --name myapp")," from the root of your application source code.\nYou can see a simplified diagram of the process in the image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"epinio-push-simplified",src:o(73029).Z,title:"Epinio push",width:"1758",height:"476"})),(0,r.kt)("p",null,"After pushing your code, Epinio creates staging job which uses the ",(0,r.kt)("a",{parentName:"p",href:"https://paketo.io/"},"paketo buildpacks")," to build a runtime image for your application.\nIf you are not familiar with how buildpacks work, you should have a look at the official docs: ",(0,r.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/"},"https://buildpacks.io/docs/")),(0,r.kt)("h2",{id:"supported-buildpacks"},"Supported buildpacks"),(0,r.kt)("p",null,"Epinio uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/full-stack-release"},"full stack paketo builder image")," which means you can make use of any of the buildpacks\ndocumented here: ",(0,r.kt)("a",{parentName:"p",href:"https://paketo.io/docs/buildpacks/language-family-buildpacks/"},"https://paketo.io/docs/buildpacks/language-family-buildpacks/")),(0,r.kt)("p",null,"The various buildpacks provide various configuration options. You can read on how to generally configure a buildpack here: ",(0,r.kt)("a",{parentName:"p",href:"https://paketo.io/docs/buildpacks/configuration/"},"https://paketo.io/docs/buildpacks/configuration/"),"\nEach buildpack may support more configuration options, so you may have to read the documentation of the buildpacks you are interested in."),(0,r.kt)("p",null,"E.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paketo-buildpacks/php-web#configuring-custom-ini-files"},"Instructions on how to add custom php.ini files for php-web buildpack")),(0,r.kt)("h2",{id:"detailed-push-process"},"Detailed push process"),(0,r.kt)("p",null,"The above image is a simplified explanation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio push")," process. If you don't want to know all the details on how that works, the above diagram should\nbe all the information you need. If you are curious about the details, then read here: ",(0,r.kt)("a",{parentName:"p",href:"/0.8.0/explanations/detailed-push-process"},"Detailed push docs")))}f.isMDXComponent=!0},73029:function(e,t,o){t.Z=o.p+"assets/images/epinio-push-simple-edad8c541bfd70a8a6166e383e0a77fb.svg"}}]);