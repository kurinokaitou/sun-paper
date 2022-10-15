<template>
  <div id="pie-container" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import echarts from '@/plugins/echarts';
import type { ECOption } from '@/typings/echarts';
import type { EChartsType } from 'echarts/types/dist/core';
import { onMounted, watch } from 'vue';
const props = defineProps<{ options: ECOption }>();
var pieChart: EChartsType;
watch(
  () => props.options,
  (newOptions) => {
    pieChart.setOption(newOptions);
  },
  {
    deep: true,
  }
);

onMounted(() => {
  const chartDom = document.getElementById('pie-container') as HTMLElement;
  pieChart = echarts.init(chartDom);
  pieChart.setOption(props.options);
});
</script>
