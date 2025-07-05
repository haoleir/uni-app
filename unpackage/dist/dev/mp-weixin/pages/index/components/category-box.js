"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    categoryList: {
      type: Array,
      default: () => [{
        id: 1,
        name: "java"
      }, {
        id: 2,
        name: "运维"
      }, {
        id: 3,
        name: "Python"
      }, {
        id: 4,
        name: "UI设计"
      }, {
        id: 5,
        name: "大数据"
      }, {
        id: 6,
        name: "前端"
      }, {
        id: 7,
        name: "php"
      }, {
        id: 8,
        name: "vue"
      }]
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.categoryList.slice(0, 7), (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/components/category-box.js.map
