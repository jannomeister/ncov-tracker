<template>
  <v-skeleton-loader
    :loading="loading"
    type="list-item-two-line"
  >
    <v-list max-height="400" class="overflow-y-auto" three-line>
      <template v-for="(patient, index) in patients">
        <v-list-item :key="`${index} - ${patient.caseID}`">
          <v-list-item-avatar>
            <v-icon size="45" color="pink">mdi-account-circle-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ patient.caseID }}
              <v-chip
                class="ma-2 font-weight-bold"
                :color="patient.chipColor"
                outlined
                small
              >
                {{ patient.status }}
              </v-chip>
            </v-list-item-title>
            <v-list-item-subtitle>{{ patient.facility }}</v-list-item-subtitle>

            <p class="mt-5">
              Gender: {{ patient.sex }} <v-icon size="20" color="grey">{{ patient.sexIcon }}</v-icon>
            </p>

            <p class="mt-3">
              Age: {{ patient.age }}
            </p>

            <p class="mt-3">
              Address: {{ patient.address }}
            </p>
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
    const chipColor = {
      Recovered: 'green',
      Deceased: 'red',
      Unspecified: 'grey'
    };

    setTimeout(() => {
      for (const list of this.lists) {
        list.facility = (list.facility) ? list.facility : 'Not specified';
        list.chipColor = chipColor[list.status];
        list.sexIcon = (list.sex === 'Male') ? 'mdi-gender-male' : 'mdi-gender-female';
        list.hasDivider = true;
        list.address = (list.residence) ? list.residence.city : 'Not specified';
        this.patients.push(list);
      }

      this.loading = false;
    }, 100);
  },
}
</script>