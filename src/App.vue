<template>
  <v-app id="inspire">
    <MenuTop @toogle="update()" />
    <MenuSidebar :drawer="open" />
    <Dashboard />
  </v-app>
</template>

<script>
  import Dashboard from '@/components/pages/Dashboard'
  import MenuTop from '@/components/app-layout/MenuTop'
  import MenuSidebar from '@/components/app-layout/MenuSidebar'

  export default {
    components: {
      Dashboard,
      MenuTop,
      MenuSidebar
    },
    data () {
      return {
        open: true
      }
    },
    methods: {
      update() {
        this.open = !this.open
      }
    }
  }
</script>
