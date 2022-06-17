"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[80217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],p={sidebar_label:"How To use custom application Helm charts",sidebar_position:11,title:""},l="Introduction",s={unversionedId:"howtos/using_custom_appcharts",id:"howtos/using_custom_appcharts",title:"",description:"Epinio deploys applications on Kubernetes as Helm charts.",source:"@site/docs/howtos/using_custom_appcharts.md",sourceDirName:"howtos",slug:"/howtos/using_custom_appcharts",permalink:"/next/howtos/using_custom_appcharts",editUrl:"https://github.com/epinio/docs/docs/howtos/using_custom_appcharts.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"How To use custom application Helm charts",sidebar_position:11,title:""},sidebar:"docs",previous:{title:"How To create custom application Helm charts",permalink:"/next/howtos/create_custom_appcharts"},next:{title:"Install Epinio on Rancher",permalink:"/next/howtos/install_epinio_on_rancher"}},c={},d=[],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Epinio deploys applications on Kubernetes as ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm charts"),"."),(0,o.kt)("p",null,"By default, a standard Helm chart is provided when Epinio is installed.\nHowever, operators may wish to ",(0,o.kt)("a",{parentName:"p",href:"/next/howtos/create_custom_appcharts"},"create and register custom charts")," specific to their environment."),(0,o.kt)("p",null,"Once the custom charts are registered in Epinio, the developers can use them when deploying their\napplications as described in this How-To."),(0,o.kt)("h1",{id:"listing-the-available-helm-charts"},"Listing the available Helm charts"),(0,o.kt)("p",null,"You can list the available Helm charts by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ epinio app chart list\n")),(0,o.kt)("p",null,"As an example, here is the output of an unmodified Epinio installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"| DEFAULT |   NAME   |        DESCRIPTION         |\n|---------|----------|----------------------------|\n|         | standard | Epinio standard deployment |\n")),(0,o.kt)("p",null,"The output will only list the ",(0,o.kt)("inlineCode",{parentName:"p"}," standard")," Helm chart, which Epinio installs by default."),(0,o.kt)("h1",{id:"deploying-applications-with-a-custom-helm-chart"},"Deploying applications with a custom Helm chart"),(0,o.kt)("p",null,"Use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," to specify the name of the custom Helm chart to use when\ncreating, updating, or deploying an application."),(0,o.kt)("p",null,"For detailed information on the ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," setting, see the following CLI commands pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/references/commands/cli/app/epinio_app_create"},"epinio app create")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/references/commands/cli/app/epinio_app_update"},"epinio app update")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/references/commands/cli/epinio_push"},"epinio push"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Changing the chart to use is ",(0,o.kt)("strong",{parentName:"p"},"not possible")," if the application has an\nactive workload."),(0,o.kt)("p",{parentName:"div"},"To switch a deployed application to a different Helm chart, you will have to\ndelete and re-deploy the application."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Scaling the application to zero instances is ",(0,o.kt)("strong",{parentName:"p"},"not sufficient"),". While that effectively\nstops the application it does not remove the deployed workload, just the underlying active\nelements."))),(0,o.kt)("h1",{id:"setting-a-default-helm-chart"},"Setting a default Helm chart"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," option described in the previous section is more suitable for\nsingle or few deployments requiring a custom Helm chart."),(0,o.kt)("p",null,"However, if the majority of applications use a specific custom chart, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"FOO"),", it makes more sense to\nchange the default chart."),(0,o.kt)("p",null,"You can set a custom chart as the default by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ epinio app chart default FOO\n")),(0,o.kt)("p",null,"Now, all future invocations of ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," will use the custom Helm chart set as default.\nYou will be able to override it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--app-chart")," option, as described above."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," chart is a ",(0,o.kt)("strong",{parentName:"p"},"local")," setting. It affects only the developer who made\nthe change.\n:::"),(0,o.kt)("h1",{parentName:"div",id:"querying-the-default-helm-chart"},"Querying the default Helm chart"),(0,o.kt)("p",{parentName:"div"},"You can check which chart is set as ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," by running the following command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"$ epinio app chart default\n")),(0,o.kt)("p",{parentName:"div"},"You can also check which chart is set as ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," when listing the available charts.\nAs an example, the output below shows the chart ",(0,o.kt)("inlineCode",{parentName:"p"},"FOO")," as the current default:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"| DEFAULT |   NAME   |        DESCRIPTION         |\n|---------|----------|----------------------------|\n| *       | FOO      | Foofy deployment           |\n|         | standard | Epinio standard deployment |\n")),(0,o.kt)("h1",{parentName:"div",id:"unsetting-the-default-helm-chart"},"Unsetting the default Helm chart"),(0,o.kt)("p",{parentName:"div"},"You can set the system chart ",(0,o.kt)("inlineCode",{parentName:"p"},"standard")," back as the default, by running the following command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"$ epinio app chart default ''\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"empty string")," used in place of the chart name is mandatory. If you do not add it,\nthe command will only list the charts available.\n:::"))}h.isMDXComponent=!0}}]);