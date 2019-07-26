/* controllers/order/index.js */
'use strict';

// TODO: Define models

const RESPOND = global.E.Respond;

const getorders = function _getorders( req, res) {
	const path = req.path;
	const data = { };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const getorder = function _getorder( req, res) {
	const path = req.path;
	const oid  = req.params.oid;
	const data = { oid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const postorder = function _postorder( req, res ) {
	const path = req.path;
	const data = { };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const putorderline = function _putorderline( req, res ) {
	const path = req.path;
	const oid  = req.params.oid;
	const liid  = req.params.liid;
	const data = { liid, oid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const patchorderline = function _patchorderline( req, res ) {
	const path = req.path;
	const oid  = req.params.oid;
	const liid  = req.params.liid;
	const data = { liid, oid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const deleteorderline = function _deleteorderline( req, res ) {
	const path = req.path;
	const oid  = req.params.oid;
	const liid  = req.params.liid;
	const data = { liid, oid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

module.exports = {
	getorders,
	getorder,
	postorder,
	putorderline,
	patchorderline,
	deleteorderline
};
