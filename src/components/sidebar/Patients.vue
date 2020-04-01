<template>
  <v-skeleton-loader
    :loading="loading"
    type="list-item-two-line"
  >
    <v-list max-height="400" class="overflow-y-auto" three-line>
      <template v-for="(patient, index) in patients">
        <v-list-item :key="`${index} - ${patient.caseID}`">
          <v-list-item-avatar>
            <v-icon size="50" color="pink">mdi-account-circle-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ patient.caseID }}</v-list-item-title>
            <v-list-item-subtitle>{{ patient.facility }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider
          v-if="patient.hasDivider"
          :key="index"
          :inset="false"
        ></v-divider>
      </template>
    </v-list>
  </v-skeleton-loader>
</template>

<script>
export default {
  name: 'Patients',
  props: {
    lists: Array,
  },
  data: () => ({
    loading: true,
    patients: []
  }),
  mounted() {
    setTimeout(() => {
      for (const list of this.lists) {
        list.hasDivider = true;
        this.patients.push(list);
      }

      this.loading = false;
    }, 800);
  },
}
</script>