<template>
 <v-toolbar
    color="light-blue darken-4"
    dark
    app
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click="$emit('toogle')"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Loojas</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Busca rápida"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-menu offset-y>
      <v-btn icon  slot="activator">
        <v-avatar size="32px" tile >
          <v-icon>account_circle</v-icon>
          <!-- <img size="32px"
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"> -->
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.id" @click="">
          <v-list-tile-title><v-icon>notifications</v-icon> {{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { id: 0, title: 'Click Me' },
        { id: 1, title: 'Click Me' },
        { id: 2, title: 'Click Me' },
        { id: 3, title: 'Click Me 2' }
      ]
    })
  }
</script>
