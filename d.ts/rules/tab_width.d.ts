import eclint = require('../eclint');
import _line = require('../line');
declare class TabWidthRule implements eclint.LineRule {
    check(context: eclint.Context, settings: eclint.Settings, line: _line.Line): void;
    fix(settings: eclint.Settings, line: _line.Line): _line.Line;
    infer(line: _line.Line): void;
}
export = TabWidthRule;
