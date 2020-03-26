<template>
  <v-skeleton-loader
    :loading="loading"
    height="200"
    type="card"
  >
    <v-row no-gutters>
      <template v-for="(report, n) in reports">
        <v-col :key="n">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <h1 :class="['text-center', report.color]">{{ report.total }}</h1>
            <p class="text-center title">{{ report.title }}</p>
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-skeleton-loader>
</template>

<script>
import axios from "axios";

export default {
  name: 'Report',
  inject: ['theme'],
  data: () => ({
    totalcols: 6,
    reports: [],
  }),
  computed: {
    loading() {
      return this.reports.length === 0;
    }
  },
  async mounted() {
    await this.getFirstRowData();
    await this.getSecondRowData();
  },
  methods: {
    async getFirstRowData() {
      try {
        const { data } = await axios.get('https://thevirustracker.com/free-api?countryTotal=PH');
        const { countrydata } = data;
        const {
          total_cases,
          total_deaths,
          total_recovered,
        } = countrydata[0];

        this.reports.push({
          title: 'Infected',
          color: 'purple--text text--lighten-2',
          total: parseInt(total_cases)
        });

        this.reports.push({
          title: 'Deaths',
          color: 'red--text text--darken-1',
          total: parseInt(total_deaths)
        });

        this.reports.push({
          title: 'Recovered',
          color: 'green--text text--lighten-1',
          total: parseInt(total_recovered)
        });

      } catch (err) {
        console.log('Data error: ', err);
      }
    },
    async getSecondRowData() {
      try {
        const totalPUMs = await this.getTotalPUMs();

        this.reports.push({
          title: 'Persons Under Monitoring',
          color: 'orange--text text--lighten-1',
          total: parseInt(totalPUMs)
        });

      } catch (err) {
        console.log('Data error: ', err);
      }
    },
    async getTotalPUMs() {
      const { data } = await axios.get('https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/slide_fig/FeatureServer/0/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"pums","outStatisticFieldName":"value"}]');
      const { features } = data;
      const { attributes } = features[0];
      return attributes.value;
    }
  }
}
</script>

<style scoped>

</style>