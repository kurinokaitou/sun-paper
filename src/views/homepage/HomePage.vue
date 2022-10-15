<template>
  <n-card :bordered="false" class="flex m-auto w-100 rounded-10px shadow-sm bg-light-500">
    <bar-chart class="h-100" :options="barOption" />
    <pie-chart class="h-100" :options="pieOption" />
    <n-button @click="handleClick">改变图标值</n-button>
  </n-card>
</template>

<script setup lang="ts">
import type { ECOption } from '@/typings/echarts';
import { ref } from 'vue';
const handleClick = () => {
  barOption.value.series = [
    {
      data: [10, 30, 220, 160, 230, 30, 170],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ];
};
const barOption = ref<ECOption>({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
});
const pieOption = ref<ECOption>({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
});
</script>

<style scoped></style>
