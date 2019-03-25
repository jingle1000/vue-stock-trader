<template>
  <div class="container mt-4">
    <account-details></account-details>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountDetails from '../components/AccountDetails.vue';
export default {
  name: 'home',
  data() {
        return {
            title: "Home"
        }
    },
  components: {
    AccountDetails: AccountDetails,
  }
}
</script>
