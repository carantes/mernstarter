Boilerplate para aplicações MERN
=====================

### Instalação

```
npm install
npm start
open http://localhost:3000
```

### Auto Reload

* [React Hot Loader] (https://www.npmjs.com/package/react-hot-loader)
* [Nodemon script monitor] (https://www.npmjs.com/package/nodemon)

Alterações no CLIENT serão automaticamente recarregadas no BROWSER conforme [este video](http://vimeo.com/100010922).
Alterações no SERVER causarão um restart automático do script do NODE

### DevTools

* [DevTools](https://github.com/gaearon/redux-devtools#overview)
* [Log Monitor](https://github.com/gaearon/redux-devtools-log-monitor)
* [Dock Monitor](https://github.com/gaearon/redux-devtools-dock-monitor)

```
CTRL + H (Enable/Disable DevTools)
```

### Linting

* [AirBNB JavaScript Style Guide](https://github.com/airbnb/javascript)
* React-friendly ESLint configuration.

```
npm run lint
```

### Accessibility plugin for REACT

```
import a11y from 'react-a11y'
```

https://www.youtube.com/watch?v=z5e7kWSHWTg#t=631


### Testes

* [Mocha Tests Runner](https://mochajs.org/)
* [Chai Assertion Library](http://chaijs.com/api/bdd/)
* [AIRBNB Enzyme Test Utils](https://github.com/airbnb/enzyme)

* Testes unitários / Testes unitários com auto reload
```
npm test
npm run watch:test
```

* Gerar relatório de cobertura de testes / Verificar cobertura
```
npm run cover
```

### Pré-Commit

* Hook do GIT que verifica a cada checkin se os scripts de LINT e TESTES foram executados sem erros (package.json)

```
"pre-commit": [
    "lint",
    "test"
  ],
```

### Build
```
npm run build
npm run build:prod
```

### Dependencias

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Referencias

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC



### Changelog

* v1.0 - Setup inicial