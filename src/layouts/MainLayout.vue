<template>
  <q-layout view="hHh Lpr fff">
    <q-header reveal :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar id="main-toolbar">
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" class="md-hide lg-hide xl-hide"/>
        <q-toolbar-title>
          <router-link to="/">
            <q-img
              src="~/assets/UC-logo-gold-150w.png"
              alt="UCrisko logo"
              id="uc-main-img"
              width="150px"
            />
          </router-link>
        </q-toolbar-title>
        <q-btn dense flat label="Services" class="xs-hide sm-hide q-pa-sm q-mr-md" :to="{ name: 'home', hash: '#why-uc-section'}" />
        <q-btn dense flat label="Capabilities" class="xs-hide sm-hide q-pa-sm q-mr-md" :to="{ name: 'home', hash: '#capabilities-section'}" />
        <q-btn dense flat label="Clients" class="xs-hide sm-hide q-pa-sm q-mr-md" :to="{ name: 'home', hash: '#clients-section'}" />
        <q-separator vertical dark class="xs-hide sm-hide" />
        <q-btn dense flat label="Our Team" class="xs-hide sm-hide q-ml-md" :to="{ name: 'team' }"/>
        <q-btn dense square label="Get Started" id="get-started-btn" class="xs-hide sm-hide q-ml-md" :to="{ name: 'contact' }" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerLeft"
      :width="200"
      :breakpoint="700"
      bordered
      :overlay="false"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple :to="{ name: 'home', hash: '#why-uc-section'}">
            <q-item-section class="text-center">
              Services
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'home', hash: '#capabilities-section'}">
            <q-item-section class="text-center">
              Capabilities
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'home', hash: '#clients-section'}">
            <q-item-section class="text-center">
              Clients
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple :to="{ name: 'team' }">
            <q-item-section class="text-center">
              Our Team
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="text-center">
              <q-btn square label="Get Started" :to="{ name: 'contact' }"></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer id="main-footer" bordered class="text-white">
      <div class="row justify-center">
        <div class="col-xs-12 col-md-4">
          <div class="q-px-xl q-py-md">
            <q-img
              src="~/assets/UC-logo-gold-600w.png"
              alt="UCrisko logo"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="q-px-lg q-py-md">
            <q-card id="footer-contact-form" class="bg-transparent flat">
              <h4 class="q-mt-none q-mb-sm">Ready to get started?</h4>
              <ContactForm></ContactForm>
            </q-card>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="q-px-lg q-py-md">
            <p>Contact Us<br><a href="mailto:info@ucrisko.com" class="text-white">info@ucrisko.com</a></p>
            <p><router-link :to="{ name: 'privacy'}" class="text-white">Privacy Policy</router-link></p>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import {ref, reactive} from "vue"
import ContactForm from 'components/ContactForm.vue'
import { useRoute, useRouter } from 'vue-router'
import router from 'src/router'

export default {
  components: {ContactForm},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    const contactForm = reactive({
      name: null,
      email: null,
      content: null,
    })
    const emailRules = [
      v => !!v || 'Email is required',
      v => /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,24},?\s?)+$/.test(v) || 'Email must be valid'
    ]

    return {
      name,
      age,
      accept,
      drawerLeft: ref(false),
      tabToolbar: ref("whyuc"),
      contactForm,
      emailRules,
      // handleChangeMainSection(section) {
      //   if(route.name === 'home') {
      //     this.scrollToAnchor(section)
      //   }
      // },
      // scrollToAnchor(anchor) {
      //   // Get a reference to the anchor element
      //   const anchorElement = document.getElementById(anchor);
      //
      //   // Check if the anchor element exists
      //   if (anchorElement) {
      //     // Scroll to the anchor element using JavaScript
      //     anchorElement.scrollIntoView({
      //       behavior: "smooth", // Add smooth scrolling
      //       block: "start" // Scroll to the top of the element,
      //     })
      //     // router.push({ hash: `#${anchor}`})
      //   }
      // }
    }
  }
}
</script>

<style lang="scss">
@import "src/css/app.scss";
.dark-page {
  background: $ucBkgLight;
}
.logo-container {
  width: 100%;
  max-height: 5.5rem;
  margin-top: 1.5rem;
  text-align: center;
  @include respond-to("smallAndUp") {
    background-color: $ucBkgDark;
    border-top: 5px solid $ucGoldTrim;
    border-bottom: 5px solid $ucGoldTrim;
  }
  @include respond-to("mediumAndUp") {
    max-height: 125px;
    margin-top: 20px;
  }
}

#main-toolbar {
  background-color: $ucBkgLight;
}

#main-footer {
  background-color: $ucBkgDark;
}

#footer-contact-form {
  box-shadow: none;
  .q-field__label, input, textarea {
    color: white;
  }
  .q-field--standard .q-field__control::before {
    border-bottom-color: white;
  }
  .q-field__control {
    border-color: white;
    color: $ucGoldTrim;
  }
}
</style>
