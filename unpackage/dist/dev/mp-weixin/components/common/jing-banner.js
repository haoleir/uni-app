"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    bannerList: {
      type: Array,
      default: () => [{
        id: 1,
        imageUrl: "/static/images/it01.png",
        background: "#009B8C",
        adverUrl: "/pages/course/course-details"
      }, {
        id: 2,
        imageUrl: "/static/images/it02.png",
        background: "#6E3DE6",
        adverUrl: "/pages/course/course-details"
      }, {
        id: 3,
        imageUrl: "/static/images/it03.png",
        background: "#0D81ED",
        adverUrl: "/pages/course/course-details"
      }]
    }
  },
  data() {
    return {
      current: 0,
      bannerBackground: ""
    };
  },
  methods: {
    swiperChange(e) {
      this.current = e.detail.current;
      this.bannerBackground = this.bannerList[this.current].background;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: `linear-gradient(${$data.bannerBackground || "#009B8C"} 50%, #FFF)`,
    b: common_vendor.f($props.bannerList, (item, index, i0) => {
      return {
        a: item.imageUrl,
        b: index
      };
    }),
    c: $data.current,
    d: common_vendor.o((...args) => $options.swiperChange && $options.swiperChange(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/jing-banner.js.map
