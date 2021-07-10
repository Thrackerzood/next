(function() {
var exports = {};
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./components/validation.tsx":
/*!***********************************!*\
  !*** ./components/validation.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validation": function() { return /* binding */ validation; },
/* harmony export */   "validationLog": function() { return /* binding */ validationLog; }
/* harmony export */ });
let login;
let email;
let password;
let info;
function validation(form) {
  if (form.login !== '') {
    login = false;

    if (login === false) {
      if (true === /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(form.login)) {
        login = true;
      }
    }
  }

  if (form.email !== '') {
    email = false;

    if (email === false) {
      if (true === /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)) {
        email = true;
      }
    }
  }

  if (form.password && form.repeat !== '') {
    password = false;

    if (password === false) {
      if (form.password === form.repeat && true === /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password)) {
        password = true;
      }
    }
  }

  if (login || email || password === true) {
    info = regex(login, email, password);
  }

  return info;
}
function validationLog(form) {
  if (form.login !== '') {
    login = false;

    if (login === false) {
      if (true === /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(form.login)) {
        login = true;
      }
    }
  }

  if (form.password !== '') {
    password = false;

    if (password === false) {
      if (form.password && true === /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password)) {
        password = true;
      }
    }
  }

  if (login || email || password === true) {
    info = regex(login, email, password);
  }

  return info;
}

function regex(login, email, password) {
  let regex = {
    login,
    email,
    password
  };

  if (login === true || '' || email === true || '' || password === true || '') {
    console.log('regex: ', {
      login,
      email,
      password
    });
    login = false;
    email = false;
    password = false;
    return regex;
  }
}

/***/ }),

/***/ "./middleware/ajax.tsx":
/*!*****************************!*\
  !*** ./middleware/ajax.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ajax; }
/* harmony export */ });
async function ajax(url, data) {
  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.then(response => response.json());
}

/***/ }),

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auth; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style */ "./styles/style.tsx");
/* harmony import */ var _middleware_ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/ajax */ "./middleware/ajax.tsx");
/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/validation */ "./components/validation.tsx");


var _jsxFileName = "C:\\Users\\lrulc\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\openserver\\OSPanel\\domains\\localhost\\next js\\my-app\\pages\\auth.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Auth() {
  let obj;
  let {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  let {
    0: userStateReg,
    1: userSetStateRegistration
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    login: '',
    email: '',
    password: '',
    repeat: ''
  });
  let {
    0: userStateLog,
    1: userSetStateLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    login: '',
    password: ''
  });

  function changeRegistration(event) {
    var _obj, _obj2, _obj3, _obj4, _obj5, _obj6, _obj7, _obj8, _obj9, _obj10, _obj11, _obj12;

    userSetStateRegistration(_objectSpread(_objectSpread({}, userStateReg), {}, {
      [event.target.name]: event.target.value
    }));
    obj = (0,_components_validation__WEBPACK_IMPORTED_MODULE_5__.validation)(userStateReg);
    let login = document.querySelector('.login');
    let email = document.querySelector('.email');
    let password = document.querySelectorAll('.password');

    if (((_obj = obj) === null || _obj === void 0 ? void 0 : _obj.login) === true) {
      login.classList.add('true');
      login.classList.remove('false');
    }

    if (((_obj2 = obj) === null || _obj2 === void 0 ? void 0 : _obj2.email) === true) {
      email.classList.add('true');
      email.classList.remove('false');
    }

    if (((_obj3 = obj) === null || _obj3 === void 0 ? void 0 : _obj3.password) === true) {
      password[0].classList.add('true');
      password[1].classList.add('true');
      password[0].classList.remove('false');
      password[1].classList.remove('false');
    }

    if (((_obj4 = obj) === null || _obj4 === void 0 ? void 0 : _obj4.login) === false) {
      login.classList.add('false');
      login.classList.remove('true');
    }

    if (((_obj5 = obj) === null || _obj5 === void 0 ? void 0 : _obj5.email) === false) {
      email.classList.add('false');
      email.classList.remove('true');
    }

    if (((_obj6 = obj) === null || _obj6 === void 0 ? void 0 : _obj6.password) === false) {
      password[0].classList.add('false');
      password[1].classList.add('false');
      password[0].classList.remove('true');
      password[1].classList.remove('true');
    }

    if ((_obj7 = obj) !== null && _obj7 !== void 0 && _obj7.login && (_obj8 = obj) !== null && _obj8 !== void 0 && _obj8.email && ((_obj9 = obj) === null || _obj9 === void 0 ? void 0 : _obj9.password) === true) {
      let button = document.querySelector(".button");
      button.disabled = false;
      button.classList.add('inDisabled');
      button.classList.remove('disabled');
    }

    if ((_obj10 = obj) !== null && _obj10 !== void 0 && _obj10.login && (_obj11 = obj) !== null && _obj11 !== void 0 && _obj11.email && ((_obj12 = obj) === null || _obj12 === void 0 ? void 0 : _obj12.password) === false) {
      let button = document.querySelector(".button");
      button.disabled = true;
      button.classList.add('disabled');
      button.classList.remove('inDisabled');
    }
  }

  function changeLogin(event) {
    var _obj13, _obj14, _obj15, _obj16, _obj17, _obj18, _obj19, _obj20;

    userSetStateLogin(_objectSpread(_objectSpread({}, userStateLog), {}, {
      [event.target.name]: event.target.value
    }));
    obj = (0,_components_validation__WEBPACK_IMPORTED_MODULE_5__.validationLog)(userStateLog);
    let login = document.querySelector('.login');
    let password = document.querySelectorAll('.password');

    if (((_obj13 = obj) === null || _obj13 === void 0 ? void 0 : _obj13.login) === true) {
      login.classList.add('true');
      login.classList.remove('false');
    }

    if (((_obj14 = obj) === null || _obj14 === void 0 ? void 0 : _obj14.password) === true) {
      password[0].classList.add('true');
      password[0].classList.remove('false');
    }

    if (((_obj15 = obj) === null || _obj15 === void 0 ? void 0 : _obj15.login) === false) {
      login.classList.add('false');
      login.classList.remove('true');
    }

    if (((_obj16 = obj) === null || _obj16 === void 0 ? void 0 : _obj16.password) === false) {
      password[0].classList.add('false');
      password[0].classList.remove('true');
    }

    if ((_obj17 = obj) !== null && _obj17 !== void 0 && _obj17.login && ((_obj18 = obj) === null || _obj18 === void 0 ? void 0 : _obj18.password) === true) {
      let button = document.querySelector(".button");
      button.disabled = false;
      button.classList.add('inDisabled');
      button.classList.remove('disabled');
    }

    if ((_obj19 = obj) !== null && _obj19 !== void 0 && _obj19.login && ((_obj20 = obj) === null || _obj20 === void 0 ? void 0 : _obj20.password) === false) {
      let button = document.querySelector(".button");
      button.disabled = true;
      button.classList.add('disabled');
      button.classList.remove('inDisabled');
    }
  }

  function valueDelete() {
    let login = document.querySelector('.login');
    login.value = '';
    let email = document.querySelector('.email');
    email.value = '';
    let password = document.querySelector('.password');
    password.value = '';
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: state ? 'Регистрация' : 'Вход'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.MainAuth, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            onClick: () => setState(!state),
            className: state ? "" : "active",
            children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            onClick: () => setState(!state),
            className: state ? "active" : "",
            children: "\u0412\u0445\u043E\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 10
        }, this), state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "form",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042F \u041D\u0410 \u0421\u0410\u0419\u0422\u0415"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Login",
            name: "login",
            onKeyUp: event => {
              changeRegistration(event);
            },
            onChange: changeRegistration,
            className: "login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Email",
            name: "email",
            onKeyUp: changeRegistration,
            onChange: changeRegistration,
            className: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Password",
            name: "password",
            onKeyUp: changeRegistration,
            onChange: changeRegistration,
            className: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Password",
            name: "repeat",
            onKeyUp: changeRegistration,
            onChange: changeRegistration,
            className: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => (0,_middleware_ajax__WEBPACK_IMPORTED_MODULE_4__.default)('http://127.0.0.1:5500/api/auth/registration', userStateReg),
            className: "button disabled",
            children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "form",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0412\u0425\u041E\u0414 \u041D\u0410 \u0421\u0410\u0419\u0422"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0434\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C. \u0441\u043D\u043E\u0432\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Login",
            name: "login",
            onKeyUp: changeLogin,
            onChange: changeLogin,
            className: "login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Password",
            name: "password",
            onKeyUp: changeLogin,
            onChange: changeLogin,
            className: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => (0,_middleware_ajax__WEBPACK_IMPORTED_MODULE_4__.default)('http://127.0.0.1:5500/api/auth/login', userStateLog),
            className: "button disabled",
            children: "\u0412\u0445\u043E\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/auth.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL3ZhbGlkYXRpb24udHN4Iiwid2VicGFjazovL215LWFwcC8uL21pZGRsZXdhcmUvYWpheC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXV0aC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL3N0eWxlLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5mbyIsInZhbGlkYXRpb24iLCJmb3JtIiwidGVzdCIsInJlcGVhdCIsInJlZ2V4IiwidmFsaWRhdGlvbkxvZyIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidXJsIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwianNvbiIsIkF1dGgiLCJvYmoiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VyU3RhdGVSZWciLCJ1c2VyU2V0U3RhdGVSZWdpc3RyYXRpb24iLCJ1c2VyU3RhdGVMb2ciLCJ1c2VyU2V0U3RhdGVMb2dpbiIsImNoYW5nZVJlZ2lzdHJhdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJ1dHRvbiIsImRpc2FibGVkIiwiY2hhbmdlTG9naW4iLCJ2YWx1ZURlbGV0ZSIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiTmF2U3R5bGUiLCJzdHlsZWQiLCJIb21lTWFpbiIsIk1haW5BdXRoIiwiUGFnZTQwNCIsIkZvb3RlclN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFJQSxLQUFKO0FBQ0EsSUFBSUMsS0FBSjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxJQUFKO0FBQ08sU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBbUM7QUFDdkMsTUFBR0EsSUFBSSxDQUFDTCxLQUFMLEtBQWUsRUFBbEIsRUFBcUI7QUFDbEJBLFNBQUssR0FBRyxLQUFSOztBQUNBLFFBQUdBLEtBQUssS0FBSyxLQUFiLEVBQW1CO0FBQ2hCLFVBQUcsU0FBUyxpREFBaURNLElBQWpELENBQXNERCxJQUFJLENBQUNMLEtBQTNELENBQVosRUFBOEU7QUFDM0VBLGFBQUssR0FBRyxJQUFSO0FBQ0Y7QUFDSDtBQUNIOztBQUNELE1BQUdLLElBQUksQ0FBQ0osS0FBTCxLQUFlLEVBQWxCLEVBQXFCO0FBQ2xCQSxTQUFLLEdBQUcsS0FBUjs7QUFDQSxRQUFHQSxLQUFLLEtBQUssS0FBYixFQUFtQjtBQUNoQixVQUFJLFNBQVMsd0pBQXdKSyxJQUF4SixDQUE2SkQsSUFBSSxDQUFDSixLQUFsSyxDQUFiLEVBQXVMO0FBQ3BMQSxhQUFLLEdBQUcsSUFBUjtBQUNGO0FBQ0g7QUFDSDs7QUFDRCxNQUFHSSxJQUFJLENBQUNILFFBQUwsSUFBaUJHLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUFwQyxFQUF1QztBQUNwQ0wsWUFBUSxHQUFHLEtBQVg7O0FBQ0EsUUFBR0EsUUFBUSxLQUFLLEtBQWhCLEVBQXNCO0FBQ25CLFVBQUdHLElBQUksQ0FBQ0gsUUFBTCxLQUFrQkcsSUFBSSxDQUFDRSxNQUF2QixJQUFpQyxTQUFTLGtEQUFrREQsSUFBbEQsQ0FBdURELElBQUksQ0FBQ0gsUUFBNUQsQ0FBN0MsRUFBbUg7QUFDaEhBLGdCQUFRLEdBQUcsSUFBWDtBQUNGO0FBQ0g7QUFDSDs7QUFDRCxNQUFHRixL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBHTztBQXFHQSxNQUFNRyxPQUFPLEdBQUdILCtEQUN0QjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJPO0FBd0JBLE1BQU1JLFdBQVcsR0FBR0osaUVBQzFCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FMTyxDOzs7Ozs7Ozs7OztBQzdRUCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElGb3JtIHtcclxuICAgbG9naW46IHN0cmluZyxcclxuICAgZW1haWw6IHN0cmluZyxcclxuICAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICAgcmVwZWF0OiBzdHJpbmcsXHJcbn1cclxubGV0IGxvZ2luOkJvb2xlYW5cclxubGV0IGVtYWlsOkJvb2xlYW5cclxubGV0IHBhc3N3b3JkOkJvb2xlYW5cclxubGV0IGluZm86YW55XHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0aW9uKGZvcm06SUZvcm0pOmFueXtcclxuICAgaWYoZm9ybS5sb2dpbiAhPT0gJycpe1xyXG4gICAgICBsb2dpbiA9IGZhbHNlXHJcbiAgICAgIGlmKGxvZ2luID09PSBmYWxzZSl7XHJcbiAgICAgICAgIGlmKHRydWUgPT09IC9eKD89LipbQS1aYS16MC05XSQpW0EtWmEtel1bQS1aYS16XFxkLi1dezEsMTl9JC8udGVzdChmb3JtLmxvZ2luKSl7XHJcbiAgICAgICAgICAgIGxvZ2luID0gdHJ1ZVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBpZihmb3JtLmVtYWlsICE9PSAnJyl7XHJcbiAgICAgIGVtYWlsID0gZmFsc2VcclxuICAgICAgaWYoZW1haWwgPT09IGZhbHNlKXtcclxuICAgICAgICAgaWYoKHRydWUgPT09IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KGZvcm0uZW1haWwpKSl7XHJcbiAgICAgICAgICAgIGVtYWlsID0gdHJ1ZVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBpZihmb3JtLnBhc3N3b3JkICYmIGZvcm0ucmVwZWF0ICE9PSAnJyl7XHJcbiAgICAgIHBhc3N3b3JkID0gZmFsc2VcclxuICAgICAgaWYocGFzc3dvcmQgPT09IGZhbHNlKXtcclxuICAgICAgICAgaWYoZm9ybS5wYXNzd29yZCA9PT0gZm9ybS5yZXBlYXQgJiYgdHJ1ZSA9PT0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pWzAtOWEtekEtWl17OCx9JC8udGVzdChmb3JtLnBhc3N3b3JkKSl7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gdHJ1ZVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBpZihsb2dpbiB8fCBlbWFpbCB8fCBwYXNzd29yZCA9PT0gdHJ1ZSl7XHJcbiAgICAgIGluZm8gPSByZWdleChsb2dpbixlbWFpbCxwYXNzd29yZCkgXHJcbiAgIH1cclxuICAgcmV0dXJuIGluZm9cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRpb25Mb2coZm9ybTpJRm9ybSk6YW55e1xyXG4gICBpZihmb3JtLmxvZ2luICE9PSAnJyl7XHJcbiAgICAgIGxvZ2luID0gZmFsc2VcclxuICAgICAgaWYobG9naW4gPT09IGZhbHNlKXtcclxuICAgICAgICAgaWYodHJ1ZSA9PT0gL14oPz0uKltBLVphLXowLTldJClbQS1aYS16XVtBLVphLXpcXGQuLV17MSwxOX0kLy50ZXN0KGZvcm0ubG9naW4pKXtcclxuICAgICAgICAgICAgbG9naW4gPSB0cnVlXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGlmKGZvcm0ucGFzc3dvcmQgIT09ICcnKXtcclxuICAgICAgcGFzc3dvcmQgPSBmYWxzZVxyXG4gICAgICBpZihwYXNzd29yZCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICBpZihmb3JtLnBhc3N3b3JkICAmJiB0cnVlID09PSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSlbMC05YS16QS1aXXs4LH0kLy50ZXN0KGZvcm0ucGFzc3dvcmQpKXtcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSB0cnVlXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGlmKGxvZ2luIHx8IGVtYWlsIHx8IHBhc3N3b3JkID09PSB0cnVlKXtcclxuICAgICAgaW5mbyA9IHJlZ2V4KGxvZ2luLGVtYWlsLHBhc3N3b3JkKSBcclxuICAgfVxyXG4gICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdleChsb2dpbjpCb29sZWFuLGVtYWlsOkJvb2xlYW4scGFzc3dvcmQ6Qm9vbGVhbil7XHJcbiAgIGxldCByZWdleCA9IHtsb2dpbixlbWFpbCxwYXNzd29yZH1cclxuICAgaWYoKGxvZ2luID09PSB0cnVlIHx8ICcnKSB8fCAoZW1haWwgPT09IHRydWUgfHwgJycpIHx8IChwYXNzd29yZCA9PT0gdHJ1ZSB8fCAnJykpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZygncmVnZXg6ICcsIHtsb2dpbixlbWFpbCxwYXNzd29yZH0pXHJcbiAgICAgICAgIGxvZ2luID0gZmFsc2VcclxuICAgICAgICAgZW1haWwgPSBmYWxzZVxyXG4gICAgICAgICBwYXNzd29yZCA9IGZhbHNlXHJcbiAgICAgICAgIHJldHVybiByZWdleFxyXG4gICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhamF4KHVybDpzdHJpbmcsZGF0YTpzdHJpbmcpe1xyXG4gICBjb25zdCByZXNwb25zZTpQcm9taXNlPFJlc3BvbnNlPiA9IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIFxyXG4gICB9KVxyXG4gICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtNYWluQXV0aH0gZnJvbSAnLi4vc3R5bGVzL3N0eWxlJ1xyXG5pbXBvcnQgYWpheCBmcm9tICcuLi9taWRkbGV3YXJlL2FqYXgnXHJcbmltcG9ydCB7IHZhbGlkYXRpb24gLCB2YWxpZGF0aW9uTG9nfSBmcm9tICcuLi9jb21wb25lbnRzL3ZhbGlkYXRpb24nXHJcblxyXG5pbnRlcmZhY2UgSVVzZXJSZWdpc3RyYXRpb24ge1xyXG4gICBsb2dpbjogc3RyaW5nLFxyXG4gICBlbWFpbDogc3RyaW5nLFxyXG4gICBwYXNzd29yZDogc3RyaW5nLFxyXG4gICByZXBlYXQ6IHN0cmluZyxcclxufVxyXG5pbnRlcmZhY2UgSVVzZXJMb2dpbiB7XHJcbiAgIGxvZ2luOiBzdHJpbmcsXHJcbiAgIHBhc3N3b3JkOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGggKCk6SlNYLkVsZW1lbnQge1xyXG4gICBsZXQgb2JqOmFueVxyXG4gICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV06YW55ID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgIGxldCBbdXNlclN0YXRlUmVnLCB1c2VyU2V0U3RhdGVSZWdpc3RyYXRpb25dOmFueSA9IHVzZVN0YXRlPElVc2VyUmVnaXN0cmF0aW9uPih7bG9naW46ICcnLGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCByZXBlYXQ6ICcnfSlcclxuICAgbGV0IFt1c2VyU3RhdGVMb2csIHVzZXJTZXRTdGF0ZUxvZ2luXTphbnkgPSB1c2VTdGF0ZTxJVXNlckxvZ2luPih7bG9naW46ICcnLCBwYXNzd29yZDogJyd9KVxyXG4gICBmdW5jdGlvbiBjaGFuZ2VSZWdpc3RyYXRpb24oZXZlbnQ6YW55KXtcclxuICAgICAgdXNlclNldFN0YXRlUmVnaXN0cmF0aW9uKHsgLi4udXNlclN0YXRlUmVnLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICBvYmogPSB2YWxpZGF0aW9uKHVzZXJTdGF0ZVJlZylcclxuICAgICAgbGV0IGxvZ2luOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpXHJcbiAgICAgIGxldCBlbWFpbDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKVxyXG4gICAgICBsZXQgcGFzc3dvcmQ6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhc3N3b3JkJylcclxuICAgICAgaWYob2JqPy5sb2dpbiA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ3RydWUnKVxyXG4gICAgICAgICBsb2dpbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWxzZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqPy5lbWFpbCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ3RydWUnKVxyXG4gICAgICAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdmYWxzZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqPy5wYXNzd29yZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgIHBhc3N3b3JkWzBdLmNsYXNzTGlzdC5hZGQoJ3RydWUnKVxyXG4gICAgICAgICBwYXNzd29yZFsxXS5jbGFzc0xpc3QuYWRkKCd0cnVlJylcclxuICAgICAgICAgcGFzc3dvcmRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZmFsc2UnKVxyXG4gICAgICAgICBwYXNzd29yZFsxXS5jbGFzc0xpc3QucmVtb3ZlKCdmYWxzZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqPy5sb2dpbiA9PT0gZmFsc2Upe1xyXG4gICAgICAgICBsb2dpbi5jbGFzc0xpc3QuYWRkKCdmYWxzZScpXHJcbiAgICAgICAgIGxvZ2luLmNsYXNzTGlzdC5yZW1vdmUoJ3RydWUnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iaj8uZW1haWwgPT09IGZhbHNlKXtcclxuICAgICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZmFsc2UnKVxyXG4gICAgICAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCd0cnVlJylcclxuICAgICAgfVxyXG4gICAgICBpZihvYmo/LnBhc3N3b3JkID09PSBmYWxzZSl7XHJcbiAgICAgICAgIHBhc3N3b3JkWzBdLmNsYXNzTGlzdC5hZGQoJ2ZhbHNlJylcclxuICAgICAgICAgcGFzc3dvcmRbMV0uY2xhc3NMaXN0LmFkZCgnZmFsc2UnKVxyXG4gICAgICAgICBwYXNzd29yZFswXS5jbGFzc0xpc3QucmVtb3ZlKCd0cnVlJylcclxuICAgICAgICAgcGFzc3dvcmRbMV0uY2xhc3NMaXN0LnJlbW92ZSgndHJ1ZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqPy5sb2dpbiAmJiBvYmo/LmVtYWlsICYmIG9iaj8ucGFzc3dvcmQgPT09IHRydWUpe1xyXG4gICAgICAgICBsZXQgYnV0dG9uOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpXHJcbiAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbkRpc2FibGVkJylcclxuICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJylcclxuICAgICAgfVxyXG4gICAgICBpZihvYmo/LmxvZ2luICYmIG9iaj8uZW1haWwgJiYgb2JqPy5wYXNzd29yZCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICBsZXQgYnV0dG9uOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpXHJcbiAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcclxuICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luRGlzYWJsZWQnKVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgICAgXHJcbiAgIGZ1bmN0aW9uIGNoYW5nZUxvZ2luKGV2ZW50OmFueSl7XHJcbiAgICAgIHVzZXJTZXRTdGF0ZUxvZ2luKHsgLi4udXNlclN0YXRlTG9nLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICBvYmogPSB2YWxpZGF0aW9uTG9nKHVzZXJTdGF0ZUxvZylcclxuICAgICAgbGV0IGxvZ2luOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpXHJcbiAgICAgIGxldCBwYXNzd29yZDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc3dvcmQnKVxyXG5cclxuICAgICAgaWYob2JqPy5sb2dpbiA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ3RydWUnKVxyXG4gICAgICAgICBsb2dpbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWxzZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqPy5wYXNzd29yZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgIHBhc3N3b3JkWzBdLmNsYXNzTGlzdC5hZGQoJ3RydWUnKVxyXG4gICAgICAgICBwYXNzd29yZFswXS5jbGFzc0xpc3QucmVtb3ZlKCdmYWxzZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqPy5sb2dpbiA9PT0gZmFsc2Upe1xyXG4gICAgICAgICBsb2dpbi5jbGFzc0xpc3QuYWRkKCdmYWxzZScpXHJcbiAgICAgICAgIGxvZ2luLmNsYXNzTGlzdC5yZW1vdmUoJ3RydWUnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iaj8ucGFzc3dvcmQgPT09IGZhbHNlKXtcclxuICAgICAgICAgcGFzc3dvcmRbMF0uY2xhc3NMaXN0LmFkZCgnZmFsc2UnKVxyXG4gICAgICAgICBwYXNzd29yZFswXS5jbGFzc0xpc3QucmVtb3ZlKCd0cnVlJylcclxuICAgICAgfVxyXG4gICAgICBpZihvYmo/LmxvZ2luICYmIG9iaj8ucGFzc3dvcmQgPT09IHRydWUpe1xyXG4gICAgICAgICBsZXQgYnV0dG9uOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpXHJcbiAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbkRpc2FibGVkJylcclxuICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJylcclxuICAgICAgfVxyXG4gICAgICBpZihvYmo/LmxvZ2luICYmIG9iaj8ucGFzc3dvcmQgPT09IGZhbHNlKXtcclxuICAgICAgICAgbGV0IGJ1dHRvbjphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiKVxyXG4gICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbkRpc2FibGVkJylcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGZ1bmN0aW9uIHZhbHVlRGVsZXRlKCl7XHJcbiAgICAgIGxldCBsb2dpbjphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4nKVxyXG4gICAgICBsb2dpbi52YWx1ZSA9ICcnXHJcbiAgICAgIGxldCBlbWFpbDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKVxyXG4gICAgICBlbWFpbC52YWx1ZSA9ICcnXHJcbiAgICAgIGxldCBwYXNzd29yZDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQnKVxyXG4gICAgICBwYXNzd29yZC52YWx1ZSA9ICcnXHJcbiAgIH1cclxuICAgcmV0dXJuKDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICA8dGl0bGU+e3N0YXRlID8gJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8nIDogJ9CS0YXQvtC0J308L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluQXV0aD5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoKTphbnkgPT4gc2V0U3RhdGUoIXN0YXRlKX0gY2xhc3NOYW1lPXtzdGF0ZSA/IFwiXCIgOiBcImFjdGl2ZVwiIH0+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvdCwINGB0LDQudGC0LU8L3A+XHJcbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpOmFueSA9PiBzZXRTdGF0ZSghc3RhdGUpfSBjbGFzc05hbWU9e3N0YXRlID8gXCJhY3RpdmVcIiA6IFwiXCIgfT7QktGF0L7QtDwvcD5cclxuICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICB7c3RhdGUgPyAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZm9ybSc+XHJcbiAgICAgICAgICAgICAgIDxwPtCg0JXQk9CY0KHQotCg0JDQptCY0K8g0J3QkCDQodCQ0JnQotCVPC9wPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJMb2dpblwiIG5hbWU9XCJsb2dpblwiIG9uS2V5VXA9eyhldmVudCk9PiB7Y2hhbmdlUmVnaXN0cmF0aW9uKGV2ZW50KX0gfSBvbkNoYW5nZT17Y2hhbmdlUmVnaXN0cmF0aW9ufSBjbGFzc05hbWU9XCJsb2dpblwiLz5cclxuICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbktleVVwPXtjaGFuZ2VSZWdpc3RyYXRpb259IG9uQ2hhbmdlPXtjaGFuZ2VSZWdpc3RyYXRpb259IGNsYXNzTmFtZT1cImVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIG9uS2V5VXA9e2NoYW5nZVJlZ2lzdHJhdGlvbn0gb25DaGFuZ2U9e2NoYW5nZVJlZ2lzdHJhdGlvbn0gY2xhc3NOYW1lPVwicGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgbmFtZT1cInJlcGVhdFwiIG9uS2V5VXA9e2NoYW5nZVJlZ2lzdHJhdGlvbn0gb25DaGFuZ2U9e2NoYW5nZVJlZ2lzdHJhdGlvbn0gY2xhc3NOYW1lPVwicGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBhamF4KCdodHRwOi8vMTI3LjAuMC4xOjU1MDAvYXBpL2F1dGgvcmVnaXN0cmF0aW9uJyx1c2VyU3RhdGVSZWcpfSBjbGFzc05hbWU9XCJidXR0b24gZGlzYWJsZWRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgKTooXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZm9ybSc+XHJcbiAgICAgICAgICAgICAgIDxwPtCS0KXQntCUINCd0JAg0KHQkNCZ0KI8L3A+XHJcbiAgICAgICAgICAgICAgIDxwPtC00L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0YwuINGB0L3QvtCy0LA8L3A+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkxvZ2luXCIgbmFtZT1cImxvZ2luXCIgb25LZXlVcD17Y2hhbmdlTG9naW59IG9uQ2hhbmdlPXtjaGFuZ2VMb2dpbn0gY2xhc3NOYW1lPVwibG9naW5cIi8+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25LZXlVcD17Y2hhbmdlTG9naW59IG9uQ2hhbmdlPXtjaGFuZ2VMb2dpbn0gY2xhc3NOYW1lPVwicGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBhamF4KCdodHRwOi8vMTI3LjAuMC4xOjU1MDAvYXBpL2F1dGgvbG9naW4nLHVzZXJTdGF0ZUxvZyl9IGNsYXNzTmFtZT1cImJ1dHRvbiBkaXNhYmxlZFwiPtCS0YXQvtC0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L01haW5BdXRoPlxyXG4gICA8Lz4pXHJcbn0iLCJpbXBvcnQgc3R5bGVkICwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9ZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVcclxuYFxyXG4qe1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBtYXJnaW46IDA7XHJcbn1cclxuYXtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmxpe1xyXG4gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuYm9keXtcclxuICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnNpZGViYXJfb3Blbl9uYXZ7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogMDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdlN0eWxlID0gc3R5bGVkLmhlYWRlclxyXG5gXHJcbnRvcDogMDtcclxubGVmdDogMDtcclxucG9zaXRpb246IHN0aWNreTtcclxuLnNpZGViYXJfb3Blbl9oZWFkZXJ7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogMDtcclxuICAgd2lkdGg6IDMwMHB4O1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgYmFja2dyb3VuZDogIzAwMDAwMGQxO1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlYmFyX2Nsb3NlX2hlYWRlcntcclxuICAgdG9wOiAwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBiYWNrZ3JvdW5kOiAjMDAwMDAwZDE7XHJcbn1cclxubmF2e1xyXG4gICAuc2lkZWJhcl9jbG9zZXtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgIG1hcmdpbjogLjRyZW07XHJcbiAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGZjM2Y3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgZGl2e1xyXG4gICAgICAgICBtYXJnaW46IDJweCBhdXRvO1xyXG4gICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgLnNpZGViYXJfb3BlbntcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgIG1hcmdpbjogLjRyZW07XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICA6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZmMzZjc7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlLWNlbnRlciAwLjZzIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCAwJSAyMCUsIDMwJSA1MCUsIDAlIDgwJSwgMjAlIDEwMCUsIDUwJSA3MCUsIDgwJSAxMDAlLCAxMDAlIDgwJSwgNzAlIDUwJSwgMTAwJSAyMCUsIDgwJSAwJSwgNTAlIDMwJSk7XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbn1cclxuICAgLm9wZW57XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgID5saXtcclxuICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICAgICBjb2xvcjogI2EwZTJmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzRmYzNmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAuY2xvc2V7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCBhbmQgbWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KXtcclxuICAgLnNpZGViYXJfb3Blbl9oZWFkZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZU1haW4gPSBzdHlsZWQubWFpblxyXG5gXHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBNYWluQXV0aCA9IHN0eWxlZC5tYWluXHJcbmBcclxuZGlzcGxheTogZmxleDtcclxubWF4LXdpZHRoOiA2MDBweDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcclxubWFyZ2luOiAycmVtIGF1dG87XHJcbiAgID5zZWN0aW9ueyBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWluLWhlaWdodDogY2FsYyg3NXZoIC0gOHJlbSk7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgPnNlY3Rpb257XHJcbiAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRmYzNmNztcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uIC41cztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRmYzNmNztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgICAgICAgICA6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzksMTU1LDIwNywuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIC50cnVle1xyXG4gICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmFsc2V7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICA+aW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgPmJ1dHRvbnsgXHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMi41cHggMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRmYzNmNztcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpe1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICAuZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5pbkRpc2FibGVke1xyXG4gICAgICAgICAgICA6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzksMTU1LDIwNywuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBwOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBwOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUGFnZTQwNCA9IHN0eWxlZC5tYWluXHJcbmBcclxuZGlzcGxheTogZmxleDtcclxubWF4LXdpZHRoOiAxMDAlO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxubWluLWhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG5mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbmgxe1xyXG4gICBjb2xvcjogcmVkO1xyXG4gICBmb250LXNpemU6IDh2dztcclxufVxyXG5we1xyXG4gICBhe1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGNvbG9yOiAjMDk2NjkwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIDpob3ZlcntcclxuICAgICAgICAgY29sb3I6ICM0ZmMzZjc7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEZvb3RlclN0eWxlID0gc3R5bGVkLmZvb3RlclxyXG5gXHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDRyZW07XHJcbmJhY2tncm91bmQ6ICMwMDAwMDBkMTtcclxuYCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=