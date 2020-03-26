<template>
  <v-container>
    <h1 class="display-2">Philippines coronavirus outbreak tracker</h1>
    <p class="subtitle-1">The first case was reported on January 30th 2020. The latest Philippines coronavirus statistical charts and information</p>

    <!-- report -->
    <Report />

    <!-- charts -->
    <DayChart />
    <AgeChart />
    
  </v-container>
</template>

<script>
import Report from "./Report";
import DayChart from "./DayChart";
import AgeChart from "./AgeChart";

export default {
  name: 'Dashboard',
  components: {
    Report,
    DayChart,
    AgeChart,
  }
}
</script>

<style scoped>

</style>