<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 16:04:55
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Liquid, measureTextWidth } from '@antv/g2plot';
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_column = ref([]);
  
    const initChart = () => {
      plot = new Liquid(root.value, {
       percent: 0.26,
  radius: 0.8,
  statistic: {
    title: {
      formatter: () => '办理程度',
      style: ({ percent }) => ({
        fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
      }),
    },
    content: {
      style: ({ percent }) => ({
        fontSize: 60,
        lineHeight: 1,
        fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
      }),
      customHtml: (container, view, { percent }) => {
        const { width, height } = container.getBoundingClientRect();
        const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
        const text = `占比 ${(percent * 100).toFixed(0)}%`;
        const textWidth = measureTextWidth(text, { fontSize: 60 });
        const scale = Math.min(d / textWidth, 1);
        return `<div style="width:${d}px;display:flex;align-items:center;justify-content:center;font-size:${scale}em;line-height:${
          scale <= 1 ? 1 : 'inherit'
        }">${text}</div>`;
      },
    },
  },
  liquidStyle: ({ percent }) => {
    return {
      fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
      stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
    };
  },
  color: () => '#5B8FF9',
      });
      plot.render();
    };

let data = 0.25;
const interval = setInterval(() => {
  data += Math.min(Math.random() * 0.1, 0.1);
  if (data < 0.75) {
    plot.changeData(data);
  } else {
    clearInterval(interval);
  }
}, 500);

    onMounted(async () => {
     
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