<template>
  <div>
    <div id="day-chart">
      <v-container>
        <line-chart
          v-if="!loading"
          :chart-data="datacollection"
          :options="options"
          :height="height" position="relative" />
      </v-container>
    </div>
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
          datasets: [
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
          ],
        };

        for (const { attributes } of timelines) {
          const { date, admitted, recovered, deaths } = attributes;
          const label = moment(date).format('MMM D YYYY');
          dataCol.labels.push(label);
          dataCol.datasets[0].data.push(admitted);
          dataCol.datasets[1].data.push(recovered);
          dataCol.datasets[2].data.push(deaths);
        }

        this.datacollection = dataCol;
        this.loading = false;

      } catch (err) {
        console.log('Data error: ', err);
      }
    }
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

<style lang="scss" scoped>
  #day-chart {
    overflow-x: hidden;

    @media screen and (min-width: 0) and (max-width: 860px) {
      overflow-x: scroll;
    }
  }

  canvas{
      width:1000px !important;
    }
</style>