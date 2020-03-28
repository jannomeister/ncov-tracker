<template>
  <v-container>
    <line-chart
      v-if="!loading"
      :chart-data="datacollection"
      :options="options"
      :height="height" position="relative" />
  </v-container>
</template>

<script>
import axios from "axios";
import { LineChart } from './BaseChart';

export default {
  name: 'AgeChart',
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
  async mounted() {
    await this.loadDatasets();
  },
  methods: {
    async loadDatasets() {
      try {
        const { data } = await axios.get('https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/age_group/FeatureServer/0/query?f=json&where=1=1&groupByFieldsForStatistics=age_categ,sex&outStatistics=[{"statisticType":"count","onStatisticField":"FID","outStatisticFieldName":"value"}]&cacheHint=true');
        const dataCol = {
          labels: [],
          datasets: [
            {
                label: 'MALE',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                backgroundColor: '#1962E6',
                borderColor: "#1962E6",
                borderWidth: 2,
                pointRadius: 2,
                fill: false,
                data: [],
              },
              {
                label: 'FEMALE',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                backgroundColor: '#E41BAA',
                borderColor: "#E41BAA",
                borderWidth: 2,
                pointRadius: 2,
                fill: false,
                data: [],
              },
          ],
        };

        for (const { attributes } of data.features) {
          const { age_categ: ageCategory, value, sex } = attributes;

          if (!dataCol.labels.includes(ageCategory)) {
            dataCol.labels.push(ageCategory);
          }

          if (sex === 'Male') {
            dataCol.datasets[0].data.push(value);
          } else {
            dataCol.datasets[1].data.push(value);
          }
        }

        this.datacollection = dataCol;
        this.loading = false;
      } catch (err) {
        console.log('Date error: ', err);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>