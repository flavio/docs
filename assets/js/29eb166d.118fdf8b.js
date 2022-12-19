"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[21108],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83474:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],s={sidebar_label:"Authorization",title:""},p="Authorization",l={unversionedId:"references/authorization",id:"version-1.5.1/references/authorization",title:"",description:"Since version 0.8.0 Epinio is shipped with an authorization layer recognizing two basic roles: admin and user.",source:"@site/versioned_docs/version-1.5.1/references/authorization.md",sourceDirName:"references",slug:"/references/authorization",permalink:"/1.5.1/references/authorization",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.1/references/authorization.md",tags:[],version:"1.5.1",frontMatter:{sidebar_label:"Authorization",title:""},sidebar:"docs",previous:{title:"OIDC authentication",permalink:"/1.5.1/references/authentication_oidc"},next:{title:"Cert Manager",permalink:"/1.5.1/references/cert-manager"}},u={},c=[{value:"Switch user",id:"switch-user",level:2},{value:"List the Epinio users",id:"list-the-epinio-users",level:2},{value:"Add a new user",id:"add-a-new-user",level:2},{value:"Assign namespaces",id:"assign-namespaces",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"Since version ",(0,r.kt)("strong",{parentName:"p"},"0.8.0")," Epinio is shipped with an authorization layer recognizing two basic roles: ",(0,r.kt)("strong",{parentName:"p"},"admin")," and ",(0,r.kt)("strong",{parentName:"p"},"user"),".\nA user with the admin role will have access to every resource, while a standard user will have access only to the resources created on its namespaces.\nWhen a user creates a namespace, it will have automatically permission for it."),(0,r.kt)("p",null,"By default, after the installation two users are available: ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio"),", both with the password ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),". The operator can control the creation of those users through the ",(0,r.kt)("inlineCode",{parentName:"p"},"api.users")," key in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/main/chart/epinio/values.yaml"},"values.yaml"),".\nIn a production setup, the default ",(0,r.kt)("inlineCode",{parentName:"p"},"api.users")," value needs to be overridden."),(0,r.kt)("h2",{id:"switch-user"},"Switch user"),(0,r.kt)("p",null,"To switch users you need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," keys of the Epinio settings file, located at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/epinio/settings.yaml"),".\nThe password has to be base64 encoded. Below, ",(0,r.kt)("inlineCode",{parentName:"p"},"cGFzc3dvcmQ=")," is the base64 encoded version of ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,r.kt)("p",null,"You can also login again with the ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio login [URL]")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api: https://epinio.mydomain.com\nappchart: ""\ncerts: |\n  -----BEGIN CERTIFICATE-----\n  MIICUTCCAfigAwIBAgIQXJq3y/ouo90Db7BWy34gbDAKBggqhkjOPQQDAjAUMRIw\n  ****************************************************************\n  ****************************************************************\n  ****************************************************************\n  qCPZOyTsHKnjmj7zxg57+Kq2KLFT\n  -----END CERTIFICATE-----\ncolors: true\nnamespace: workspace\npass: cGFzc3dvcmQ=\nuser: epinio\nwss: wss://epinio.mydomain.com\n')),(0,r.kt)("h2",{id:"list-the-epinio-users"},"List the Epinio users"),(0,r.kt)("p",null,"An Epinio user is a BasicAuth Kubernetes Secret, with two reserved labels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"epinio.io/api-user-credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"epinio.io/role")," used to get the assigned role")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\ntype: BasicAuth\nmetadata:\n  labels:\n    epinio.io/api-user-credentials: "true"\n    epinio.io/role: "admin"\n  name: my-epinio-user\n  namespace: epinio\nstringData:\n  username: myuser\n  # password is hashed with the Bcrypt algorithm\n  password: "$2a$10$6bCi5NMstMK781In7JGiL.B44pgoplUb330FQvm6mVXMppbXBPiXS" # value is \'password\'\n')),(0,r.kt)("p",null,"To list the available users you can get the secrets from your cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", filtering them with the proper labels:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# list all the users\nkubectl get secrets -n epinio -l 'epinio.io/api-user-credentials'\nNAME                  TYPE        DATA   AGE\ndefault-epinio-user   BasicAuth   3      5m10s\nadmin-epinio-user     BasicAuth   2      5m10s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# list all the admins\nkubectl get secrets -n epinio -l 'epinio.io/api-user-credentials,epinio.io/role=admin'\nNAME                TYPE        DATA   AGE\nadmin-epinio-user   BasicAuth   2      5m24s\n")),(0,r.kt)("h2",{id:"add-a-new-user"},"Add a new user"),(0,r.kt)("p",null,"Since a user is simply a Kubernetes Secret you can create a new user with a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Secret\ntype: BasicAuth\nmetadata:\n  labels:\n    epinio.io/api-user-credentials: "true"\n    epinio.io/role: "user"\n  name: my-epinio-user\n  namespace: epinio\nstringData:\n  username: myuser\n  password: "$2a$10$6bCi5NMstMK781In7JGiL.B44pgoplUb330FQvm6mVXMppbXBPiXS"\nEOF\n')),(0,r.kt)("h2",{id:"assign-namespaces"},"Assign namespaces"),(0,r.kt)("p",null,"The authorized user's namespaces are an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"namespaces")," field in the Secret data, separated by a newline ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),".",(0,r.kt)("br",{parentName:"p"}),"\n","To modify them edit just that field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Secret\ntype: BasicAuth\nmetadata:\n  labels:\n    epinio.io/api-user-credentials: "true"\n    epinio.io/role: "user"\n  name: my-epinio-user\n  namespace: epinio\nstringData:\n  username: myuser\n  password: "$2a$10$6bCi5NMstMK781In7JGiL.B44pgoplUb330FQvm6mVXMppbXBPiXS"\n  namespaces: |\n    workspace\n    workspace2\nEOF\n')))}m.isMDXComponent=!0}}]);