<template>
  <div>
    <div class="page-container">
      <div class="page-header-container">
        <h1 class="page-header text-center display-1">Phillipines Coronavirus Outbreak Tracker</h1>
        <h2 class=" text-center subtitle-1">The first case was reported on January 30th 2020. The latest Philippines coronavirus statistical charts and information.</h2>
      </div>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" sm="8">
          <Report />
          <ChartTab />
        </v-col>

        <v-col cols="12" sm="4">
          <SideBar />
        </v-col>
      </v-row>
    </div>

    <div class="page-footer-container">
      <Footer />
    </div>
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

<style lang="scss" scoped>
  .page-container {
    max-width: 1560px;
    margin: 0 auto;
  }
  .page-header-container {
    padding: 0.75rem;
    margin-top: .75rem;
  }
</style>