import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",

    setupFiles: ["./tests/setup/test-env.ts"],

    include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.ts"],

    exclude: ["node_modules", "dist", ".next"],

    coverage: {
      provider: "v8",

      reporter: ["text", "html", "json", "lcov"],

      thresholds: {
        lines: 70,
        functions: 70,
        branches: 60,
        statements: 70,
      },
    },

    testTimeout: 10000,
  },
});
