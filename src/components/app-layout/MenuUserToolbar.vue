<template>
  <v-menu offset-y transition="slide-y-transition">
    <v-btn icon  slot="activator">
      <v-avatar size="32px" tile >
        <v-icon>account_circle</v-icon>
        <!-- <img size="32px"
          src="https://vuetifyjs.com/static/doc-images/logo.svg"
          alt="Vuetify"> -->
      </v-avatar>
    </v-btn>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-title>
          <v-icon class="icon-title">{{item.icon}}</v-icon>
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { icon: 'face', title: 'Perfil' },
        { icon: 'settings', title: 'Configurações' },
        { icon: 'live_help', title: 'Ajuda' },
        { icon: 'lock_outline', title: 'Trancar' },
        { icon: 'keyboard_tab', title: 'Sair' }
      ]
    })
  }
</script>
<style scoped>
  .icon-title {
    margin: -2px 16px 0 0;
  }
</style>
