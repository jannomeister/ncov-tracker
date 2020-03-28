<template>
  <v-footer
    class="font-weight-medium"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Made with </strong> <v-icon large color="red darken-2">mdi-heart</v-icon>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>