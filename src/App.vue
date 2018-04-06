<template>
  <v-app id="inspire">
    <Toolbar @toogle="update()" />
    <MenuSidebar :drawer="open" />
    <router-view></router-view>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/app-layout/Toolbar'
  import MenuSidebar from '@/components/app-layout/MenuSidebar'

  export default {
    components: {
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
    },
    mounted () {
      window.$(document).ready(() => {
        console.log('Jquery funcionando')
      })
    }
  }
</script>
