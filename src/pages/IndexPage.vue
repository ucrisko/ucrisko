<template>
  <q-page>
    <div class="flex justify-center q-mx-xl">
      <img src="~/assets/ucrisko-logo.png" alt="UCrisko logo">
    </div>
    <div id="main-heading-container" class="flex justify-center">
      <h1 class="text-h2 q-mb-xl">Business and Academic Web Solutions</h1>
    </div>

    <div id="why-uc-section">
      <div id="why-uc-section-header" class="bg-red-10">
        <h2 class="heading text-h4 text-grey-3">Why should you choose UCrisko?</h2>
      </div>
      <div class="flex justify-center q-mx-xl">
        <div class="row q-gutter-lg">
          <q-card bordered class="bg-grey-1 why-uc-card flex justify-center items-center text-center">
            <q-card-section>
              <div class="text-h6">Industry Expertise</div>
              <q-icon name="business" class="text-red-10" size="5em"/>
            </q-card-section>
            <q-card-section>
              From automotive to retail, our team builds applications tailored to the needs of our clients.
            </q-card-section>
            <q-card-section>
              <q-btn href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project." tabindex="1">Prove it</q-btn>
            </q-card-section>
          </q-card>
          <q-card dark bordered class="bg-blue-grey-10 why-uc-card flex justify-center items-center text-center">
            <q-card-section>
              <div class="text-h6">Focused on the Future</div>
              <q-icon name="school" class="text-red-10" size="5em"/>
            </q-card-section>
            <q-card-section>
              We partner with Universities and academic institutions that shape the minds of tomorrow.
            </q-card-section>
            <q-card-section>
              <q-btn color="white" class="text-black" href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project." tabindex="2">Show me</q-btn>
            </q-card-section>
          </q-card>
          <q-card bordered class="bg-grey-1 why-uc-card flex justify-center items-center text-center">
            <q-card-section>
              <div class="text-h6">Quality Meets Service</div>
              <q-icon name="groups" class="text-red-10" size="5em"/>
            </q-card-section>

            <q-card-section>
              We are a client-focused company. We want to treat you to a first-class experience.
            </q-card-section>

            <q-card-section>
              <q-btn href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project." tabindex="3">Let's talk</q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div id="index-footer" class="q-mt-xl bg-blue-grey-10">
      <div class="row">
        <div class="col q-ma-xl">
          &copy; 2023 UCrisko, LLC.
        </div>
      </div>
    </div>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="red-10"/>
    </q-page-scroller>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      // slide: ref('style'),
      // slide2: ref('style'),
      // lorem: 'Lorem ipsum dolor, sit ameignissimos praesentium libero ab nemo.'
    }
  }
})
</script>

<style lang="scss">
.why-uc-card {
  width: 400px;
  height: 400px;
  padding-top: 32px;
  padding-bottom: 32px;
}

.heading {
  text-align: center;
}

#index-footer {
  color: white;
}

#main-heading-container {
  //color: white;
}

#why-uc-section-header {
  padding: 0.1rem;
  margin-bottom: 1rem;
}

.q-btn {
  :focus {
    background-color: blue;
  }
}
</style>
