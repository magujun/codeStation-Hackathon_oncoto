module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  collectCovarage: true,
  collectCovarageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
  ],
  covarageReport: ["lcov", "json"],
};
