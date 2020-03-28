<template>
  <v-container>
    <v-tabs centered background-color="grey lighten-4">
      <v-tabs-slider/>
      <v-tab>Day Chart</v-tab>
      <v-tab>Month Chart</v-tab>
      <v-tab>Age Chart</v-tab>

      <v-tab-item>
        <DayChart />
      </v-tab-item>
      <v-tab-item>
        <MonthChart />
      </v-tab-item>
      <v-tab-item>
        <AgeChart />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import DayChart from './DayChart';
import MonthChart from './MonthChart';
import AgeChart from './AgeChart';

export default {
  name: 'ChartTab',
  components: {
    DayChart,
    MonthChart,
    AgeChart,
  },
  data () {
    return {
      tab: null,
    }
  },
}
</script>