<!--
 * @Author: your name
 * @Date: 2021-08-16 18:35:10
 * @LastEditTime: 2021-08-17 16:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-screen\src\pages\government\components\Bottom1.vue
-->
<!--
  功能 左侧第一个图形
  作者：licy
  邮箱：licy@briup.com
  时间：2021年05月5日 20:21:48
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->

<template>
<div style="height:100%">
  <div id="c1" style="height: 95%"></div>
  </div>
</template>

<script>
import { Bar } from '@antv/g2plot'
export default {
    // ...
    mounted () {
    const data = [
  {
    country: '查看',
    year: '申诉',
    value: 502,
  },
  {
    country: '查看',
    year: '办理',
    value: 635,
  },
  {
    country: '查看',
    year: '举报',
    value: 809,
  },
  {
    country: '查看',
    year: '评价',
    value: 947,
  },
  {
    country: '查看',
    year: '法制',
    value: 1402,
  },
  {
    country: '查看',
    year: '民生',
    value: 3634,
  },
  {
    country: '查看',
    year: '交通',
    value: 5268,
  },
  {
    country: '办理',
    year: '申诉',
    value: 106,
  },
  {
    country: '办理',
    year: '办理',
    value: 107,
  },
  {
    country: '办理',
    year: '举报',
    value: 111,
  },
  {
    country: '办理',
    year: '评价',
    value: 133,
  },
  {
    country: '办理',
    year: '法制',
    value: 221,
  },
  {
    country: '办理',
    year: '民生',
    value: 767,
  },
  {
    country: '办理',
    year: '交通',
    value: 1766,
  },
  {
    country: '申诉',
    year: '申诉',
    value: 163,
  },
  {
    country: '申诉',
    year: '办理',
    value: 203,
  },
  {
    country: '申诉',
    year: '举报',
    value: 276,
  },
  {
    country: '申诉',
    year: '评价',
    value: 408,
  },
  {
    country: '申诉',
    year: '法制',
    value: 547,
  },
  {
    country: '申诉',
    year: '民生',
    value: 729,
  },
  {
    country: '申诉',
    year: '交通',
    value: 628,
  },
];

const barPlot = new Bar('c1', {
  data,
  xField: 'value',
  yField: 'year',
  seriesField: 'country',
  isPercent: true,
  isStack: true,
  /** 自定义颜色 */
  // color: ['#2582a1', '#f88c24', '#c52125', '#87f4d0'],
  label: {
    position: 'middle',
    content: (item) => {
      return item.value.toFixed(2);
    },
    style: {
      fill: '#fff',
    },
  },
});

barPlot.render();
  
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
</style>