<template>
  <v-card color="grey lighten-4">
    <v-toolbar height="100">
      <v-toolbar-title class="display-1">
        Phillipines Coronavirus Outbreak Tracker
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn icon class="mr-3" v-on="on">
            <v-icon x-large color="pink lighten-1">mdi-gift-outline</v-icon>
          </v-btn>
        </template>

        <Changelog />
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
import Changelog from './Changelog';
export default {
  name: 'NavBar',
  components: {
    Changelog,
  },
}
</script>