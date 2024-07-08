import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { es, en } from 'vuetify/locale'

// Styles
import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css"; 

export default createVuetify({
  // theme: {
  //   defaultTheme: 'dark'
  // },
  components: {
  },
  locale: {
    locale: 'es',
    fallback: 'en',
    messages: { es, en }
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
