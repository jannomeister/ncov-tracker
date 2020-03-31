<template>
  <v-card tile width="450" class="mt-4">
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
      this.darkMode = (localStorage.darkMode === 'true') ? true : false;
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