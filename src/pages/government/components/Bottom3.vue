<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 11:23:23
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Area } from "@antv/g2plot";
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
          name: "1月",
          value: 38,
        },
        {
          name: "2月",
          value: 52,
        },
        {
          name: "3月",
          value: 71,
        },
        {
          name: "4月",
          value: 85,
        },
        {
          name: "5月",
          value: 138,
        },
        {
          name: "6月",
          value: 108,
        },
        {
          name: "7月",
          value: 58,
        },
        {
          name: "8月",
          value: 78,
        },
         {
          name: "9月",
          value: 120,
        },
         {
          name: "10月",
          value: 68,
        },
         {
          name: "11月",
          value: 58,
        },
         {
          name: "12月",
          value: 38,
        },
      ];
    };

    const initChart = () => {
      plot = new Area(root.value, {
        data: data_column.value,
        legend: {
          position: "top-right",
          itemName: {
            style: {
              fill: "#FFFFFF",
              fontFamily: "TencentSans",
              fontSize: 14,
            },
          },
        },
        xField: "name",
        yField: "value",
        color:'l(90) 0:#D1D1FF 1:#7C82EA',
        // 配置别名
        meta: {
          value: {
            alias: "值",
          },
        },
        xAxis: {
          label: {
            rotate: -45,
            offset: 25,
            style: {
              fill: "white",
              fontFamily: "TencentSans",
              fontSize: 16,
            },
          },
        },
        yAxis: {
          grid: {
            line: {
              style: {
                lineDash: [2, 3],
                strokeOpacity: 0.2,
              },
            },
          },
          label: {
            style: {
              fill: "white",
              fontFamily: "TencentSans",
              fontSize: 16,
            },
          },
        },
        tooltip: {
          fields: ["ratio", "value"],
          domStyles: {
            "g2-tooltip": {
              // 背景框样式
              padding: "10px",
              background: "rgba(47, 6, 170, 0.8)",
              border: "1px solid #00FFFF",
              color: "#FFFFFF",
              fontSize: "16px",
              lineHeight: "2em",
              fontFamily: "TencentSans",
            },
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
