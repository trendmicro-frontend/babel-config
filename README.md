# babel-config [![npm version](https://badge.fury.io/js/%40trendmicro%2Fbabel-config.svg)](http://badge.fury.io/js/%40trendmicro%2Fbabel-config)

[![NPM](https://nodei.co/npm/@trendmicro/babel-config.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/babel-config/)

A babel config for Trend Micro Frontend.

## Install

1. Install the latest version of [@trendmicro/babel-config](https://github.com/trendmicro-frontend/babel-config):
  ```sh
  npm install --save-dev @trendmicro/babel-config @babel/core @babel/preset-env @babel/preset-react
  ```

2. Add `"extends": "@trendmicro/babel-config"` to .babelrc:
  ```json
  {
      "extends": "@trendmicro/babel-config",
      "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
      ]
  }
  ```
