/* routers/items/index.js */
'use strict';
const JSONValidator = require('@rebelstack-io/expressif').JSONValidator;
const Router = require('@rebelstack-io/expressif').Router;
const RX = require('@rebelstack-io/expressif').ReqValidator;
const item = require('schemas/items');
const types = require('schemas/types.json');
const components = require('schemas/components.json');
const sc = [ types, components ].concat(item);
const ic = require('controllers/item');

const ItemRouter = function ItemRouter(auth) {
	let jv = new JSONValidator(sc, { allErrors: true, jsonPointers:true });
	const routes = [
		{
			method: 'get',
			path: '/items',
			rroless: ["registered"],
			mwares: [ic.getitems],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'getitemsin',
			// validres: 'getitemssout'
		},
		{
			method: 'get',
			path: '/items/:iid',
			rroles: ["registered"],
			mwares: [ic.getitem],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'getitemin',
			// validres: 'getitemout'
		},
		{
			method: 'put',
			path: '/items/:pid',
			rroles: ["registered"],
			mwares: [ic.putitem],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'putitemin',
			// validres: 'putitemout'
		},
		{
			method: 'patch',
			path: '/items/:iid/:column/:path',
			rroles: ["registered"],
			mwares: [ic.patchitem],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'patchitemin',
			// validres: 'patchitemout'
		}
	];
	const router = new Router({}, auth, jv);
	router.addRoutes(routes);
	return router.router;
}

module.exports = ItemRouter;
