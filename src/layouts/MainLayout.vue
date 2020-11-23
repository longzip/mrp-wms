<template>
  <q-layout view="lHh Lpr lFf"
  v-if="isLogin"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <q-layout v-else>
    <q-page-container>
      <q-page>
        <q-img
              src="~assets/logo.png"
              spinner-color="white"
              style="height: 140px; max-width: 150px;margin-left: auto;margin-right: auto;display: block;"
            />
        <div class="text-h6" style="text-align:center">
              Woodsland Management System
            </div>
            <q-input
              filled
              v-model="username"
              label="Tên đăng nhập"
            />
            <q-input
              filled
              v-model="password"
              type="password"
              ref="pass"
              label="Mật khẩu"
              v-on:keyup.enter="doLogin"
            />
            <q-btn
              color="primary"
              glossy
              @click="doLogin"
              class="full-width q-mt-mb-xs"
              label="Đăng nhập"
              style="margin-bottom:10px"
            />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      username: "",
      password: "",
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  computed: {
    ...mapGetters("bases", ["isLogin", "userInfo"])
  },
  methods: {
    ...mapActions("bases", ["login"]),
    doLogin() {
      if (this.username != "" && this.password != "") {
        const user = {
          username: this.username,
          password: this.password
        };
        this.login(user);
      } else {
        this.$q.notify({
          message: "Vui lòng nhập đầy đủ thông tin !",
          color: "red"
        });
      }
    }
  },
  created () {
    // console.log(this.isLogin);
    // console.log(this.userInfo);
  },
}
</script>
