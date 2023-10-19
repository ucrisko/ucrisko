<template>
  <q-page>
    <div id="main-heading-container">
      <h1 class="text-h2 q-mb-xl">UCrisko, Academic and Web Solutions</h1>
    </div>

    <div id="why-uc-section" ref="why-uc-section" class="row uc-section text-white q-pa-lg">
      <div class="col-xs-12 col-md-6">
        <h2 id="h2-main">Academic and Business Web Solutions</h2>
        <h3 id="h3-main">Your future starts right here.</h3>
        <p>
          Whether your goal is to educate the minds of tomorrow or take your business technology to the next level, UCrisko's expertise can help get you there.
          Contact us today to get started on imagining the next step of your journey.
        </p>
        <q-btn
          color="white"
          class="text-black"
          href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project."
          tabindex="2"
        >Let's get started!
        </q-btn>
      </div>
<!--      <div class="flex justify-center q-mx-xl">-->
<!--        <div class="row q-gutter-lg">-->
<!--          <q-card-->
<!--            bordered-->
<!--            class="bg-grey-1 why-uc-card flex justify-center items-center text-center"-->
<!--          >-->
<!--            <q-card-section>-->
<!--              <div class="text-h6">Industry Expertise</div>-->
<!--              <q-icon name="business" class="text-red-10" size="5em"/>-->
<!--            </q-card-section>-->
<!--            <q-card-section>-->
<!--              From automotive to retail, our team builds applications tailored-->
<!--              to the needs of our clients.-->
<!--            </q-card-section>-->
<!--            <q-card-section>-->
<!--              <q-btn-->
<!--                href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project."-->
<!--                tabindex="1"-->
<!--              >Prove it-->
<!--              </q-btn-->
<!--              >-->
<!--            </q-card-section>-->
<!--          </q-card>-->
<!--          <q-card-->
<!--            dark-->
<!--            bordered-->
<!--            class="bg-blue-grey-10 why-uc-card flex justify-center items-center text-center"-->
<!--          >-->
<!--            <q-card-section>-->
<!--              <div class="text-h6">Focused on the Future</div>-->
<!--              <q-icon name="school" class="text-red-10" size="5em"/>-->
<!--            </q-card-section>-->
<!--            <q-card-section>-->
<!--              We partner with Universities and academic institutions that shape-->
<!--              the minds of tomorrow.-->
<!--            </q-card-section>-->
<!--            <q-card-section>-->
<!--              <q-btn-->
<!--                color="white"-->
<!--                class="text-black"-->
<!--                href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project."-->
<!--                tabindex="2"-->
<!--              >Show me-->
<!--              </q-btn-->
<!--              >-->
<!--            </q-card-section>-->
<!--          </q-card>-->
<!--          <q-card-->
<!--            bordered-->
<!--            class="bg-grey-1 why-uc-card flex justify-center items-center text-center"-->
<!--          >-->
<!--            <q-card-section>-->
<!--              <div class="text-h6">Quality Meets Service</div>-->
<!--              <q-icon name="groups" class="text-red-10" size="5em"/>-->
<!--            </q-card-section>-->

<!--            <q-card-section>-->
<!--              We are a client-focused company. We want to treat you to a-->
<!--              first-class experience.-->
<!--            </q-card-section>-->

<!--            <q-card-section>-->
<!--              <q-btn-->
<!--                href="mailto:cpuzzuol@ucrisko.com?subject=Schedule a meeting&body=I came across your website, ucrisko.com, and would like to meet to discuss a web project."-->
<!--                tabindex="3"-->
<!--              >Let's talk-->
<!--              </q-btn-->
<!--              >-->
<!--            </q-card-section>-->
<!--          </q-card>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div id="capabilities-section" class="row uc-section q-pa-lg items-center">
      <div id="capabilities-section-text" class="col-xs-12 col-md-5 col-lg-4">
        <h3 id="h3-main">Our Expertise. Your Dream.</h3>
        From company websites to custom content management systems, UCrisko has the expertise to make your dream application a reality.
        Even if you don't need a full web application, the UCrisko team can help you craft your organization's logo or re-design an existing site.
      </div>
    </div>
    <div id="clients-section" class="row uc-section q-pa-lg">
      <div id="clients-section-text" class="col-xs-12 col-md-4 col-lg-3">
        <h3 id="h3-main">Case Studies</h3>
        Check out some of our satisfied clients and discover how UCrisko helped them boost their online presence.
      </div>
      <div id="client-rotator-container" class="col-xs-12 col-md-8 col-lg-9 q-pl-xl">
        Clients go here.
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
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      // slide: ref('style'),
      // slide2: ref('style'),
      // lorem: 'Lorem ipsum dolor, sit ameignissimos praesentium libero ab nemo.'
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
  @include respond-to('mediumAndUp') {
    background-image: url("src/assets/it-globe.jpg");
    background-repeat: no-repeat;
    background-position: top right;
    height: 576px;
  }
}
#capabilities-section {
  background-color: #cccccc;
  @include respond-to('mediumAndUp') {
    background-image: url("src/assets/cube_text.png");
    background-repeat: no-repeat;
    background-position: center right;
    height: 400px;
  }
}

#clients-section {
  @include respond-to('mediumAndUp') {
    height: 250px;
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
</style>
