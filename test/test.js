const chai = require('chai');
const react = require('react');
const reExportedReact = require('../dist/reExportedReact');

it('Should re-export all symbols', function() {
	for (const key of Object.keys(react)) {
		chai.assert.equal(reExportedReact[key], react[key], 'Re-exported React is missing key: ' + key);
	}
});
