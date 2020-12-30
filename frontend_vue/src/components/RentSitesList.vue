<template>
  <div>
      <h4>Rent sites List from API</h4>
      <ul class="list-group">
        <li v-for="(rentsite, index) in rentsites" :key="index">
          {{ rentsite.name }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "rentsites-list",

  computed: {
    rentsites() {
      return this.$store.state.rentsites;
    }
  },
  mounted() {
    this.$store.dispatch('getRentsites')
  }

}
</script>

<style>

</style>