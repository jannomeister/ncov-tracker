<template>
  <v-container>
    <Regions />
    <Urgent />
  </v-container>
</template>

<script>
import Urgent from "./Urgent";
import Regions from "./Regions";

export default {
  name: 'SideBar',
  components: {
    Urgent,
    Regions,
  }
}
</script>

<style scoped>

</style>