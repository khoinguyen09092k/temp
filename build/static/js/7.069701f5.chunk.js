(this.webpackJsonpelearning=this.webpackJsonpelearning||[]).push([[7],{460:function(e,t,c){},461:function(e,t,c){},468:function(e,t,c){},482:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return N}));var n=c(0),s=(c(468),c(268)),i=c.n(s),l=c(483),a=c(132),r=c(99),h=(c(461),c.p+"static/media/bannner5.b092dcab.jpg"),d=c(1);function o(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"",style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsxs)("div",{className:"",style:{marginLeft:"90px"},children:[Object(d.jsx)("p",{className:"",style:{fontSize:"50px",marginBottom:"0px",fontWeight:"600"},children:"Ch\xe0o m\u1eebng"}),Object(d.jsx)("p",{style:{fontSize:"50px",margin:"0px",fontWeight:"600"},children:"\u0111\u1ebfn v\u1edbi m\xf4i tr\u01b0\u1eddng"}),Object(d.jsx)("p",{style:{fontSize:"50px",fontWeight:"bold",color:"#33CC99",marginTop:"0px"},children:"Vlearning"}),Object(d.jsx)("button",{style:{backgroundColor:"#f2cd7d",color:"white",padding:"12px",borderRadius:"7px"},children:"B\u1eaeT \u0110\u1ea6U N\xc0O"})]}),Object(d.jsx)("img",{src:h,alt:"banner",width:"60%"})]})})}c(469);var x=c.p+"static/media/banner4.ded7f109.jpg",j=c(72);function b(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"",style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsxs)("div",{className:"",style:{marginLeft:"90px"},children:[Object(d.jsx)("p",{className:"",style:{fontSize:"50px",marginBottom:"0px",fontWeight:"600"},children:"Ch\xe0o m\u1eebng"}),Object(d.jsx)("p",{style:{fontSize:"50px",margin:"0px",fontWeight:"600"},children:"\u0111\u1ebfn v\u1edbi m\xf4i tr\u01b0\u1eddng"}),Object(d.jsx)("p",{style:{fontSize:"50px",fontWeight:"bold",color:"#33CC99",marginTop:"0px"},children:"Vlearning"}),Object(d.jsx)("button",{style:{backgroundColor:"#f2cd7d",color:"white",padding:"12px",borderRadius:"7px"},children:"B\u1eaeT \u0110\u1ea6U N\xc0O"})]}),Object(d.jsx)("img",{src:x,alt:"banner",width:"50%"})]})})}function m(){return Object(d.jsx)("div",{className:"carousel",children:Object(d.jsxs)(l.a,{arrows:!0,prevArrow:Object(d.jsx)(a.a,{}),nextArrow:Object(d.jsx)(r.a,{}),autoplay:!0,autoplaySpeed:1500,draggable:!0,lazyLoad:!0,style:{marginTop:"120px"},children:[Object(d.jsx)("div",{className:"banner1",children:Object(d.jsx)(o,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{})})]})})}c(460);var g=c(32),p=c(481),u=c(136);function O(e){var t=Object(g.c)((function(e){return e.CategoryCoursesReducer})).arrCateCourse,c=Object(g.c)((function(e){return e.CoursesReducer})).arrCourses,s=Object(g.b)();Object(n.useEffect)((function(){s(u.a),s(u.b)}),[]);var l=p.a.TabPane;return Object(d.jsx)("div",{className:"sm:mx-0",children:Object(d.jsx)(p.a,{centered:!0,size:"large",type:"card",tabBarGutter:30,animated:!1,children:null===t||void 0===t?void 0:t.map((function(e,t){var n=c.filter((function(t){var c;return(null===(c=t.danhMucKhoaHoc)||void 0===c?void 0:c.maDanhMucKhoahoc)===e.maDanhMuc}));return console.log({courseByCate:n}),Object(d.jsx)(l,{tab:e.tenDanhMuc,children:Object(d.jsxs)("section",{className:"text-gray-600 body-font mx-5 ",children:[Object(d.jsx)("div",{className:"container mb-8 sm:mb-0  sm:py-16 px-3 mx-auto",children:Object(d.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 -m-3",children:n.slice(0,8).map((function(e,t){var c,n,s;return Object(d.jsxs)("div",{className:"courses_tab_home relative  lg:mb-10 mx-2 sm:mx-5 px-3 sm:px-6  sm:py-12 bg-white rounded-3xl shadow-xl",children:[Object(d.jsx)("div",{className:"absolute top-0 left-0"}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)(i.a,{height:200,children:Object(d.jsx)("img",{alt:null===e||void 0===e?void 0:e.tenKhoaHoc,className:"w-full mb-2 object-cover object-center rounded-lg inline-block",style:{maxHeight:"150px",minHeight:"150px",border:"1px solid #eee"},src:null===e||void 0===e?void 0:e.hinhAnh})}),Object(d.jsx)("p",{className:"rounded-md lg:rounded-lg text-center text-white  py-2 px-3 w-fit text-xs",style:{backgroundColor:"rgb(51 204 153 / 80%)"},children:null===e||void 0===e||null===(c=e.danhMucKhoaHoc)||void 0===c?void 0:c.tenDanhMucKhoaHoc}),Object(d.jsx)("h4",{className:"courses_tab_home_heading  text-xl sm:text-xl",style:{fontWeight:"600",fontSize:"20px",textAlign:"left"},children:null===e||void 0===e?void 0:e.tenKhoaHoc}),Object(d.jsx)("p",{className:"course_tab_home_description mb-0  text-gray-600 leading-relaxed",style:{fontSize:"16px",textAlign:"left"},children:(null===e||void 0===e||null===(n=e.moTa)||void 0===n?void 0:n.length)>100?Object(d.jsxs)("span",{children:[null===e||void 0===e||null===(s=e.moTa)||void 0===s?void 0:s.slice(0,90),"..."]}):Object(d.jsx)("span",{children:e.moTa})}),Object(d.jsx)("div",{onClick:function(){j.b.push("/courses/detail/".concat(e.maKhoaHoc))},className:"mx-auto cursor-pointer w-fit  ring-1 ring-yellow-400 text-yellow-400 bg-white hover:text-white hover:bg-yellow-400 \r lg:font-semibold text-sm sm:text-base px-5 py-2 rounded-lg transition-colors",children:"Xem chi ti\u1ebft"})]})]},t)}))})}),Object(d.jsx)("button",{onClick:function(){j.b.push("/courses/".concat(e.maDanhMuc))},className:"mb-8 sm:mb-20 bg-green-400 hover:bg-green-400 text-white font-semibold text-base  sm:p-5 rounded-lg transition-colors",children:"Xem th\xeam"})]})},t)}))})})}var v=c.p+"static/media/img7.87768bc9.jpg",f=c.p+"static/media/face1.cc21b875.jpg",y=c.p+"static/media/face2.12eb3caa.jpg";function N(e){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"container mx-auto sm:py-8 mb-8",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsxs)("h2",{className:"text-4xl sm:text-4xl  py-3",children:["KH\xd3A H\u1eccC T\u1ea0I ",Object(d.jsx)("span",{className:"text-green-500",children:"VLearning"})]}),Object(d.jsx)("p",{className:"text-md text-gray-500 font-normal px-2 mb-5 sm:px-80",children:"H\u1ecdc qua d\u1ef1 \xe1n th\u1ef1c t\u1ebf, h\u1ecdc \u0111i \u0111\xf4i v\u1edbi h\xe0nh, kh\xf4ng l\xfd thuy\u1ebft lan man, ph\xe2n t\xedch c\u1ed9i ngu\u1ed3n c\u1ee7a v\u1ea5n \u0111\u1ec1, x\xe2y d\u1ef1ng t\u1eeb c\xe1c v\xed d\u1ee5 nh\u1ecf \u0111\u1ebfn th\u1ef1c thi m\u1ed9t d\u1ef1 \xe1n l\u1edbn ngo\xe0i th\u1ef1c t\u1ebf \u0111\u1ec3 h\u1ecdc vi\xean h\u1ecdc xong l\xe0m \u0111\u01b0\u1ee3c ngay. H\u01a1n 1000 b\xe0i t\u1eadp v\xe0 d\u1ef1 \xe1n th\u1ef1c t\u1ebf"})]}),Object(d.jsxs)("div",{className:"grid grid-cols-2",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"",src:v,alt:"",style:{width:"100%"}})}),Object(d.jsx)("div",{className:"",style:{paddingTop:"50px"},children:Object(d.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"mb-4",children:[Object(d.jsx)("h4",{className:"text-lg",children:"H\u1ec6 TH\u1ed0NG H\u1eccC T\u1eacP"}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"T\u1ef1 \u0111\u1ed9ng ch\u1ea5m \u0111i\u1ec3m tr\u1eafc nghi\u1ec7m v\xe0 \u0111\u01b0a c\xe2u h\u1ecfi t\xf9y theo m\u1ee9c \u0111\u1ed9 h\u1ecdc vi\xean"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"Th\u1ed1ng k\xea l\u01b0\u1ee3t xem video, l\xe0m b\xe0i t\u1eadp, \u0111i\u1ec3m s\u1ed1 theo chu k\u1ef3 v\xe0 x\u1ebfp h\u1ea1ng h\u1ecdc vi\xean m\u1ed7i tu\u1ea7n"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-lg",children:"L\u1ed8 TR\xccNH PH\xd9 H\u1ee2P"}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"L\u1ed9 tr\xecnh b\xe0i b\u1ea3n t\u1eeb zero t\u1edbi chuy\xean nghi\u1ec7p, n\xe2ng cao"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"Hu\u1ea5n luy\u1ec7n \u0111\u1ec3 ph\xe1t tri\u1ec3n n\u0103ng l\u1ef1c v\xe0 ni\u1ec1m \u0111am m\xea l\u1eadp tr\xecnh"]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-lg",children:"GI\u1ea2NG VI\xcaN"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"T\u01b0\u01a1ng t\xe1c c\xf9ng mentor v\xe0 gi\u1ea3ng vi\xean qua ph\u1ea7n th\u1ea3o lu\u1eadn"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"Review code v\xe0 \u0111\u01b0a ra c\xe1c nh\u1eadn x\xe9t g\xf3p \xfd, t\u01b0\u01a1ng t\xe1c th\u1ea3o lu\u1eadn gi\u1eefa c\xe1c h\u1ecdc vi\xean"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-lg",children:"CH\u1ee8NG NH\u1eacN"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"Ch\u1ea5m b\xe0i v\xe0 c\xf3 th\u1ec3 v\u1ea5n \u0111\xe1p tr\u1ef1c tuy\u1ebfn \u0111\u1ec3 review"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{class:"fa-solid fa-circle-check text-green-500 mr-3"}),"H\u1ec7 th\u1ed1ng c\u1ee7a ch\xfang t\xf4i c\u0169ng t\u1ea1o ra cho b\u1ea1n m\u1ed9t CV tr\u1ef1c tuy\u1ebfn \u0111\u1ed9c \u0111\xe1o"]})]})]}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),j.b.push("/courses")},className:"bg-green-500 hover:bg-green-500 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors",children:"Xem c\xe1c kho\xe1 h\u1ecdc"})]})})]}),Object(d.jsxs)("div",{className:"heading text-center ",style:{margin:"50px"},children:[Object(d.jsxs)("h2",{className:"text-4xl sm:text-4xl  py-3",children:["L\u1ed8 TR\xccNH V\xc0 DANH S\xc1CH C\xc1C ",Object(d.jsx)("span",{className:"text-green-500",children:"KHO\xc1 H\u1eccC"})]}),Object(d.jsx)("p",{className:"text-md text-gray-500 font-normal px-2 mb-5 sm:px-80",children:"CyberSoft v\u1ea1ch ra l\u1ed9 tr\xecnh h\u1ecdc l\u1eadp tr\xecnh m\u1ed9t c\xe1ch chi ti\u1ebft, b\xe0i b\u1ea3n, chuy\xean nghi\u1ec7p, chu\u1ea9n ngh\u1ec1 \u0110H Arizona -USA, 100% th\u1ef1c h\xe0nh theo d\u1ef1 \xe1n th\u1ef1c t\u1ebf tr\xe1nh lan man, luy\u1ec7n t\u1eadp t\u01b0 duy, logic n\u1ec1n t\u1ea3ng chuy\xean s\xe2u d\u1ec5 d\xe0ng ph\xe1t tri\u1ec3n l\xean senior, leader. \u0110i \u0111\xfang l\u1ed9 tr\xecnh CyberSoft b\u1ea1n s\u1ebd ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c th\u1eddi gian, chi ph\xed v\xe0 c\xf3 vi\u1ec7c l\xe0m t\u1ed1t nh\u1ea5t v\xe0 b\u1ec1n v\u1eefng \u0111\u1ec3 th\u0103ng ti\u1ebfn."}),Object(d.jsx)("div",{className:"py-8",children:Object(d.jsx)(i.a,{children:Object(d.jsx)(O,{})})})]}),Object(d.jsx)("div",{style:{backgroundColor:"rgb(204 204 204 / 12%)",padding:"50px"},children:Object(d.jsx)("section",{class:"text-gray-600 body-font",children:Object(d.jsxs)("div",{class:"container px-5  mx-auto",children:[Object(d.jsx)("h3",{class:"text-4xl sm:text-4xl mb-12 text-center",children:"\u0110\xc1NH GI\xc1 T\u1eea H\u1eccC VI\xcaN"}),Object(d.jsxs)("div",{class:"flex flex-wrap -m-4",children:[Object(d.jsx)("div",{class:"p-4 md:w-1/2 w-full",children:Object(d.jsxs)("div",{class:"h-full bg-gray-100 p-8 rounded",children:[Object(d.jsx)("i",{class:"fa-solid fa-quote-right text-4xl"}),Object(d.jsx)("p",{class:"leading-relaxed mb-6",children:"Ch\u01b0\u01a1ng tr\xecnh gi\u1ea3ng d\u1ea1y \u0111\u01b0\u1ee3c bi\xean so\u1ea1n d\xe0nh ri\xeang cho c\xe1c b\u1ea1n L\u1eadp tr\xecnh t\u1eeb tr\xe1i ng\xe0nh ho\u1eb7c \u0111\xe3 c\xf3 ki\u1ebfn th\u1ee9c theo c\u01b0\u1eddng \u0111\u1ed9 cao, lu\xf4n \u0111\u01b0\u1ee3c tinh ch\u1ec9nh v\xe0 t\u1ed1i \u01b0u h\xf3a theo th\u1eddi gian b\u1edfi c\xe1c th\xe0nh vi\xean s\xe1ng l\u1eadp v\xe0 gi\u1ea3ng vi\xean d\xe0y kinh nghi\u1ec7m.Th\u1ef1c s\u1ef1 r\u1ea5t hay v\xe0 h\u1ea5p d\u1eabn ."}),Object(d.jsxs)("a",{class:"inline-flex items-center",children:[Object(d.jsx)("img",{className:" rounded-full flex-shrink-0 object-cover object-center",src:f,alt:"",style:{width:"60px",height:"60px"}}),Object(d.jsxs)("span",{class:"flex-grow flex flex-col pl-4",children:[Object(d.jsx)("span",{class:"title-font font-medium text-gray-900",children:"Kh\xf4i Nguy\u1ec5n "}),Object(d.jsx)("span",{class:"text-gray-500 text-sm",children:"CODE ADMIN"})]})]})]})}),Object(d.jsx)("div",{class:"p-4 md:w-1/2 w-full",children:Object(d.jsxs)("div",{class:"h-full bg-gray-100 p-8 rounded",children:[Object(d.jsx)("i",{class:"fa-solid fa-quote-right text-4xl"}),Object(d.jsx)("p",{class:"leading-relaxed mb-6",children:"Ch\u01b0\u01a1ng tr\xecnh gi\u1ea3ng d\u1ea1y \u0111\u01b0\u1ee3c bi\xean so\u1ea1n d\xe0nh ri\xeang cho c\xe1c b\u1ea1n L\u1eadp tr\xecnh t\u1eeb tr\xe1i ng\xe0nh ho\u1eb7c \u0111\xe3 c\xf3 ki\u1ebfn th\u1ee9c theo c\u01b0\u1eddng \u0111\u1ed9 cao, lu\xf4n \u0111\u01b0\u1ee3c tinh ch\u1ec9nh v\xe0 t\u1ed1i \u01b0u h\xf3a theo th\u1eddi gian b\u1edfi c\xe1c th\xe0nh vi\xean s\xe1ng l\u1eadp v\xe0 gi\u1ea3ng vi\xean d\xe0y kinh nghi\u1ec7m.Th\u1ef1c s\u1ef1 r\u1ea5t hay v\xe0 h\u1ea5p d\u1eabn"}),Object(d.jsxs)("a",{class:"inline-flex items-center",children:[Object(d.jsx)("img",{className:" rounded-full flex-shrink-0 object-cover object-center",src:y,alt:"",style:{width:"60px",height:"60px"}}),Object(d.jsxs)("span",{class:"flex-grow flex flex-col pl-4",children:[Object(d.jsx)("span",{class:"title-font font-medium text-gray-900",children:"H\xe2n Tr\u1ea7n"}),Object(d.jsx)("span",{class:"text-gray-500 text-sm",children:"CODE USER"})]})]})]})})]})]})})})]})]})}}}]);
//# sourceMappingURL=7.069701f5.chunk.js.map