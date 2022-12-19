"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[12038],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],a={sidebar_label:"Installing Epinio On Public Clouds",sidebar_position:21,title:""},s="Install Epinio on Public Clouds",u={unversionedId:"howtos/install_epinio_on_public_cloud",id:"version-1.5.2/howtos/install_epinio_on_public_cloud",title:"",description:"Epinio can be installed on any Kubernetes distribution, including the Public Cloud ones.",source:"@site/versioned_docs/version-1.5.2/howtos/install_epinio_on_public_cloud.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_public_cloud",permalink:"/howtos/install_epinio_on_public_cloud",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.2/howtos/install_epinio_on_public_cloud.md",tags:[],version:"1.5.2",sidebarPosition:21,frontMatter:{sidebar_label:"Installing Epinio On Public Clouds",sidebar_position:21,title:""},sidebar:"docs",previous:{title:"Installing Epinio On Minikube (local)",permalink:"/howtos/install_epinio_on_minikube"},next:{title:"Installing A Metrics Server",permalink:"/howtos/install_metrics_server"}},c={},p=[{value:"Public Clouds configuration",id:"public-clouds-configuration",level:2},{value:"AKS prerequisites",id:"aks-prerequisites",level:3},{value:"Create an AKS cluster",id:"create-an-aks-cluster",level:3},{value:"EKS prerequisites",id:"eks-prerequisites",level:3},{value:"Create an EKS cluster",id:"create-an-eks-cluster",level:3},{value:"GKE prerequisites",id:"gke-prerequisites",level:3},{value:"Create a GKE cluster",id:"create-a-gke-cluster",level:3},{value:"Install Epinio",id:"install-epinio",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-epinio-on-public-clouds"},"Install Epinio on Public Clouds"),(0,o.kt)("p",null,"Epinio can be installed on any Kubernetes distribution, including the Public Cloud ones."),(0,o.kt)("h2",{id:"public-clouds-configuration"},"Public Clouds configuration"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Microsoft AKS configuration"),(0,o.kt)("h3",{id:"aks-prerequisites"},"AKS prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio has been tested with AKS version ",(0,o.kt)("strong",{parentName:"li"},"v1.21.9")),(0,o.kt)("li",{parentName:"ul"},"To just try out Epinio, e.g. 2 ",(0,o.kt)("strong",{parentName:"li"},"Standard_D2_v2")," nodes are sufficient")),(0,o.kt)("h3",{id:"create-an-aks-cluster"},"Create an AKS cluster"),(0,o.kt)("p",null,"If you do not have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough"},"quickstart")," to create an AKS cluster."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In AKS, Epinio must be installed with an external registry because due to a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/issues/1373#issuecomment-1105231113"},"change")," in Azure, we cannot use internal registry anymore."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Amazon EKS configuration"),(0,o.kt)("h3",{id:"eks-prerequisites"},"EKS prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio has been tested with EKS version ",(0,o.kt)("strong",{parentName:"li"},"v1.21")),(0,o.kt)("li",{parentName:"ul"},"To just try out Epinio, e.g. 2 ",(0,o.kt)("strong",{parentName:"li"},"t3a.large")," nodes are sufficient")),(0,o.kt)("h3",{id:"create-an-eks-cluster"},"Create an EKS cluster"),(0,o.kt)("p",null,"If you do not have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"quickstart")," to create an EKS cluster.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Google GKE configuration"),(0,o.kt)("h3",{id:"gke-prerequisites"},"GKE prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio has been tested with GKE version ",(0,o.kt)("strong",{parentName:"li"},"v1.21.9")),(0,o.kt)("li",{parentName:"ul"},"To just try out Epinio, e.g. 1 ",(0,o.kt)("strong",{parentName:"li"},"n2-standard-4")," node is sufficient")),(0,o.kt)("h3",{id:"create-a-gke-cluster"},"Create a GKE cluster"),(0,o.kt)("p",null,"If you do not have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart"},"quickstart")," to create a GKE cluster.")),(0,o.kt)("h2",{id:"install-epinio"},"Install Epinio"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/installation/install_epinio"},"Epinio installation process"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"In case of trouble with Epinio's Traefik component or Ingress controllers, the ",(0,o.kt)("a",{parentName:"p",href:"/explanations/advanced#traefik"},"Traefik")," section in the ",(0,o.kt)("a",{parentName:"p",href:"/explanations/advanced"},"Advanced Topics")," document shall be your friend."))}f.isMDXComponent=!0}}]);