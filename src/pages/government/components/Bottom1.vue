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
          name: "家具家电",
          value: 38,
        },
        {
          name: "粮油副食",
          value: 52,
        },
        {
          name: "生鲜水果",
          value: 61,
        },
        {
          name: "美容洗护",
          value: 145,
        },
        {
          name: "母婴用品",
          value: 48,
        },
        {
          name: "进口食品",
          value: 38,
        },
        {
          name: "食品饮料",
          value: 38,
        },
        {
          name: "家庭清洁",
          value: 38,
        },
      ];
    };

    const initChart = () => {
      plot = new Column(root.value, {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
</style>
