import { Line, Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export const LineChart = {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
};

export const BarChart = {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
};
