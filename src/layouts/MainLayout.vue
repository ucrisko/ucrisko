<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar id="main-toolbar">
        <!--        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />-->
        <q-toolbar-title>
          <q-img
            src="~/assets/UC-logo-gold-150w.png"
            alt="UCrisko logo"
            id="uc-main-img"
            width="150px"
          />
        </q-toolbar-title>
        <q-tabs v-model="tabToolbar" class="q-mr-xl">
          <q-tab
            name="whyuc"
            label="Services"
            @click="scrollToAnchor('why-uc-section')"
          />
          <q-tab
            name="capabilities"
            label="Capabilities"
            @click="scrollToAnchor('capabilities-section')"
          />
          <q-tab
            name="clients"
            label="Clients"
            @click="scrollToAnchor('clients-section')"
          />
        </q-tabs>
        <q-btn dense flat label="Our Team" />
        <q-btn dense label="Get Started" id="get-started-btn" class="q-ml-sm" />
        <!--        <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />-->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal bordered class="bg-grey-8 text-white">
      <!--      <q-toolbar>-->
      <!--        <q-toolbar-title>-->
      <!--          <q-avatar>-->
      <!--            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
      <!--          </q-avatar>-->
      <!--          <div>Title</div>-->
      <!--        </q-toolbar-title>-->
      <!--      </q-toolbar>-->
      <div class="row justify-center">
        <div class="col-xs-12 col-md-3">First column</div>
        <div class="col-xs-12 col-md-6 text-center">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              filled
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'Please type your age',
                (val) => (val > 0 && val < 100) || 'Please type a real age',
              ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
        <div class="col-xs-12 col-md-3">Third column</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,
      drawerLeft: ref(false),
      drawerRight: ref(false),
      tabToolbar: ref("whyuc"),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },

      scrollToAnchor(anchor) {
        // Get a reference to the anchor element
        const anchorElement = document.getElementById(anchor);

        // Check if the anchor element exists
        if (anchorElement) {
          console.log(anchorElement);
          // Scroll to the anchor element using JavaScript
          anchorElement.scrollIntoView({
            behavior: "smooth", // Add smooth scrolling
            block: "start", // Scroll to the top of the element
          });
        }
      },
    };
  },
};
</script>

<style lang="scss">
@import "src/css/app.scss";
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
</style>
