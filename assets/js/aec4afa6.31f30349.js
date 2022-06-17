"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[92086],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],l={sidebar_label:"DNS setup"},i="DNS setup",p={unversionedId:"installation/dns_setup",id:"version-0.6.2/installation/dns_setup",title:"DNS setup",description:'During Epinio installation, a "system" domain must be specified specified (global.domain helm value).',source:"@site/versioned_docs/version-0.6.2/installation/dns_setup.md",sourceDirName:"installation",slug:"/installation/dns_setup",permalink:"/0.6.2/installation/dns_setup",editUrl:"https://github.com/epinio/docs/versioned_docs/version-0.6.2/installation/dns_setup.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"DNS setup"},sidebar:"docs",previous:{title:"Install Epinio CLI",permalink:"/0.6.2/installation/install_epinio_cli"},next:{title:'"magic" DNS setup',permalink:"/0.6.2/installation/magicDNS_setup"}},u={},c=[{value:"Ingress controller IP address",id:"ingress-controller-ip-address",level:2},{value:"Configure your DNS",id:"configure-your-dns",level:2},{value:"The &quot;wildcard&quot; entry is what makes the automatic routes for applications to work in Epinio. Don&#39;t skip it.",id:"the-wildcard-entry-is-what-makes-the-automatic-routes-for-applications-to-work-in-epinio-dont-skip-it",level:6},{value:"DNS Configuration Examples",id:"dns-configuration-examples",level:2},{value:"AWS EKS and Route53",id:"aws-eks-and-route53",level:3},{value:"test.example.com",id:"testexamplecom",level:5},{value:"*.test.example.com",id:"testexamplecom-1",level:5},{value:"Azure AKS and &quot;example-domain&quot;",id:"azure-aks-and-example-domain",level:3},{value:"test.example.com",id:"testexamplecom-2",level:5},{value:"*.test.example.com",id:"testexamplecom-3",level:5},{value:"Bind DNS",id:"bind-dns",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dns-setup"},"DNS setup"),(0,r.kt)("p",null,"During ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/installation/"},"Epinio installation"),', a "system" domain must be specified specified (',(0,r.kt)("inlineCode",{parentName:"p"},"global.domain")," helm value).\nThis is used to access Epinio API server and to create default routes for the deployed applications. This page describes\nhow to prepare the domain."),(0,r.kt)("p",null,"This domain must be a wildcard domain, meaning any subdomain should resolve to the\nsame IP address as the domain itself. That IP address, should target your cluster's Ingress controller (e.g. Traefik)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Epinio will install successfully even if your DNS setup is not complete. There is an exception to this,\nwhen letsencrypt issuer is used. Cert-Manager will fail to create certificates until the domain is accessible, due to\nthe challenges that must be solved (read more about issuers ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/howtos/certificate_issuers"},"here"),"). Even in that\ncase though, after you finish your DNS setup, the challenges will be solved and Epinio should become functional but\nit may take a while before things balance out."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To keep things simple, it is preferable that you finish your DNS setup before you install Epinio. To do so, you need\nto point your desired domain to the IP address of your Ingress controller. There are two steps in this process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the IP address of the ingress controller"),(0,r.kt)("li",{parentName:"ol"},"Setup your DNS")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," For development or demo environments, ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/installation/magicDNS_setup"},"an easy magic DNS setup can be used")," instead.")),(0,r.kt)("h2",{id:"ingress-controller-ip-address"},"Ingress controller IP address"),(0,r.kt)("p",null,'Most Kubernetes clusters are running a "load balancer" service which is responsible of assigning\nIP addresses to load balanced services created on the cluster. Ingress controllers\nare such services (e.g. Traefik) and they should have an externally accessible IP address.\nThis is needed for any Ingress resource to work. You can find the load balancer IP\naddress of any service using ',(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". E.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get svc -n kube-system traefik -o jsonpath={@.status.loadBalancer.ingress}\n")),(0,r.kt)("p",null,"Depending on the load balancer, the result of this command may have different fields populated, most usually ",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),".\nKeep this information available for the next step where you will configure your DNS."),(0,r.kt)("h2",{id:"configure-your-dns"},"Configure your DNS"),(0,r.kt)("p",null,"Given you own the domain ",(0,r.kt)("strong",{parentName:"p"},'"example.com"'),", you would configure a subdomain e.g. ",(0,r.kt)("strong",{parentName:"p"},'"test.example.com"'),' for Epinio.\nNow you will have to configure your DNS in a way, that any request towards "test.example.com" will resolve to the address found in the previous step.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'test.example.com => "INGRESS-IP"'),(0,r.kt)("li",{parentName:"ul"},"*",'.test.example.com => "INGRESS-IP"')),(0,r.kt)("hr",null),(0,r.kt)("h6",{id:"the-wildcard-entry-is-what-makes-the-automatic-routes-for-applications-to-work-in-epinio-dont-skip-it"},'The "wildcard" entry is what makes the automatic routes for applications to work in Epinio. Don\'t skip it.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Find ",(0,r.kt)("a",{parentName:"p",href:"#dns-configuration-examples"},"DNS Configuration Examples")," below."),(0,r.kt)("h2",{id:"dns-configuration-examples"},"DNS Configuration Examples"),(0,r.kt)("h3",{id:"aws-eks-and-route53"},"AWS EKS and Route53"),(0,r.kt)("p",null,"As an example we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/route53/"},"AWS Service Route53"),' to create a wildcard domain within one of your existing "Hosted zones", e.g. ',(0,r.kt)("strong",{parentName:"p"},"example.com"),"."),(0,r.kt)("p",null,"Given Epinio ingress installation provided you with the following hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Traefik Ingress info: [{"hostname":"abcdefg12345671234567abcdefg1234-1234567890.eu-west-1.elb.amazonaws.com"}]\n')),(0,r.kt)("p",null,'Now you will have to add two CNAME records, for the subdomain, e.g. "test" to have "test.example.com", resp. "',"*",'.test.example.com".\nReplace "abcdefg12345671234567abcdefg1234-1234567890.eu-west-1.elb.amazonaws.com" with the your EKS FQDN, and "test.example.com" with your custom domain.'),(0,r.kt)("h5",{id:"testexamplecom"},"test.example.com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Record name: test\nRecord type: CNAME - Routes traffic to another domain name and some AWS resources\nValue: abcdefg12345671234567abcdefg1234-1234567890.eu-west-1.elb.amazonaws.com\n")),(0,r.kt)("h5",{id:"testexamplecom-1"},"*",".test.example.com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Record name: *.test\nRecord type: CNAME - Routes traffic to another domain name and some AWS resources\nValue: abcdefg12345671234567abcdefg1234-1234567890.eu-west-1.elb.amazonaws.com\n")),(0,r.kt)("p",null,"Finally, running "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"> host test.example.com"),", or even"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"> host epinio.test.example.com")),(0,r.kt)("p",null,'should resolve to e.g. "abcdefg12345671234567abcdefg1234-1234567890.eu-west-1.elb.amazonaws.com".'),(0,r.kt)("h3",{id:"azure-aks-and-example-domain"},'Azure AKS and "example-domain"'),(0,r.kt)("p",null,'As an example we will use the Azure resource group "example-domain", with the zone "example.com".'),(0,r.kt)("p",null,"Given Epinio ingress installation provided you with the following hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Traefik Ingress info: [{"ip":"10.0.0.1"}]\n')),(0,r.kt)("p",null,'Now you will have to add two A records, for the subdomain, e.g. "test" to have "test.example.com", resp. "',"*",'.test.example.com" to the DNS zone "example.com".\nReplace "10.0.0.1" with the IP from "Traefik Ingress info", and "test.example.com" with your custom domain.'),(0,r.kt)("h5",{id:"testexamplecom-2"},"test.example.com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Record name: test.example.com\nRecord type: A\nIP address: 10.0.0.1\n")),(0,r.kt)("h5",{id:"testexamplecom-3"},"*",".test.example.com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Record name: *.test.example.com\nRecord type: A\nIP address: 10.0.0.1\n")),(0,r.kt)("p",null,"Finally, running"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"> host test.example.com"),", or even"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"> host epinio.test.example.com")),(0,r.kt)("p",null,'should resolve to e.g. "10.0.0.1".'),(0,r.kt)("h3",{id:"bind-dns"},"Bind DNS"),(0,r.kt)("p",null,"Given Epinio ingress installation provided you with the following hostname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Traefik Ingress info: [{"ip":"10.0.0.1"}]\n')),(0,r.kt)("p",null,'Now you will have to add two A records, for the subdomain, e.g. "test" to have "test.example.com", resp. "',"*",'.test.example.com" to e.g. "/var/lib/named/master/forward/example.com".\nReplace "10.0.0.1" with the IP from "Traefik Ingress info", and "test.example.com" with your custom domain.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ORIGIN example.com.\ntest            A   10.0.0.1\n$ORIGIN test.example.com.\n*           A   10.0.0.1\n")),(0,r.kt)("p",null,"Restart bind and verify that e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"> host test.example.com")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"> host epinio.test.example.com"),' will resolve to "10.0.0.1".'))}d.isMDXComponent=!0}}]);