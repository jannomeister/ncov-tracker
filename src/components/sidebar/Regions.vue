<template>
  <v-skeleton-loader
    :loading="loading"
    type="card"
    class="mb-4"
  >
    <v-expansion-panels class="mb-4">
      <v-expansion-panel
        v-for="region in regions"
        :key="region.id"
      >
        <v-expansion-panel-header>
          <div>
            <span class="green--text lighten-4 font-weight-bold mr-2">{{ region.name }}</span> 
            <span class="grey--text">({{ region.patients.length }})</span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Patients :lists="region.patients"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-skeleton-loader>
</template>

<script>
import axios from 'axios';
import Patients from './Patients';

export default {
  name: 'Regions',
  components: {
    Patients,
  },
  data: () => ({
    loading: true,
    isActive: false,
    regions: [
      {
        id: 1,
        name: 'NCR',
        patients: []
      },
      {
        id: 2,
        name: 'REGION_I',
        patients: []
      },
      {
        id: 3,
        name: 'CAR',
        patients: []
      },
      {
        id: 4,
        name: 'REGION_II',
        patients: []
      },
      {
        id: 5,
        name: 'REGION_III',
        patients: []
      },
      {
        id: 6,
        name: 'REGION_IV_A',
        patients: []
      },
      {
        id: 7,
        name: 'REGION_IV_B',
        patients: []
      },
      {
        id: 8,
        name: 'REGION_V',
        patients: []
      },
      {
        id: 9,
        name: 'REGION_VI',
        patients: []
      },
      {
        id: 10,
        name: 'REGION_VII',
        patients: []
      },
      {
        id: 11,
        name: 'REGION_VIII',
        patients: []
      },
      {
        id: 12,
        name: 'REGION_IX',
        patients: []
      },
      {
        id: 13,
        name: 'REGION_X',
        patients: []
      },
      {
        id: 14,
        name: 'REGION_XI',
        patients: []
      },
      {
        id: 15,
        name: 'REGION_XII',
        patients: []
      },
      {
        id: 16,
        name: 'OTHERS',
        patients: []
      }
    ],
  }),
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      const { data } = await axios.get('https://ncovph.com/api/confirmed-cases');

      for (const patient of data) {
        if (patient.residence) {
          const { region } = patient.residence;
          const foundRegion = this.regions.find((r) => r.name === region);

          if (foundRegion) {
            foundRegion.patients.push(patient);
          } else {
            const other = this.regions[this.regions.length - 1];

            other.patients.push(patient);
          }
        }
      }

      this.loading = false;
    },
  }
}
</script>