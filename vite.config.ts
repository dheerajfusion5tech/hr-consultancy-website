import { defineConfig, type ViteDevServer } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import netlify from "@netlify/vite-plugin-tanstack-start";
import fs from "node:fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const appName = packageJson.name;

function customDomainLoggerPlugin() {
  return {
    name: "custom-domain-logger",

    configureServer(server: ViteDevServer) {
      const originalPrintUrls = server.printUrls;

      server.printUrls = () => {
        const port = server.config.server.port ?? 5173;

        console.log(
          `  ➜  Local: http://${appName}.localhost:${port}/`,
        );
      };

      server.httpServer?.on("listening", () => {
        if (!server.httpServer) return;

        const address = server.httpServer.address();

        if (!address) return;

        void originalPrintUrls;
      });
    },
  };
}

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    netlify(),
    customDomainLoggerPlugin(),
  ],

  server: {
    host: true,
    port: 5173,
    allowedHosts: [`${appName}.localhost`],
  },
});