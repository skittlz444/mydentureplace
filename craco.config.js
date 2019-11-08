const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@s': path.resolve(__dirname, 'src/components/shared/'),
      '@c': path.resolve(__dirname, 'src/components/')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@s(.*)$': '<rootDir>/src/components/shared$1',
        '^@c(.*)$': '<rootDir>/src/components$1',
        '^~(.*)$': '<rootDir>/src$1'
      }
    }
  }
};
