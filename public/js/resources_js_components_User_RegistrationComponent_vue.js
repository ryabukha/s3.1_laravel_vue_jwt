"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_RegistrationComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/RegistrationComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/RegistrationComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegistrationComponent",
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      error: null
    };
  },
  mounted: function mounted() {},
  methods: {
    store: function store() {
      var _this = this;

      axios.post('/api/users', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (res) {
        localStorage.setItem('access_token', res.data.access_token);
        console.log(res);

        _this.$router.push({
          name: 'user.personal'
        });
      })["catch"](function (error) {
        _this.error = error.response.data.error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/RegistrationComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/User/RegistrationComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegistrationComponent_vue_vue_type_template_id_ae12e0ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true& */ "./resources/js/components/User/RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true&");
/* harmony import */ var _RegistrationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User/RegistrationComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrationComponent_vue_vue_type_template_id_ae12e0ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegistrationComponent_vue_vue_type_template_id_ae12e0ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ae12e0ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/RegistrationComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/RegistrationComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/User/RegistrationComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistrationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/RegistrationComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/User/RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationComponent_vue_vue_type_template_id_ae12e0ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationComponent_vue_vue_type_template_id_ae12e0ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationComponent_vue_vue_type_template_id_ae12e0ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/RegistrationComponent.vue?vue&type=template&id=ae12e0ea&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.email,
          expression: "email",
        },
      ],
      staticClass: "mb-3 mt-3 form-control",
      attrs: { type: "email", placeholder: "email" },
      domProps: { value: _vm.email },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.email = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.name,
          expression: "name",
        },
      ],
      staticClass: "mb-3 form-control",
      attrs: { type: "text", placeholder: "name" },
      domProps: { value: _vm.name },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.password,
          expression: "password",
        },
      ],
      staticClass: "mb-3 form-control",
      attrs: { type: "password", placeholder: "password" },
      domProps: { value: _vm.password },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.password = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.password_confirmation,
          expression: "password_confirmation",
        },
      ],
      staticClass: "mb-3 form-control",
      attrs: { type: "password", placeholder: "confirm password" },
      domProps: { value: _vm.password_confirmation },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.password_confirmation = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      staticClass: "btn btn-primary",
      attrs: { type: "submit" },
      on: {
        click: function ($event) {
          $event.preventDefault()
          return _vm.store.apply(null, arguments)
        },
      },
    }),
    _vm._v(" "),
    _vm.error
      ? _c("div", { staticClass: "text-danger" }, [
          _vm._v("\n        " + _vm._s(_vm.error) + "\n    "),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);