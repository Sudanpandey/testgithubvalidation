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
  fname: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Too Short!").max(25, "Too Long!").required(""),
  lname: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required")
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
      lineNumber: 61,
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
      lineNumber: 62,
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
      lineNumber: 66,
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
        lineNumber: 83,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, " First Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
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
        lineNumber: 87,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 18
      }
    }, touched.fname && errors.fname)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, " Last Name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
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
        lineNumber: 105,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 16
      }
    }, touched.lname && errors.lname)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, " Email"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 123,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, touched.lname && errors.lname)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, " Password"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
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
        lineNumber: 143,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, touched.lname && errors.lname)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, "Confirm Password "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: inputStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
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
        lineNumber: 162,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, touched.lname && errors.lname)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1407194955",
      __self: _this
    }, "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xld2luL21lZGljYWxBcHAvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlMaUMsQUFHOEIsV0FDYiIsImZpbGUiOiIvaG9tZS9sZXdpbi9tZWRpY2FsQXBwL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQm94LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuXG5cbmNvbnN0IGZvcm1WYWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgZm5hbWU6IFl1cC5zdHJpbmcoKVxuXG4gICAgLm1pbigyLCBcIlRvbyBTaG9ydCFcIilcbiAgICAubWF4KDI1LCBcIlRvbyBMb25nIVwiKVxuICAgIC5yZXF1aXJlZChcIlwiKSxcbiAgbG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgXCJUb28gU2hvcnQhXCIpXG4gICAgLm1heCgyNSwgXCJUb28gTG9uZyFcIilcbiAgICAubWluKDYsIFwiUGFzc3dvcmQgaGFzIHRvIGJlIGxvbmdlciB0aGFuIDYgY2hhcmFjdGVycyFcIilcbiAgICAucmVxdWlyZWQoXCJWYWxpZCBwYXNzd29yZCAgaXMgcmVxdWlyZWRcIiksXG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgXCJUb28gU2hvcnQhXCIpXG4gICAgLm1heCgyNSwgXCJUb28gTG9uZyFcIilcbiAgICAubWluKDYsIFwiUGFzc3dvcmQgaGFzIHRvIGJlIGxvbmdlciB0aGFuIDYgY2hhcmFjdGVycyFcIilcbiAgICAucmVxdWlyZWQoXCJWYWxpZCBwYXNzd29yZCAgaXMgcmVxdWlyZWRcIiksXG59KTtcblxuY29uc3Qgc3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHdyYXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0U5RUNFRlwiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiM3JlbVwiLFxuXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgaW5wdXRXcmFwcGVyOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjFweCBzb2xpZCAgIzAwMDAwMFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gIH0sXG4gIGlucHV0U3R5bGU6IHtcbiAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY2NjY1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG4gIH0sXG59KTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgZm5hbWU6IFwiXCIsXG4gIGxuYW1lOiBcIlwiLFxuICBlbWFpbDogXCJcIixcbiAgcGFzc3dvcmQ6IFwiXCIsXG4gIGNwYXNzd29yZDogXCJcIixcbn07XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB7IHdyYXBwZXIsIGlucHV0V3JhcHBlciwgaW5wdXRTdHlsZSB9ID0gc3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9e3dyYXBwZXJ9PlxuICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5Cb3R0b206IFwiMzVweFwiIH19PlxuICAgICAgICBSZWFjdCBGb3JtIFZhbGlkYXRpb257XCIgXCJ9XG4gICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgcmVzZXRGb3JtIH0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgICAgICB9fVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtmb3JtVmFsaWRhdGlvblNjaGVtYX1cbiAgICAgID5cbiAgICAgICAgeyh7XG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7fX0+IEZpcnN0IE5hbWU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5mbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZSBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmZuYW1lICYmIGVycm9ycy5mbmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+IExhc3QgTmFtZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBMYXN0ICBuYW1lIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5sbmFtZSAmJiBlcnJvcnMubG5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PiBFbWFpbDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIiB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbCBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmxuYW1lICYmIGVycm9ycy5sbmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2lucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+IFBhc3N3b3JkPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtpbnB1dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH19XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQubG5hbWUgJiYgZXJyb3JzLmxuYW1lfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Db25maXJtIFBhc3N3b3JkIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17aW5wdXRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIiB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jcGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQubG5hbWUgJiYgZXJyb3JzLmxuYW1lfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQ3QUI3XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkgJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNDdBQjdcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/lewin/medicalApp/pages/index.jsx */"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
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
        lineNumber: 191,
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
        lineNumber: 202,
        columnNumber: 17
      }
    }, "Reset")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.5f22a2f7ad1017ffabb9.hot-update.js.map