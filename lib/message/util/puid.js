'use strict';

var puid_list = [];

function get() {
    return puid_list[puid_list.length - 1];
}

function set(uid) {
    puid_list.push(uid);
}

function unset() {
	puid_list.pop();
}

function _get() {
	return puid_list;
}

module.exports = {
	get: get,
	set: set,
	unset: unset,
	_get: _get
}