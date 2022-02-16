<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 15:46:08
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Gauge } from "@antv/g2plot";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;
    let data_column = ref([]);
    const ticks = [0, 1 / 3, 2 / 3, 1];
 const color = ['#F4664A', '#FAAD14', '#30BF78']; 
   
    const initChart = () => {
      plot = new Gauge(root.value, {
        percent: 0,
  range: {
    ticks: [0, 1],
    color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
  },
  indicator: {
    pointer: {
      style: {
        stroke: '#D0D0D0',
      },
    },
    pin: {
      style: {
        stroke: '#D0D0D0',
      },
    },
  },
  statistic: {
    title: {
      formatter: ({ percent }) => {
        if (percent < ticks[1]) {
          return '差';
        }
        if (percent < ticks[2]) {
          return '中';
        }
        return '优';
      },
      style: ({ percent }) => {
        return {
          fontSize: '36px',
          lineHeight: 1,
          color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
        };
      },
    },
    content: {
      offsetY: 36,
      style: {
        fontSize: '24px',
        color: '#4B535E',
      },
      formatter: () => '系统表现',
    },
  },
      });
      plot.render();
      
    };

 let data = 0.7;
 const interval = setInterval(() => {
  
  if (data >= 1.5) {
    clearInterval(interval);
  }
  data += 0.005;
  plot.changeData(data > 1 ? data - 1 : data);
}, 100);

    onMounted(async () => {
      initChart();
      interval();
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

