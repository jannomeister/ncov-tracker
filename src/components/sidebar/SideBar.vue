<template>
  <v-container>
    <Settings />
    <Urgent />
  </v-container>
</template>

<script>
import Settings from "./Settings";
import Urgent from "./Urgent";

export default {
  name: 'SideBar',
  components: {
    Urgent,
    Settings,
  }
}
</script>

<style scoped>

</style>