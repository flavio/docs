"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[56529],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Detailed Push Process"},p="Epinio Push in Detail",l={unversionedId:"explanations/detailed-push-process",id:"version-0.6.2/explanations/detailed-push-process",title:"Epinio Push in Detail",description:"Epinio strives to make use of well supported, well known, and loved projects instead of re-inventing the wheel (link).",source:"@site/versioned_docs/version-0.6.2/explanations/detailed-push-process.md",sourceDirName:"explanations",slug:"/explanations/detailed-push-process",permalink:"/0.6.2/explanations/detailed-push-process",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.6.2/explanations/detailed-push-process.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"Detailed Push Process"},sidebar:"docs",previous:{title:"Advanced topics",permalink:"/0.6.2/explanations/advanced"},next:{title:"Principles",permalink:"/0.6.2/explanations/principles"}},c={},h=[{value:"1. Epinio Push",id:"1-epinio-push",level:2},{value:"2. Copying the code to S3",id:"2-copying-the-code-to-s3",level:2},{value:"3. Staging the App",id:"3-staging-the-app",level:2},{value:"4. Trigger the Job",id:"4-trigger-the-job",level:2},{value:"5. Fetch the code",id:"5-fetch-the-code",level:2},{value:"6. Unpack the sources",id:"6-unpack-the-sources",level:2},{value:"7. Stage",id:"7-stage",level:2},{value:"8. Run",id:"8-run",level:2},{value:"9. Pull Image",id:"9-pull-image",level:2},{value:"Ingress Implementation",id:"ingress-implementation",level:2},{value:"The Process Visualized",id:"the-process-visualized",level:2},{value:"Credits",id:"credits",level:2}],u={toc:h};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"epinio-push-in-detail"},"Epinio Push in Detail"),(0,r.kt)("p",null,"Epinio strives to make use of well supported, well known, and loved projects instead of re-inventing the wheel (",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/explanations/principles#guidelines-soft-principles"},"link"),").\nBut while doing so, it makes sure those components are deployed correctly and work together seamlessly. Let's go through the ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio push")," process in detail,\nso you can understand what each component does. You may also want to read the description of every component outside the push process here: ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/explanations/advanced"},"Advanced Topics"),"."),(0,r.kt)("p",null,"You can see an image that visualises the process later in this page. Refer to it while reading the text to help you understand the process more.\nThe numbers on the various arrows on the image indicate the order of the various steps."),(0,r.kt)("h2",{id:"1-epinio-push"},"1. Epinio Push"),(0,r.kt)("p",null,"Epinio exposes an API server running inside the kubernetes cluster for all clients including cli to talk to it. When you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio push")," command, the first thing the cli is going to do, is to create an archive with the application's code and hit the relevant api endpoint to upload it to the API server (1a). There is a Traefik ingress which sits in front of the Epinio API server which routes your request to the API server (1b)."),(0,r.kt)("p",null,"When the request lands on the server, the user is authenticated using BasicAuth, session cookie or (in the case of websockets) a token."),(0,r.kt)("h2",{id:"2-copying-the-code-to-s3"},"2. Copying the code to S3"),(0,r.kt)("p",null,"One of the components Epinio installs on your cluster is ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"Minio")," (unless you ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/howtos/setup_external_s3"},"configured external S3"),"). Minio is an S3 compatible storage solution. Epinio uses it to store the application's source code. It will later be used by the staging job."),(0,r.kt)("p",null,"After successful authentication (previous step), the API server uploads the tarball to the S3 endpoint and responds with a blobUID that can be later used to reference the uploaded tarball."),(0,r.kt)("h2",{id:"3-staging-the-app"},"3. Staging the App"),(0,r.kt)("p",null,"When the upload request is complete, the cli will send a request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"stage")," endpoint of the Epinio API server. This will instruct the server to start the staging of the uploaded code."),(0,r.kt)("h2",{id:"4-trigger-the-job"},"4. Trigger the Job"),(0,r.kt)("p",null,"When the Epinio API server receives the stage request, it will create a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/"},(0,r.kt)("inlineCode",{parentName:"a"},"Job"))," that will run the staging scripts using the version of the code referenced in the request. This job has 3 steps and each one is a script stored in a ConfigMap called ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio-stage-scripts")," in the namespace where epinio is installed.\nTheir role is described in the following 3 sections."),(0,r.kt)("h2",{id:"5-fetch-the-code"},"5. Fetch the code"),(0,r.kt)("p",null,"The first step of staging downloads the code from the S3 storage. This makes the code available to the following steps."),(0,r.kt)("h2",{id:"6-unpack-the-sources"},"6. Unpack the sources"),(0,r.kt)("p",null,"The second step of staging detects the type of the archive and unpacks it.\nSupported formats are: ",(0,r.kt)("strong",{parentName:"p"},"zip, tar, tgz, tbz, txz")),(0,r.kt)("h2",{id:"7-stage"},"7. Stage"),(0,r.kt)("p",null,"The third step of staging uses the ",(0,r.kt)("a",{parentName:"p",href:"https://paketo.io/"},"paketo buildpacks")," to create a container image for your application.\nThe result of a successful staging process is a new image pushed to the Registry component of Epinio.\nRead more about the registry here: ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/explanations/advanced#container-registry"},"Epinio Registry"),"."),(0,r.kt)("h2",{id:"8-run"},"8. Run"),(0,r.kt)("p",null,"To run a workload on Kubernetes having a container image is not enough. You need at least a Pod running with at least one container running that image."),(0,r.kt)("p",null,"This is done again by the API server, on demand by the client (8a) after noting the completion of the staging process."),(0,r.kt)("p",null,"The most important resources that are created (8c) are a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment"),", a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service")," and an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resource."),(0,r.kt)("p",null,"The needed resources are part of a Helm chart which epinio uses to deploy the application. The application helm chart source lives here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/tree/main/chart/application"},"Epinio application helm chart"),"."),(0,r.kt)("p",null,"Because it's a helm release, the deployed applications can also be listed using helm: ",(0,r.kt)("inlineCode",{parentName:"p"},"helm list -n workspace")),(0,r.kt)("p",null,'(assuming the applications are deployed in the default namespace "workspace").'),(0,r.kt)("h2",{id:"9-pull-image"},"9. Pull Image"),(0,r.kt)("p",null,"The Deployment uses the image that was pushed as part of the staging step (7). Now, the kubelet will pull the image from the registry for the deployment resource to use it (9)."),(0,r.kt)("p",null,"You can read how these resources work in Kubernetes following the provided links but if you have to know one thing is that Ingress is the thing that describes how a request that uses the Application's url is routed to the application container. In Kubernetes, the thing that reads that description and implements the routing is called an Ingress Controller. Such an Ingress Controller is provided by ",(0,r.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/kubernetes-ingress/"},"Traefik"),"."),(0,r.kt)("h2",{id:"ingress-implementation"},"Ingress Implementation"),(0,r.kt)("p",null,"As described ",(0,r.kt)("a",{parentName:"p",href:"/0.6.2/explanations/advanced#ingress-controller"},'in the "Advanced Topics"'),", Epinio needs an ingress controller to work. The ingress controller reads your Ingress Resource Definitions and implements the desired routing to the appropriate Services/Pods."),(0,r.kt)("p",null,"In Epinio, for every application we create an Ingress that routes the traffic for this application through a subdomain that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapplication.my_epinio_system_domain.com\n")),(0,r.kt)("p",null,"You can get the route of your application with ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio apps list")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio apps show myapplication"),". By specifying one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"--route")," options, either with the ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio push")," command or later with ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio app update"),", it is possible to set and use arbitrary custom routes for the application . ",(0,r.kt)("strong",{parentName:"p"},"Make sure")," that these custom domains point to the Ingress controller IP (that is the same IP address your system-domain points to)."),(0,r.kt)("h2",{id:"the-process-visualized"},"The Process Visualized"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"epinio-push-detailed",src:n(11111).Z,title:"Epinio push",width:"2664",height:"1393"})),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Icons from: ",(0,r.kt)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"https://materialdesignicons.com/")," (Source: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Templarian/MaterialDesign"},"https://github.com/Templarian/MaterialDesign"),")")))}d.isMDXComponent=!0},11111:function(e,t,n){t.Z=n.p+"assets/images/epinio-push-detailed-4de43faabdf019287ad2090b9a6baa35.svg"}}]);