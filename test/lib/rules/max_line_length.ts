﻿///<reference path='../../../vendor/dt-mocha/mocha.d.ts'/>
import common = require('../common');
import _line = require('../../../lib/line');
import rule = require('../../../lib/rules/max_line_length');


var expect = common.expect;
var reporter = common.reporter;
var context = common.context;
var Line = _line.Line;

// ReSharper disable WrongExpressionStatement
describe('max_line_length rule', () => {

	beforeEach(() => {
		reporter.reset();
	});

	describe.skip('check command', () => {

	});

	describe.skip('fix command', () => {

	});

	describe.skip('infer command', () => {

	});

});
