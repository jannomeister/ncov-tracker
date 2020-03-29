<template>
  <v-card tile>
    <v-card-title>Settings</v-card-title>
    <v-card-subtitle>Supported settings in this web app</v-card-subtitle>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-content>
        <v-switch class="ml-3" v-model="darkMode" :label="swithcLabel"></v-switch>
      </v-list-item-content>
    </v-list-item>

    
  </v-card>
</template>

<script>
export default {
  name: 'Settings',
  data: () => ({
    darkMode: false
  }),
  computed: {
    swithcLabel() {
      return (this.darkMode) ? 'Turn off Dark Mode' : 'Turn on Dark Mode';
    }
  },
  mounted() {
    if (localStorage.darkMode) {
      const { darkMode } = localStorage;
      this.darkMode = (darkMode === 'true') ? true : (darkMode === 'false') ? false : false;
      this.$vuetify.theme.dark = this.darkMode;
    }
  },
  watch: {
    darkMode(newValue) {
      this.$vuetify.theme.dark = newValue;
      localStorage.darkMode = newValue;
    }
  }
}
</script>