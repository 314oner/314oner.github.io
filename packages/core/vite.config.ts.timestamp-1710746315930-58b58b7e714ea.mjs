// vite.config.ts
import * as path from "node:path";
import * as url from "node:url";
import { defineConfig } from "file:///home/peepoo/dev/DS/314oner.github.io/node_modules/vite/dist/node/index.js";
import dts from "file:///home/peepoo/dev/DS/314oner.github.io/node_modules/vite-plugin-dts/dist/index.mjs";
import tsPaths from "file:///home/peepoo/dev/DS/314oner.github.io/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/peepoo/dev/DS/314oner.github.io/packages/core/vite.config.ts";
var __dirname = url.fileURLToPath(new URL(".", __vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [
    tsPaths({
      root: __dirname
    }),
    dts({
      tsconfigPath: "./tsconfig.build.json"
    })
  ],
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    lib: {
      formats: ["es"],
      entry: {
        "src/config/index": path.resolve(__dirname, "./src/config/index.ts"),
        "src/domains/index": path.resolve(__dirname, "./src/domains/index.ts"),
        "src/scripts/index": path.resolve(__dirname, "./src/scripts/index.ts"),
        "src/utils/index": path.resolve(__dirname, "./src/utils/index.ts")
      }
    },
    rollupOptions: {
      external: isExternal
    }
  }
});
function isExternal(id) {
  const isAlias = id.startsWith("@/");
  const isRamda = id.startsWith("ramda");
  return !isRamda && !isAlias && !id.startsWith(".") && !path.isAbsolute(id);
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wZWVwb28vZGV2L0RTLzMxNG9uZXIuZ2l0aHViLmlvL3BhY2thZ2VzL2NvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3BlZXBvby9kZXYvRFMvMzE0b25lci5naXRodWIuaW8vcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wZWVwb28vZGV2L0RTLzMxNG9uZXIuZ2l0aHViLmlvL3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB0c1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSB1cmwuZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuJywgaW1wb3J0Lm1ldGEudXJsKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB0c1BhdGhzKHtcbiAgICAgIHJvb3Q6IF9fZGlybmFtZSxcbiAgICB9KSxcbiAgICBkdHMoe1xuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZy5idWlsZC5qc29uJyxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2Rpc3QnKSxcbiAgICBsaWI6IHtcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICAgIGVudHJ5OiB7XG4gICAgICAgICdzcmMvY29uZmlnL2luZGV4JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbmZpZy9pbmRleC50cycpLFxuICAgICAgICAnc3JjL2RvbWFpbnMvaW5kZXgnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvZG9tYWlucy9pbmRleC50cycpLFxuICAgICAgICAnc3JjL3NjcmlwdHMvaW5kZXgnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc2NyaXB0cy9pbmRleC50cycpLFxuICAgICAgICAnc3JjL3V0aWxzL2luZGV4JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3V0aWxzL2luZGV4LnRzJyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IGlzRXh0ZXJuYWwsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBpc0V4dGVybmFsKGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgaXNBbGlhcyA9IGlkLnN0YXJ0c1dpdGgoJ0AvJyk7XG4gIGNvbnN0IGlzUmFtZGEgPSBpZC5zdGFydHNXaXRoKCdyYW1kYScpO1xuXG4gIHJldHVybiAhaXNSYW1kYSAmJiAhaXNBbGlhcyAmJiAhaWQuc3RhcnRzV2l0aCgnLicpICYmICFwYXRoLmlzQWJzb2x1dGUoaWQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxZQUFZLFVBQVU7QUFDalcsWUFBWSxTQUFTO0FBRXJCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGFBQWE7QUFMMEwsSUFBTSwyQ0FBMkM7QUFPL1AsSUFBTSxZQUFnQixrQkFBYyxJQUFJLElBQUksS0FBSyx3Q0FBZSxDQUFDO0FBRWpFLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBYSxhQUFRLFdBQVcsUUFBUTtBQUFBLElBQ3hDLEtBQUs7QUFBQSxNQUNILFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxPQUFPO0FBQUEsUUFDTCxvQkFBeUIsYUFBUSxXQUFXLHVCQUF1QjtBQUFBLFFBQ25FLHFCQUEwQixhQUFRLFdBQVcsd0JBQXdCO0FBQUEsUUFDckUscUJBQTBCLGFBQVEsV0FBVyx3QkFBd0I7QUFBQSxRQUNyRSxtQkFBd0IsYUFBUSxXQUFXLHNCQUFzQjtBQUFBLE1BQ25FO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQUVELFNBQVMsV0FBVyxJQUFZO0FBQzlCLFFBQU0sVUFBVSxHQUFHLFdBQVcsSUFBSTtBQUNsQyxRQUFNLFVBQVUsR0FBRyxXQUFXLE9BQU87QUFFckMsU0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFNLGdCQUFXLEVBQUU7QUFDM0U7IiwKICAibmFtZXMiOiBbXQp9Cg==
