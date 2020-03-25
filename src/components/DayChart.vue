<template>
  <v-container>
    <h1 class="title mt-4">Day Chart</h1>

    <line-chart
      v-if="!loading"
      :chart-data="datacollection"
      :options="options"
      :height="height" position="relative" />
  </v-container>
</template>

<script>
import axios from "axios";
import LineChart from './charts/LineChart';

export default {
  name: 'DayChart',
  components: {
    LineChart,
  },
  data: () => ({
    loading: false,
    datacollection: null,
    options: {
      responsive: true,
    },
    height: 180,
  }),
  mounted () {
    this.loadDatasets()
  },
  methods: {
    loadDatasets () {
      axios
        .get('https://thevirustracker.com/free-api?countryTimeline=PH')
        .then((res) => {
          const { timelineitems } = res.data;
          const timelineData = timelineitems[0];
          const dataCol = {
            labels: [],
            datasets: [
              {
                label: 'INFECTED',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                backgroundColor: '#ba68c8',
                data: [],
              },
              {
                label: 'DEATHS',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                backgroundColor: '#E53935',
                data: [],
              },
              {
                label: 'RECOVERED',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                backgroundColor: '#66BB6A',
                data: [],
              },
            ],
          };

          for (const tData of Object.keys(timelineData)) {
            if (tData !== 'stat') {
              const {
                new_daily_cases: cases,
                new_daily_deaths: deaths,
                total_recoveries: recovered,
              } = timelineData[tData];
              dataCol.labels.push(tData);
              dataCol.datasets[0].data.push(cases);
              dataCol.datasets[1].data.push((deaths < 0) ? 0 : deaths);
              dataCol.datasets[2].data.push(recovered);
            }
          }

          this.datacollection = dataCol;

          this.loading = false;
        })
        .catch((err) => console.log('data error: ', err))
    },
  },
  computed: {
    lineChartStyles() {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>

<style scoped>

</style>