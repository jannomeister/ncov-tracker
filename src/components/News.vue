<template>
  <v-container>
    <h1 class="title mt-4">Related News</h1>

    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-subtitle class="white--text">March 23, 2020</v-card-subtitle>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text>See full post</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'News',
  data: () => ({
    cards: [
      { title: '53 contacts of coronavirus positive maulvi home quarantined in Maharashtra', src: 'https://thevirustracker.com/news-images/thumbs/52/53-contacts-of-coronavirus-positive-maulvi-home-quarantined-in-maharashtra-N7utoP.jpg', flex: 6 },
      { title: 'Corona infection reduces in China foreign tourists not allowed without screening', src: 'https://thevirustracker.com/news-images/thumbs/52/corona-infection-reduces-in-china-foreign-tourists-not-allowed-without-screening-zRdhgo.jpg', flex: 6 },
      { title: 'LIST: Medical groups doctors open online consultations to decongest COVID-swamped hospitals', src: 'https://thevirustracker.com/news-images/thumbs/52/list-medical-groups-doctors-open-online-consultations-to-decongest-covid-swamped-hospitals-blMVZD.jpg', flex: 6 },
    ],
  })
}
</script>

<style scoped>

</style>