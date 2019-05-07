'use strict';

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {};
exports.onServiceWorkerUpdateReady= () => window.location.reload(true);
