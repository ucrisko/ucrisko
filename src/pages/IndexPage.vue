<template>
  <q-page class="dark-page">
    <div id="main-heading-container">
      <h1 class="text-h2 q-mb-xl">UCrisko, Academic and Web Solutions</h1>
    </div>

    <div
      id="why-uc-section"
      ref="why-uc-section"
      class="row uc-section text-white q-pa-lg"
    >
      <div class="col-xs-12 col-md-6">
        <h2 id="h2-main">Academic and Business Web Solutions</h2>
        <h3 id="h3-main">Your future starts right here.</h3>
        <p>
          Whether your goal is to educate the minds of tomorrow or take your
          business technology to the next level, UCrisko's expertise can help
          get you there. Contact us today to get started on imagining the next
          step of your journey.
        </p>
        <q-btn
          color="white"
          class="text-black"
          href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project."
          tabindex="2"
          square
          unelevated
        >Let's get started!
        </q-btn>
      </div>
    </div>
    <div id="capabilities-section" class="row uc-section q-pa-lg items-center">
      <div id="capabilities-section-text" class="col-xs-12 col-md-6 col-lg-5">
        <h3 class="q-mb-md">Our Expertise. Your Dream.</h3>
        From company websites to custom content management systems, UCrisko has
        the expertise to make your dream application a reality. Even if you
        don't need a full web application, the UCrisko team can help you craft
        your organization's logo or re-design an existing site.
      </div>
    </div>
    <div id="clients-section" class="row uc-section text-white q-py-lg">
      <div id="clients-section-text" class="col-xs-12 col-md-4">
        <div class="q-mx-md">
          <h3 class="q-mb-md">Client Testimonials</h3>
          <p>We care for our clients. As a small business, UCrisko understands your desire for quality work at a fair
            price.
            Our clients receive both as well as clear communication throughout the development process.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="q-mx-xs-sm q-mx-sm-md">
        <q-card class="client-card q-px-sm-md q-px-md-none" flat bordered>
          <div class="text-center">
            <q-img
              src="~/assets/emu-word-logo-250w.png"
              alt="Eastern Michigan University logo"
              id="emu-logo"
              class="client-logo"
            />
          </div>
          <q-card-section>
            <div class="text-h5 q-pt-sm q-pb-xs text-center">Eastern Michigan University</div>
            <div class="text-black">
              <p>"Robiccon was seeking an effective way to promote its business technology solutions to a variety of
                businesses. After a lengthy consideration of the available options, we chose UCrisko. We are very pleased
                with the outcome and continue our relationship with UCrisko to this day."</p>
              <p class="text-right text-italic">- Darcy Gifford<br>Assistant Vice President for Marketing and
                Communications</p>
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn square unelevated label="Visit EMU Today" icon-right="mdi-open-in-new" href="https://today.emich.edu" target="_blank" />
          </q-card-actions>
        </q-card>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="q-mx-xs-sm q-mx-sm-md q-mt-xs-md q-mt-sm-none">
        <q-card class="client-card q-px-sm-md q-px-md-none" flat bordered>
          <div class="text-center">
            <q-img
              src="~/assets/robiccon.png"
              alt="Robiccon logo"
              id="robiccon-logo"
              class="client-logo q-mt-lg"
            />
          </div>

          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Robiccon</div>
            <div class="text-black">
              <p>"Robiccon was seeking an effective way to promote its business technology solutions to a variety of
                businesses. After a lengthy consideration of the available options, we chose UCrisko. We are very pleased
                with the outcome and continue our relationship with UCrisko to this day."</p>
              <p class="text-right text-italic">- John Cottos<br>Operations & Customer Service Manager</p>
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn square unelevated color="primary" label="Visit Robiccon.com" class="vertical-bottom" icon-right="mdi-open-in-new" href="https://robiccon.com" target="_blank" />
          </q-card-actions>
        </q-card>
        </div>
      </div>
    </div>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="red-10"/>
    </q-page-scroller>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      emuExpanded: ref(false)
    };
  }
});
</script>

<style lang="scss">
@import "src/css/app.scss";

#main-heading-container {
  position: absolute;
  left: -9999px;
  top: -9999px;
}

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

.uc-section {
}

#why-uc-section {
  background-color: $ucBkgDark;
  @include respond-to("mdAndUp") {
    background-image: url("src/assets/it-globe.jpg");
    background-repeat: no-repeat;
    background-position: top right;
    height: 576px;
  }
}

#capabilities-section {
  background-color: #cccccc;
  @include respond-to("mdAndUp") {
    background-image: url("src/assets/cube_text.png"), url("src/assets/grey_bkg.jpg");
    background-repeat: no-repeat, no-repeat;
    background-position: center right, center left;
    height: 400px;
  }
}

#clients-section {
  @include respond-to("mdAndUp") {

  }
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

.client-logo {
  max-width: 250px;
  max-height: 115px;
}

#emu-logo {
  margin-top: 58px;
  margin-bottom: 30px;
}

.client-card {
  width: 100%;
  max-width: 100%;
  background-color: $ucGoldTrim;
  color: $ucBkgDark;
  //@include respond-to("mdAndUp") {
  //  max-width: 450px;
  //}
  .q-btn--standard {
    background-color: $ucBkgDark !important;
  }
}
</style>
