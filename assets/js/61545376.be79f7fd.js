"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[54269],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],l={sidebar_label:"Install Epinio",sidebar_position:1,title:""},s="Installation of Epinio",p={unversionedId:"installation/install_epinio",id:"version-1.8.0/installation/install_epinio",title:"",description:"Introduction",source:"@site/versioned_docs/version-1.8.0/installation/install_epinio.md",sourceDirName:"installation",slug:"/installation/install_epinio",permalink:"/installation/install_epinio",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.8.0/installation/install_epinio.md",tags:[],version:"1.8.0",sidebarPosition:1,frontMatter:{sidebar_label:"Install Epinio",sidebar_position:1,title:""},sidebar:"docs",previous:{title:"Epinio Journey: Deploy complex applications with a custom builder image",permalink:"/tutorials/custom_builder_go"},next:{title:"Install Epinio CLI",permalink:"/installation/install_epinio_cli"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Ingress Controller",id:"ingress-controller",level:3},{value:"Cert Manager",id:"cert-manager",level:3},{value:"Kubed",id:"kubed",level:3},{value:"S3 storage",id:"s3-storage",level:3},{value:"Container Registry",id:"container-registry",level:3},{value:"Install Epinio",id:"install-epinio",level:3},{value:"Installation on Specific Kubernetes Offerings",id:"installation-on-specific-kubernetes-offerings",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-of-epinio"},"Installation of Epinio"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Epinio is installed from a single Helm chart and, by default, it also installs ",(0,o.kt)("a",{parentName:"p",href:"#kubed"},(0,o.kt)("inlineCode",{parentName:"a"},"Kubed")),", ",(0,o.kt)("a",{parentName:"p",href:"#s3-storage"},(0,o.kt)("inlineCode",{parentName:"a"},"MinIO")),"\nand a ",(0,o.kt)("a",{parentName:"p",href:"#container-registry"},"container registry")," in your Kubernetes cluster."),(0,o.kt)("p",null,"You can disable the installation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MinIO")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"container registry")," by changing the settings as described in the respective sections."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/references/system_requirements/global"},"system requirements")," for a detailed list of external components your\nKubernetes cluster needs to have before you install Epinio."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Some of the namespaces of the components are hardcoded in the Epinio\ncode and thus are important to be the same as described here. In the future this\nmay be configurable on the Epinio Helm chart.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"ingress-controller"},"Ingress Controller"),(0,o.kt)("p",null,"Epinio creates Ingress resources for the API server, the applications and depending\non your setup, the internal container registry. Those resources won't work unless\nan Ingress controller is running on your cluster."),(0,o.kt)("p",null,"If you don't have an Ingress controller already running, you can install Traefik with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl create namespace traefik\n$ helm repo add traefik https://traefik.github.io/charts\n$ helm repo update\n$ export LOAD_BALANCER_IP=${LOAD_BALANCER_IP:-} # Set this to the IP of your load balancer if you know that\n$ helm install traefik --namespace traefik traefik/traefik \\\n        --set ports.web.redirectTo=websecure \\\n        --set ingressClass.enabled=true \\\n        --set ingressClass.isDefaultClass=true \\\n        --set service.spec.loadBalancerIP=$LOAD_BALANCER_IP\n")),(0,o.kt)("p",null,"It's also possible to use Nginx instead of Traefik following the official ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/#quick-start"},"documentation"),"."),(0,o.kt)("p",null,"Do not forget to use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--set controller.setAsDefaultIngress=true")," when you install Nginx.",(0,o.kt)("br",null),"\nOtherwise, if you do not want defining Nginx as the default ingress, feel free to use ",(0,o.kt)("inlineCode",{parentName:"p"},"--set ingress.ingressClassName=nginx"),"when you deploy Epinio."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING"),": Sometimes, when Epinio uploads your app, you might see ",(0,o.kt)("inlineCode",{parentName:"p"},"error pushing app to server: can't upload archive: server status code: Request Entity Too Large"),".",(0,o.kt)("br",null),"\nIn this case, you need to increase the ",(0,o.kt)("inlineCode",{parentName:"p"},"max body size")," by adding an annotation to your ingress as described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/nginx-configuration/annotations.md#custom-max-body-size"},"nginx.ingress.kubernetes.io/proxy-body-size"))),(0,o.kt)("h3",{id:"cert-manager"},"Cert Manager"),(0,o.kt)("p",null,"Epinio needs ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),' in order to create TLS\ncertificates for the various Ingresses (see "Ingress controller" above).'),(0,o.kt)("p",null,"If cert-manager is not already installed on the cluster, it can be installed like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl create namespace cert-manager\n$ helm repo add jetstack https://charts.jetstack.io\n$ helm repo update\n$ helm install cert-manager --namespace cert-manager jetstack/cert-manager \\\n        --set installCRDs=true \\\n        --set extraArgs={--enable-certificate-owner-ref=true}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING"),": if cert-manager isn't installed in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"cert-manager"),",\nyou have to set ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.certManagerNamespace")," accordingly, otherwise Epinio installation will fail.")),(0,o.kt)("h3",{id:"kubed"},"Kubed"),(0,o.kt)("p",null,"Kubed is installed as a subchart when ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.kubed.enabled"),' is true (default).\nIf you already have kubed running, you can skip the installation by setting\nthe helm value "kubed.enabled" to "false".'),(0,o.kt)("h3",{id:"s3-storage"},"S3 storage"),(0,o.kt)("p",null,"Epinio is using an S3 compatible storage to store the application source code.\nThis chart will install ",(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"Minio")," when ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.minio.enabled")," is\ntrue (default)."),(0,o.kt)("p",null,"In addition to Minio, Epinio offers ",(0,o.kt)("a",{parentName:"p",href:"https://s3gw.io/"},"s3gw")," as another internal S3 compatible storage. It is installed when ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.minio.enabled")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.s3gw.enabled")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Both choices for internal S3 compatible storage can be configured to use a user-defined storageClass. If no StorageClass is defined, the default storageClass is used. For Minio the custom storageClass is set via the value of ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.persistance.storageClass"),". For s3gw the custom storageClass is set via the value of ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.s3gw.storageClass.name"),"."),(0,o.kt)("p",null,"Any external S3 compatible solution can be used instead by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"Values.minio.enabled")," value to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Values.s3gw.enabled")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," by default) and using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/b389a4875af9f03b484a911c49a14f834ba04b64/chart/epinio/values.yaml#L44"},"the values under ",(0,o.kt)("inlineCode",{parentName:"a"},"s3"))," to point to the desired S3 server."),(0,o.kt)("h3",{id:"container-registry"},"Container Registry"),(0,o.kt)("p",null,"When Epinio builds a container image for an application from source, it needs\nto store that image to a container registry. Epinio installs a container registry\non the cluster when ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.containerregistry.enabled")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (default)."),(0,o.kt)("p",null,"Any container registry that supports basic auth authentication (e.g. gcr, dockerhub etc) can be used\ninstead, by setting this value to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/b389a4875af9f03b484a911c49a14f834ba04b64/chart/epinio/values.yaml#L107-L111"},"the relevant global values"),"\nto point to the desired container registry."),(0,o.kt)("h3",{id:"install-epinio"},"Install Epinio"),(0,o.kt)("p",null,"If the above dependencies are available or going to be installed by this chart,\nEpinio can be installed with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ helm repo add epinio https://epinio.github.io/helm-charts\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ helm install epinio -n epinio --create-namespace epinio/epinio --values epinio-values.yaml --set global.domain=myepiniodomain.org\n")),(0,o.kt)("p",null,"The only value that is mandatory is the ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.global.domain")," which\nshould be a wildcard domain, pointing to the IP address of your running\nIngress controller."),(0,o.kt)("p",null,"Read more on how to setup DNS here: ",(0,o.kt)("a",{parentName:"p",href:"/installation/dns_setup"},"DNS setup")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"NOTE"),': If you\'re deploying Epinio in a "localhost" environment, you can use a "',(0,o.kt)("a",{parentName:"p",href:"/installation/magicDNS_setup"},"magic domain name"),'".')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"NOTE II"),": in case the installation fails due to an expired certificate (for instance if you have previously initialized the epinio cli on a machine for a different cluster) please consider executing epinio ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio settings update-ca"),".  More info at: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.epinio.io/references/commands/cli/settings/epinio_settings_update-ca#epinio-settings-update-ca"},"epinio-settings-update-ca"))),(0,o.kt)("h2",{id:"installation-on-specific-kubernetes-offerings"},"Installation on Specific Kubernetes Offerings"),(0,o.kt)("p",null,"Installing Epinio is a standard process as explained above, however you might need to configure it for a specific Kubernetes cluster."),(0,o.kt)("p",null,"To help you, see the following HowTos for various well-known Kubernetes clusters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_rancher"},"Install on Rancher")," - Install Epinio on Rancher"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_public_cloud"},"Install on Public Cloud")," - Install Epinio on Public Cloud cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_rke"},"Install on RKE2")," - Install Epinio on Rancher RKE2 cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_k3d"},"Install on K3d")," - Install Epinio on K3d cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_k3s"},"Install on K3s")," - Install Epinio on K3s cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_rancher_desktop"},"Install on Rancher Desktop")," - Install Epinio on Rancher Desktop"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/install_epinio_on_eks"},"Install on EKS")," - Install Epinio on AWS EKS cluster")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"NOTE"),": The Public Cloud howto lists the three major Cloud providers but Epinio can run on any Kubernetes cluster.")))}m.isMDXComponent=!0}}]);