<template>
 <v-toolbar
    color="light-blue darken-4"
    dark
    app
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    fixed>

    <TitleApp @toogle="$emit('toogle', $event)" />
    <FormSearchTop />
    <v-spacer></v-spacer>
    <LinksToolbar />

  </v-toolbar>
</template>
<script>
  import TitleApp from '@/components/app-layout/TitleApp'
  import FormSearchTop from '@/components/app-layout/FormSearchTop'
  import LinksToolbar from '@/components/app-layout/LinksToolbar'
  export default {
    components: {
      TitleApp,
      FormSearchTop,
      LinksToolbar
    }
  }
</script>
