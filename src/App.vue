<template>
  <v-app id="inspire">
    <Toolbar @toogle="update()" />
    <MenuSidebar :drawer="open" />
    <Dashboard />
  </v-app>
</template>

<script>
  import Dashboard from '@/components/pages/Dashboard'
  import Toolbar from '@/components/app-layout/Toolbar'
  import MenuSidebar from '@/components/app-layout/MenuSidebar'

  export default {
    components: {
      Dashboard,
      Toolbar,
      MenuSidebar
    },
    data: () => ({
      open: true
    }),
    methods: {
      update () {
        this.open = !this.open
      }
    }
  }
</script>
