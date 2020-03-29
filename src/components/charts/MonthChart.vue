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
      const totalAdmittedPerMonth = this.totalPerMonth(labels, timelines, 'admitted');
      const totalRecoveredPerMonth = this.totalPerMonth(labels, timelines, 'recovered');
      const totalDeathsPerMonth = this.totalPerMonth(labels, timelines, 'deaths');

      for (const { attributes } of timelines) {
        const { date } = attributes;
        const month = this.getMonth(moment(date).month());
        const labelIndex = labels.indexOf(month);

        if (labelIndex > -1) {
          datasets[0].data[labelIndex] = totalAdmittedPerMonth[month];
          datasets[1].data[labelIndex] = totalRecoveredPerMonth[month];
          datasets[2].data[labelIndex] = totalDeathsPerMonth[month];
        }
      }

      return datasets;
    },
    totalPerMonth(labels, timelines, type) {
      const months = this.valuesPerMonth(labels, timelines, type);
      const monthValues = [];

      for (const key of Object.keys(months)) {
        monthValues.push(...months[key]);
      } 

      const newArr = [];
      let negative = 0;

      for (let i = 0; i < monthValues.length; i++) {
        const values = monthValues[i - 1];
        const yesterday = (values) ? values : 0;
        const recovered = monthValues[i];
        
        let today = (yesterday === 0) ? recovered + negative : recovered - yesterday;
        
        if (today < 0) {
          negative = today;
          today = 0;
        }
        
        newArr.push(today);
      }

      let startIndex = 0;
      let endIndex = 0;

      for (const key of Object.keys(months)) {
        
        endIndex = startIndex + months[key].length;

        const data = newArr.slice(startIndex, endIndex);
        
        startIndex = endIndex;
        
        months[key] = data.reduce((total, num) => total + num);
      }

      return months;
    },
    valuesPerMonth(labels, timelines, type) {
      const months = {};

      for (const { attributes } of timelines) {
        const report = attributes[type]; // deaths, admited
        const month = this.getMonth(moment(attributes.date).month());
        const labelIndex = labels.indexOf(month);

        if (labelIndex > -1) {
          if (!Array.isArray(months[month])) {
            months[month] = [];
          }

          months[month].push(report)
        }
      }

      return months;
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