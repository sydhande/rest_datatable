<template>
  <div class="home">
    <RentSitesList />
  </div>
</template>

<script>
// @ is an alias to /src
import RentSitesList from '@/components/RentSitesList.vue'

export default {
  name: 'Home',
  components: {
    RentSitesList
  }
}
</script>
