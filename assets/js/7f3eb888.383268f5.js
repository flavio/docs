"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[37267],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),a=["components"],l={sidebar_label:"Installing Epinio on public clouds",sidebar_position:22,title:"Installing Epinio on public clouds",description:"Installing Epinio on Kubernetes services provided by public cloud providers, such as Google, Amazon and Microsoft.",keywords:["kubernetes","amazon","microsoft","google","epinio","AKS","EKS","GKE"]},s=void 0,u={unversionedId:"installation/other_inst_scenarios/install_epinio_on_public_cloud",id:"installation/other_inst_scenarios/install_epinio_on_public_cloud",title:"Installing Epinio on public clouds",description:"Installing Epinio on Kubernetes services provided by public cloud providers, such as Google, Amazon and Microsoft.",source:"@site/docs/installation/other_inst_scenarios/install_epinio_on_public_cloud.md",sourceDirName:"installation/other_inst_scenarios",slug:"/installation/other_inst_scenarios/install_epinio_on_public_cloud",permalink:"/next/installation/other_inst_scenarios/install_epinio_on_public_cloud",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/installation/other_inst_scenarios/install_epinio_on_public_cloud.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_label:"Installing Epinio on public clouds",sidebar_position:22,title:"Installing Epinio on public clouds",description:"Installing Epinio on Kubernetes services provided by public cloud providers, such as Google, Amazon and Microsoft.",keywords:["kubernetes","amazon","microsoft","google","epinio","AKS","EKS","GKE"]},sidebar:"docs",previous:{title:"Installing Epinio on a local K3d",permalink:"/next/installation/other_inst_scenarios/install_epinio_on_k3d"},next:{title:"Installing Epinio on EKS",permalink:"/next/installation/other_inst_scenarios/install_epinio_on_eks"}},c={},p=[{value:"Public clouds configuration",id:"public-clouds-configuration",level:2},{value:"Microsoft AKS",id:"microsoft-aks",level:3},{value:"AKS prerequisites",id:"aks-prerequisites",level:4},{value:"Create an AKS cluster",id:"create-an-aks-cluster",level:4},{value:"Amazon EKS",id:"amazon-eks",level:3},{value:"EKS prerequisites",id:"eks-prerequisites",level:4},{value:"Create an EKS cluster",id:"create-an-eks-cluster",level:4},{value:"Google GKE",id:"google-gke",level:3},{value:"GKE prerequisites",id:"gke-prerequisites",level:4},{value:"Create a GKE cluster",id:"create-a-gke-cluster",level:4},{value:"Install Epinio",id:"install-epinio",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Epinio can be installed on any Kubernetes distribution,\nincluding those provided by public clouds."),(0,r.kt)("h2",{id:"public-clouds-configuration"},"Public clouds configuration"),(0,r.kt)("h3",{id:"microsoft-aks"},"Microsoft AKS"),(0,r.kt)("h4",{id:"aks-prerequisites"},"AKS prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Epinio has been tested with AKS version ",(0,r.kt)("strong",{parentName:"li"},"v1.21.9")),(0,r.kt)("li",{parentName:"ul"},"To try out Epinio, two ",(0,r.kt)("strong",{parentName:"li"},"Standard_D2_v2")," nodes are enough")),(0,r.kt)("h4",{id:"create-an-aks-cluster"},"Create an AKS cluster"),(0,r.kt)("p",null,"If you don't have an existing cluster,\nfollow the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough"},"quickstart"),"\nto create an AKS cluster."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In AKS, Epinio must be installed with an external registry.\nDue to a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/issues/1373#issuecomment-1105231113"},"change"),"\nin Azure\nusing the internal registry is no longer possible.")),(0,r.kt)("h3",{id:"amazon-eks"},"Amazon EKS"),(0,r.kt)("h4",{id:"eks-prerequisites"},"EKS prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Epinio has been tested with EKS version ",(0,r.kt)("strong",{parentName:"li"},"v1.22"),", ",(0,r.kt)("strong",{parentName:"li"},"v1.23")," and ",(0,r.kt)("strong",{parentName:"li"},"v1.24")),(0,r.kt)("li",{parentName:"ul"},"To try out Epinio, two ",(0,r.kt)("strong",{parentName:"li"},"t3a.large")," nodes are enough")),(0,r.kt)("h4",{id:"create-an-eks-cluster"},"Create an EKS cluster"),(0,r.kt)("p",null,"If you don't have an existing EKS cluster, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"quickstart")," to create one."),(0,r.kt)("p",null,"Details are in the dedicated ",(0,r.kt)("a",{parentName:"p",href:"/next/installation/other_inst_scenarios/install_epinio_on_eks"},"EKS documentation"),"."),(0,r.kt)("h3",{id:"google-gke"},"Google GKE"),(0,r.kt)("h4",{id:"gke-prerequisites"},"GKE prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Epinio has been tested with GKE version ",(0,r.kt)("strong",{parentName:"li"},"v1.21.9")),(0,r.kt)("li",{parentName:"ul"},"To try out Epinio, one ",(0,r.kt)("strong",{parentName:"li"},"n2-standard-4")," node is enough")),(0,r.kt)("h4",{id:"create-a-gke-cluster"},"Create a GKE cluster"),(0,r.kt)("p",null,"If you don't have an existing GKE cluster, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart"},"quickstart")," to create one."),(0,r.kt)("h2",{id:"install-epinio"},"Install Epinio"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"/next/installation/install_epinio"},"Epinio installation process"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you have issues using Epinio's Traefik component\nor Ingress controllers,\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"/next/explanations/advanced#traefik"},"Traefik")," section\nin the ",(0,r.kt)("a",{parentName:"p",href:"/next/explanations/advanced"},"Advanced Topics")," document."))}k.isMDXComponent=!0}}]);