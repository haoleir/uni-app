if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$a = {};
  function _sfc_render$9(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-box" }, [
      vue.createElementVNode("input", {
        class: "search-input",
        type: "text",
        placeholder: "搜索你的内容"
      })
    ]);
  }
  const searchInput = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-7c1dea4b"], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/components/common/search-input.vue"]]);
  const _sfc_main$9 = {
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner-box" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ "background-image": `linear-gradient(${$data.bannerBackground || "#009B8C"} 50%, #FFF)` }),
          class: "banner-bg"
        },
        null,
        4
        /* STYLE */
      ),
      vue.createElementVNode("swiper", {
        current: $data.current,
        onChange: _cache[0] || (_cache[0] = (...args) => $options.swiperChange && $options.swiperChange(...args)),
        class: "banner-swiper",
        "indicator-dots": "",
        "indicator-color": "rgba(255,255,255,0.5)",
        "indicator-active-color": "#FFFFFF",
        autoplay: true,
        interval: "4000"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.bannerList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              class: "swiper-item",
              key: index
            }, [
              vue.createElementVNode("view", { class: "image-box" }, [
                vue.createElementVNode("image", {
                  src: item.imageUrl,
                  class: "img"
                }, null, 8, ["src"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 40, ["current"])
    ]);
  }
  const jingBanner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-8b50ac9e"], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/components/common/jing-banner.vue"]]);
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "category-box" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.categoryList.slice(0, 7), (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: index,
              class: "category-item"
            },
            vue.toDisplayString(item.name),
            1
            /* TEXT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createElementVNode("view", { class: "category-item" }, " 全部分类 ")
    ]);
  }
  const categoryBox = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-6ff18ed3"], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/index/components/category-box.vue"]]);
  const _sfc_main$7 = {
    props: {
      item: {
        type: Object,
        default: () => ({
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
        })
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "course-item" }, [
      vue.createElementVNode("view", { class: "item-left" }, [
        vue.createElementVNode("image", {
          src: $props.item.mainImage,
          class: "course-img",
          "lazy-load": ""
        }, null, 8, ["src"]),
        vue.createElementVNode(
          "view",
          { class: "course-time" },
          vue.toDisplayString($props.item.totalTime),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "item-right" }, [
        vue.createElementVNode(
          "view",
          { class: "title" },
          vue.toDisplayString($props.item.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode(
            "view",
            { class: "nickname iconfont icon-laoshi2" },
            vue.toDisplayString($props.item.nickName),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "count" }, [
            $props.item.isFree ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "isFree"
            }, "免费")) : (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "money iconfont icon-moneybag"
              },
              vue.toDisplayString($props.item.priceDiscount || $props.item.priceOriginal),
              1
              /* TEXT */
            )),
            vue.createElementVNode(
              "view",
              { class: "iconfont icon-video" },
              vue.toDisplayString($props.item.studyTotal) + "人在学",
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]);
  }
  const courseItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-60a44725"], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/components/common/course-item.vue"]]);
  const _sfc_main$6 = {
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_course_item = vue.resolveComponent("course-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "list-box" }, [
      vue.createElementVNode("view", { class: "title space-between center" }, [
        vue.createElementVNode("view", { class: "center" }, [
          vue.createElementVNode("text", { class: "name" }, "热门推荐"),
          vue.createElementVNode("text", { class: "word" }, "HOT")
        ]),
        vue.createElementVNode("view", { class: "all" }, [
          vue.createElementVNode("text", null, "全部"),
          vue.createElementVNode("text", { class: "iconfont icon-right" })
        ])
      ]),
      vue.createElementVNode("swiper", {
        class: "list-swiper",
        "indicator-dots": false,
        "next-margin": "30rpx"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.swiperItemList, (n, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              class: "swiper-item",
              key: index
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(n, (item, i) => {
                  return vue.openBlock(), vue.createBlock(_component_course_item, {
                    key: i,
                    item
                  }, null, 8, ["item"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const swiperCourse = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-4b5ac4a0"], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/index/components/swiper-course.vue"]]);
  const _sfc_main$5 = {
    components: {
      searchInput,
      jingBanner,
      categoryBox,
      swiperCourse
    },
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_jing_banner = vue.resolveComponent("jing-banner");
    const _component_category_box = vue.resolveComponent("category-box");
    const _component_swiper_course = vue.resolveComponent("swiper-course");
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-box" }, [
      vue.createCommentVNode(" 搜索组件 "),
      vue.createCommentVNode(" 轮播图组件 "),
      vue.createVNode(_component_jing_banner),
      vue.createCommentVNode(" 分类组件 "),
      vue.createVNode(_component_category_box),
      vue.createCommentVNode(" 热门推荐 "),
      vue.createVNode(_component_swiper_course)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/index/index.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "分类");
  }
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/category/category.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 阅读 ");
  }
  const PagesArticleArticle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/article/article.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 问答 ");
  }
  const PagesQuestionQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/question/question.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 我的 ");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/renhaolei/Documents/projects/jing-education-app/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/article/article", PagesArticleArticle);
  __definePage("pages/question/question", PagesQuestionQuestion);
  __definePage("pages/my/my", PagesMyMy);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/renhaolei/Documents/projects/jing-education-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
