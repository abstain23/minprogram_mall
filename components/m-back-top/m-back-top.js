// components/m-back-top/m-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  externalClasses:['detail-back-top'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backTop(){
      console.log('backtop')
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
})
