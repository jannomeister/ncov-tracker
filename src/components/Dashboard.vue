<template>
  <div>
    <NavBar />
    <v-row>
      <v-col cols="12" sm="8">
        <Report />
        <ChartTab />
      </v-col>

      <v-col cols="12" sm="4">
        <SideBar />
      </v-col>
    </v-row>

    <Footer />
  </div>
</template>

<script>
import NavBar from "./navbar/NavBar";
import Report from "./Report";
import ChartTab from "./charts/ChartTab";
import SideBar from "./sidebar/SideBar";
import Footer from "./Footer";

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    Report,
    ChartTab,
    SideBar,
    Footer,
  }
}
</script>