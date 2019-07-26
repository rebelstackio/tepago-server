/* routers/orders/index.js */
'use strict';
const JSONValidator = require('@rebelstack-io/expressif').JSONValidator;
const Router = require('@rebelstack-io/expressif').Router;
const RX = require('@rebelstack-io/expressif').ReqValidator;
const order = require('schemas/orders');
const types = require('schemas/types.json');
const components = require('schemas/components.json');
const sc = [ types, components ].concat(order);
const oc = require('controllers/order');

const OrderRouter = function OrderRouter(auth) {
	let jv = new JSONValidator(sc, { allErrors: true, jsonPointers:true });
	const routes = [
		{
			method: 'get',
			path: '/orders',
			rroless: ["registered"],
			mwares: [oc.getorders],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'getordersin',
			validres: 'getorderssout'
		},
		{
			method: 'get',
			path: '/orders/:oid',
			rroles: ["registered"],
			mwares: [oc.getorder],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'getorderin',
			validres: 'getorderout'
		},
		{
			method: 'post',
			path: '/orders/',
			rroles: ["registered"],
			mwares: [oc.postorder],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'postorderin',
			validres: 'postorderout'
		},
		{
			method: 'put',
			path: '/orders/:oid/line-items/:liid',
			rroles: ["registered"],
			mwares: [oc.putorderline],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'putorderlinein',
			validres: 'putorderlineout'
		},
		{
			method: 'patch',
			path: '/orders/:oid/line-items/:liid',
			rroles: ["registered"],
			mwares: [oc.patchorderline],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'patchorderlinein',
			validres: 'patchorderlineout'
		},
		{
			method: 'delete',
			path: '/orders/:oid/line-items/:liid',
			rroles: ["registered"],
			mwares: [oc.deleteorderline],
			rxvalid: RX.NOT_ACCEPT_JSON,
			validreq: 'deleteorderlinein',
			validres: 'deleteorderlineout'
		}
	];
	const router = new Router({}, auth, jv);
	router.addRoutes(routes);
	return router.router;
}

module.exports = OrderRouter;
