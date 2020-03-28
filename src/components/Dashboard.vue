<template>
  <div>
    <div class="mt-5 ml-3">
      <h1 class="display-1">Phillipines coronavirus outbreak tracker</h1>
      <h2 class="subtitle-1">The first case was reported on January 30th 2020. The latest Philippines coronavirus statistical charts and information</h2>

      <v-divider></v-divider>
    </div>
    <v-row no-gutters>
      <v-col cols="8">
        <!-- report -->
        <Report />

        <!-- tab charts -->
        <ChartTab />
      </v-col>

      <v-col cols="4">
        <SideBar />
      </v-col>
    </v-row>

    <Footer />
  </div>
</template>

<script>
import Report from "./Report";
import ChartTab from "./charts/ChartTab";
import SideBar from "./sidebar/SideBar";
import Footer from "./Footer";

export default {
  name: 'Dashboard',
  components: {
    Report,
    ChartTab,
    SideBar,
    Footer,
  }
}
</script>

<style scoped>

</style>