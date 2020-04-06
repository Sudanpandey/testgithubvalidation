webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _this = undefined,
    _jsxFileName = "/home/lewin/medicalApp/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  wrapper: {
    backgroundColor: "#E9ECEF",
    height: "100vh",
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputWrapper: {
    borderRadius: "1px solid  #000000",
    marginBottom: "1rem"
  },
  inputStyle: {
    width: "300px",
    border: "1px solid #cccccc",
    backgroundColor: "#ffffff"
  }
});
var initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  cpassword: ""
};

var index = function index() {
  var _styles = styles(),
      wrapper = _styles.wrapper,
      inputWrapper = _styles.inputWrapper,
      inputStyle = _styles.inputStyle;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    style: {
      fontSize: "25px",
      marginBottom: "35px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "React Form Validation", " "), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log(values);
    } //validationSchema={formValidationSchema}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, function (_ref2) {
    var values = _ref2.values,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        errors = _ref2.errors,
        touched = _ref2.touched;
    console.log(errors);
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, " First Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      name: "fname",
      type: "text",
      value: values.fname,
      onChange: handleChange,
      onBlur: handleBlur,
      disableUnderline: true,
      placeholder: "Enter your first name ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }, touched.fname && errors.fname))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, " Last Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      name: "lname",
      type: "text",
      value: values.lname,
      onChange: handleChange,
      onBlur: handleBlur,
      disableUnderline: true,
      placeholder: "Enter your Last  name ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, " Email"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      style: {
        backgroundColor: "#ffffff"
      },
      name: "email",
      type: "email",
      value: values.email,
      onChange: handleChange,
      onBlur: handleBlur,
      disableUnderline: true,
      placeholder: "Enter your Email ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, " Password"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      style: {
        backgroundColor: "#ffffff"
      },
      name: "password",
      type: "password",
      value: values.password,
      onChange: handleChange,
      onBlur: handleBlur,
      disableUnderline: true,
      placeholder: " ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, "Confirm Password "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      style: {
        backgroundColor: "#ffffff"
      },
      name: "cpassword",
      type: "password",
      value: values.cpassword,
      onChange: handleChange,
      onBlur: handleBlur,
      disableUnderline: true,
      placeholder: " ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1407194955",
      __self: _this
    }, "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xld2luL21lZGljYWxBcHAvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKaUMsQUFHOEIsV0FDYiIsImZpbGUiOiIvaG9tZS9sZXdpbi9tZWRpY2FsQXBwL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuXG5jb25zdCBzdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgd3JhcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTlFQ0VGXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgcGFkZGluZ1RvcDogXCIzcmVtXCIsXG5cbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICBpbnB1dFdyYXBwZXI6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiMXB4IHNvbGlkICAjMDAwMDAwXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgfSxcbiAgaW5wdXRTdHlsZToge1xuICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjY2NjXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgfSxcbn0pO1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICBmbmFtZTogXCJcIixcbiAgbG5hbWU6IFwiXCIsXG4gIGVtYWlsOiBcIlwiLFxuICBwYXNzd29yZDogXCJcIixcbiAgY3Bhc3N3b3JkOiBcIlwiLFxufTtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgd3JhcHBlciwgaW5wdXRXcmFwcGVyLCBpbnB1dFN0eWxlIH0gPSBzdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNsYXNzTmFtZT17d3JhcHBlcn0+XG4gICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIzNXB4XCIgfX0+XG4gICAgICAgIFJlYWN0IEZvcm0gVmFsaWRhdGlvbntcIiBcIn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyByZXNldEZvcm0gfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgICAgIH19XG4gICAgICAgIC8vdmFsaWRhdGlvblNjaGVtYT17Zm9ybVZhbGlkYXRpb25TY2hlbWF9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e319PiBGaXJzdCBOYW1lPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWUgXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5mbmFtZSAmJiBlcnJvcnMuZm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PiBMYXN0IE5hbWU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgTGFzdCAgbmFtZSBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+IEVtYWlsPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH19XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEVtYWlsIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT4gUGFzc3dvcmQ8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29uZmlybSBQYXNzd29yZCA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQ3QUI3XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkgJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNDdBQjdcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/lewin/medicalApp/pages/index.jsx */"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        marginTop: "50px",
        backgroundColor: "#347AB7",
        color: "white",
        width: "9 %"
      },
      variant: "contained",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, "Register"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        marginTop: "50px",
        backgroundColor: "#347AB7",
        color: "white",
        width: "8%"
      },
      variant: "contained",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }, "Reset")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.ebe6585ba8f2e267fdfd.hot-update.js.map