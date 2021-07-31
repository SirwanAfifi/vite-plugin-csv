import { UserConfig } from "vite";

import CSV from "vite-plugin-csv";

const config: UserConfig = {
  plugins: [CSV()],
};

export default config;
