{
  "name": "v",
  "version": "1.0.0",
  "description": "v",
  "author": "“yluchanan <“398778994@qq.com>",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run e2e",
    "lint": "eslint --ext .js,.vue src test/e2e/specs"
  },
  "dependencies": {
    "vue": "^1.0.21",
    "babel-runtime": "^6.0.0"
  },
  "devDependencies": {
    "babel-core": "^6.0.0",
    "babel-eslint": "^6.1.2",
    "babel-loader": "^6.0.0",
    "babel-plugin-transform-runtime": "^6.0.0",
    "babel-preset-es2015": "^6.0.0",
    "babel-preset-stage-2": "^6.0.0",
    "babel-register": "^6.0.0",
    "connect-history-api-fallback": "^1.1.0",
    "css-loader": "^0.23.0",
    "eslint": "^2.10.2",
    "eslint-friendly-formatter": "^2.0.5",
    "eslint-loader": "^1.3.0",
    "eslint-plugin-html": "^1.3.0",
    "eslint-config-standard": "^5.1.0",
    "eslint-plugin-promise": "^1.0.8",
    "eslint-plugin-standard": "^1.3.2",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.13.3",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.8.4",
    "function-bind": "^1.0.2",
    "html-webpack-plugin": "^2.8.1",
    "http-proxy-middleware": "^0.12.0",
    "json-loader": "^0.5.4",
    "chromedriver": "^2.21.2",
    "cross-spawn": "^2.1.5",
    "nightwatch": "^0.8.18",
    "selenium-server": "2.53.0",
    "ora": "^0.2.0",
    "shelljs": "^0.6.0",
    "url-loader": "^0.5.7",
    "vue-hot-reload-api": "^1.2.0",
    "vue-html-loader": "^1.0.0",
    "vue-loader": "^8.3.0",
    "vue-style-loader": "^1.0.0",
    "webpack": "^1.12.2",
    "webpack-dev-middleware": "^1.4.0",
    "webpack-hot-middleware": "^2.6.0",
    "webpack-merge": "^0.8.3"
  }
}
