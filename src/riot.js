const Skeleton = require('./skeleton-riot');
const render = require('@riotjs/ssr').default;

const App = Skeleton();

module.exports = () => render('App', App.component, App.props);