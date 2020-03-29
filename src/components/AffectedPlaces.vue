<template>
  <!-- <v-container>
    
  </v-container> -->
  <v-skeleton-loader
    :loading="loading"
    height="94"
    class="mt-4 mb-4"
    type="list-item-three-line"
  >
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-skeleton-loader>
</template>

<script>
export default {
  name: 'AffectedPlaces',
  data: () => ({
    loading: true,
  }),
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      setTimeout(() => this.loading = false, 3000);
    }
  }
}
</script>