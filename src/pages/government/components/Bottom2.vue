<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 15:16:52
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { RadialBar } from "@antv/g2plot";
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
      data_column.value = [
  { name: '评价', star: 600 },
  { name: '民惠', star: 1300 },
  { name: 'AVA', star: 1405 },
  { name: '办理', star: 1978 },
  { name: 'L7', star: 2029 },
  { name: 'G6', star: 7100 },
  { name: '申诉', star: 7346 },
  { name: 'G2', star: 10178 },
];
    };

    const initChart = () => {
      plot = new  RadialBar(root.value, {
        data: data_column.value,
        xField: 'name',
  yField: 'star',
  maxAngle: 270, //最大旋转角度,
  radius: 1.0,
  innerRadius: 0.2,
  tooltip: {
    formatter: (datum) => {
      return { name: 'star数', value: datum.star };
    },
  },
  colorField: 'star',
  color: ({ star }) => {
    if (star > 10000) {
      return '#36c361';
    } else if (star > 1000) {
      return '#2194ff';
    }
    return '#ff4d4f';
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