<template>
  <div>
      Ici probablement pour suivre ton capital 
      <line-chart></line-chart>
      Ici pour regarder la diversification de ton porfolio
      <donut-chart></donut-chart>
      Ici pour les pourcentages de gain par stock
      <bar-chart></bar-chart>
  </div>
</template>

<script>
import BarChart from '../components/charts/BarChart.vue'
import DonutChart from '../components/charts/DonutChart.vue'
import LineChart from '../components/charts/LineChart.vue'
export default {
  components: { LineChart, DonutChart, BarChart },

}
</script>

<style>

</style>