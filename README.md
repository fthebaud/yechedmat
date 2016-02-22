# Yec'hed mat

This application will randomly choose whose turn it is to pay for the round!
But it's really just an excuse to try out ES6, Babel, Webpack, and Bootstrap (with material design).

## Commands

- **build:dev**: builds the development environment. Can be passed webpack options.
  - Copy external resources from *node_modules/* to *app/external_resources/*
  - Transpile Javascript from es6 to es5 and bundles modules in one file under *app/built/*

  ```sh
  npm run build:dev [-- --progress --color --watch]
  ```

- **serve:dev**: serves the application at http://localhost:9090 and watch js files for modification. Bundle is recompiled and page is reloaded after each modification.
  - Copy external resources from *node_modules/* to *app/external_resources/*
  - Starts a webpack-dev-server (a little node.js Express server) serving the application under *app/*. The webpack-dev-server will watch the js files for modifications and recompile the bundle after each modification. Note that the bundle is served from memory.

  ```sh
  npm run serve:dev
  ```


- **build:prod**
```sh
#TODO
```


- **serve:prod**
```sh
#TODO
```
