<template>
  <div>
    <v-container>
      <line-chart
        v-if="!loading"
        :chart-data="datacollection"
        :options="options"
        :height="height" position="relative" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { LineChart } from './BaseChart';

export default {
  name: 'DayChart',
  components: {
    LineChart,
  },
  data: () => ({
    loading: true,
    datacollection: null,
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    height: 500,
  }),
  computed: {
    lineChartStyles() {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  },
  async mounted () {
    await this.loadDatasets();
  },
  methods: {
    async loadDatasets() {
      try {
        const { data } = await axios.get('https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/confirmed/FeatureServer/0/query?f=json&where=1%3D1&outFields=*&orderByFields=date asc&resultOffset=0&resultRecordCount=2000&cacheHint=true');
        const timelines = data.features;
        const dataCol = {
          labels: [],
          datasets: this.initialDatasets(),
        };

        let adNegative = 0;
        let recNegative = 0;
        let deathNegative = 0;

        for (let i = 0; i < timelines.length; i++) {
          const { date, admitted, recovered, deaths } = timelines[i].attributes;
          const label = moment(date).format('MMM D YYYY');
          dataCol.labels.push(label);

          const timeline = timelines[i - 1];
          const admittedYesterday = (timeline) ? timeline.attributes.admitted : 0;
          const recoveredYesterday = (timeline) ? timeline.attributes.recovered : 0;
          const deathsYesterday = (timeline) ? timeline.attributes.deaths : 0;

          let admittedToday = this.calcToday(adNegative, admitted, admittedYesterday);
          let recoveredToday = this.calcToday(recNegative, recovered, recoveredYesterday);
          let deathsToday = this.calcToday(deathNegative, deaths, deathsYesterday);

          if (admittedToday < 0) {
            adNegative = admittedToday;
            admittedToday = 0;
          }

          if (recoveredToday < 0) {
            recNegative = recoveredToday;
            recoveredToday = 0;
          }

          if (deathsToday < 0) {
            deathNegative = deathsToday;
            deathsToday = 0;
          }

          dataCol.datasets[0].data.push(admittedToday);
          dataCol.datasets[1].data.push(recoveredToday);
          dataCol.datasets[2].data.push(deathsToday);
        }

        this.datacollection = dataCol;
        this.loading = false;

      } catch (err) {
        console.log('Data error: ', err);
      }
    },
    calcToday(negative, recovered, yesterday) {
      return (yesterday === 0) ? recovered + negative : recovered - yesterday;
    },
    initialDatasets() {
      return [
        {
          label: 'ADMITTED',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          backgroundColor: '#ba68c8',
          borderColor: "#ba68c8",
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
          data: [],
        },
        {
          label: 'RECOVERED',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          backgroundColor: '#66BB6A',
          borderColor: "#66BB6A",
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
          data: [],
        },
        {
          label: 'DEATHS',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          backgroundColor: '#E53935',
          borderColor: "#E53935",
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
          data: [],
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  //
</style>