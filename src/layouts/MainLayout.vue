<template>
  <q-layout view="hHh LpR fFf">
    <div class="flex justify-center items-center">
      <div class="logo-container">
        <q-img
          src="~/assets/UC-logo-gold-600w.png"
          alt="UCrisko logo"
          id="uc-main-img"
        />
      </div>
    </div>

    <q-page-container>
      <router-view/>
    </q-page-container>

<!--    <q-footer reveal bordered class="bg-grey-8 text-white">-->
<!--      <q-toolbar>-->
<!--        <q-toolbar-title>-->
<!--          <q-avatar>-->
<!--            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
<!--          </q-avatar>-->
<!--          <div>Title</div>-->
<!--        </q-toolbar-title>-->
<!--      </q-toolbar>-->
<!--    </q-footer>-->
  </q-layout>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    return {
      drawerLeft: ref(false),
      drawerRight: ref(false)
      //   leftDrawerOpen,
      //   toggleLeftDrawer () {
      //     leftDrawerOpen.value = !leftDrawerOpen.value
      //   },
      //
      //   rightDrawerOpen,
      //   toggleRightDrawer () {
      //     rightDrawerOpen.value = !rightDrawerOpen.value
      //   }
    }
  }
};
</script>

<style lang="scss">
@mixin respond-to($media) {
  @if $media == 'x-small' {
    @media (max-width: 380px) { @content; }
  }
  @else if $media == 'smallAndUp' {
    @media (min-width: 381px) { @content; }
  }
  @if $media == 'small' {
    @media (min-width: 381px) and (max-width: 600px) { @content; }
  }
  @else if $media == 'medium' {
    @media (min-width: 601px) and (max-width: 1024px) { @content; }
  }
  @else if $media == 'mediumAndUp' {
    @media (min-width: 601px) { @content; }
  }
}

.logo-container {
  width: 100%;
  max-height: 5.5rem;
  margin-top: 1.5rem;
  text-align: center;
  @include respond-to('smallAndUp') {
    background-color: $ucBkgDark;
    border-top: 5px solid $ucGoldTrim;
    border-bottom: 5px solid $ucGoldTrim;
  }
  @include respond-to('mediumAndUp') {
    max-height: 125px;
    margin-top: 20px;
  }
}

#uc-main-img {
  max-width: 300px;
  height: auto;
  margin-top: -2rem;
  @include respond-to('small') {
    margin-top: -2.5rem;
    max-width: 400px;
  }
  @include respond-to('mediumAndUp') {
    margin-top: -63px;
    max-width: 600px;
  }
}
</style>
