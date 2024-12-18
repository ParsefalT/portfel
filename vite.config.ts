import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
// import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite(), viteReact()],
});
