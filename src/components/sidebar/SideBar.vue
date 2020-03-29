<template>
  <v-container>
    <Urgent />
    <Settings />
  </v-container>
</template>

<script>
import Urgent from "./Urgent";
import Settings from "./Settings";

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