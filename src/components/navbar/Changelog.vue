<template>
  <v-list max-width="480" max-height="1100" class="overflow-y-auto" three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
          class="title white--text"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-content>

            <p class="mb-2 grey--text lighten-5">{{ item.date }}</p>

            <v-list-item-title
              class="title blue--text mb-3"
              v-html="item.title"
            ></v-list-item-title>

            <p class="subtitle-1 font-weight-medium">{{ item.description }}</p>

            <v-list-item-subtitle class="subtitle-1 mt-4">
              <a :href="item.source" target="_blank">
                Check it on github<v-icon color="blue">mdi-chevron-right</v-icon>
              </a>
            </v-list-item-subtitle>

          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
</template>

<script>
export default {
  name: 'Changelog',
  data: () => ({
    items: [
      { header: 'What\'s new' },
      { divider: true },
      {
        title: 'Cases per region',
        description: 'You can now see the total number of confirmed cases by region in the sidebar. The tracker is now more helpful to keep you updated with the current situation.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/29',
        date: 'April 1st'
      },
      { divider: true },
      {
        title: 'In case you missed it',
        description: 'Some minor improvements with the graphs visualization and we fixed some minore data inconsistencies. The tracker is now more robust and dependable.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/25',
        date: 'March 29th'
      },
      { divider: true },
      {
        title: 'Responsiveness',
        description: 'The app is now more beautiful when you are accessing it in small screen devices.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/23',
        date: 'March 28th'
      },
      { divider: true },
      {
        title: 'Dark mode support',
        description: 'Whether you’re working in a low-light environment or just need to give your eyes a rest, dark mode has come to NCOV Tracker. You can access it in the sidebar section.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/20',
        date: 'March 28th'
      },
      { divider: true },
      {
        title: 'Graph for Month report',
        description: 'You can now see a monthly graph that shows the total number of admitted patients, recovered patients, and deaths. The tracker is now more helpful to keep you updated with the current situation.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/19',
        date: 'March 28th'
      },
      { divider: true },
      {
        title: 'Sidebar for additional news and info',
        description: 'You can now see more news and information related to NMMC hospital. Because our frontliners need your support',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/15',
        date: 'March 27th'
      },
      { divider: true },
      {
        title: 'Graph for age and gender',
        description: 'The tracker now shows a graph for the total number of confirmed cases by gender, and it is grouped by age. The tracker is now more helpful to keep you updated with the current situation.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/13',
        date: 'March 26th'
      },
      { divider: true },
      {
        title: 'Total number of PUI and Total number of Tested',
        description: 'You can now see the total number of Persons Under Investigation (PUI) and the total number of persons that was being tested. The tracker is now more helpful to keep you updated with the current situation.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/11',
        date: 'March 26th'
      },
      { divider: true },
      {
        title: 'Total number of PUM',
        description: 'You can now see the total number of Persons Under Monitoring (PUM). The tracker is now more helpful to keep you updated with the current situation.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/10',
        date: 'March 26th'
      },
      { divider: true },
      {
        title: 'Changes on where the data is coming from',
        description: 'The tracker is more reliable because it is now getting the data in a more dependable source.',
        source: 'https://github.com/jannomeister/ncov-tracker/pull/8',
        date: 'March 26th'
      },
      { divider: true },
    ],
  }),
}
</script>