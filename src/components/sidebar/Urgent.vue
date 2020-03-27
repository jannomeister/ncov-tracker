<template>
  <v-card
    class="mx-auto"
    max-width="344"
    raised
  >
    <v-card-title class="px-4 py-4">NMMC needs your support!</v-card-title>

    <v-divider></v-divider>

    <v-card-text class="body-1 text--primary">
      NMMC is now declared as a COVID CENTER for Northern Mindanao. Their estimated PPEs consumption is about <span class="red--text">30,000</span> (full gear) per month
    </v-card-text>

    <v-card-actions>
      <v-btn color="purple" text @click="show = !show">
        See Full gear info
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

      <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <v-list-item v-for="(fgItem, i) in fullGearItems" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ fgItem }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'Urgent',
  data: () => ({
    show: false,
    fullGearItems: [
      '1 N95 mask',
      '1 water resistant full body suit',
      '1 pair of goggles',
      '1 full body apron',
      '2 pairs nitrile gloves',
      '1 pair shoe cover',
      '1 face shield',
      '1 surgical mask',
      '1 full surgical suit long sleeves'
    ],
  })
}
</script>

<style scoped>

</style>