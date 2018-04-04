<template>
  <div>
    <v-btn icon :to="{name: 'dashboard'}">
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn :to="{name: 'plans'}" color="success">{{ linkPlan.title }}</v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <NotificationLinksToolbar />
    <MenuUserToolbar />
  </div>
</template>
<script>
  import MenuUserToolbar from '@/components/app-layout/MenuUserToolbar'
  import NotificationLinksToolbar from '@/components/notifications/NotificationLinksToolbar'
  export default {
    data: () => ({
      linkPlan: {
        url: '#',
        title: 'Seja LOJA PROFISSIONAL'
      }
    }),
    components: {
      MenuUserToolbar,
      NotificationLinksToolbar
    }
  }
</script>
