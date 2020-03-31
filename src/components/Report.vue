<template>
  <v-container>
    <v-skeleton-loader
      :loading="loading"
      height="200"
      type="card"
    >
      <v-row no-gutters>
        <template v-for="(report, n) in reports">
          <v-col
            :key="n"
            cols="12"
            xl="4"
            lg="4"
            md="4"
            sm="4"
            xs="12"
          >
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
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'Report',
  inject: ['theme'],
  data: () => ({
    loading: true,
    totalcols: 6,
    polling: null,
    reports: [
      {
        title: 'Confirmed',
        color: 'teal--text lighten-2',
        total: 0
      },
      {
        title: 'Deaths',
        color: 'red--text darken-1',
        total: 0
      },
      {
        title: 'Recovered',
        color: 'green--text lighten-1',
        total: 0
      },
      {
        title: 'PUMs',
        color: 'orange--text text--lighten-1',
        total: 0
      },
      {
        title: 'PUIs',
        color: 'red--text text--darken-1',
        total: 0
      },
      {
        title: 'Tested',
        color: 'orange--text text--lighten-1',
        total: 0
      },
    ],
  }),
  mounted() {
    this.loadReport();

    this.loading = false;
  },
  methods: {
    loadReport() {
      this.getData();
      this.polling = setInterval(this.getData, 1000 * 60 * 60);
    },
    getData() {
      const url = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/slide_fig/FeatureServer/0';

      Promise.all([
        axios.get(`${url}/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"confirmed","outStatisticFieldName":"value"}]`),
        axios.get(`${url}/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"recovered","outStatisticFieldName":"value"}]`),
        axios.get(`${url}/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"deaths","outStatisticFieldName":"value"}]`),
        axios.get(`${url}/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"pums","outStatisticFieldName":"value"}]`),
        axios.get(`${url}/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"puis","outStatisticFieldName":"value"}]`),
        axios.get(`${url}/query?f=json&where=1=1&outStatistics=[{"statisticType":"sum","onStatisticField":"tests","outStatisticFieldName":"value"}]`),
      ])
      .then((rawDatas) => this.formatData(rawDatas))
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.reports[i].total = data[i];
        }
      });
    },
    formatData(rawDatas) {
      const finalData = [];

      for (const { data } of rawDatas) {
        const { features } = data;
        finalData.push(features[0].attributes.value);
      }

      return finalData;
    }
  },
  beforeDestroy() {
    clearInterval(this.polling);
  }
}
</script>

<style scoped>

</style>