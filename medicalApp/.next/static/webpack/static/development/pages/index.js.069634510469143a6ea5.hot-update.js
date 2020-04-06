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





var formValidationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  fname: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Email is required"),
  l: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required")
});
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
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 7
    }
  }, "React Form Validation", " "), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log(values);
    },
    validationSchema: formValidationSchema,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, " First Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
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
        lineNumber: 82,
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
        lineNumber: 91,
        columnNumber: 19
      }
    }, touched.fname && errors.fname))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, " Last Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
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
        lineNumber: 100,
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
        lineNumber: 109,
        columnNumber: 19
      }
    }, touched.lname && errors.lname))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, " Email"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
        lineNumber: 118,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, " Password"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 134,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, "Confirm Password "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
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
        lineNumber: 150,
        columnNumber: 19
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1407194955",
      __self: _this
    }, "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xld2luL21lZGljYWxBcHAvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtLaUMsQUFHOEIsV0FDYiIsImZpbGUiOiIvaG9tZS9sZXdpbi9tZWRpY2FsQXBwL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuXG5cbmNvbnN0IGZvcm1WYWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgZm5hbWU6IFl1cC5zdHJpbmcoKVxuXG4gICAgLm1pbigyLCBcIlRvbyBTaG9ydCFcIilcbiAgICAubWF4KDI1LCBcIlRvbyBMb25nIVwiKVxuICAgIC5yZXF1aXJlZChcIkVtYWlsIGlzIHJlcXVpcmVkXCIpLFxuICBsOiBZdXAuc3RyaW5nKClcbiAgICAubWluKDIsIFwiVG9vIFNob3J0IVwiKVxuICAgIC5tYXgoMjUsIFwiVG9vIExvbmchXCIpXG4gICAgLm1pbig2LCBcIlBhc3N3b3JkIGhhcyB0byBiZSBsb25nZXIgdGhhbiA2IGNoYXJhY3RlcnMhXCIpXG4gICAgLnJlcXVpcmVkKFwiVmFsaWQgcGFzc3dvcmQgIGlzIHJlcXVpcmVkXCIpLFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB3cmFwcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOUVDRUZcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBwYWRkaW5nVG9wOiBcIjNyZW1cIixcblxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGlucHV0V3JhcHBlcjoge1xuICAgIGJvcmRlclJhZGl1czogXCIxcHggc29saWQgICMwMDAwMDBcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICB9LFxuICBpbnB1dFN0eWxlOiB7XG4gICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NjY2NcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB9LFxufSk7XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gIGZuYW1lOiBcIlwiLFxuICBsbmFtZTogXCJcIixcbiAgZW1haWw6IFwiXCIsXG4gIHBhc3N3b3JkOiBcIlwiLFxuICBjcGFzc3dvcmQ6IFwiXCIsXG59O1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyB3cmFwcGVyLCBpbnB1dFdyYXBwZXIsIGlucHV0U3R5bGUgfSA9IHN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXt3cmFwcGVyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luQm90dG9tOiBcIjM1cHhcIiB9fT5cbiAgICAgICAgUmVhY3QgRm9ybSBWYWxpZGF0aW9ue1wiIFwifVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Zm9ybVZhbGlkYXRpb25TY2hlbWF9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e319PiBGaXJzdCBOYW1lPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWUgXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5mbmFtZSAmJiBlcnJvcnMuZm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PiBMYXN0IE5hbWU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgTGFzdCAgbmFtZSBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmxuYW1lICYmIGVycm9ycy5sbmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+IEVtYWlsPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH19XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEVtYWlsIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT4gUGFzc3dvcmQ8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29uZmlybSBQYXNzd29yZCA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQ3QUI3XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkgJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNDdBQjdcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/lewin/medicalApp/pages/index.jsx */"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
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
        lineNumber: 176,
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
        lineNumber: 187,
        columnNumber: 17
      }
    }, "Reset")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.069634510469143a6ea5.hot-update.js.map