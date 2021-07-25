// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/built/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@test-suite': '<rootDir>/client/test-suite/index.tsx',
    '@builders/(.*)$': '<rootDir>/builders/$1',
    '@constants': '<rootDir>/constants/index.ts',
  },
};
