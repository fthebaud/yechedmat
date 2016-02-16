# Yec'ched mat

This application will randomly choose whose turn it is to pay for the round!
But it's really just an excuse to try out ES6, Babel, Webpack, and Bootstrap (with material design).

## Commands

- Translate JavaScript files from ES6 to ES5 via babel-loader and bundle them together.
```sh
npm run webpack
```
- Same as above + rerun the whole process every time a file is modified.
```sh
webpack:watch
```
- Same as above + launch a  node.js Express server serving the application. Application is automatically reloaded every time a file is changed.
```sh
# Application will be live at http://localhost:9090
webpack:devserver
```
