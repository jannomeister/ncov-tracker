<template>
  <v-container>
    <pie-chart
      v-if="!loading"
      :chart-data="datacollection"
      :options="options"
      :height="height" :position="position" />
  </v-container>
</template>

<script>
import axios from "axios";
import { PieChart } from './BaseChart';

export default {
  name: 'OverallChart',
  components: {
    PieChart,
  },
  data: () => ({
    loading: true,
    datacollection: null,
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    height: 500,
    position: 'relative',
  }),
  async mounted() {
    await this.loadDatasets();
  },
  methods: {
    async loadDatasets() {
      try {
        const { data } = await axios.get('https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/confirmed/FeatureServer/0/query?f=json&where=1%3D1&outFields=*&orderByFields=date asc&resultOffset=0&resultRecordCount=2000&cacheHint=true');
        const timelines = data.features;
        const dataCol = {
          labels: ['RECOVERED', 'DEATHS'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['#66BB6A', '#E53935'],
              data: []
            }
          ]
        };

        const { attributes } = timelines[timelines.length - 1];
        const {recovered, deaths } = attributes;

        dataCol.datasets[0].data[0] = recovered;
        dataCol.datasets[0].data[1] = deaths;

        this.datacollection = dataCol;
        this.loading = false;

      } catch (err) {
        console.log('Data error: ', err);
      }
    }
  }
}
</script>