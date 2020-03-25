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
  mounted() {
    axios
      .get('https://thevirustracker.com/free-api?countryTotal=PH')
      .then((res) => {
        const { countrydata } = res.data;
        const {
          total_cases,
          total_deaths,
          total_recovered,
          total_new_cases_today,
          total_new_deaths_today,
          total_serious_cases,
        } = countrydata[0];

        this.reports = [
          {
            title: 'Infected',
            color: 'purple--text text--lighten-2',
            total: parseInt(total_cases)
          },
          {
            title: 'Deaths',
            color: 'red--text text--darken-1',
            total: parseInt(total_deaths)
          },
          {
            title: 'Recovered',
            color: 'green--text text--lighten-1',
            total: parseInt(total_recovered)
          },
          {
            title: 'New Cases Today',
            color: 'orange--text text--lighten-1',
            total: parseInt(total_new_cases_today)
          },
          {
            title: 'New Deaths Today',
            color: 'red--text text--darken-1',
            total: parseInt(total_new_deaths_today)
          },
          {
            title: 'Serious Cases',
            color: 'orange--text text--lighten-1',
            total: parseInt(total_serious_cases)
          },
        ];
      })
  }
}
</script>

<style scoped>

</style>