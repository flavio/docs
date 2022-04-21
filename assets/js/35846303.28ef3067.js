"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,h=d["".concat(s,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Install Epinio on k3d (local)",title:""},s="Creating a K3d Kubernetes Cluster",u={unversionedId:"howtos/install_epinio_on_k3d",id:"version-0.7.1/howtos/install_epinio_on_k3d",title:"",description:"This how-to was written using the following versions:",source:"@site/versioned_docs/version-0.7.1/howtos/install_epinio_on_k3d.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_k3d",permalink:"/docs/howtos/install_epinio_on_k3d",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.7.1/howtos/install_epinio_on_k3d.md",tags:[],version:"0.7.1",frontMatter:{sidebar_label:"Install Epinio on k3d (local)",title:""},sidebar:"docs",previous:{title:"Install Epinio on Rancher Desktop (local)",permalink:"/docs/howtos/install_epinio_on_rancher_desktop"},next:{title:"Install Epinio on Minikube (local)",permalink:"/docs/howtos/install_epinio_on_minikube"}},c={},p=[{value:"Get K3d Kubernetes Cluster",id:"get-k3d-kubernetes-cluster",level:2},{value:"Install K3d",id:"install-k3d",level:3},{value:"Create a K3d kubernetes cluster",id:"create-a-k3d-kubernetes-cluster",level:4},{value:"Create a K3d kubernetes cluster when it is inside a VM",id:"create-a-k3d-kubernetes-cluster-when-it-is-inside-a-vm",level:4},{value:"Install Epinio on the Cluster",id:"install-epinio-on-the-cluster",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Kubeconfig",id:"kubeconfig",level:4},{value:"Traefik",id:"traefik",level:4}],d={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-k3d-kubernetes-cluster"},"Creating a K3d Kubernetes Cluster"),(0,i.kt)("p",null,"This how-to was written using the following versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,i.kt)("li",{parentName:"ul"},"k3d version v5.3.0")),(0,i.kt)("h2",{id:"get-k3d-kubernetes-cluster"},"Get K3d Kubernetes Cluster"),(0,i.kt)("h3",{id:"install-k3d"},"Install K3d"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://k3d.io/"},"instructions")," to install k3d on your system."),(0,i.kt)("h4",{id:"create-a-k3d-kubernetes-cluster"},"Create a K3d kubernetes cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3d cluster create epinio\n")),(0,i.kt)("h4",{id:"create-a-k3d-kubernetes-cluster-when-it-is-inside-a-vm"},"Create a K3d kubernetes cluster when it is inside a VM"),(0,i.kt)("p",null,"Epinio has to connect to pods inside the cluster. The default installation uses the internal docker IP for this. If docker is running in a VM, e.g. with Docker Desktop for Mac, that IP will not be reachable."),(0,i.kt)("p",null,"As a workaround the IP of the host can be used instead, together with port-forwardings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create epinio -p '80:80@loadbalancer' -p '443:443@loadbalancer'\n")),(0,i.kt)("p",null,"After the command returns, ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," should already be talking to your new cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                  STATUS   ROLES                  AGE   VERSION\nk3d-epinio-server-0   Ready    control-plane,master   38s   v1.22.6+k3s1\n")),(0,i.kt)("h3",{id:"install-epinio-on-the-cluster"},"Install Epinio on the Cluster"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation/magicDNS_setup"},'"magic" DNS setup')," to define the domain name you will use for Epinio."),(0,i.kt)("p",null,"Then, continue with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation/"},"Epinio installation process"),"."),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h4",{id:"kubeconfig"},"Kubeconfig"),(0,i.kt)("p",null,"To get the kube config to access the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"k3d kubeconfig get epinio\n")),(0,i.kt)("h4",{id:"traefik"},"Traefik"),(0,i.kt)("p",null,"In case of trouble with Epinio's Traefik component or Ingress controllers, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/advanced#traefik"},"Traefik")," section in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/advanced"},"Advanced Topics")," document shall be your friend."))}k.isMDXComponent=!0}}]);