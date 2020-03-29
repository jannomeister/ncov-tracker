<template>
  <v-container>
    <v-tabs centered>
      <v-tabs-slider/>
      <v-tab>Trend</v-tab>
      <v-tab>Day to Day</v-tab>
      <v-tab>Month</v-tab>
      <v-tab>Overall</v-tab>
      <v-tab>Age</v-tab>

      <v-tab-item>
        <TrendChart />
      </v-tab-item>
      <v-tab-item>
        <DayChart />
      </v-tab-item>
      <v-tab-item>
        <MonthChart />
      </v-tab-item>
      <v-tab-item>
        <OverallChart />
      </v-tab-item>
      <v-tab-item>
        <AgeChart />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import TrendChart from "./TrendChart";
import DayChart from './DayChart';
import MonthChart from './MonthChart';
import AgeChart from './AgeChart';
import OverallChart from "./OverallChart";

export default {
  name: 'ChartTab',
  components: {
    TrendChart,
    DayChart,
    MonthChart,
    AgeChart,
    OverallChart,
  },
  data () {
    return {
      tab: null,
    }
  },
}
</script>