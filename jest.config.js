module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 30 * 1000,
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ['<rootDir>/src/node_modules'],
  testPathIgnorePatterns: ['<rootDir>/src/node_modules', '<rootDir>/dist/']
};