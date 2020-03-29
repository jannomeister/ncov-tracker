<template>
  <v-footer class="font-weight-medium">
    <v-col cols="12">
      <p>
        Disclaimer: I do not own any data in this web site. For further info, 
        Please visit the official <a href="https://www.doh.gov.ph/" target="_blank">DOH web site</a>,
        e-email: ncov@doh.gove.ph, or call (02) 8651-7800 local 1149-1150.
      </p>

      <p>
        Data Source: Epidemiology Bureau, Department of Health (DOH), Philippines;  Bureau of International Health Cooperation, DOH, Philippines
      </p>
      <p class="text-center">
        {{ new Date().getFullYear() }} — <strong>Made with </strong> <v-icon large color="red darken-2">mdi-heart</v-icon>
      </p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>