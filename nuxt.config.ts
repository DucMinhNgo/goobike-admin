// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    dirs: ["~/components"],
  },
  modules: ["@nuxtjs/tailwindcss", "@ant-design-vue/nuxt"],
  app: {
    head: {
      title: "Goobike",
      meta: [
        { name: "description", content: "Ứng dụng đặt xe hàng đầu việt nam" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  antd: {},
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
  plugins: [{ src: "~/plugins/lottie-player.js", mode: "client" }],
});
