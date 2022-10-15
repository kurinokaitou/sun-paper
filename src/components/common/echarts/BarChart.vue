<template>
  <div id="bar-container" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import echarts from '@/plugins/echarts';
import type { ECOption } from '@/typings/echarts';
import { onMounted, watch } from 'vue';
import type { EChartsType } from 'echarts/core';
const props = defineProps<{ options: ECOption }>();
var barChart: EChartsType;
watch(
  () => props.options,
  (newOptions) => {
    barChart.setOption(newOptions);
  },
  {
    deep: true,
  }
);

onMounted(() => {
  const chartDom = document.getElementById('bar-container') as HTMLElement;
  barChart = echarts.init(chartDom);
  barChart.setOption(props.options);
});
</script>
