<template>
  <v-card  raised>
    <v-card-title>NMMC needs your support!</v-card-title>
    <v-card-subtitle>
      <a
        href="http://nmmc.doh.gov.ph"
        class="green--text font-weight-bold"
        target="_blank"
      >
        click here to visit their website
      </a>
    </v-card-subtitle>

    <v-divider :style="dividerStyles"></v-divider>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title mb-1">Personal Protective Equipments</v-list-item-title>
        <p v-for="item in fullGearItems" :key="item">
          {{ item }}
        </p>

        <p class="mt-5 mb-2 font-weight-bold">You can contact these numbers:</p>
        <p
          v-for="info in ppeContactInfos"
          :key="info"
          class="green--text font-weight-bold mb-2"
        >
          {{ info }}
        </p>
      </v-list-item-content>
    </v-list-item>

    <v-divider :style="dividerStyles"></v-divider>

    <v-list-item three-line class="p-0">
      <v-list-item-content class="p-0">
        <v-list-item-title class="title mb-1">Good, In kind or cash</v-list-item-title>

        <p class="mt-5 mb-2 font-weight-bold">Kindly contact:</p>
        <p
          v-for="info in goodsContactInfos"
          :key="info.name"
          class="mb-2"
        >
          {{ info.name }} (<span class="green--text font-weight-bold">{{ info.contact }}</span>)
        </p>
      </v-list-item-content>
    </v-list-item>

    <v-divider :style="dividerStyles"></v-divider>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="title mb-1">Food Donations</v-list-item-title>

        <p class="mt-5 mb-2 font-weight-bold">Kindly contact:</p>
        <p
          v-for="info in foodContactInfos"
          :key="info.name"
          class="mb-2"
        >
          {{ info.name }} (<span class="green--text font-weight-bold">{{ info.contact }}</span>)
        </p>
      </v-list-item-content>
    </v-list-item>

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
    ppeContactInfos: [
      '(088) 856-5490',
      '(08822) 721794',
      '+62 882-2726-362'
    ],
    goodsContactInfos: [
      {
        name: 'Mr. Domingo Gubalane',
        contact: '0926-451-5465'
      },
      {
        name: 'Mr. Ian Alajid',
        contact: '0926-527-1621'
      },
    ],
    foodContactInfos: [
      {
        name: 'Mr. Marithel Moreno',
        contact: '0917-708-0322'
      },
    ],
    dividerStyles: {
      borderColor: '#4CAF50',
    }
  })
}
</script>

<style scoped>

</style>