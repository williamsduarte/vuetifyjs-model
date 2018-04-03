<template>
  <div>
    <v-btn color="success">{{ linkPlan.title }}</v-btn>
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
