module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts"
  ],
  coverageReporters: [
    'json-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 4.54,
      functions: 17.39,
      lines: 21,
      statements: 20.86,
    },
  },
};
