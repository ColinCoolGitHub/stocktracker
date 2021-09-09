<template>
      <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    
</template>

<script>
export default {
data(){
    return{
          series: [{
            data: [10,100, -14, 14, 40, 94, -52, 14, 35, 14, 47]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
              ],
                  labels:{
                formatter: (value) => { return value + "%"},
                }
            },
            
          },
    }
}
}
</script>

<style>

</style>