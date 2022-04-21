"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[7218],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(a),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7194:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],p={sidebar_label:"Quick Start",title:""},l="QuickStart",s={unversionedId:"tutorials/quickstart",id:"tutorials/quickstart",title:"",description:"If you have not already installed epinio follow these links",source:"@site/docs/tutorials/quickstart.md",sourceDirName:"tutorials",slug:"/tutorials/quickstart",permalink:"/docs/next/tutorials/quickstart",editUrl:"https://github.com/epinio/epinio-docs/docs/tutorials/quickstart.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quick Start",title:""},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Install Epinio",permalink:"/docs/next/installation/"}},c={},u=[{value:"Push an application",id:"push-an-application",level:2},{value:"Clone the sample app",id:"clone-the-sample-app",level:3},{value:"Push an app",id:"push-an-app",level:3},{value:"Note that the <code>--path</code> parameter is optional. If not specified the current working directory will be used. Always ensure that the chosen directory contains a supported application.",id:"note-that-the---path-parameter-is-optional-if-not-specified-the-current-working-directory-will-be-used-always-ensure-that-the-chosen-directory-contains-a-supported-application",level:6},{value:"Note: If you want to know the details of the <code>epinio push</code>",id:"note-if-you-want-to-know-the-details-of-the-epinio-push",level:6},{value:"Check that your application is working",id:"check-that-your-application-is-working",level:4},{value:"List all commands",id:"list-all-commands",level:3},{value:"Delete an application",id:"delete-an-application",level:3},{value:"Create a separate namespace",id:"create-a-separate-namespace",level:3}],h={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"QuickStart"),(0,i.kt)("p",null,"If you have not already installed ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio")," follow these links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/installation/"},"Installation Section"))),(0,i.kt)("p",null,"In this tutorial, you will learn how to create a namespace and how to push, list and delete an application in it."),(0,i.kt)("h2",{id:"push-an-application"},"Push an application"),(0,i.kt)("h3",{id:"clone-the-sample-app"},"Clone the sample app"),(0,i.kt)("p",null,"If you just want an application that works use the one inside the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/tree/main/assets/sample-app"},"sample-app directory"),"."),(0,i.kt)("p",null,"You can copy it to your system with\nthe following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/epinio/epinio.git\ncd epinio/assets/\n")),(0,i.kt)("h3",{id:"push-an-app"},"Push an app"),(0,i.kt)("p",null,"There are two ways to push an application:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can provide an ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/references/manifests"},"Application Manifest")," which contains the required configuration for the applications.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio push manifest.yaml\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"You can provide the configuration as parameters in which case the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"--name")," is mandatory.\nBecause of the default route the name has to be unique across all namespaces.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio push --name sample --path sample-app\n")),(0,i.kt)("hr",null),(0,i.kt)("h6",{id:"note-that-the---path-parameter-is-optional-if-not-specified-the-current-working-directory-will-be-used-always-ensure-that-the-chosen-directory-contains-a-supported-application"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"h6"},"--path")," parameter is optional. If not specified the current working directory will be used. Always ensure that the chosen directory contains a supported application."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If you want to know what applications are supported in Epinio, please read the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/references/supported_applications"},"notes about supported applications"),"."),(0,i.kt)("p",null,"We also provide information about the more advanced ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/explanations/advanced#git-pushing"},"git model"),"."),(0,i.kt)("hr",null),(0,i.kt)("h6",{id:"note-if-you-want-to-know-the-details-of-the-epinio-push"},"Note: If you want to know the details of the ",(0,i.kt)("inlineCode",{parentName:"h6"},"epinio push")),(0,i.kt)("p",null,"process, please read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/explanations/detailed-push-process"},"detailed push docs")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"check-that-your-application-is-working"},"Check that your application is working"),(0,i.kt)("p",null,"After the application has been pushed, a unique URL is printed which you can use to access your application. If you don't have this URL available anymore you can find it again by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio app show sample\n")),(0,i.kt)("p",null,'("Routes" is the part your are looking for)'),(0,i.kt)("p",null,"Go ahead and open the application route in your browser!"),(0,i.kt)("h3",{id:"list-all-commands"},"List all commands"),(0,i.kt)("p",null,"To see all the applications you have deployed use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio apps list\n")),(0,i.kt)("h3",{id:"delete-an-application"},"Delete an application"),(0,i.kt)("p",null,"To delete the application you just deployed run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio delete sample\n")),(0,i.kt)("h3",{id:"create-a-separate-namespace"},"Create a separate namespace"),(0,i.kt)("p",null,"If you want to keep your various application separated, you can use the concept of namespaces. Create a new namespace with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio namespace create newspace\n")),(0,i.kt)("p",null,'To start deploying application to this new namespace you have to "target" it:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epinio target newspace\n")),(0,i.kt)("p",null,"After this and until you target another namespace, whenever you run ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio push")," you will be deploying to this new namespace."))}d.isMDXComponent=!0}}]);