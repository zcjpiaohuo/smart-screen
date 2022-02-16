<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 17:06:06
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Column } from "@antv/g2plot";
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
    value: 1006,
  },
  {
    country: '办理',
    year: '办理',
    value: 107,
  },
  {
    country: '办理',
    year: '举报',
    value: 1111,
  },
  {
    country: '办理',
    year: '评价',
    value: 1133,
  },
  {
    country: '办理',
    year: '法制',
    value: 2211,
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
    };

    const initChart = () => {
      plot = new Column(root.value, {
        data: data_column.value,
        xField: 'year',
  yField: 'value',
  seriesField: 'country',
  isPercent: true,
  isStack: true,
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
