// jest.config.js
export default {
  testEnvironment: 'jsdom',
  
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  setupFiles: ['./jest.setup.js']
};
