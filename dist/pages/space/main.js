require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(42);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_2f03000a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_2f03000a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/space/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f03000a", Component.options)
  } else {
    hotAPI.reload("data-v-2f03000a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      firstIcon: __webpack_require__(3),
      twoIcon: __webpack_require__(4),
      xbSrc: __webpack_require__(2),
      threeIcon: __webpack_require__(5),
      loveIcon: __webpack_require__(57),
      ruleIcon: __webpack_require__(58),
      searchSrc: __webpack_require__(45)
    };
  },

  methods: {},
  created: function created() {}
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/top.png";

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "topBox"
  }, [_c('div', {
    staticClass: "designation"
  }, [_c('img', {
    attrs: {
      "src": _vm.searchSrc,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("NO.1 天下无双")])]), _vm._v(" "), _c('div', {
    staticClass: "starBanner"
  }, [_c('img', {
    attrs: {
      "src": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottomDiv"
  }, [_c('div', {
    staticClass: "starBox"
  }, [_c('div', {
    staticClass: "headBox"
  }, [_c('img', {
    staticClass: "starImg",
    attrs: {
      "src": "http://image-1257827636.cos.ap-shanghai.myqcloud.com/no20181022152854.gif",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "starIcons",
    attrs: {
      "src": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "firstIcon",
    attrs: {
      "src": _vm.firstIcon,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "starName"
  }, [_vm._v("赵丽颖")]), _vm._v(" "), _c('div', {
    staticClass: "getXb"
  }, [_c('img', {
    staticClass: "xbIcon",
    attrs: {
      "src": _vm.xbSrc,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("2312")])]), _vm._v(" "), _c('div', {
    staticClass: "noNum"
  }, [_vm._v("NO.1")])]), _vm._v(" "), _c('div', {
    staticClass: "fansBox"
  }, [_vm._m(0), _vm._v(" "), _c('img', {
    staticClass: "fansImg",
    attrs: {
      "src": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "intimacy"
  }, [_vm._l(([0, 1, 2, 3, 4]), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('img', {
      staticClass: "loveicon",
      attrs: {
        "src": _vm.loveIcon,
        "alt": ""
      }
    })])
  }), _vm._v(" "), _c('span', [_vm._v("亲密度：")])], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "switchBox"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "rule"
  }, [_c('span', [_vm._v("打榜规则")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.ruleIcon,
      "alt": ""
    }
  })])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bestFans"
  }, [_c('span', [_vm._v("最佳星粉:")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "switch"
  }, [_c('span', [_vm._v("打榜提醒")]), _vm._v(" "), _c('switch', {
    attrs: {
      "checked": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f03000a", esExports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwQTc2MDZGRDM2NzExRThCNTc4QzEyOUE3M0NCQTRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwQTc2MDcwRDM2NzExRThCNTc4QzEyOUE3M0NCQTRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBBNzYwNkREMzY3MTFFOEI1NzhDMTI5QTczQ0JBNEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjBBNzYwNkVEMzY3MTFFOEI1NzhDMTI5QTczQ0JBNEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DDbznAAADaklEQVR42pSUy2sTURTGz8ydMUmbR22MrVr7EMGFWqwKriyCYEsLuvCxUilKl7oUV924caFWd136+gNEcKWLrgrio+BSpKUUsaZpmjiTzEzmcf3ONBOntSAeOJnkzjm/+51z7o2ycvYsaQMDJPbv3yX27LmrCHGRFKWbpFykIHjlF4sPveXlNW9hgdi0/n7Sens7RFfXLRLiPJa6EPtDet5rf2XlScfUlMlxipSS1u/cOajmcu+CcrnPW1oiaZqkZLMhRM3nV6VhjPtrax84QeTzxxH72i+X9/nLyyRrNVLSadJ6ejjnW1Ctjuy8f39BKU1O6uR5H7HroLu4SLLRoJZpGul9fQTQqti7d4iFQNVnJBdCAa5LyMOqQoquk37gAHYW8/h9SkOpV5VEYtAvlQjlUGp0lNrGxkg/fJi4TS4A+sBAQXWcRyyYoSwAYjagTTAL4lhRKAxJx7muIfCymskQ+kmd09OkJJNUe/6cGl++hGsMCIpFch3nUti6SmUDyu9iYFJVkrZNsl6nwDAuaYHrHlMch9ITE2Fvy7dvbyRyMDsSfcMgxTBU7o6MYHHfeBE61BKYQ6ofBN08gNTICBkzM0S+/ycwemJNQiF7S2k8JmbMArNL9Xy/5EGh6O4mHsgmiyARMA7mZ2RcWdOYBWZV9YLgswtFPKhW+bHAv6CRR4bexvMcsMB7rzZ8f8bCLi5KiIbQ8vgG8X5GKqOY5rMBju15EswHKobxynLdlxXL4p02Q6OkrRbfvBnrAFrBiQDr0ZH5+bdaWyLBwJuGbTfwvJFLpSiFw65wQqQy+h4pjW3ITanhmFUty4PSe+3J5L3wbjEYxtftpmFZs9jxcS6Z7MziPOu4eS141NctpQNIv2x7ARHXTn/9Otcqij8Ynscl6cxkXiDhUKlWe/rTNKXJZzIOazqv8buiaXrr9fpDTdOOxqFhyo/h4dh8JNVxNavolWlZZ3QhnqE1vaxeNAfpI8bg0m37O1p3ZStwk+I/g1aoHep353JUyGZn0ecTKHPuF8oN+AbC8Zv9E4JP7spmt4WGPd52EeV2tLeTJkQJ6kdqjcYbLA9zS/D9gxDiXLatrZJBJf8FjtSncULwNDHUCziO/H+8I5VIjKeTyQo8jPlvcAiHc2uCIKjAJzF5HYNe/ReU7bcAAwD8VhQvtppvMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBQjA1QUVDRDQwRjExRTg4NDYzODgwM0Q3MkM3NTJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBQjA1QUVERDQwRjExRTg4NDYzODgwM0Q3MkM3NTJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REFCMDVBRUFENDBGMTFFODg0NjM4ODAzRDcyQzc1MkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REFCMDVBRUJENDBGMTFFODg0NjM4ODAzRDcyQzc1MkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz66JGayAAACbElEQVR42mL8//8/AwHACMS2QOwNxNZArALEglC590B8B4iPAfEWID4MxPgNBFmIAzMBcRIQ3/5PPLgN1cOEy1xclikC8an/5INTUDOIstABiF//pxyAzLAjZKEbEP/8Tz0AMssdl4XqQPzpP/XBZ6jZYHsYoamUGYiPA7EpoSR749JPhqvnfzK8e/OXgV+QiUFdl51B35SDkLbTQGwJxH9hFiYB8VxCurat+cxwaOc3DHFdYw6G6Ax+QtpTQHaALATls1vQ/IXXZwsmf4BboKrNxvD21V+Ggzu+gsW8w3gZbF258BkByq9qLEDCjpBlILBu8ScwrajKhuIbdg5Ghl0bvjDs3fyFkIUgO+yYgIQXAxEAViC5+HGjiCurs4HpH9//E2OMF8iHVsSozKsVZvj29R+DuBQLiviOdV/AtLQcKzHGWIJ0qxKjkpefCYyRwbwJ7xnu3/4FZgfF8RJjDDgOBRnIALN73zPcvQGxLDSRj0FanigfCjKRY9nF0z/glgXG8DEYW3ESrZcJWsWQZuGpH2BaTomVwdyekxSt70EW3ibVQmFRZjDWMeIgVestUPnW9Z9+oBPkw62kOvP1iz8Mpw59Z3h8/zepWrcRXbTBwMtnfxj669/C+RnlQgwKKkSlUFDRps4EbYN0EB0JV3+h8K+e+0GsVpAd/2DZYgEQnyFGl5Y+OwMrGyOcb2BBVMI5C7UDpQLWgFaWtKiANXA1MTxp0MTwJNSI8qSSTz+jW4avmQgKgjMUWHYGORiJsRC5IXyHBIvuEGoIMxLR1AelZBsg9oXWncpoTf270Kb+ZiA+Akr6+AwDCDAAvP70uDddmh0AAAAASUVORK5CYII="

/***/ })

},[41]);
//# sourceMappingURL=main.js.map