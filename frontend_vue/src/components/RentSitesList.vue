<template>
  <div>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Exchanges</v-card-title>

        <v-data-table
          :headers="headers"
          :items="rentsites"
          :items-per-page="2"
          :options.sync="pagination"
          :footer-props="footerProps"
          :server-items-length="totalItems"
          :loading="dataTableLoading"
        >
        </v-data-table>
      </v-card>
    </v-col>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: "rentsites-list",
  data() {
    return {
      pagination: {},
      dataTableLoading: true,
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "SSA", value: "ssa" },
        { text: "SDCA", value: "sdca" },
        { text: "Exchange Name", value: "name" }
      ],
      footerProps: { "items-per-page-options": [2, 5] }
    };
  },

  computed: {
    rentsites() {
      return  this.$store.state.rentsite.rentsites;
    },
    totalItems() {
      return this.$store.state.rentsite.totalRentsites;
    },

  },
  methods: {
    //  ...mapActions(['getRentsites']),

  },
  watch: {
    pagination: {
      async handler() {
        try {
          this.dataTableLoading = true
          const { page, itemsPerPage } = this.pagination
          let query = {}
          query = {
            page,
            page_size: itemsPerPage
          }
          //await this.getRentsites(query)
          await this.$store.dispatch("rentsite/getRentsites", query);
          this.dataTableLoading = false
        } catch (error) {
          this.dataTableLoading = false
        }
      },
      deep: true
    },
  },
};
</script>

<style>
</style>