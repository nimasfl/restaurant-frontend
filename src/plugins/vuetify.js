import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.cyan.darken3,
        btnPrimary: colors.cyan.darken1,
        mainBackgroundColor: colors.grey.lighten2,
        backgroundColor: colors.grey.lighten4,
      },
      dark: {
        primary: colors.grey.lighten1,
        btnPrimary: colors.grey.darken2,
        mainBackgroundColor: colors.grey.darken4,
        backgroundColor: colors.grey.darken3,
      },
    },
  },
});
