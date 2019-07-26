/* controllers/item */
'use strict';

// TODO: Define models

const RESPOND = global.E.Respond;

const getitems = function _getitems( req, res) {
	const path = req.path;
	const data = { };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const getitem = function _getitem( req, res) {
	const path = req.path;
	const iid  = req.params.iid;
	const data = { iid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const putitem = function _putitem( req, res ) {
	const path = req.path;
	const pid  = req.params.pid;
	const data = { pid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const patchitem = function _patchitem( req, res ) {
	const path = req.path;
	const iid  = req.params.iid;
	const path  = req.params.path;
	const data = { path, iid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

module.exports = {
	getitems,
	getitem,
	putitem,
	patchitem
};
