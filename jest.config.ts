import type { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
  modulePathIgnorePatterns: ["./dist"],
  globals: {
    "ts-jest": {},
  },
  setupFiles: ["dotenv/config"],
};

export default config;
