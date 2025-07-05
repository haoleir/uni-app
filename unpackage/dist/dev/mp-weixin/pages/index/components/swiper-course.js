"use strict";
const common_vendor = require("../../../common/vendor.js");
const courseItem = () => "../../../components/common/course-item.js";
const _sfc_main = {
  components: {
    courseItem
  },
  data() {
    return {
      swiperItemList: [
        [
          {
            id: 1,
            mainImage: "/static/images/it01.png",
            totalTime: "00:59:38",
            title: "Vue3 源码解析",
            nickName: "小慕慕",
            isFree: 0,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          },
          {
            id: 2,
            mainImage: "/static/images/it02.png",
            totalTime: "00:59:38",
            title: "NestJs入门及实战",
            nickName: "小慕慕",
            isFree: 1,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          },
          {
            id: 3,
            mainImage: "/static/images/it03.png",
            totalTime: "00:59:38",
            title: "SpringBoot全栈项目实战",
            nickName: "小慕慕",
            isFree: 0,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          },
          {
            id: 4,
            mainImage: "/static/images/it04.png",
            totalTime: "00:59:38",
            title: "uni-app开发企业级小程序",
            nickName: "小慕慕",
            isFree: 0,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          }
        ],
        [
          {
            id: 5,
            mainImage: "/static/images/it05.png",
            totalTime: "00:59:38",
            title: "微信小程序入门与实战",
            nickName: "小慕慕",
            isFree: 1,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          },
          {
            id: 6,
            mainImage: "/static/images/it06.jpg",
            totalTime: "00:59:38",
            title: "JavaScript进阶",
            nickName: "小慕慕",
            isFree: 0,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          },
          {
            id: 7,
            mainImage: "/static/images/it07.png",
            totalTime: "00:59:38",
            title: "CRMEB uniapp 二次开发",
            nickName: "小慕慕",
            isFree: 0,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          },
          {
            id: 8,
            mainImage: "/static/images/it08.jpg",
            totalTime: "00:59:38",
            title: "鸿蒙开发快速入门",
            nickName: "小慕慕",
            isFree: 0,
            // 是否收费 0收费 1 免费
            priceOriginal: 999,
            //原价
            priceDiscount: 599,
            //优惠价
            studyTotal: 399
          }
        ]
      ]
    };
  }
};
if (!Array) {
  const _component_course_item = common_vendor.resolveComponent("course-item");
  _component_course_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperItemList, (n, index, i0) => {
      return {
        a: common_vendor.f(n, (item, i, i1) => {
          return {
            a: i,
            b: "907da94a-0-" + i0 + "-" + i1,
            c: common_vendor.p({
              item
            })
          };
        }),
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/components/swiper-course.js.map
