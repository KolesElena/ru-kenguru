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
      branches: 6.25,
      functions: 20.43,
      lines: 23.86,
      statements: 23.55,
    },
  },
};
