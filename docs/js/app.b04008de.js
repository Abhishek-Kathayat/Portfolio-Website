(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],m=0,p=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"045d":function(t,e,n){},"182b":function(t,e,n){},"1b7c":function(t,e,n){"use strict";var i=n("045d"),a=n.n(i);a.a},"2b0b":function(t,e,n){},4470:function(t,e,n){t.exports=n.p+"img/profile-logo.e20742ee.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Introview",{staticClass:"mt-16",attrs:{introdata:t.introdata}}),n("AboutMe",{staticClass:"mt-64",attrs:{detailaboutme:t.detailaboutme}}),n("Experience",{staticClass:"mt-64",attrs:{detailexperience:t.detailexperience}}),n("Projects",{staticClass:"mt-64",attrs:{detailprojects:t.detailprojects}}),n("GetInTouch",{staticClass:"mt-64",attrs:{detailgetintouch:t.detailgetintouch}}),n("Footer",{staticClass:"mt-64",attrs:{detailfooter:t.detailfooter}})],1)},s=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-man flex justify-center my-6"},[i("div",{staticClass:"navbar-section-holder w-11/12 flex justify-between"},[i("div",{staticClass:"navbar-left-section flex"},[i("a",{attrs:{href:"https://abhishek-kathayat.github.io"}},[i("img",{staticClass:"h-16 w-16",attrs:{src:n("4470")}})])]),i("div",{staticClass:"navbar-right-section flex"},[i("a",{staticClass:"navbar-right-section-button flex self-center px-5",attrs:{href:"./resume.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Resume ")])])])])}],c={name:"Navbar"},l=c,d=(n("97cf"),n("2877")),m=Object(d["a"])(l,o,r,!1,null,"19e66234",null),p=m.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-main flex justify-center mb-5"},[n("div",{staticClass:"footer-main-container"},[n("span",{staticClass:"footer-main-icons flex justify-around mx-16"},[n("a",{attrs:{href:this.detailfooter.github_link}},[n("font-awesome-icon",{staticClass:"extlinkicon fa-lg",attrs:{icon:["fab","github"]}})],1),n("a",{attrs:{href:this.detailfooter.linkedin_link}},[n("font-awesome-icon",{staticClass:"extlinkicon fa-lg",attrs:{icon:["fab","linkedin-in"]}})],1),n("a",{attrs:{href:this.detailfooter.medium_link}},[n("font-awesome-icon",{staticClass:"extlinkicon fa-lg",attrs:{icon:["fab","medium-m"]}})],1)]),n("h1",{staticClass:"footer-main-rebuild text-center mt-6"},[t._v(" Built by Abhishek Kathayat ")]),t._m(0)])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"footer-main-buildidea text-center mt-3"},[t._v(" UI Design taken from "),n("a",{staticClass:"footer-main-buildidea-link",attrs:{href:"https://www.brittanychiang.com"}},[t._v(" Brittany Chiang ")])])}],f={name:"Footer",props:{detailfooter:Object}},b=f,g=(n("adce"),Object(d["a"])(b,u,h,!1,null,"5b11540b",null)),x=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutme-main flex justify-center"},[n("div",{staticClass:"aboutme-main-heading w-10/12 md:w-9/12"},[t._m(0),n("div",{staticClass:"aboutme-main-content-container flex mt-5"},[n("div",{staticClass:"aboutme-main-content-text-container md:w-7/12 lg:w-6/12"},[n("p",{staticClass:"aboutme-content-text text-sm-contentsize md:text-md-contentsize"},[t._v(" "+t._s(t.detailaboutme.aboutme_a)+" ")]),n("p",{staticClass:"aboutme-content-text mt-4 text-sm-contentsize md:text-md-contentsize"},[t._v(" "+t._s(t.detailaboutme.aboutme_b)+" ")]),n("div",{staticClass:"aboutme-content-tech mt-4"},[n("span",{staticClass:"aboutme-content-tech-head text-sm-contentsize md:text-md-contentsize"},[t._v(" Here are a few technologies that I've worked with: ")]),n("ul",{staticClass:"grid grid-cols-2 md:grid-cols-3 mt-3"},t._l(t.detailaboutme.aboutme_technologies,(function(e){return n("li",{key:e.id,staticClass:"my-1"},[n("font-awesome-icon",{staticClass:"fa-xs",attrs:{color:"#64ffda",icon:["fas","caret-right"]}}),n("span",{staticClass:"aboutme-content-tech-name ml-1"},[t._v(" "+t._s(e)+" ")])],1)})),0)])])])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutme-main-heading-container w-full md:w-8/12 flex"},[n("div",{staticClass:"aboutme-main-heading-main-container w-full flex"},[n("h1",{staticClass:"aboutme-main-heading-sub-container"},[n("span",{staticClass:"aboutme-main-heading-index text-sm-sectionindex md:text-md-sectionindex"},[t._v(" 01. ")]),n("span",{staticClass:"aboutme-main-heading-text text-sm-sectionheadings md:text-md-sectionheadings font-semibold"},[t._v(" About Me ")])])])])}],w={name:"AboutMe",props:{detailaboutme:Object}},y=w,j=(n("c80e"),Object(d["a"])(y,v,_,!1,null,"4f1d49f0",null)),C=j.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects-main flex justify-center"},[i("div",{staticClass:"projects-main-heading-container w-10/12 md:w-9/12"},[t._m(0),i("div",{staticClass:"projects-main-content-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10"},t._l(t.detailprojects,(function(e,a){return i("li",{key:a,staticClass:"projects-main-content-project-card mx-2 my-2"},[i("div",{staticClass:"project-card rounded shadow-lg px-8 py-10 h-full"},[i("div",{staticClass:"project-card-header flex justify-between bg-transparent"},[i("img",{staticClass:"h-10 w-10 bg-transparent",attrs:{src:n("abfe")}}),i("span",{staticClass:"bg-transparent self-center mr-2"},[i("a",{attrs:{href:e.project_github_link}},[i("font-awesome-icon",{staticClass:"project-link-icon fa-lg bg-transparent self-center",attrs:{icon:["fab","github"]}})],1)])]),i("div",{staticClass:"project-card-description mt-8 bg-transparent"},[i("span",{staticClass:"project-card-description-name bg-transparent leading-tight"},[t._v(" "+t._s(e.project_name)+" ")]),i("p",{staticClass:"project-card-description-details mt-2 bg-transparent"},[t._v(" "+t._s(e.project_description)+" ")]),i("div",{staticClass:"project-card-description-technologies-container mt-5 mb-5 bg-transparent"},t._l(e.project_technologies,(function(e,n){return i("span",{key:n,staticClass:"project-card-description-technologies bg-transparent mr-2"},[t._v(" "+t._s(e)+" ")])})),0)])])])})),0)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects-main-heading-sub-container w-full md:w-8/12 flex"},[n("h1",{staticClass:"projects-main-heading-text-container"},[n("span",{staticClass:"projects-main-heading-container-text-index text-sm-sectionindex md:text-md-sectionindex"},[t._v(" 03. ")]),n("span",{staticClass:"projects-main-heading-container-text-heading text-sm-sectionheadings md:text-md-sectionheadings font-semibold"},[t._v(" Some Things I've Built ")])])])}],S={name:"Projects",props:{detailprojects:Object}},A=S,O=(n("6ca8"),Object(d["a"])(A,k,I,!1,null,"484963d4",null)),P=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro-view-main flex justify-center self-center"},[n("div",{staticClass:"intro-view-main-head w-10/12 md:w-9/12 lg:w-9/12 xl:w-9/12"},[n("h1",{staticClass:"intro-view-main-head-nameis text-base-introname sm:text-md-introname md:text-md-introname lg:text-lg-introname xl:text-lg-introname mb-5 flex"},[t._v(" Hi, my name is ")]),n("h2",{staticClass:"intro-view-main-head-name font-semibold leading-extra-tight text-base-introhead sm:text-sm-introhead md:text-md-introhead lg:text-lg-introhead xl:text-xl-introhead flex"},[t._v(" "+t._s(t.introdata.myname)+" ")]),n("h3",{staticClass:"intro-view-main-head-work w-10/12 font-semibold leading-extra-tight text-base-introhead sm:text-sm-introhead md:text-md-introhead lg:text-lg-introhead xl:text-xl-introhead flex"},[t._v(" "+t._s(t.introdata.mywork)+" ")]),n("p",{staticClass:"intro-view-main-head-workdescription mt-8 mb-16 sm:w-11/12 md:w-7/12 lg:w-7/12 xl:w-6/12 text-base-introdescription sm:text-md-introdescription md:text-md-introdescription lg:text-md-introdescription xl:text-md-introdescription flex"},[t._v(" "+t._s(t.introdata.myworkdescription)+" ")]),n("button",{staticClass:"intro-view-main-head-button flex outline-none py-5 px-8",on:{click:function(e){return t.getintouch()}}},[t._v(" Get In Touch ")])])])},T=[],M={name:"Introview",props:{introdata:Object},methods:{getintouch:function(){window.location="mailto:abhishekkathayat25@gmail.com"}}},D=M,$=(n("f508"),Object(d["a"])(D,E,T,!1,null,"9f238b80",null)),R=$.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience-main flex justify-center"},[n("div",{staticClass:"experience-main-container w-10/12 md:w-9/12"},[t._m(0),n("div",{staticClass:"experience-main-content-container md:flex"},[n("div",{staticClass:"experience-main-content-button-container mt-10 overflow-x-scroll md:overflow-x-hidden"},t._l(t.detailexperience,(function(e,i){return n("button",{key:i,staticClass:"experience-main-content-button md:flex border-b-2 md:border-l-2 md:border-b-0 px-8 py-3 md:w-full",class:{selectedTab:i===t.activeTab},attrs:{id:"tab-"+i},on:{click:[function(n){return t.selectExperience(e.company)},function(e){t.activeTab=i}]}},[t._v(" "+t._s(e.company)+" ")])})),0),n("div",{staticClass:"experience-main-content-description-container md:w-7/12 mt-12 md:ml-10"},[n("div",{staticClass:"experience-main-content-description-head leading-snug"},[n("span",{staticClass:"experience-job-position"},[t._v(" "+t._s(this.experience.job_position)+" ")]),n("span",{staticClass:"experience-company-name"},[t._v(" @ "),n("a",{staticClass:"experience-company-name-url",attrs:{href:this.experience.company_url}},[t._v(" "+t._s(this.experience.company)+" ")])])]),this.experience.company_ff?n("span",{staticClass:"experience-company-fullform leading-none"},[t._v(" "+t._s(this.experience.company_ff)+" ")]):t._e(),this.experience.duration?n("span",{staticClass:"experience-company-duration block mt-2"},[t._v(" "+t._s(this.experience.duration)+" ")]):t._e(),n("ul",{staticClass:"mt-3"},t._l(this.experience.job_description,(function(e){return n("li",{key:e.id,staticClass:"experience-company-job-description mb-3 leading-tight flex"},[n("font-awesome-icon",{staticClass:"fa-xs mt-1",attrs:{color:"#64ffda",icon:["fas","caret-right"]}}),n("p",{staticClass:"job-description-item ml-3"},[t._v(" "+t._s(e)+" ")])],1)})),0)])])])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience-main-heading-container w-full md:w-8/12 flex"},[n("div",{staticClass:"experience-main-heading-sub-container w-full flex"},[n("h1",{staticClass:"experience-main-heading-text-container"},[n("span",{staticClass:"experience-main-heading-container-text-index text-sm-sectionindex md:text-md-sectionindex"},[t._v(" 02. ")]),n("span",{staticClass:"experience-main-heading-container-text-heading text-sm-sectionheadings md:text-md-sectionheadings font-semibold"},[t._v(" Where I've Worked ")])])])])}],B={name:"Experience",props:{detailexperience:Object},data:function(){return{experience:this.detailexperience[0],activeTab:0}},mounted:function(){var t=document.getElementById("tab-0");t.classList.add("selectedTab")},methods:{selectExperience:function(t){var e=document.getElementById("tab-0");for(var n in e.classList.remove("selectedTab"),this.detailexperience)this.detailexperience[n].company==t&&(this.experience=this.detailexperience[n])}}},K=B,H=(n("ab61"),Object(d["a"])(K,z,G,!1,null,"ea91243e",null)),J=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"getintouch-main flex justify-center"},[n("div",{staticClass:"getintouch-main-container w-10/12 md:w-9/12"},[t._m(0),t._m(1),n("div",{staticClass:"getintouch-main-description-holder flex justify-center mt-4"},[n("p",{staticClass:"getintouch-main-description text-center md:w-8/12 text-sm-contentsize md:text-md-contentsize"},[t._v(" "+t._s(this.detailgetintouch.description)+" ")])]),n("div",{staticClass:"getintouch-main-button-container flex justify-center mt-20"},[n("button",{staticClass:"getintouch-main-button py-4 px-6",on:{click:function(e){return t.getintouch()}}},[t._v(" Say Hello ")])])])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"getintouch-main-top-header"},[n("span",{staticClass:"getintouch-main-top-header-container flex justify-center mt-3 mb-5"},[n("span",{staticClass:"getintouch-main-top-header-index text-sm-getintouchindex md:text-md-getintouchindex"},[t._v(" 04. ")]),n("span",{staticClass:"getintouch-main-top-header-text text-sm-getintouchindex md:text-md-getintouchindex"},[t._v(" What's Next? ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"getintouch-main-sub-header flex justify-center"},[n("span",{staticClass:"getintouch-main-sub-header text-sm-getintouchheader md:text-md-getintouchheader lg:text-lg-getintouchheader"},[t._v(" Get In Touch ")])])}],W={name:"GetInTouch",props:{detailgetintouch:Object},methods:{getintouch:function(){window.location="mailto:abhishekkathayat25@gmail.com"}}},F=W,V=(n("1b7c"),Object(d["a"])(F,L,N,!1,null,"246d3694",null)),q=V.exports,U={name:"App",data:function(){return{introdata:{myname:"Abhishek Kathayat.",mywork:"I build things for the web.",myworkdescription:"I'm a software developer based in India, specializing in building (and occasionally designing) web and mobile based applications and currently learning to develop blockchain based solutions."},detailaboutme:{aboutme_a:"Hello! I'm Abhishek, a software developer based in Dehradun, Uttarakhand, India.",aboutme_b:"I enjoy designing and building website and mobile applications. My goal is to build products that provide the best experience. Recently I've also started learning blockchain based application development.",aboutme_technologies:["HTML & CSS","Vue","React","Java","Android","Node.js","Javascript","Python","Django"]},detailexperience:{0:{company:"IIRS, ISRO",company_ff:"Indian Institute of Remote Sensing, Indian Space Research Organization",company_url:"https://www.iirs.gov.in",job_position:"Summer Intern",duration:"June - July 2019",job_description:["Designed and Developed a Mobile Based Survey Application capable of providing surveyors the geographical characteristics data for their current location, using Android.","Designed and Developed the backend for the application, which was capable of extracting data from the Shapefiles, using JSON and Django.","Worked with Shapefiles and GIS Software (GRASS GIS)."]},1:{company:"Prabudha Buildcon LLP",job_position:"Frontend Developer Intern",duration:"September 2018 - February 2019",job_description:["Designed and Developed a Frontend Application for a door to door delivery service for senior citizens, using Vue.js, Apache Cordova."]}},detailprojects:{0:{project_name:"IIRS Survey App",project_description:"Summer Internship Project at the Indian Institute of Remote Sensing. A Mobile based Application capable of providing surveyors the geograhical characteristics data for their current location.",project_github_link:"https://www.github.com/Abhishek-Kathayat/IIRSSurveyApp",project_technologies:["Android","Mapbox"]},1:{project_name:"IIRS Survey API",project_description:"Summer Internship Project at the Indian Institute of Remote Sensing. API for the Mobile based Application (IIRS Survey App), capable of extracting geographical characteristics data from ArcGIS Shapefiles.",project_github_link:"https://www.github.com/Abhishek-Kathayat/IIRS_Survey_API",project_technologies:["Django","ArcGIS","GeoJSON"]},3:{project_name:"Patient Centric Smart HealthCare Application",project_description:'A Web Application for my B.Tech project "Patient Centric Smart HealthCare System using Machine Learning Approach".',project_github_link:"https://www.github.com/Abhishek-Kathayat/pcshs_webapp",project_technologies:["Vue","Chart.js"]},4:{project_name:"Patient Centric Smart HealthCare API",project_description:'API for the Web Application for my B.Tech project "Patient Centric Smart HealthCare System using Machine Learning Approach".',project_github_link:"https://www.github.com/Abhishek-Kathayat/pcshs_backend",project_technologies:["Django","Tensorflow"]},5:{project_name:"Opinions App",project_description:"A Mobile based Application where a person can give his or her opinion on any matter of interest. Developed during recruitment hackathon organised by TEK Systems.",project_github_link:"https://www.github.com/Abhishek-Kathayat/Opinion-App",project_technologies:["Android","Django"]},6:{project_name:"AapkiSevaMein",project_description:"An app for helping old age people with their daily needs and requirements. Developed during my internship at Prabudha Buildcon LLP.",project_github_link:"https://www.github.com/Abhishek-Kathayat/AapkiSevaMein",project_technologies:["Android","Java"]}},detailgetintouch:{description:"Whether you have a question or just want to say hi, just drop a message. I'll try my best to get back to you!"},detailfooter:{github_link:"https://www.github.com/Abhishek-Kathayat",linkedin_link:"https://www.linkedin.com/in/abhishek-kathayat-197672130/",medium_link:"https://medium.com/@abhishekkathayat25"}}},components:{Navbar:p,Footer:x,AboutMe:C,Projects:P,Introview:R,Experience:J,GetInTouch:q}},Q=U,X=(n("034f"),Object(d["a"])(Q,a,s,!1,null,null,null)),Y=X.exports,Z=n("ecee"),tt=n("c074"),et=n("f2d1"),nt=n("b702"),it=n("ad3d");n("c898");Z["c"].add(tt["c"]),Z["c"].add(tt["a"]),Z["c"].add(tt["b"]),Z["c"].add(nt["a"]),Z["c"].add(et["a"]),Z["c"].add(et["b"]),Z["c"].add(et["c"]),i["a"].component("font-awesome-icon",it["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Y)}}).$mount("#app")},"6ca8":function(t,e,n){"use strict";var i=n("e8bb"),a=n.n(i);a.a},"85ec":function(t,e,n){},8682:function(t,e,n){},"97cf":function(t,e,n){"use strict";var i=n("b42e"),a=n.n(i);a.a},ab61:function(t,e,n){"use strict";var i=n("8682"),a=n.n(i);a.a},abfe:function(t,e,n){t.exports=n.p+"img/folder.fa890e76.svg"},adce:function(t,e,n){"use strict";var i=n("cadc"),a=n.n(i);a.a},b42e:function(t,e,n){},c80e:function(t,e,n){"use strict";var i=n("182b"),a=n.n(i);a.a},c898:function(t,e,n){},cadc:function(t,e,n){},e8bb:function(t,e,n){},f508:function(t,e,n){"use strict";var i=n("2b0b"),a=n.n(i);a.a}});
//# sourceMappingURL=app.b04008de.js.map