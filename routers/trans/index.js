/* routers/trans/index.js */
'use strict';
const JSONValidator = require('@rebelstack-io/expressif').JSONValidator;
const Router = require('@rebelstack-io/expressif').Router;
const RX = require('@rebelstack-io/expressif').ReqValidator;
const tran = require('schemas/trans');
const types = require('schemas/types.json');
const components = require('schemas/components.json');
const sc = [ types, components ].concat(tran);
const tc = require('controllers/tran');

const tranRouter = function tranRouter(auth) {
	let jv = new JSONValidator(sc, { allErrors: true, jsonPointers:true });
	const routes = [
		{
			method: 'get',
			path: '/trans',
			rroless: ["registered"],
			mwares: [tc.gettrans],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'gettransin',
			// validres: 'gettranssout'
		},
		{
			method: 'get',
			path: '/trans/:tid',
			rroles: ["registered"],
			mwares: [tc.gettran],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'gettranin',
			// validres: 'gettranout'
		},
		{
			method: 'post',
			path: '/trans/',
			rroles: ["registered"],
			mwares: [tc.posttran],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'posttranin',
			// validres: 'posttranout'
		}
	];
	const router = new Router({}, auth, jv);
	router.addRoutes(routes);
	return router.router;
}

module.exports = tranRouter;
