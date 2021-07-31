import { UserConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import CSV from "vite-plugin-csv";

const config: UserConfig = {
  plugins: [
    CSV(),
    Vue({
      include: [/\.vue$/],
    }),
  ],
};

export default config;
