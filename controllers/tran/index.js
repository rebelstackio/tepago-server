/* controllers/tran/index.js */
'use strict';

// TODO: Define models

const RESPOND = global.E.Respond;

const gettrans = function _gettrans( req, res) {
	const path = req.path;
	const data = { };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const gettran = function _gettran( req, res) {
	const path = req.path;
	const tid  = req.params.tid;
	const data = { tid };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};

const posttran = function _posttran( req, res ) {
	const path = req.path;
	const data = {  };
	let wrapper = RESPOND.wrapSuccessData( data, path );
	return RESPOND.success( res, req, wrapper );
};


module.exports = {
	gettrans,
	gettran,
	posttran
};
