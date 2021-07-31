import type { Plugin } from "vite";
import { loadCSV } from "./csv";

function VitePluginCSV(): Plugin {
  return {
    name: "vite-plugin-csv",
    transform(code: string, id: string) {
      if (!id.includes(".csv")) return;

      try {
        const result = loadCSV(code);
        return {
          code: `export default ${JSON.stringify(result)};`,
          map: null,
        };
      } catch (error) {
        this.error(error);
        return "";
      }
    },
  };
}

export default VitePluginCSV;
