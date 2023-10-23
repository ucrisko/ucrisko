<template>
  <q-form name="contact" netlify>
    <q-input
      v-model="contactForm.name"
      lazy-rules
      label-slot
      dense
      :rules="[
                  (val) => (val && val.length > 0) || 'Name is required',
                ]"
    >
      <template v-slot:label>
        Your name <span class="text-red-10">*</span>
      </template>
    </q-input>

    <q-input
      v-model="contactForm.email"
      lazy-rules
      label-slot
      dense
      :rules="emailRules"
    >
      <template v-slot:label>
        Your email <span class="text-red-10">*</span>
      </template>
    </q-input>

    <q-input
      v-model="contactForm.phone"
      label="Your phone number"
      lazy-rules
      dense
    >
    </q-input>

    <q-input
      type="textarea"
      v-model="contactForm.content"
      lazy-rules
      label-slot
      dense
      :rules="[
                (val) => (val && val.length > 0) || 'Details are required',
              ]"
    >
      <template v-slot:label>
        What can we do for you? <span class="text-red-10">*</span>
      </template>
    </q-input>

    <div>
      <q-btn square unelevated label="Submit Request" type="submit" color="primary" class="q-mt-md" @click="submit"/>
    </div>
  </q-form>
</template>

<script>
import {defineComponent, reactive} from "vue"
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ContactForm',
  setup () {
    const $q = useQuasar();
    const contactForm = reactive({
      name: null,
      email: null,
      content: null,
      phone: null
    });
    const emailRules = [
      v => !!v || 'Email is required',
      v => /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,24},?\s?)+$/.test(v) || 'Email must be valid'
    ]
    return {
      contactForm,
      emailRules,
      submit() {
        // if (accept.value !== true) {
        //   $q.notify({
        //     color: "red-5",
        //     textColor: "white",
        //     icon: "warning",
        //     message: "You need to accept the license and terms first"
        //   });
        // } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "check",
          message: "Thank you. We will be in touch."
        });
        // }
      }
    }
  }
});
</script>
