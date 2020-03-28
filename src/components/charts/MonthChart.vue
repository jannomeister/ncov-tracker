<template>
  <v-container>
    <bar-chart
      v-if="!loading"
      :chart-data="datacollection"
      :options="options"
      :height="height" :position="position" />
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { BarChart } from './BaseChart';

export default {
  name: 'MonthChart',
  components: {
    BarChart,
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
          labels: [],
          datasets: [
            {
              label: 'ADMITTED',
              borderJoinStyle: 'round',
              borderCapStyle: 'round',
              backgroundColor: '#ba68c8',
              data: [],
            },
            {
              label: 'RECOVERED',
              borderJoinStyle: 'round',
              borderCapStyle: 'round',
              backgroundColor: '#66BB6A',
              data: [],
            },
            {
              label: 'DEATHS',
              borderJoinStyle: 'round',
              borderCapStyle: 'round',
              backgroundColor: '#E53935',
              data: [],
            },
          ],
        };
        
        dataCol.labels = this.generateLabels(timelines);
        dataCol.datasets = this.generateDatasets(dataCol.labels, dataCol.datasets, timelines);

        this.datacollection = dataCol;
        this.loading = false;

      } catch (err) {
        console.log('Data error: ', err);
      }
    },
    generateLabels(timelines) {
      const labels = [];

      for (const { attributes } of timelines) {
        const { date } = attributes;
        const month = this.getMonth(moment(date).month());
        const labelIndex = labels.indexOf(month);

        if (labelIndex === -1) {
          labels.push(month);
        }
      }

      return labels;
    },
    generateDatasets(labels, datasets, timelines) {
      for (const { attributes } of timelines) {
        const { date, admitted, recovered, deaths } = attributes;
        const month = this.getMonth(moment(date).month());
        const labelIndex = labels.indexOf(month);

        if (labelIndex > -1) {
          const admittedData = datasets[0].data[labelIndex] | 0;
          const recoveredData = datasets[1].data[labelIndex] | 0;
          const deathsData = datasets[2].data[labelIndex] | 0;
          datasets[0].data[labelIndex] = admittedData + admitted;
          datasets[1].data[labelIndex] = recoveredData + recovered;
          datasets[2].data[labelIndex] = deathsData + deaths;
        }
      }

      return datasets;
    },
    getMonth(index) {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];

      return months[index];
    }
  }
}
</script>