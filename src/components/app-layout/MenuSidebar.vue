<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    v-model="drawer">
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.heading">
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon="">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            router v-bind:to="child.to ? child.to: ''"
            @click="">
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="" :key="item.text" router v-bind:to="item.to ? item.to: ''">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    props: {
      'drawer': {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      items: [
        { icon: 'dashboard', to: '/', text: 'Dashboard' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Produtos',
          model: false,
          children: [
            { text: 'Criar Produto' },
            { text: 'Listar produtos' },
            { text: 'Importar produtos' },
            { text: 'Categorias' },
            { text: 'Marcas' },
            { text: 'Grades' }
          ]
        },
        { icon: 'monetization_on', text: 'Vendas' },
        { icon: 'favorite', text: 'Clientes' },
        { icon: 'poll', text: 'Relatórios' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Marketing',
          model: false,
          children: [
            { text: 'Banners' },
            { text: 'Comparadores de preço' },
            { text: 'Frete grátis' },
            { text: 'Cupons de Desconto' },
            { text: 'Assinatura da Newslleter' }
          ]
        },
        { icon: 'description', text: 'Páginas' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Aparência da loja',
          model: false,
          children: [
            { text: 'Configurar tema' },
            { text: 'Editar CSS' },
            { text: 'Alterar Logo' },
            { text: 'Formas de envio' },
            { text: 'Upload de arquivos' }
          ]
        },
        { icon: 'supervisor_account', text: 'Usuários' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Configurações',
          model: false,
          children: [
            { text: 'Dados da loja' },
            { text: 'Configurações da loja' },
            { text: 'Incluir código HTML' },
            { text: 'Formas de envio' },
            { text: 'Formas de pagamento' },
            { text: 'Configurações do Google' },
            { text: 'Redes sociais' },
            { text: 'Selos' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Meu Plano',
          model: false,
          children: [
            { text: 'Situação de sua conta' },
            { text: 'Dados para cobrança' },
            { text: 'Dados de fatura' }
          ]
        },
        { icon: 'device_hub', text: 'Parceiros' },
        { icon: 'chat_bubble', text: 'Enviar feedback' },
        { icon: 'help', to: 'suporte', text: 'Suporte' }
      ]
    })
  }
</script>
