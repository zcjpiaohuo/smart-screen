<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
<<<<<<< HEAD
 * @LastEditTime: 2022-02-16 22:20:44
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { BidirectionalBar } from "@antv/g2plot";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_column = ref([]);
    const loadData = async () => {
      data_column.value =  [
  { country: '申诉', '上半季度': 83.4, '下半季度': 52.3 },
  { country: '公务', '上半季度': 34.4, '下半季度': 61.3 },
  { country: '办理', '上半季度': 68.4, '下半季度': 68.3 },
  { country: '民事', '上半季度': 94.4, '下半季度': 103.8 },
  { country: '评价', '上半季度': 44.4, '下半季度': 69.5 },
  { country: '举报', '上半季度': 84.4, '下半季度': 68.8 },
  { country: '交通', '上半季度': 54.4, '下半季度': 84.7 },
  { country: '金融', '上半季度': 104.4, '下半季度': 45.3 },
  { country: '法制', '上半季度': 165.2, '下半季度': 72.9 },
];
    };

    const initChart = () => {
      plot = new BidirectionalBar(root.value, {
        data: data_column.value,
        layout: 'vertical',
  xField: 'country',
  yField: ['上半季度', '下半季度'],
  yAxis: {
    '2016年耕地总面积': {
      nice: true,
    },
    '2016年转基因种植面积': {
      min: 0,
      max: 100,
    },
  },
  tooltip: {
    shared: true,
    showMarkers: false,
  },
      });
      plot.render();
    };

    onMounted(async () => {
      await loadData();
      initChart();
    });

    onUnmounted(() => {
      if (plot != null) {
        plot.destroy();
      }
    });

    return {
      root,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
</style>
