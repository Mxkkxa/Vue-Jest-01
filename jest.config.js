module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  coverageThreshold: {
    'global': {
      'statements': 90
    },
  },
};
