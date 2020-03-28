<template>
  <div>
    <div class="page-container">
      <div class="page-header-container">
        <h1 class="page-header text-center display-1">Phillipines Coronavirus Outbreak Tracker</h1>
        <h2 class=" text-center subtitle-1">The first case was reported on January 30th 2020. The latest Philippines coronavirus statistical charts and information.</h2>
      </div>

      <div class="page-body-container">
        <div class="grid">
          <div class="grid-item">
            <div id="report">
              <Report />
            </div>
            <div class="chart-tab">
              <ChartTab />
            </div>
          </div>
          <div class="grid-item">
            <div id="sidebar">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
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
    margin-bottom: .75rem;
  }

  .page-body-container {
    margin-bottom: 1.5rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 1rem;

      .grid-item {

        &:nth-child(1) {
          grid-column: 1/9;
          grid-row: 1;
        }

        &:nth-child(2) {
          grid-column: 9/13;
          grid-row: 1;
        }

        @media screen and (min-width: 0) and (max-width: 1264px) {
          &:nth-child(1) {
            grid-column: 1/13;
            grid-row: 1;
          }

          &:nth-child(2) {
            grid-column: 1/13;
            grid-row: 2;
          }
        }
      }
    }
  }
</style>