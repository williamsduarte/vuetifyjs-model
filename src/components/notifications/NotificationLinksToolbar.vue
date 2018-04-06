<template>
  <v-btn icon>
    <v-icon>notifications</v-icon>
    <small class="notification-badge">99</small>
  </v-btn>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .notification-badge {
    font-family: "Montserrat", sans-serif;
    position: relative;
    right: 5px;
    top: -10px;
    color: #ffffff;
    background-color: #f44336;
    margin: 0 -.8em;
    border-radius: 50%;
    padding: 2px 6px;
}
</style>
