'use strict';

module.exports = api => {
  const isTest = api.env('test');

  api.cache(() => JSON.stringify({ isTest }));

  return {
    compact: false,
    presets: [
      isTest && '@babel/preset-typescript',
      isTest && ['@babel/preset-env', { targets: { node: true } }],
    ].filter(Boolean),
    plugins: [
      ['@babel/plugin-proposal-optional-chaining', { loose: true }],
      ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    ],
  };
};
