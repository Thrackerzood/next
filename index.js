(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style */ "./styles/style.tsx");


var _jsxFileName = "C:\\Users\\lrulc\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\openserver\\OSPanel\\domains\\localhost\\next js\\my-app\\pages\\index.tsx";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_2__.HomeMain, {
      children: "home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./styles/style.tsx":
/*!**************************!*\
  !*** ./styles/style.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Global": function() { return /* binding */ Global; },
/* harmony export */   "NavStyle": function() { return /* binding */ NavStyle; },
/* harmony export */   "HomeMain": function() { return /* binding */ HomeMain; },
/* harmony export */   "MainAuth": function() { return /* binding */ MainAuth; },
/* harmony export */   "Page404": function() { return /* binding */ Page404; },
/* harmony export */   "FooterStyle": function() { return /* binding */ FooterStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Global = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
*{
   padding: 0;
   margin: 0;
}
a{
   text-decoration: none;
}
li{
   list-style-type: none;
}
body{
   background: white;
}
.sidebar_open_nav{
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   position: fixed;
   backdrop-filter: blur(2px);
}
`;
const NavStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
top: 0;
left: 0;
position: sticky;
.sidebar_open_header{
   top: 0;
   left: 0;
   width: 300px;
   height: 100%;
   display: flex;
   position: fixed;
   background: #000000d1;
   flex-direction: column;
}
.sidebar_close_header{
   top: 0;
   left: 0;
   width: 100%;
   position: fixed;
   background: #000000d1;
}
nav{
   .sidebar_close{
         float: left;
         width: 25px;
         height: 20px;
         display: flex;
         margin: .4rem;
         flex-wrap: wrap;
         :hover{
            >div{
               width: 22px;
               transition: .3s;
               background: #4fc3f7;
            }
         }
      div{
         margin: 2px auto;
         width: 25px;
         height: 3px;
         background: white;
      }
   }
   .sidebar_open{
         float: left;
         width: 20px;
         height: 20px;
         margin: .4rem;
         background: white;
         :hover{
            background: #4fc3f7;
            animation: rotate-center 0.6s ease-in-out both;
            @keyframes rotate-center {
               0% {
                 transform: rotate(0);
               }
               100% {
                 transform: rotate(360deg);
               }
            }
         }
         clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
            div:nth-child(1){
               display: none;
            }
            div:nth-child(2){
               display: none;
            }
            div:nth-child(3){
               display: none;
            }
}
   .open{
      display: flex;
      align-items: center;
      flex-direction: column;
      >li{
         margin: 25px auto;
         a{
            color: white;
            :hover{
               color: #a0e2ff;
            }
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
         .active{
            font-size: 20px;
            font-weight: 600;
            color: #4fc3f7 !important;
         }
      }
   }
   .close{
      display: none;
   }
}
@media screen and (min-width: 1024px){

}
@media screen and (min-width: 768px and max-width: 1024px){

}
@media screen and (max-width: 768px){

}
@media screen and (max-width: 420px){
   .sidebar_open_header{
      width: 100% !important;
   }
}
`;
const HomeMain = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().main)`

`;
const MainAuth = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().main)`
display: flex;
max-width: 600px;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 8rem);
margin: 2rem auto;
   >section{ 
      display: flex;
      border-radius: 15px;
      flex-direction: column;
      min-height: calc(75vh - 8rem);
      justify-content: space-between;
      >section{
         margin: 1rem;
         display: flex;
         border: 2px solid #4fc3f7;
         justify-content: flex-end;
         p{
            display: none;
         }
         .active{
            margin: 20px;
            display: block;
            transition .5s;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600; 
            padding: 5px 15px;
            border: 2px solid #4fc3f7;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            :hover{
               background: rgba(39,155,207,.5);
            }
         }
      }
      .form{
            padding: 1rem;
            display: flex;
            min-height: 250px;
            align-items: center;
            flex-direction: column;
            justify-content: space-evenly;
            .true{
               border-bottom: 2px solid green !important;
            }
            .false{
               border-bottom: 2px solid red !important;
            }
         >input{
            width: 180px;
            border: none;
            outline: none;
            margin-top: 1rem;
            padding: 7px 15px;
            background: white;
            border-bottom: 2px solid black;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            @media screen and (max-width: 420px){
               width: calc(100% - 30px);
               margin: 15px;
            }
         }
         >button{ 
            color: black;
            margin: 1rem;
            border: none;
            outline: none;
            transition: .5s;
            font-size: 20px;
            background: white;
            padding: 2.5px 25px;
            border: 2px solid #4fc3f7;
            @media screen and (max-width: 420px){
               padding: 4px;
            }
         }
         .disabled{
            color: red !important;
            border: 2px solid gray !important;
         }
         .inDisabled{
            :hover{
               background: rgba(39,155,207,.5);
            }
         }
         p:nth-child(1){
            color: white;
            font-size: 20px;
            font-weight: 600;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
         p:nth-child(2){
            color: white;
            font-size: 12px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
      }
   }
`;
const Page404 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().main)`
display: flex;
max-width: 100%;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 4rem);
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
h1{
   color: red;
   font-size: 8vw;
}
p{
   a{
      padding: 2px;
      color: #096690;
      border-bottom: 1px solid;
      :hover{
         color: #4fc3f7;
      }
   }
}
`;
const FooterStyle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer)`
width: 100%;
height: 4rem;
background: #000000d1;
`;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL3N0eWxlLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkhvbWUiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk5hdlN0eWxlIiwic3R5bGVkIiwiSG9tZU1haW4iLCJNYWluQXV0aCIsIlBhZ2U0MDQiLCJGb290ZXJTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQTZCO0FBQzFDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQVFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUVPLE1BQU1DLE1BQU0sR0FBR0MsZ0VBQ3JCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2Qk87QUF5QkEsTUFBTUMsUUFBUSxHQUFHQyxpRUFDdkI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBL0dPO0FBaUhBLE1BQU1DLFFBQVEsR0FBR0QsK0RBQ3ZCO0FBQ0Q7QUFDQSxDQUhPO0FBSUEsTUFBTUUsUUFBUSxHQUFHRiwrREFDdkI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FwR087QUFxR0EsTUFBTUcsT0FBTyxHQUFHSCwrREFDdEI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXZCTztBQXdCQSxNQUFNSSxXQUFXLEdBQUdKLGlFQUMxQjtBQUNEO0FBQ0E7QUFDQTtBQUNBLENBTE8sQzs7Ozs7Ozs7Ozs7QUM3UVAsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge0hvbWVNYWlufSBmcm9tICcuLi9zdHlsZXMvc3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCT0LvQsNCy0L3QsNGPPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIb21lTWFpbj5ob21lPC9Ib21lTWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBzdHlsZWQgLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH1mcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZVxyXG5gXHJcbip7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIG1hcmdpbjogMDtcclxufVxyXG5he1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxubGl7XHJcbiAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5ib2R5e1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uc2lkZWJhcl9vcGVuX25hdntcclxuICAgdG9wOiAwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTmF2U3R5bGUgPSBzdHlsZWQuaGVhZGVyXHJcbmBcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG5wb3NpdGlvbjogc3RpY2t5O1xyXG4uc2lkZWJhcl9vcGVuX2hlYWRlcntcclxuICAgdG9wOiAwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICB3aWR0aDogMzAwcHg7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBiYWNrZ3JvdW5kOiAjMDAwMDAwZDE7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZGViYXJfY2xvc2VfaGVhZGVye1xyXG4gICB0b3A6IDA7XHJcbiAgIGxlZnQ6IDA7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIGJhY2tncm91bmQ6ICMwMDAwMDBkMTtcclxufVxyXG5uYXZ7XHJcbiAgIC5zaWRlYmFyX2Nsb3Nle1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgbWFyZ2luOiAuNHJlbTtcclxuICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICA6aG92ZXJ7XHJcbiAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZmMzZjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAuc2lkZWJhcl9vcGVue1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgbWFyZ2luOiAuNHJlbTtcclxuICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgIDpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRmYzNmNztcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGUtY2VudGVyIHtcclxuICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMCUsIDAlIDIwJSwgMzAlIDUwJSwgMCUgODAlLCAyMCUgMTAwJSwgNTAlIDcwJSwgODAlIDEwMCUsIDEwMCUgODAlLCA3MCUgNTAlLCAxMDAlIDIwJSwgODAlIDAlLCA1MCUgMzAlKTtcclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxufVxyXG4gICAub3BlbntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgPmxpe1xyXG4gICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICA6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjYTBlMmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGZjM2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIC5jbG9zZXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4IGFuZCBtYXgtd2lkdGg6IDEwMjRweCl7XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpe1xyXG4gICAuc2lkZWJhcl9vcGVuX2hlYWRlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lTWFpbiA9IHN0eWxlZC5tYWluXHJcbmBcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IE1haW5BdXRoID0gc3R5bGVkLm1haW5cclxuYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXgtd2lkdGg6IDYwMHB4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxubWluLWhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xyXG5tYXJnaW46IDJyZW0gYXV0bztcclxuICAgPnNlY3Rpb257IFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKDc1dmggLSA4cmVtKTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICA+c2VjdGlvbntcclxuICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGZjM2Y3O1xyXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gLjVzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGZjM2Y3O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICAgICAgICAgIDpob3ZlcntcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzOSwxNTUsMjA3LC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgLnRydWV7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mYWxzZXtcclxuICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgID5pbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KXtcclxuICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICA+YnV0dG9ueyBcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVweCAyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGZjM2Y3O1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5kaXNhYmxlZHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmluRGlzYWJsZWR7XHJcbiAgICAgICAgICAgIDpob3ZlcntcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzOSwxNTUsMjA3LC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHA6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHA6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBQYWdlNDA0ID0gc3R5bGVkLm1haW5cclxuYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuaDF7XHJcbiAgIGNvbG9yOiByZWQ7XHJcbiAgIGZvbnQtc2l6ZTogOHZ3O1xyXG59XHJcbnB7XHJcbiAgIGF7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgY29sb3I6ICMwOTY2OTA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgOmhvdmVye1xyXG4gICAgICAgICBjb2xvcjogIzRmYzNmNztcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgRm9vdGVyU3R5bGUgPSBzdHlsZWQuZm9vdGVyXHJcbmBcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNHJlbTtcclxuYmFja2dyb3VuZDogIzAwMDAwMGQxO1xyXG5gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9