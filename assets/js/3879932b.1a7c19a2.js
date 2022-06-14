"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[36578],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={slug:"/",sidebar_label:"Introduction",title:""},p="Introduction",s={unversionedId:"intro",id:"version-0.9.0/intro",title:"",description:"From application sources to URL in one step.",source:"@site/versioned_docs/version-0.9.0/intro.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.9.0/intro.md",tags:[],version:"0.9.0",frontMatter:{slug:"/",sidebar_label:"Introduction",title:""},sidebar:"docs",next:{title:"Quick Start",permalink:"/tutorials/quickstart"}},u={},c=[{value:"Why Kubernetes",id:"why-kubernetes",level:2},{value:"Features",id:"features",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"From application sources to URL in one step."),(0,a.kt)("p",null,"Epinio is an application Platform. It deploys on Kubernetes and allows application developers and operators to work together without stepping on each others work."),(0,a.kt)("p",null,"Developers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They use the ",(0,a.kt)("inlineCode",{parentName:"li"},"epinio")," cli to deploy applications"),(0,a.kt)("li",{parentName:"ul"},"They don't have to know about Kubernetes (no steep learning curve)"),(0,a.kt)("li",{parentName:"ul"},"They can use any available ",(0,a.kt)("a",{parentName:"li",href:"https://paketo.io/"},"paketo buildpack")," or pre-built images to deploy their applications"),(0,a.kt)("li",{parentName:"ul"},"Quick local setup with zero configuration"),(0,a.kt)("li",{parentName:"ul"},"Deploying to production similar to development")),(0,a.kt)("p",null,"Operators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They work directly with Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"They decide how the cluster is set up (including how Epinio is installed)"),(0,a.kt)("li",{parentName:"ul"},"They can decide how applications are deployed")),(0,a.kt)("h2",{id:"why-kubernetes"},"Why Kubernetes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," is becoming the de-facto standard for container orchestration.\nDevelopers may want to use Kubernetes for all the benefits it provides or may\nhave to do so because that's what their Ops team has chosen. Whatever the case,\nusing Kubernetes is not simple. It has a steep learning curve and doing it right\nis a full time job. Developers should spend their time working on their applications,\nnot doing operations."),(0,a.kt)("p",null,"Epinio is adding the needed abstractions and intelligence to allow Developers\nto use Kubernetes as a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Platform_as_a_service"},"PaaS (Platform as a Service)"),"."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Epinio uses TLS to encrypt communication between its components. It also uses TLS for applications by default."),(0,a.kt)("li",{parentName:"ul"},"Basic Authentication to access the API."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Epinio Clients"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Web UI"),(0,a.kt)("li",{parentName:"ul"},"Epinio CLI"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apps"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CRUD operations of your app. (An app can be a tarball or in a github repo)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://buildpacks.io/"},"Cloud Native Buildpacks")," provide the runtime environment for your apps"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configurations"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CRUD operations of your configuration. A configuration can be connection details for a database, SaaS etc."),(0,a.kt)("li",{parentName:"ul"},"Bind configurations to apps.")))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"If you want to try Epinio, we suggest you to have a look at\nour ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/quickstart"},"quickstart")," tutorial to get started with Epinio."),(0,a.kt)("p",null,"For a more detailed information, you can check the ",(0,a.kt)("a",{parentName:"p",href:"/explanations/"},"Explanations"),' section,\nwhere different topics such as "Principles" or "Security" are explained.'),(0,a.kt)("p",null,"Finally, if you want to test Epinio directly, our ",(0,a.kt)("a",{parentName:"p",href:"/howtos/"},"HowTos")," section\nwill show concrete examples on how to use Epinio for different use-cases."))}m.isMDXComponent=!0}}]);