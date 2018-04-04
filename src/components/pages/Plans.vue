<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
        <span>Nossos Planos</span>
        </v-layout>
      </v-container>
    </v-content>
    <Contacts />
  </div>
</template>

<script>
  import Contacts from '@/components/dialogs/Contacts'
  export default {
    components: {
      Contacts
    },
    props: {
      source: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
