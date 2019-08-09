/* routes/index.js */

function registerRouters(app) {

	app.use('/api/v1/orders', require( './orders')(global.A) );

	app.use('/api/v1/trans', require( './trans')(global.A) );

	app.use('/api/v1/items', require( './items')(global.A) );

};

module.exports = registerRouters;
